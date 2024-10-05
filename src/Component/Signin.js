import { useState } from "react";

function Signin(){

    const [first, setfirst] = useState('');
    const [last, setlast] = useState('');
    const [passWord, setpassWord] = useState('');
    const [Email, setEmail] = useState('');

    const firstHandeler = (value) =>{
        setfirst(value);
    }

    const lastHandeler = (value) =>{
        setlast(value);
    } 

    const EmailHandeler = (value) =>{
        setEmail(value);
    }

    const passWordHandeler = (value) =>{
        setpassWord(value);
    }

    return(
        <form  onSubmit={(e)=>{
            e.preventDefault();
            console.log({first, last , passWord, Email})
        }} >
            <fieldset>
            <label htmlFor="first-name">Enter Your First Name: 
                <input id="first-name" name="firstName" type="text" required  onChange={(event)=>{
                    firstHandeler(event.target.value); }} />
            </label>
            </fieldset>

            <fieldset> 
            <label htmlFor="last-name">Enter Your Last Name: 
                <input id="last-name" name="lastName" type="text" required onChange={(event)=>{
                    lastHandeler(event.target.value); }}/></label>
            </fieldset>

            <fieldset>
            <label htmlFor="email">Enter Your Email: 
                <input id="email" name="email" type="email" required onChange={(event)=>{
                    EmailHandeler(event.target.value); }} /></label>
            </fieldset>

            <fieldset> 
            <label htmlFor="new-password">Create a New Password:
                <input id="new-password" name="newPassword" type="password" pattern="[a-z0-5]{8,}" required  onChange={(event)=>{
                    passWordHandeler(event.target.value); }} /></label>
            </fieldset>
            <input type="submit" value="Submit"  className="btn btn-success" />
        </form>
    );
}

export default Signin;