import React from 'react';
import { Col, Grid, Rate, Row } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import asana from '../Assets/images/logos/asana.png';
import smartsheet from '../Assets/images/logos/smartsheet.jpg';
import monday from '../Assets/images/logos/monday.png';
import shopify from '../Assets/images/logos/shopify.png';
import woocommerce from '../Assets/images/logos/woo-commerce.png';
import clickup from '../Assets/images/logos/clickup.png';
import wrike from '../Assets/images/logos/wrike.png';
import airtable from '../Assets/images/logos/airtable.png';
import shopifyPlus from '../Assets/images/logos/shopify-plus.png';
import ecwid from '../Assets/images/logos/ecwid.png';
import basecamp from '../Assets/images/logos/basecamp.png';
import trello from '../Assets/images/logos/trello.png';
import teamwork from '../Assets/images/logos/teamwork.svg';
import fastspring from '../Assets/images/logos/fastspring.png';
import magento from '../Assets/images/logos/magento.png';
import { NavLink } from 'react-router-dom';


const Main = () => {
    return (
        <div className="show-container main-page">

           <Grid fluid>
                <Row>
                <Col md={4} sm={8} xs={24} xsOffset={0} mdOffset={2}>
                   
                    <NavLink exact to="/compare-features">

                    <div className="show-col logo-box">

                    <p> Asana </p>

                    <Rate className="rating" defaultValue={4.5} allowHalf readOnly />
                    <span> (7,090) </span>    

                    <br/><br/>

                    <img src={asana} alt="" />

                    <br/>

                    </div>
                    </NavLink>
                </Col>
                <Col md={4} sm={8} xs={24}>

                <NavLink exact to="/compare-features">    

                <div className="show-col logo-box">

                    <p> Smartsheet </p>

                    <Rate className="rating" defaultValue={4.5} allowHalf readOnly />
                    <span> (2,567) </span>    

                    <br/><br/>

                    <img src={smartsheet} alt="" />

                    <br/>

                    </div>
                    </NavLink>
                </Col>
                <Col md={4} sm={8} xs={24}>

                <NavLink exact to="/compare-features">
                <div className="show-col logo-box">

                    <p> monday.com </p>

                    <Rate className="rating" defaultValue={4.5} allowHalf readOnly />
                    <span> (1,837) </span>    

                    <br/><br/>

                    <img src={monday} alt="" />

                    <br/>

                    </div>
                    </NavLink>
                </Col>
                <Col md={4} sm={8} xs={24}>
                <NavLink exact to="/compare-features">
                <div className="show-col logo-box">

                    <p> Shopify </p>

                    <Rate className="rating" defaultValue={4.5} allowHalf readOnly />
                    <span> (3,553) </span>    

                    <br/><br/>

                    <img src={shopify} alt="" />

                    <br/>

                    </div>
                    </NavLink>
                </Col>
                <Col md={4} sm={8} xs={24}>
                <NavLink exact to="/compare-features">
                <div className="show-col logo-box">

                    <p> Woocommerce </p>

                    <Rate className="rating" defaultValue={4.5} allowHalf readOnly />
                    <span> (792) </span>    

                    <br/><br/>

                    <img src={woocommerce} alt="" />

                    <br/>

                    </div>
                    </NavLink>
                </Col>
                
                </Row>
                <br/>
                <Row>
                <Col md={4} sm={8} xs={24} mdOffset={2}>
                    <NavLink exact to="/compare-features">
                    <div className="show-col logo-box">

                    <p> ClickUp </p>

                    <Rate className="rating" defaultValue={4.5} allowHalf readOnly />
                    <span> (2,688) </span>    

                    <br/><br/>

                    <img src={clickup} alt="" />

                    <br/>

                    </div>
                    </NavLink>
                </Col>
                <Col md={4} sm={8} xs={24}>
                <NavLink exact to="/compare-features">
                <div className="show-col logo-box">

                    <p> Wrike </p>

                    <Rate className="rating" defaultValue={4.0} allowHalf readOnly />
                    <span> (1,405) </span>    

                    <br/><br/>

                    <img src={wrike} alt="" />

                    <br/>

                    </div>
                    </NavLink>
                </Col>
                <Col md={4} sm={8} xs={24}>
                <NavLink exact to="/compare-features">
                <div className="show-col logo-box">

                    <p> Airtable </p>

                    <Rate className="rating" defaultValue={4.5} allowHalf readOnly />
                    <span> (990) </span>    

                    <br/><br/>

                    <img src={airtable} alt="" />

                    <br/>

                    </div>
                    </NavLink>
                </Col>
                <Col md={4} sm={8} xs={24}>
                <NavLink exact to="/compare-features">
                <div className="show-col logo-box">

                    <p> Shopify Plus </p>

                    <Rate className="rating" defaultValue={4.5} allowHalf readOnly />
                    <span> (173) </span>    

                    <br/><br/>

                    <img src={shopifyPlus} alt="" />

                    <br/>

                    </div>
                    </NavLink>
                </Col>
                <Col md={4} sm={8} xs={24}>
                <NavLink exact to="/compare-features">
                <div className="show-col logo-box">

                    <p> Ecwid </p>

                    <Rate className="rating" defaultValue={5.0} allowHalf readOnly />
                    <span> (198) </span>    

                    <br/><br/>

                    <img src={ecwid} alt="" />

                    <br/>

                    </div>
                    </NavLink>
                </Col>
                
                </Row>

                <br/>
                <Row>
                <Col md={4} sm={8} xs={24} mdOffset={2}>
                <NavLink exact to="/compare-features">
                    <div className="show-col logo-box">

                    <p> Basecamp </p>

                    <Rate className="rating" defaultValue={4.0} allowHalf readOnly />
                    <span> (4,652) </span>    

                    <br/><br/>

                    <img src={basecamp} alt="" />

                    <br/>

                    </div>
                    </NavLink>
                </Col>
                <Col md={4} sm={8} xs={24}>
                <NavLink exact to="/compare-features">
                <div className="show-col logo-box">

                    <p> Trello </p>

                    <Rate className="rating" defaultValue={4.5} allowHalf readOnly />
                    <span> (11,304) </span>    

                    <br/><br/>

                    <img src={trello} alt="" />

                    <br/>

                    </div>
                    </NavLink>
                </Col>
                <Col md={4} sm={8} xs={24}>
                <NavLink exact to="/compare-features">
                <div className="show-col logo-box">

                    <p> Teamwork </p>

                    <Rate className="rating" defaultValue={4.5} allowHalf readOnly />
                    <span> (776) </span>    

                    <br/><br/>

                    <img src={teamwork} alt="" />

                    <br/>

                    </div>
                    </NavLink>
                </Col>
                <Col md={4} sm={8} xs={24}>
                <NavLink exact to="/compare-features">
                <div className="show-col logo-box">

                    <p> FastSpring </p>

                    <Rate className="rating" defaultValue={4.5} allowHalf readOnly />
                    <span> (162) </span>    

                    <br/><br/>

                    <img src={fastspring} alt="" />

                    <br/>

                    </div>
                    </NavLink>
                </Col>
                <Col md={4} sm={8} xs={24}>
                <NavLink exact to="/compare-features">
                <div className="show-col logo-box">

                    <p> Magento Commerce </p>

                    <Rate className="rating" defaultValue={4.0} allowHalf readOnly />
                    <span> (426) </span>    

                    <br/><br/>

                    <img src={magento} alt="" />

                    <br/>

                    </div>
                    </NavLink>
                </Col>
                
                </Row>

            </Grid>
    
        </div>
    )
}

export default Main;
