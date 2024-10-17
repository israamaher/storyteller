import { useRef, useState  } from "react";
import { useAuth } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
function Login(){

    const navigate = useNavigate();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from submitting

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/profile");
        } catch  {
            setError("Failed to Log In ");
        } finally {
            setLoading(false);
        }
    };

    return(
        <>
        {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
        
        <form className="card p-5 mx-auto" style={{width: "30rem"}} onSubmit={handleSubmit} >

            <fieldset>
            <label htmlFor="email" className="form-label">Enter Your Email: 
                <input id="email"  className="form-control" name="email" type="email" required ref={emailRef}/></label>
            </fieldset>

            <fieldset> 
            <label htmlFor="password"  className="form-label"> Password:
                <input id="password" name="Password" className="form-control" type="password" required ref={passwordRef}/></label>
            </fieldset>
            <input type="submit" value="Log in"  style={{backgroundColor:"var(--highlight-color)"}} className="btn mt-3 p-2" disabled={loading}/>
            <Link className="mt-4 "  style={{color:"var(--highlight-color)"}} > Forget Password </Link>
        </form>
        </>
    );
}

export default Login;