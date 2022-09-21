import React from 'react';
import { ReactDOM } from 'react';
import {Divider,Typography, Card , Col, Row } from "antd";
import "antd/dist/antd.css";
import {ContactContainer,ContactWrapper,CooperateOffice,ContactSales,Cards} from './ContactUsElements';
// import GoogleMaps from '../Map';
// import { LocationOnMap } from '../Footer/FooterElements';

const { Title , Text } = Typography;

const location = {
  address: 'Zigoti Coffee Works Ltd',
  lat: 0.31952388690630096,
  lng: 32.612368559943604,
} // our location object from earlier


const ContactHypno = ({title,title1,title2,title3,text,text2,text3,phone,email,email1,email2,email3}) => {
  return <ContactContainer>

  <ContactWrapper>
  <Title level={3} style={{fontSize:"1.75em",lineHeight:"1.10722",fontWeight:"400",letterSpacing:"-.005em",marginTop:"6px",fontFamily:"Lato"}}> {title1} </Title>

   <ContactSales>
        
        
        <Row gutter={[16]}>

        {/* <Cards>
        <Col span={16}>


        <Card title="Zicofe Online Store" bordered={false} style={{ }}>
        <Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"15px",marginBottom:"15px",fontFamily:"Roboto"}}>{text}<br/>{text2}</Text>
        
        </Card>
        
        </Col>

        </Cards> */}

        <Cards>

        <Col span={16}>

        <Card title="Reach Us at" bordered={false} style={{ }}>
        <p> <Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"1005px",marginBottom:"15px",paddingTop:"20px",fontFamily:"Roboto"}}>{phone}</Text></p>
        <p><Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"1500px",marginBottom:"15px",fontFamily:"Roboto",paddingTop:"200px"}}>{email}</Text></p>
        {/* <p><Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"15px",marginBottom:"15px",fontFamily:"Roboto"}}>{email1}</Text></p> */}
        </Card>

        </Col>
        </Cards>


        

        </Row>

       
  </ContactSales>

  


  <Divider style={{size:2}}/>
  <Title level={3} style={{fontSize:"1.75em",lineHeight:"1.10722",fontWeight:"400",letterSpacing:"-.005em",marginTop:"72px",paddingTop:"48px",fontFamily:"Lato"}}> {title3} </Title>
  <ContactSales> 
        <Row gutter={[16]}>

        {/* <Cards>
        <Col span={16}>


        <Card title="Complaints" bordered={false} style={{  }}>
        <Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"15px",marginBottom:"15px",fontFamily:"Roboto"}}>{text3}<br/>{email3}</Text>
        
        </Card>
        
        </Col>

        </Cards>

        <Cards>

        <Col span={16}>

        <Card title="Roastery" bordered={false} style={{ }}>
        <p><Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"1005px",marginBottom:"15px",paddingTop:"20px",fontFamily:"Roboto"}}>{phone}</Text></p>
        <p><Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"1500px",marginBottom:"15px",fontFamily:"Roboto",paddingTop:"200px"}}>{email2}</Text></p>
        <p><Text level={5} style={{color:"#35241A", fontSize:"16px",lineHeight:"1.9381",fontWeight:"200",letterSpacing:".016em",marginTop:"15px",marginBottom:"15px",fontFamily:"Roboto"}}>{email1}</Text></p>
        </Card>

        </Col>
        </Cards> */}


        

        </Row>

       
  </ContactSales>


  {/* cooperate address section */}
  <Divider style={{size:"2px"}}/>
  <Title level={3} style={{fontSize:"1.75em",lineHeight:"1.10722",fontWeight:"400",letterSpacing:"-.005em",marginTop:"72px",paddingTop:"48px",fontFamily:"Lato"}}> {title2} </Title>
  <CooperateOffice>
  {/* <LocationOnMap>
            <GoogleMaps location={location} zoomLevel={17} />
            </LocationOnMap> */}
  </CooperateOffice>


<Divider/>
  </ContactWrapper>
 

  </ContactContainer>
};

export default ContactHypno;
