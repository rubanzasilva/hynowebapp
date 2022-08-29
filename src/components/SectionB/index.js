import React from 'react';
import { GridWrapper,GridItem , SectionText,BtnWrap,ImgWrap,Img} from './SectionBElements';
import {Button ,Typography } from "antd";
import "antd/dist/antd.css";

const { Title , Text } = Typography;


const SectionB = ({title,headline,description,img,alt}) => {
    return (

        


        <GridWrapper >

<GridItem>

<ImgWrap >
                 <Img src={img} alt={alt}/>
             </ImgWrap>
</GridItem>

    
        <GridItem >
        <SectionText>
                    
                     <Title  style={{color:"#fff",font:"Roboto",fontSize:"72px"}}>{title}</Title>
                     
                         <Title level={2} style={{color:"white"}}>{headline}</Title>
                     
                     <BtnWrap>
                     <Button type="link" size="large"  href='https://www.jumia.ug/hypno-energy-drink-250-ml-can-32244325.html' style={{color:"red",background:"#000",
                       borderRadius:"6px",minWidth:"100px" }}>Contact Us</Button><br></br>
                     {/* <Button type="primary" size="large" style={{background:"#cf1322",
                      borderColor:"red",minWidth:"200px" , borderRadius:"6px" }}>
                         Learn more
                     </Button> */}
                     </BtnWrap>
                 </SectionText>
        
        </GridItem>
    
        
        
        </GridWrapper>

    
    )
}

export default SectionB
