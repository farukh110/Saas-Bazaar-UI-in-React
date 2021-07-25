import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Row, Col, Input, Button, InputGroup, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const Login = () => {
    return (
        <div className="login">
            <Grid fluid>
                <Row className="show-grid">
                
                <Col xs={2} sm={6} md={8}>
                    

                </Col>
                
                <Col xs={20} sm={12} md={8}>

                    <form className="form-container">

                    <h3 className="form-title"> Log in to SaasBazar </h3>

                    <InputGroup>
                    <InputGroup.Addon> <Icon className="login-icon" icon="user" /> </InputGroup.Addon>
                    <Input type="email" placeholder="Email" />
                    </InputGroup>

                    <br/>    

                    <InputGroup>
                    <InputGroup.Addon> <Icon className="login-icon" icon="lock" /> </InputGroup.Addon>
                    <Input type="password" placeholder="Password" />  
                    </InputGroup>

                    <br/>

                    <Button block className="darkblue" type="submit"> Login  </Button>

    
                    <hr/>

                    <Button block className="btn-facebook"> <Icon className="phone-number-icon" icon="facebook" /> 
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    Continue with Facebook </Button>
                        
                    <br/>

                    <Button block className="btn-google"> <Icon className="phone-number-icon" icon="google" /> 
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    Continue with Google </Button>
                   
                    <br/> 

                    <NavLink exact to="/create-account">
                       <Button block> Create an Account  </Button> 
                       </NavLink>
  


                    </form>

                </Col>

                <Col xs={2} sm={6} md={8}>
                    

                </Col>
                
                </Row>
            </Grid>
        </div>
    )
}

export default Login;
