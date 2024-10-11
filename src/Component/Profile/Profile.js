import Cardprofile from "./CardProfile";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faUser} from '@fortawesome/free-regular-svg-icons';
import {useFirestore} from '../../firebase/useFirestore';
function Profile(){

    const { posts}= useFirestore();

    return(
        
        <div className="profile container p-5"> 

            <div className="left w-50">  
             
            <h2>  User Name</h2>
            </div>

            <div className="w-50 mb-5" > 
            { posts.map((post) =>  <Cardprofile post={post} key={post.id}/> ) }
            </div>
        </div>    
    
    );
}
export default Profile;