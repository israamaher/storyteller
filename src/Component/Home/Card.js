import React from 'react';
import { useNavigate } from 'react-router-dom';
import './slide.css';

function Card({ post }){ 
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
<button onClick={goToArtical}>Read More</button>

</div>
</div>

</div>       
        </>
    );

}
export default Card;