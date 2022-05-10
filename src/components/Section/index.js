import React from 'react';
import { SectionContainer,SectionWrapper,SectionText,SectionH1,SectionH2,SectionP,ImgWrap,Img,BtnWrap } from './SectionElements';
import {Button ,Typography } from "antd";
import "antd/dist/antd.css";

const { Title , Text } = Typography;

const SectionOne = ({title,headline,description,img,alt}) => {
    return (
        <SectionContainer>
        <SectionWrapper>

                 
                 <SectionText>
                    
                     <Title  style={{color:"#fff",font:"Roboto",fontSize:"72px"}}>{title}</Title>
                     
                         <Title level={2} style={{color:"white"}}>{headline}</Title>
                     
                     <BtnWrap>
                     <Button type="primary" size="large" style={{background:"#cf1322",
                      borderColor:"red",minWidth:"200px" , borderRadius:"6px" }}>
                         Learn more
                     </Button>
                     </BtnWrap>
                 </SectionText>
                 

                 
                     <ImgWrap>
                         <Img src={img} alt={alt}/>
                     </ImgWrap>
                 

            </SectionWrapper>

        </SectionContainer>
    )
}

export default SectionOne