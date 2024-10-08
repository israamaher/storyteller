import React from "react"; 
import './write.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';


class Writepost extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            title:"",
            content:"",
            image: null,
            preview: null,
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleFileChange = (e) => {
        const file = e.target.files[0];
        this.setState({image : file});
        // Preview the image
        const reader = new FileReader();
        reader.onloadend = () => {
        this.setState({ preview: reader.result });
        };
        if (file) {
        reader.readAsDataURL(file);
        }
    };

    render(){
        const { title, content, preview } = this.state;
        return(  
            <>  
            <form  className="container" onSubmit={(e)=>{ e.preventDefault();
                console.log(this.state);
                }} > 
            <div className="row"> 
            <div className="col-8" >
            
            <input
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange}
                required
                placeholder="Title"
            />
            

          {/* Content Field */}
            <textarea
                name="content"
                rows={15}
                cols={100}
                value={content}
                onChange={this.handleChange}
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
            onChange={this.handleFileChange}
            hidden /> 
            </label>
            {preview && <img src={preview} alt="Preview" style={{ width: '200px', height: 'auto' }} />}
            </fieldset>
            <button type="submit" className=" " >Publish </button>
            </div>

            </div>
            </form>
            
            
            </>
        )
    };
}

export default Writepost;