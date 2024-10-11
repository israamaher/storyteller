import { useState } from "react";
import { useFirestore } from "../../firebase/useFirestore";
import './write.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const initialpost ={headline:"", body:""};

function Writepost() {
    const {addposts } = useFirestore();
    const [Post, setPost]=useState(initialpost);
    const [Image,setImage]=useState("");
    const [Preview,setPreview] = useState("");


    const handleChange = ({ target }) => {
        setPost({...Post, [target.name]: target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage({Image : file});
        // Preview the image
        const reader = new FileReader();
        reader.onloadend = () => {
        setPreview({ Preview: reader.result });
        };
        if (file) {
        reader.readAsDataURL(file);
        }
    };

    const handelSubmit = async (e)=>{
        e.preventDefault();
        await addposts(Post);
        console.log(Post)
        setPost(initialpost);
    }

        return(  
            <>  
            <form  className="container"  onSubmit={handelSubmit}> 
            <div className="row"> 
            <div className="col-8" >
            
            <input
                type="text"
                name="title"
                onChange={handleChange}
                required
                placeholder="Title"
            />
            

          {/* Content Field */}
            <textarea
                name="content"
                rows={15}
                cols={100}
                onChange={handleChange}
                required
                placeholder="Tell us your story..." 
            />
            </div>

          {/* Image Field */}
        
            <div className="col-4 my-auto ">
                <fieldset> 
            <label> <FontAwesomeIcon icon={faCirclePlus} className="h1" />
            <input 
            type="file" name="image" 
            accept="image/*"
            onChange={handleFileChange}
            hidden /> 
            </label>
            {Preview && <img src={Preview} alt="Preview" style={{ width: '200px', height: 'auto' }} />}
            </fieldset>
            <button type="submit" className=" " >Publish </button>
            </div>
            </div>
            </form>
            </>
        )

    };


export default Writepost;