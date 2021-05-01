import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import logo from '../Assets/images/logos/logos2.png';

const About = () => {
    return (
        <div className="contact-us">
           
        <Grid fluid>
          
          <Row className="show-grid">
            <Col mdOffset={1} smOffset={0} xsOffset={0} xs={24} sm={24} md={12}>

            <div className="contact-info">
            <h5> About G2  </h5>

            <br/>    

            <h1> Reach your peak. <br/> We’ll help you get there </h1>

            <br/>

            <h3> SaaSBazaar is a collaborative SaaS marketplace to buy/sell software or collaborate to
                build better applications or simply explore SaaS ideas. We help buyers to find the right
                software, sellers to find more buyers and explorers to have fun </h3>    

            <br/>

            <div className="green-border">  </div>

            <br/>

            <strong> Click the chat box in the bottom right corner to get started. </strong>  

            </div>
            
            </Col>

            <Col mdOffset={0} smOffset={0} xsOffset={0} xs={24} sm={20} md={10}>
            
              <img className="about-us-logo" src={logo} alt=""/>
            
            </Col>
          </Row>
        
        </Grid>
        
        </div>
    )
}

export default About;
