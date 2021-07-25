import { Tabs } from 'antd';
import 'rsuite/dist/styles/rsuite-default.css';
import { Grid, Row, Col, Button, Input } from 'rsuite';
import userImg from '../../Assets/images/user.jpg'; 

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const ContentTabs = () => {
    return (
        <div className="content__tabs">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Photos" key="1">
            <br/>
            <Grid>
                
            <Row className="show-grid">
            <Col xs={13} sm={6} md={5}> <p> Tried this Pin? <br/> 
                             Add a photo to show how it went </p> </Col>
            <Col xs={11} sm={6} md={5}> <Button className="btn-follow"> Add Photo </Button> </Col>
            </Row>  

            </Grid>

            </TabPane>
            <TabPane tab="1 Comment" key="2">
            <br/>
            <Grid>

            <Row className="show-grid">
            <Col xs={6} md={1}> 
            
            <img src={userImg} alt="" />

            </Col>
            <Col xs={18} md={9}> 
            
              <div className="show-comment">

               <b> Cynthia </b> 
               <p> Great Idea </p>

              </div>

             </Col>
            </Row>  

            </Grid>
            <br/>
            <Grid>

            <Row className="show-grid">
            <Col xs={6} md={1}> 
            
            <img src={userImg} alt="" />

            </Col>
            <Col xs={18} md={9}> 
            
            <Input placeholder="Add a comment" />

             </Col>
            </Row>  

            </Grid>

            </TabPane>
        </Tabs>
        </div>
    )
}

export default ContentTabs;
