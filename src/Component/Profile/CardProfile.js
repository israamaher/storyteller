import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import'./profile.css';
function Cardprofile({ post, deletePost }){
      // Handle delete confirmation
    const handleDelete = () => {
        const isConfirmed = window.confirm(`Are you sure you want to delete the post: "${post.title}"?`);
        
        if (isConfirmed) {
        deletePost(post.id); // Call deletePost function if user confirms
        }
    };
    const truncateText = (text, maxLength)=>{

        if (!text) return ''; 

        if(text.length > maxLength){
            return text.slice(0, maxLength) + '...';
        }
        return text;
    }

    return(
    <div className="card mb-3 container" >
    <div className="row g-0">
        <div className="col-md-4">
        <img src={post.imageUrl} alt={post.title} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">

        <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
            {truncateText(post.content, 100)}
        </p>
        </div>

        <div className="card-body">
        <Link to={`/article/${post.id}`} className="link">Read more</Link>  
        <Link to={`/editpost/${post.id}`} className="  link mx-2"> <FontAwesomeIcon icon={faPenToSquare} /></Link >
        <button onClick={handleDelete} className="btn btn-danger mx-2"><FontAwesomeIcon icon={faTrashCan} /></button >
        </div>
        </div>
    </div>
    </div>
    );
}

export default Cardprofile;