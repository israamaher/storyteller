import Cardprofile from "./CardProfile";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faUser} from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
import {useFirestore} from '../../firebase/useFirestore';
import './profile.css';
import profile from'./profial.avif';
function Profile(){

    const { posts}= useFirestore();

    return(
    <>   
        <div className="profile container "> 

            <div className="left ">  

            <div className="head-profile">
                
            <img src={profile} alt=""/>
                <h2> Israa Maher</h2> 
                <Link  to="/editprofile"> Edit Profial </Link>
            </div>

            <div className="my-5"  > 
            { posts.map((post) =>  <Cardprofile post={post} key={post.id}/> ) }
            </div>

            </div> 

            
        </div>   

    </>  
    );
}
export default Profile;