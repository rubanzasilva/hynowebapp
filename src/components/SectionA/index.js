import React from 'react';
import { GridWrapper,GridItem , SectionText,BtnWrap,ImgWrap,Img} from './SectionAElements';
import {Button ,Typography } from "antd";
import "antd/dist/antd.css";

const { Title , Text } = Typography;


const Section = ({title,headline,description,img,alt}) => {
    return (

        


        <GridWrapper >

    
        <GridItem >
        <SectionText>
                    
                     <Title  style={{color:"#fff",font:"Roboto",fontSize:"72px"}}>{title}</Title>
                     
                         <Title level={2} style={{color:"white"}}>{headline}</Title>
                     
                     <BtnWrap>
                     <Button type="link" size="large" style={{color:"red",background:"#000",
                       borderRadius:"6px",minWidth:"100px" }}>SHOP NOW</Button><br></br>
                     {/* <Button type="primary" size="large" style={{background:"#cf1322",
                      borderColor:"red",minWidth:"200px" , borderRadius:"6px" }}>
                         Learn more
                     </Button> */}
                     </BtnWrap>
                 </SectionText>
        
        </GridItem>
        


        <GridItem>

        <ImgWrap >
                         <Img src={img} alt={alt}/>
                     </ImgWrap>
        </GridItem>
        
        
        </GridWrapper>

    
    )
}

export default Section
