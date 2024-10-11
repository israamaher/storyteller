import Card from "./Card";
import { useFirestore } from "../../firebase/useFirestore";


function Cardlist(){
    const { posts}= useFirestore();
    console.log(posts)

    return(
        <>
        <div  style={{backgroundColor:"var(--prime-color)"}}>  
        <div className="container  p-5">
            <div className="row">  
            { posts.map((post) => (
            <div className="col-sm-12 col-md-4 mb-5" key={post.id}>  
                <Card post={post} />
            </div>
        )) }
        </div>   
        </div>
        </div>
        </>
    );
}

export default Cardlist;