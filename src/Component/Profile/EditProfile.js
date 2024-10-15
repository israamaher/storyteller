import { useState } from "react";
import profile from'./profial.avif';
import './profile.css';


function Edit(){
    const [Image, setImage] = useState(null);
    const [Preview, setPreview] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setImage(file);
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          console.error('No file selected'); // Handle case where no file is selected
        }
        };

    return(
        <>
            <div className="container edit"> 

                <div className="head  mt-5">
                    <h2> My Profile</h2>
                    <h2> Edit Your Profile</h2>
                </div>

                <form className="p-3 mx-auto" onSubmit >

                <fieldset> 
                <div class="input-group mb-3">
                    
                    <label className="fs-2">
                        <img src={profile} alt="" style={{width:"200px",height:"200px"}}/>
                        <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                        hidden
                        /> 
                        Israa Maher
                    </label>
                </div>
                </fieldset>

                <fieldset>
                    <div className="input-group mb-3"> 
                    <label htmlFor="firstName" className="form-label mx-2">First Name </label>
                    <input id="firstName"  className="form-control" name="name" type="name" required onChange />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="input-group mb-3"> 
                    <label htmlFor="lastName" className="form-label mx-2">Last Name </label>
                    <input id="lastName"  className="form-control" name="name" type="name" required onChange />
                    </div>
                </fieldset>

                <fieldset>
                <div className="input-group mb-3"> 
                <label htmlFor="email" className="form-label mx-2"> Email </label>
                    <input id="email"  className="form-control" name="email" type="email" required onChange />
                    </div> 
                </fieldset> 

                    {/* <fieldset>
                    <label>
                        <img src={profile} alt="" style={{width:"200px",height:"200px"}}/>
                        <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                        hidden
                        />
                    </label>
                    {Preview && (
                        <img
                        src={Preview}
                        alt="Preview"
                        style={{ width: '200px', height: 'auto' }}
                        />
                    )}
                    </fieldset> */}




                <label type="submit"  style={{backgroundColor:"var(--highlight-color)", color:"var(--white)"}} className="btn mt-3 p-3" > 
                Save my information   
                </label>
                </form>

        </div>
        </>
    );
}
export default Edit;