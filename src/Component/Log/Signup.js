import { useState } from "react";


function Signup(){


    return(
        <form  className="card p-5 mx-auto" style={{width: "30rem"}} onSubmit>
            <fieldset>
            <label htmlFor="email" className="form-label"> Your Email: 
                <input id="email"  className="form-control" name="email" type="email" required onChange /></label>
            </fieldset>

            <fieldset> 
            <label htmlFor="new-password" className="form-label">Create  Password:
                <input id="new-password"  className="form-control" name="newPassword" type="password"  required  onChange /></label>
            </fieldset>

            <fieldset> 
            <label htmlFor="confirm-password" className="form-label">Confirm Password:
                <input id="confirm-password"  className="form-control"  name="confirmPassword" type="password"  required  onChange /></label>
            </fieldset>
            
            <input type="submit" value="Sign up"  style={{backgroundColor:"var(--highlight-color)"}} className="btn  my-5 p-2" /> 
           
           
        </form>
    );
}

export default Signup;