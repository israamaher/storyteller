import React from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from'@fortawesome/free-solid-svg-icons'; 
import { Link  } from "react-router-dom";
import './nav.css';
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";


function Nav(){

const navigate = useNavigate();
const { logout } = useAuth();
const handleLogout= async()=>{
        await logout();
        navigate("/Login");
        
}
return(
<nav className="navbar navbar-expand-lg  ">
<div className="container">
        <Link className="navbar-brand" to="/">
                <span className="h1" style={{color:"var(--highlight-color)"}}> Story<span className="h1" style={{color:"#000"}}>teller </span> </span> 
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarNavDropdown">

        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Writepost">Creat Post</Link>
        </li>
        
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <FontAwesomeIcon icon={faUser} className="h3 mx-2" />
        </Link>
        <ul className="dropdown-menu" >
                <li ><Link className="dropdown-item" to="/profile">Profial</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><button className="dropdown-item" onClick={handleLogout}>Sign out</button></li>
                
        </ul>
        </li>
        </ul>
        </div>
</div>
</nav>
);
}

export default Nav;