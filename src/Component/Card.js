
import { Link } from 'react-router-dom';
import logo192 from './logo192.png';
function Card(props){ 


    return(
        <>

<div className="container" > 

<div className="card" style={{width: "18rem",}}>
<img src={logo192} className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">Card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<div className="card-body">
<Link to="/" className="card-link">See more</Link>

</div>
</div>

</div>       
        </>
    );

}
export default Card;