import React from 'react';
import { Button, ButtonToolbar, Drawer } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import menuBars from '../../Assets/images/icons/menu-bar.svg';
import SlideMenuWidget from './SlideMenuWidget';
import { NavLink } from 'react-router-dom';

class SidebarMenuIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  close() {
    this.setState({
      show: false
    });
  }
  toggleDrawer(placement) {
    this.setState({
      placement,
      show: true
    });
  }
  render() {
    return (
      <div>
        <ButtonToolbar>

        <Button onClick={() => this.toggleDrawer('left')} className="btn-menu-burger"> 
                
          <img className="menu-bar" src={menuBars} alt="" />

        </Button>

        </ButtonToolbar>

        <Drawer
          size={'xs'}
          placement={this.state.placement}
          show={this.state.show}
          onHide={this.close}
        >
          <Drawer.Header>
            {/* <Drawer.Title> Drawer Title </Drawer.Title> */}
            <div className="profile_title">
            
            <h4> <i class="fa fa-user-circle-o"></i> Hello, Girish </h4>

          </div>
          </Drawer.Header>

          <Drawer.Body>

          <div className="sidebar_menu">

            <div className="trending">

              <ul>
                <li> <a className="sidebar_link" href="!#"> Sell </a> </li>
                <li> <a className="sidebar_link" href="!#"> Promote </a> </li>
                <li> <a className="sidebar_link" href="!#"> Support </a> </li>
                <li> 
                 <NavLink activeClassName='menu_active' className="sidebar_link" onClick={this.close} exact to="/about"> About Us </NavLink> 
                 </li>
                <li>
                
                 <NavLink activeClassName='menu_active' className="sidebar_link" onClick={this.close} exact to="/contact-us"> Contact Us </NavLink> </li>
                
                
              </ul>  

            </div>
            
            <hr/>

            <div className="sidebar_menu_slide">

              <SlideMenuWidget/>

            </div>

          </div>
            
          </Drawer.Body>
          <Drawer.Footer>
          </Drawer.Footer>
        </Drawer>
      </div>
    );
  }
}

export default SidebarMenuIcon;
