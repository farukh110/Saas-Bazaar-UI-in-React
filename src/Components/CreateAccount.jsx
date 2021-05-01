import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Grid, Row, Col, Input, InputGroup, Icon, Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const CreateAccount = () => {
    return (
        <div className="login">
            <Grid fluid>
                <Row className="show-grid">
                
                <Col xs={1} sm={6} md={8}>
                    

                </Col>
                
                <Col xs={22} sm={12} md={8}>

                    <form get="" className="form-container">

                    <h3 className="form-title"> Get your free account </h3>
   
                    <InputGroup>
                    <InputGroup.Addon>
                        <Icon icon="avatar" />
                    </InputGroup.Addon>
                    <Input type="text" placeholder="First Name" />
                    </InputGroup>

                    <br/>    

                    <InputGroup>
                    <InputGroup.Addon>
                        <Icon icon="avatar" />
                    </InputGroup.Addon>
                    <Input type="text" placeholder="Last Name" />
                    </InputGroup>
    
                    <br/>

                    <InputGroup>
                    <InputGroup.Addon>
                        <Icon icon="envelope" />
                    </InputGroup.Addon>
                    <Input type="email" placeholder="Work email address" />
                    </InputGroup>
    
                    <br/>

                    <InputGroup>
                    <InputGroup.Addon>
                        <Icon className="phone-number-icon" icon="phone" />
                    </InputGroup.Addon>
                    <Input type="text" placeholder="Phone Number" />
                    </InputGroup>

                    <br/>

                    <Button block color="blue" appearance="ghost" type="submit"> Create an Account  </Button>
        
                    <br/>

                    <InputGroup>
                    <InputGroup.Addon>
                        <Icon className="phone-number-icon" icon="google" />
                    </InputGroup.Addon>
                    <Button block appearance="primary"> Continue with Google </Button>
                    </InputGroup>

                    <br/>

                    <InputGroup>
                    <InputGroup.Addon>
                        <Icon className="phone-number-icon" icon="facebook" />
                    </InputGroup.Addon>
                    <Button block color="violet"> Continue with Facebook </Button>
                    </InputGroup>

                    <Grid>  

                    </Grid>

                    </form>

                </Col>

                <Col xs={1} sm={6} md={8}>
                    

                </Col>
                
                </Row>
            </Grid>
        </div>
    )
}

export default CreateAccount;
