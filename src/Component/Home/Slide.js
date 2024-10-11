import React from 'react';
import { useNavigate } from 'react-router-dom';
import './slide.css'
function Slide(){
    const navigate = useNavigate();
    const goTOWritePost =()=>{
        navigate('/writepost');
    }
    return(
        <>
            <div className="slide ">
                <div class="container"> 
                <h1> Human <br/>stories & ideas </h1>
                <h4>A place to read, write, and deepen your understanding </h4>
                <button onClick={goTOWritePost} className='my-5 rounded-md'> Write Post</button>
                
                </div>
            </div>
        </>
    );
}

export default Slide;