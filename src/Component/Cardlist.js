import Card from "./Card";


function Cardlist(){

    return(
        <>
        <div className="container my-5">  
            <div className="row ">
                <div className="  col-sm-12 col-md-4  mb-5"> 
                    < Card /> 
                </div> 

                <div className="  col-sm-12 col-md-4  mb-5"> 
                    < Card /> 
                </div> 

                <div className=" col-sm-12 col-md-4  mb-5"> 
                    < Card /> 
                </div> 

            </div>

            <div className="row">
                <div className="  col-sm-12 col-md-4"> 
                    < Card /> 
                </div> 

                <div className="  col-sm-12 col-md-4"> 
                    < Card /> 
                </div> 

                <div className=" col-sm-12 col-md-4"> 
                    < Card /> 
                </div> 

            </div>
        </div>
        
        </>
    );
}

export default Cardlist;