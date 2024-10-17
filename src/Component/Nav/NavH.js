import { Link } from "react-router-dom";
import './nav.css';
function NavH(){

    return(
        <>
            <nav className="navbar navbar-expand-lg  ">
<div className="container">
<Link className="navbar-brand" to="/">
                <span className="h1" style={{color:"var(--highlight-color)"}}> Story</span> <span className="h1" style={{color:"#000"}}>teller </span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle "  to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            JOIN US
        </Link>
        <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Login">Log in</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/Signin">Sign up</Link></li>
                
        </ul>
        </li>
        </ul>
        </div>
</div>
</nav>

        </>
    );

}

export default NavH;