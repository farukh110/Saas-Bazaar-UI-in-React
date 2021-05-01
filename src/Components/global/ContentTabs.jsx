import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Tab, Tabs } from 'react-bootstrap';


const ContentTabs = () => {
    return (
        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
                1111
            </Tab>
            <Tab eventKey="profile" title="Profile">
                2
            </Tab>
            
            </Tabs>
        </div>
    )
}

export default ContentTabs;
