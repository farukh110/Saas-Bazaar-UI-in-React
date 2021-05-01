import 'rsuite/dist/styles/rsuite-default.css';
import { Button, ButtonToolbar, Col, Grid, Input, Row } from "rsuite";
import SidebarMenuIcon from './SidebarMenuIcon';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
        <Grid fluid>
            <Row className="show-grid">
            <Col xs={24} sm={9} md={8} lg={7}>
              
              <Grid>

              <Row className="show-grid">
              
                <Col xs={5} sm={3} md={2} lg={1}>

                <SidebarMenuIcon />
                
                </Col>
                
                <Col xs={6} sm={10} md={6}>
                
                <NavLink exact to="/">
                <h1 className="logo"> SaasBazar </h1>
                </NavLink>
                </Col>
              
              </Row>     

              </Grid>

            </Col>

            <Col xs={24} sm={9} md={8} lg={13}>
                
                <div>

                <Input placeholder="search any thing like softwares..." className="search-bar" />  

                </div>

            </Col>

            <Col xs={24} sm={6} md={8} lg={4}>

                
            <ButtonToolbar className="btn-tool">
            <NavLink exact to="/login">
              <Button appearance="primary"> Login </Button>
            </NavLink>  
            <NavLink exact to="/create-account"> 
              <Button appearance="default"> Register </Button>
            </NavLink>
            </ButtonToolbar>
    

            </Col>
            </Row>
        </Grid>
        </div>
    )
}

export default Header;
