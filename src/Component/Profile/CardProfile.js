import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import'./profile.css';
function Cardprofile({ post }){

    const navigate = useNavigate();
    
    const goToArtical=()=>{
        navigate('/Artical');
    }


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
        <img src="..." className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
            {truncateText(post.content, 100)}

        </p>
        </div>
        <div class="card-body">
        <button onClick={goToArtical}>Read More</button>    
        <button href="#" class=" mx-2"> <FontAwesomeIcon icon={faPenToSquare} /></button >
        <button href="#" class="btn btn-danger mx-2"><FontAwesomeIcon icon={faTrashCan} /></button >
        </div>
        </div>
    </div>
    </div>
    );
}

export default Cardprofile;