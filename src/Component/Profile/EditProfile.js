import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profile from './profial.avif';
import { useAuth } from "../../Context/AuthContext";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db, storage } from "../../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import './profile.css';

function Edit() {
    const [Image, setImage] = useState(null);
    const [Preview, setPreview] = useState("");
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const { currentUser } = useAuth();
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            if (currentUser?.uid) {
                const docRef = doc(db, "Users", currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                    setUsername(docSnap.data().name); // Set initial username
                } else {
                    console.log("No such document!");
                }
            }
        };
        fetchUserData();
    }, [currentUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username) {
            setError("Username cannot be empty");
            return;
        }

        try {
            let imageUrl = '';
            if (Image) {
                const imageRef = ref(storage, `users/${currentUser.uid}/profileImage`);
                const uploadTask = uploadBytesResumable(imageRef, Image);
                imageUrl = await new Promise((resolve, reject) => {
                    uploadTask.on('state_changed',
                        null,
                        (error) => reject(error),
                        async () => {
                            const url = await getDownloadURL(uploadTask.snapshot.ref);
                            resolve(url);
                        }
                    );
                });
            }

            await setDoc(doc(db, "Users", currentUser.uid), {
                email: currentUser.email,
                name: username,
                imageUrl: imageUrl || '',
            });

            navigate("/profile");
        } catch (error) {
            console.error("Error updating profile:", error);
            setError("Failed to update profile");
        }
    };

    return (
        <>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="container edit">
                <div className="head mt-5">
                    <h2>My Profile</h2>
                    <h2>Update Your Profile</h2>
                </div>

                <form className="p-3 mx-auto" onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="input-group mb-3">
                            <label className="fs-2">
                                <img src={Preview || userData?.imageUrl || profile} alt="" style={{ width: "300px", height: "300px",borderRadius:"50%" }} />
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    hidden
                                />
                                {username || "Update your name"}
                            </label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="input-group mb-3">
                            <label htmlFor="firstName" className="form-label mx-2">Name</label>
                            <input
                                id="firstName"
                                value={username}
                                className="form-control"
                                name="name"
                                type="text"
                                required
                                onChange={(e) => { setUsername(e.target.value) }}
                            />
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="input-group mb-3">
                            <label htmlFor="email" className="form-label mx-2">Email</label>
                            <input
                                id="email"
                                value={currentUser.email}
                                className="form-control"
                                name="email"
                                type="email"
                                required
                                readOnly
                            />
                        </div>
                    </fieldset>

                    <button type="submit" style={{ backgroundColor: "var(--highlight-color)", color: "var(--white)" }} className="btn mt-3 p-3">
                        Save my information
                    </button>
                </form>
            </div>
        </>
    );
}

export default Edit;
