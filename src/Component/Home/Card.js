import React from 'react';
import { useNavigate } from 'react-router-dom';
import './slide.css'
function Card(props){ 
const navigate = useNavigate();

    const goToArtical=()=>{
        navigate('/Artical');
    }

    return(
        <>

<div className="container" > 

<div className="card" >
<img  className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">Card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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