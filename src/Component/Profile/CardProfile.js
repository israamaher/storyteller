import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import'./profile.css';
function Cardprofile(){

    return(
    <div className="card mb-3 container" >
    <div className="row g-0">
        <div className="col-md-4">
        <img src="..." className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-body">
        <button href="#" class=" mx-2"> <FontAwesomeIcon icon={faPenToSquare} /></button >
        <button href="#" class="btn btn-danger mx-2"><FontAwesomeIcon icon={faTrashCan} /></button >
        </div>
        </div>
    </div>
    </div>
    );
}

export default Cardprofile;