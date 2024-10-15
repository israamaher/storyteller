import { useState } from "react";
import { useFirestore } from "../../firebase/useFirestore";
import './write.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const initialpost = { title: "", content: "", Preview: "", department: "" };

function Writepost() {
  const { addposts, uploadImage } = useFirestore();
  const [Post, setPost] = useState(initialpost);
  const [Image, setImage] = useState(null);
  const [Preview, setPreview] = useState("");

  const handleChange = ({ target }) => {
    setPost({ ...Post, [target.name]: target.value });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Image) {
      await uploadImage(Image, Post).then(() => {
        console.log('Post and image uploaded successfully!');
        setPost(initialpost); // Reset form after submission
        setPreview("");       // Clear image preview
      }).catch((error) => {
        console.error('Error uploading post or image:', error);
      });
    } else {
      console.log("No image selected for upload.");
    }
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              name="title"
              onChange={handleChange}
              required
              placeholder="Title"
              value={Post.title}
            />
             {/* Department Select Field */}
            <select 
              className="form-select" 
              aria-label="Choose Department" 
              name="department"
              onChange={handleChange}
              required
              value={Post.department} // Controlled input
            >
              <option value="" disabled selected>Choose Department</option>
              <option value="1">Entrepreneurship</option>
              <option value="2">Web Development</option>
              <option value="3">Deep Learning</option>
            </select>

            {/* Content Field */}
            <textarea
              name="content"
              rows={15}
              cols={100}
              onChange={handleChange}
              required
              placeholder="Tell us your story..."
              value={Post.content}
            />
          </div>

         
         

          {/* Image Field */}
          <div className="col-4 my-auto">
            <fieldset>
              <label>
                <FontAwesomeIcon icon={faCirclePlus} className="h1" />
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
            </fieldset>
            <button type="submit">Publish</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Writepost;
