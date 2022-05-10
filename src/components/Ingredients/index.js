import React from 'react';
import { GridWrapper,SectionText,SectionCollapse,GridItem,ImgWrap,Img,BtnWrap } from './IngredientsElements';
import {Button ,Typography , Collapse } from "antd";
import "antd/dist/antd.css";

const { Title , Text} = Typography;
const { Panel } = Collapse;



const Ingredients = ({title,headline,desc,img,alt}) => {
    return (

        


        <GridWrapper >

<GridItem>

<ImgWrap >
                 <Img src={img} alt={alt}/>
             </ImgWrap>
</GridItem>

    
        <GridItem >
       
                    
                    <Title  style={{color:"#fff",font:"Roboto",fontSize:"72px"}}>Ingredients</Title>
                    
                  
                    <Collapse id="accordionWrapper" accordion expandIconPosition='right' style={{fontSize:"21px" , backgroundColor:"#fff" , color:"red" , fontColor:"red"}}>
                        <Panel header="Caffeine" key="1">
                            <p>{headline}</p>
                        </Panel>

                        <Panel header="B group vitamins" key="2">
                            <p>{headline}</p>
                        </Panel>
                        
                        <Panel header="Taurine" key="3">
                            <p>{headline}</p>
                        </Panel>

                        <Panel header="Water" key="4">
                            <p>{headline}</p>
                        </Panel>

                        <Panel header="Sugar" key="5">
                            <p>{headline}</p>
                        </Panel>
                    </Collapse>
                
        
        </GridItem>
    
        
        
        </GridWrapper>

    
    )
}



export default Ingredients