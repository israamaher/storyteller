import { useState } from "react";

function Login(){

    const [passWord, setpassWord] = useState('');
    const [Email, setEmail] = useState('');

    const EmailHandeler = (value) =>{
        setEmail(value);
    }

    const passWordHandeler = (value) =>{
        setpassWord(value);
    }

    return(
        <>
        <form  onSubmit={(e)=>{
            e.preventDefault();
            console.log({ passWord, Email})
        }} >

            <fieldset>
            <label htmlFor="email">Enter Your Email: 
                <input id="email" name="email" type="email" required onChange={(event)=>{
                    EmailHandeler(event.target.value); }} /></label>
            </fieldset>

            <fieldset> 
            <label htmlFor="new-password"> Password:
                <input id="new-password" name="newPassword" type="password" pattern="[a-z0-5]{8,}" required  onChange={(event)=>{
                    passWordHandeler(event.target.value); }} /></label>
            </fieldset>
            <input type="submit" value="Log in"  className="btn btn-success" />
        </form>
        </>
    );
}

export default Login;