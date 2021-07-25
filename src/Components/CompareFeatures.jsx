import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Button, ButtonToolbar, Col, Dropdown, Grid, Icon, IconButton, Row, SelectPicker } from "rsuite";
import software from '../Assets/images/compare-features/software.JPG';
import vision from '../Assets/images/compare-features/vision.jpg';
import channels from '../Assets/images/compare-features/channels.jpg';
import digital from '../Assets/images/compare-features/digital.JPG';
import education from '../Assets/images/compare-features/education.jpg';
import microsoft from '../Assets/images/compare-features/microsoft.jpg';
import UploaderWidget from '../Components/global/UploaderWidget';
import ContentTabs from '../Components/global/ContentTabs'; 

const CompareFeatures = () => {
    return (
        <div className="compare-features">
             <Grid fluid>

                <Row className="show-grid">
                
                <Col xs={24} sm={2} md={3} lg={4}>
                    
                </Col>
                
                <Col xs={24} sm={20} md={8} lg={16}>
                   
                   <div className="compare-features-box">

                   <Grid>

                   <Row className="show-grid">

                   <Row className="show-grid">
                   
                    <Col xs={24} sm={24} md={10} lg={10}>
                    
                      <div className="compare-img-content">

                        <a href="!#">

                           <img src={software} alt="" /> 

                        </a>  

                      </div>
                    
                    </Col>

                    <Col xs={24} sm={24} md={6} lg={14}>

                      <Grid>

                         <Row className="show-grid compare-detail-row">

                         <Col xs={24} sm={11} md={6} lg={6}>

                         <Grid>

                            <Row className="show-grid"> 
                            
                            <Col xs={3} sm={3} md={1} lg={1}>

                            <ButtonToolbar>
                           
                           <Dropdown
                           renderTitle={() => {
                               return <IconButton icon={<Icon icon="ellipsis-h" />} circle />;
                           }}
                           >
                           <Dropdown.Item>
                               <Icon icon="user" /> New User
                           </Dropdown.Item>
                           <Dropdown.Item>
                               <Icon icon="group" /> New Group
                           </Dropdown.Item>
                           </Dropdown>
                       </ButtonToolbar>    

                            </Col>

                            <Col xs={3} sm={3} md={1} lg={1}>
                            <UploaderWidget />
  
                            </Col>

                            <Col xs={3} sm={1} md={1} lg={1}>

                              <Icon className="likeIcon" icon="heart-o" />  

                            </Col>

                            </Row>

                         </Grid>

                         <br/>

                         <a className="feature-link" href="!#"> khired.com </a>
                          
                         </Col>

                         <Col xs={24} sm={13} md={6} lg={5}>

                           <span className="quick-search-row"> <span> <SelectPicker className="quick-Search" style={{ width: 150 }} />
                            </span> <span> <Button className="btn-save"> Save </Button>  </span> </span>

                         </Col>

                         </Row>   

                      </Grid>  

                      <Grid>

                      <Row className="show-grid">

                         <Col xs={24} md={11} lg={10}>

                          <div className="feature-summary">

                            <h2> Software Development </h2> 

                            <p> Our custom software development services employ advanced technologies 
                          to create user-friendly software that could simplify your operations and 
                          fulfill your requirements. So contact us today for best software development 
                          services 📞 +44-2039252739 /+92-4238922756 📧 info@khired.com #software 
                          #development #growth #softwaredevelopment #softwaredevelop </p>   

                          </div> 

                         </Col>    

                      </Row>

                      </Grid>

                      <br/>

                      <Grid>

                      <Row className="show-grid">

                         <Col md={4} sm={6} xs={12} lg={4}>

                           <Grid>

                           <Row className="show-grid">

                              <Col lg={2} md={2} sm={4} xs={8}>

                               <a className="feature-circle-link" href="!#">

                                 <img className="feature-circle" src="https://i.pinimg.com/75x75_RS/31/2a/17/312a176fdcf34a78ead8f5a5fe1f3b62.jpg" alt="" />   

                               </a>     

                              </Col>

                              <Col md={4}>

                              <a href="!#"> <p className="page-title"> Khired Networks </p> </a>

                              <a href="!#"> <p> 13 followers </p> 
                               </a>  
                              
                              </Col>

                           </Row>                               

                           </Grid>
                          
                         </Col>

                         <Col md={5}>

                         <Button className="btn-follow"> Follow </Button>

                         </Col>    

                      </Row>

                      </Grid>

                      <Grid>

                       <Row>

                       <Col xs={24} md={11} lg={10}>

                         <div>

                         <br/><br/>   
                         <ContentTabs/>
                            
                         </div>  

                       </Col>
                       
                       </Row>    

                      </Grid>

                    </Col>
                   
                   </Row>

                   </Row>

                   </Grid>

                   </div>
                
                </Col>
               
                <Col xs={24} sm={12} md={8} lg={4}>
                    
                </Col>
                
                </Row>

                <br/><br/>

                <center>    

                <Row gutter={16}>
                    <Col xs={24} sm={8} md={4}>
                        <div className="show-col">
                        
                        <div class="feature-img-container">
                        <img src={software} alt="" />
                        <p class="title"> 0.5 </p>
                        <div class="overlay"></div>
                        <div class="option-panel"> 
                        
                        <a href="!#"> software </a> 
                        
                        </div>
                        </div>
                        
                        </div>
                    </Col>
                    <Col xs={24} sm={8} md={4}>
                        <div className="show-col">
                        
                        <div class="feature-img-container">
                        <img src={vision} alt="" />
                        <p class="title"> 0.5 </p>
                        <div class="overlay"></div>
                        <div class="option-panel"> 
                        
                        <a href="!#"> software </a> 
                        
                        </div>
                        </div>
                        
                        </div>
                    </Col>
                    <Col xs={24} sm={8} md={4}>
                    
                    <div className="show-col">
                        
                        <div class="feature-img-container">
                        <img src={channels} alt="" />
                        <p class="title"> 0.5 </p>
                        <div class="overlay"></div>
                        <div class="option-panel"> 
                        
                        <a href="!#"> channels </a> 
                        
                        </div>
                        </div>
                        
                        </div>
                    </Col>
                    <Col xs={24} sm={8} md={4}>

                      <div className="show-col">
                        
                        <div class="feature-img-container">
                        <img src={digital} alt="" />
                        <p class="title"> 0.5 </p>
                        <div class="overlay"></div>
                        <div class="option-panel"> 
                        
                        <a href="!#"> digital </a> 
                        
                        </div>
                        </div>
                        
                        </div>

                    </Col>
                    <Col xs={24} sm={8} md={4}>

                    <div className="show-col">
                        
                        <div class="feature-img-container">
                        <img src={education} alt="" />
                        <p class="title"> 0.5 </p>
                        <div class="overlay"></div>
                        <div class="option-panel"> 
                        
                        <a href="!#"> Education </a> 
                        
                        </div>
                        </div>
                        
                        </div>
                    </Col>
                    <Col xs={24} sm={8} md={4}>

                    <div className="show-col">
                        
                        <div class="feature-img-container">
                        <img src={microsoft} alt="" />
                        <p class="title"> 0.5 </p>
                        <div class="overlay"></div>
                        <div class="option-panel"> 
                        
                        <a href="!#"> microsoft </a> 
                        
                        </div>
                        </div>
                        
                        </div>
                    </Col>
                </Row>   

                </center>

            </Grid>
        </div>
    )
}

export default CompareFeatures;
