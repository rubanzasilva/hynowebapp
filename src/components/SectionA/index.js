import React from 'react';
import { GridWrapper,GridItem , SectionText,BtnWrap,ImgWrap,Img} from './SectionAElements';
import {Button ,Typography } from "antd";
import "antd/dist/antd.css";

const { Title , Text } = Typography;


const Section = ({title,headline,description,img,alt}) => {
    return (

        <GridWrapper id='Section A grid wrapper'>

    
        <GridItem id='section A grid Wrapper' >
      
                    
                     <Title  style={{color:"#fff",font:"Roboto",fontSize:"72px"}}>{title}</Title>
                     
                         <Title level={2} style={{color:"white"}}>{headline}</Title>
                     
                     <BtnWrap>
                     <Button type="link" size="large" href='https://www.jumia.ug/hypno-energy-drink-250-ml-can-32244325.html' style={{color:"red",background:"#000",
                       borderRadius:"6px",minWidth:"100px" }}>Shop Now</Button><br></br>
                     </BtnWrap>
              
        
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
