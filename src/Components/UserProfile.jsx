import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import userImg from '../Assets/images/user.jpg'; 

const UserProfile = () => {
    return (
        <div className="container">
            
          <div className="row justify-content-center">

            <div className="col-md-12">

              <div className="profile bg-white pt-md-4">

                <div className="row">

                  <div className="col-md-5 col-lg-6">

                     <div className="row">

                        <div className="col-lg-2 col-md-2 col-sm-2 col-3">
                            
                            <div className="profile-img-content">

                                <img src={userImg} alt=""/>

                            </div>

                        </div>

                        <div className="col-lg-10 col-md-10 col-sm-10 col-9 pl-5 pl-md-5">
                            
                            <h3> Sujeet S. </h3>

                            <span> <span className="fa fa-map-marker"> Nodia, India – 5:30pm local time </span> </span>

                        </div>

                     </div>   

                  </div>

                  <div className="col-lg-6 col-md-7">

                   <div className="row justify-content-end mt-md-3 mt-4 pb-md-1">

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">

                    <button className="btn-block btn btn-outline-primary">

                      See Public View

                    </button>   

                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-md-0 mt-sm-0 mt-3">
                       
                   <button className="btn-block btn btn-primary">

                    Profile Settings
                    
                    </button>   


                   </div>

                   </div>

                  </div>  

                </div>   

                <div className="row row-border-top mt-md-5 mt-4">

                   <div className="col-md-4">

                     <div className="profile-detail-left">

                        <div className="row mt-md-4 mt-4">

                        <div className="col-md-6 col-sm-4 col-6 pl-md-3">

                           <h4> View profile </h4> 

                        </div>

                        <div className="col-md-2 col-sm-2 col-2">

                          <button className="btn btn-outgray"> <span className="fa fa-plus">  </span> </button>  

                        </div>    

                        <div className="col-md-2 col-sm-2 col-2">

                          <button className="btn btn-outgray"> <span className="fa fa-pencil">  </span> </button>  
 
                        </div>

                        </div>

                        <div className="row mt-md-4 mt-4 row-border-top2 pt-md-4 pt-4">

                        <div className="col-md-6 col-sm-4 col-7 pl-md-3">

                           <h4> Video Introduction </h4> 

                        </div>

                        <div className="col-md-2 col-sm-2 col-2">

                          <button className="btn btn-outgray"> <span className="fa fa-pencil">  </span> </button>  
 
                        </div>

                        </div>

                        <div className="row mt-md-2 mt-2 pt-md-3 pt-3">

                        <div className="col-md-4 col-sm-3 col-4 pl-md-3">

                           <h4> Availability </h4> 

                        </div>

                        <div className="col-md-2 col-sm-4 col-2">

                          <button className="btn btn-outgray"> <span className="fa fa-pencil">  </span> </button>  
 
                        </div>

                        <div className="col-md-12 col-sm-12 col-12">

                        <h5 className="h6 font-font-weight-bold"> Availability </h5> 

                           <h5 className="h6 font-font-weight-bold"> More than 30 hrs/week </h5> 

                        </div>

                        </div>

                        <div className="row mt-md-2 mt-2 mt-sm-2 pt-md-3 pt-sm-3 pt-3">

                        <div className="col-md-4 col-sm-3 col-4 pl-md-3">

                           <h4> Languages </h4> 

                        </div>

                        <div className="col-md-2 col-sm-2 col-2">

                          <button className="btn btn-outgray"> <span className="fa fa-pencil">  </span> </button>  
 
                        </div>

                        <div className="col-md-12 col-12">

                           <h5 className="h6 font-font-weight-bold"> <strong> English: </strong> Conversational </h5> 

                        </div>

                        </div>

                     </div>

                   </div>

                   <div className="col-md-8 row-border-right pt-0 pb-0">

                   <div className="row mt-md-3 mt-3">

                    <div className="col-md-6 col-sm-6 col-12">

                    <div className="row">

                        <div className="col-md-5 col-sm-8 col-6">

                        <h4> Web Developer </h4> 

                        </div>

                        <div className="col-md-2 col-sm-2 col-2">

                        <button className="btn btn-outgray"> <span className="fa fa-pencil">  </span> </button>  

                        </div>

                        </div>   

                    </div>

                    <div className="col-md-6 col-sm-4 col-12">

                    <div className="row justify-content-end mt-md-0 mt-3 mt-sm-0 pr-md-3">

                        <div className="col-md-4 col-sm-6 col-6">

                        <h4> $20.00/hr  </h4> 

                        </div>

                        <div className="col-md-2 col-sm-3 col-6">

                        <button className="btn btn-outgray mx-auto"> <span className="fa fa-pencil">  </span> </button>  

                        </div>    

                        <div className="col-md-2 col-sm-3 col-2">

                        <button className="btn btn-outgray mx-auto"> <span className="fa fa-share-alt">  </span> </button>  

                        </div>

                        </div>  

                    </div>    

                   </div> 

                    <div className="row mt-md-3 mt-3">

                    <div className="col-md-10 col-sm-10 col-12">

                     <p>
                    Customer-Centric Solutions <br/>
                    ✅ 100% Satisfaction Guarantee <br/>
                    ✅ Advanced Deployment Pattern <br/>
                    ✅ Automatic Version Control <br/>

                    Hello, and welcome to my profile. I am an aspiring UI/UX Developer having extensive experience of 4 years. To date, I have successfully developed 200+ websites and
                     </p>

                    </div>

                    <div className="col-md-2 col-sm-2 col-12">

                    <button className="btn btn-outgray mx-auto"> <span className="fa fa-pencil">  </span> </button>  


                    </div>

                    </div>

                    <div className="row row-border-top pt-md-3 pt-3">

                    <div className="col-md-6 col-12">

                    <div className="row">

                        <div className="col-md-6 col-sm-3 col-6">

                        <h4> Work History </h4> 

                        <br/>

                        <h5> No Items </h5>


                        </div>

                        <div className="col-md-2 col-sm-2 col-2">

                        <button className="btn btn-outgray"> <span className="fa fa-pencil">  </span> </button>  

                        </div>

                        </div>   

                    </div>

                    </div>

                    <div className="row row-border-top pt-md-3 pt-sm-3 pt-3">

                        <div className="col-md-6 col-sm-12 col-12">

                        <div className="row">

                            <div className="col-md-6 col-sm-2 col-6">

                            <h4> Portfolio </h4> 

                            <br/>

                            </div>

                            <div className="col-md-2 col-sm-2 col-2">

                            <button className="btn btn-outgray"> <span className="fa fa-plus">  </span> </button>  

                            </div>

                            </div>   

                        </div>

                        </div>

                   </div> 

                </div> 

              </div>  

            </div>    
           
          </div>

        </div>
    )
}

export default UserProfile;
