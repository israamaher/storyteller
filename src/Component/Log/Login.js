import { useState } from "react";
import { Link } from "react-router-dom";
function Login(){

   

    return(
        <>
        
        <form className="card p-5 mx-auto" style={{width: "30rem"}} onSubmit >

            <fieldset>
            <label htmlFor="email" className="form-label">Enter Your Email: 
                <input id="email"  className="form-control" name="email" type="email" required onChange /></label>
            </fieldset>

            <fieldset> 
            <label htmlFor="password"  className="form-label"> Password:
                <input id="password" name="Password" className="form-control" type="password" pattern="[a-z0-5]{8,}" required  onChange/></label>
            </fieldset>
            <input type="submit" value="Log in"  style={{backgroundColor:"var(--highlight-color)"}} className="btn mt-3 p-2" />
            <Link className="mt-4 "  style={{color:"var(--highlight-color)"}}> Forget Password </Link>
        </form>
        </>
    );
}

export default Login;