import React from 'react';
import { Grid, Row, Col, Input, Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const Contact = () => {
    return (
        <div className="contact-us">
           
        <Grid fluid>
          
          <Row className="show-grid">
            <Col mdOffset={1} smOffset={0} xsOffset={0} xs={24} sm={24} md={12}>

            <div className="contact-info">
            <h5> Contact Us  </h5>

            <br/>    

            <h1> Get in touch. </h1>

            <br/>

            <h3> Have a question? We’re ready to help, whenever, <br/> from wherever. </h3>    

            <br/>

            <div className="green-border">  </div>

            <br/>

            <strong> Click the chat box in the bottom right corner to get started. </strong>  

            </div>
            
            </Col>

            <Col mdOffset={0} smOffset={0} xsOffset={0} xs={24} sm={20} md={10}>
            
            <form>

            <Input type="text" placeholder="Name" />

            <br/>

            <Input type="email" placeholder="Email" />

            <br/>

            <Input className="text-area" componentClass="textarea" rows={3} placeholder="Message" />

            <br/>

            <Button appearance="primary" type="submit"> Send Message </Button>
      
            </form>
            
            </Col>
          </Row>
        
        </Grid>
        
        </div>
    )
}

export default Contact;
