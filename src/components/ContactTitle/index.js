import React from 'react';
import {Typography} from "antd";
import "antd/dist/antd.css";
import {TitleContainer,ContactTitle} from "./ContactTitleElements";

const { Title , Text } = Typography;

const ContactTitleA = ({title}) => {
  return <TitleContainer>
      <ContactTitle> 
      <Title level={2} style={{fontSize:"3.5em",lineHeight:"1.07143",fontWeight:"500",letterSpacing:"-.005em",marginTop:"6px",fontFamily:"Lato,Roboto"}}>
  {title}
  </Title>
  </ContactTitle>
  </TitleContainer>;
};

export default ContactTitleA;
