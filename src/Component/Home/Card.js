import React from 'react';
import { useNavigate } from 'react-router-dom';
import './slide.css';
import { Link } from 'react-router-dom';

function Card({ post }){ 
const navigate = useNavigate();

    const goToArtical=()=>{
        navigate('/Article');
    }

    const truncateText = (text, maxLength)=>{

        if (!text) return ''; 

        if(text.length > maxLength){
            return text.slice(0, maxLength) + '...';
        }
        return text;
    }

    return(
        <>

<div className="container" > 

<div className="card" >
<img  className="card-img-top"  src={post.imageUrl} alt={post.title}/>
<div className="card-body">
<h5 className="card-title">{post.title}</h5>
<p className="card-text">
    {truncateText(post.content, 100)}

</p>
</div>
<div className="card-body">
<Link to={`/article/${post.id}`} className="link" state={{backgroundColor:"var(--highlight-color)"}}>Read more</Link>

</div>
</div>

</div>       
        </>
    );

}
export default Card;