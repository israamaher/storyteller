import { useRef, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";

function Signup() {
    const navigate = useNavigate();
    const { Signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const nameRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            setError("Passwords don't match");
            return;
        }

        try {
            setError("");
            setLoading(true);

            // Create user using the Signup function
            const userCredential = await Signup(emailRef.current.value, passwordRef.current.value);
            const user = userCredential.user;

            // Save additional data (name and email) in Firestore
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    name: nameRef.current.value,
                });
                console.log("User registered:", user);
                navigate("/");
            }

        } catch (error) {
            setError("Failed to create account");
            console.error("Signup error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <form
                className="card p-5 mx-auto"
                style={{ width: "30rem" }}
                onSubmit={handleSubmit}
            >

                <fieldset>
                    <label htmlFor="name" className="form-label">
                        Your Name:
                        <input
                            id="name"
                            className="form-control"
                            name="name"
                            type="name"
                            required
                            ref={nameRef}
                        />
                    </label>
                </fieldset>

                <fieldset>
                    <label htmlFor="email" className="form-label">
                        Your Email:
                        <input
                            id="email"
                            className="form-control"
                            name="email"
                            type="email"
                            required
                            ref={emailRef}
                        />
                    </label>
                </fieldset>

                <fieldset>
                    <label htmlFor="new-password" className="form-label">
                        Create Password:
                        <input
                            id="new-password"
                            className="form-control"
                            name="newPassword"
                            type="password"
                            required
                            ref={passwordRef}
                        />
                    </label>
                </fieldset>

                <fieldset>
                    <label htmlFor="confirm-password" className="form-label">
                        Confirm Password:
                        <input
                            id="confirm-password"
                            className="form-control"
                            name="confirmPassword"
                            type="password"
                            required
                            ref={passwordConfirmationRef}
                        />
                    </label>
                </fieldset>

                <input
                    type="submit"
                    value="Sign up"
                    style={{ backgroundColor: "var(--highlight-color)" }}
                    className="btn my-5 p-2"
                    disabled={loading}
                />
            </form>
        </>
    );
}

export default Signup;
