import Card from "./Card";
import { useFirestore } from "../../firebase/useFirestore"; 
import './slide.css';


function Cardlist(){
    const { posts}= useFirestore();
    console.log(posts)

  const entrepreneurshipPosts = posts.filter(post => post.department === "1"); // Assuming "1" is Entrepreneurship
  const webDevelopmentPosts = posts.filter(post => post.department === "2"); // Assuming "2" is Web Development
  const deepLearningPosts = posts.filter(post => post.department === "3"); // Assuming "3" is Deep Learning

    return(
        <>

<div className="cardlist" style={{backgroundColor:"var(--prime-color)"}}>
<ul class="nav nav-tabs  p-5" id="pills-tab" role="tablist">
<li class="nav-item" role="presentation">
<button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Entrepreneurship</button>
</li>
<li class="nav-item" role="presentation">
<button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Web Development</button>
</li>
<li class="nav-item" role="presentation">
<button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Deep Learning</button>
</li>
</ul>
<div class="tab-content" id="pills-tabContent">
<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
<div className="container  p-5">
        <div className="row">  
        {entrepreneurshipPosts.map((post) => (
        <div className="col-sm-12 col-md-4 mb-5" key={post.id}>  
            <Card post={post} />
        </div>
    )) }
    </div>   
    </div> 
</div>
<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
<div className="container  p-5">
        <div className="row">  
        { webDevelopmentPosts.map((post) => (
        <div className="col-sm-12 col-md-4 mb-5" key={post.id}>  
            <Card post={post} />
        </div>
    )) }
    </div>   
    </div>

</div>
<div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
<div className="container  p-5">
        <div className="row">  
        { deepLearningPosts.map((post) => (
        <div className="col-sm-12 col-md-4 mb-5" key={post.id}>  
            <Card post={post} />
        </div>
    )) }
    </div>   
    </div>
</div>

</div>
</div>
        
        </>
    );
}

export default Cardlist;