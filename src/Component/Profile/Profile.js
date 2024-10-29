import Cardprofile from "./CardProfile";
import { Link } from "react-router-dom";
import { useFirestore } from '../../firebase/useFirestore';
import { useAuth } from "../../Context/AuthContext";
import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import './profile.css';
import profile from './profial.avif';

function Profile() {
    const { posts, deletePost } = useFirestore();
    const { currentUser } = useAuth();

    const [userData, setUserData] = useState(null); // To store user's data from Firestore

    useEffect(() => {
        const fetchUserData = async () => {
            if (currentUser?.uid) {
                const docRef = doc(db, "Users", currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserData(docSnap.data());  // Store user data in state
                } else {
                    console.log("No such document!");
                }
            }
        };
        fetchUserData();
    }, [currentUser]);

    return (
        <>
            <div className="profile container">
                <div className="left">
                    <div className="head-profile">
                        <img src={userData?.imageUrl || profile} alt="" style={{ width: "300px", height: "300px", borderRadius: "50%" }} />
                        <h2>{userData?.name || "User"}</h2>
                        <Link to="/editprofile"> Edit Profile </Link>
                    </div>

                    <div className="my-5">
                        {/* Filter posts to show only those belonging to the current user */}
                        {posts
                            .filter(post => post.userId === currentUser.uid) // Filter posts by userId
                            .map((post) => (
                                <Cardprofile post={post} key={post.id} deletePost={deletePost} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
