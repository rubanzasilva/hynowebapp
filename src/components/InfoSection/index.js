//import { Button } from '@mui/material';
import React from 'react';
import { InfoContainer ,InfoWrapper,InfoRow,Column1 ,
    Column2, ImgWrap, TextWrapper,TopLine,Heading,Subtitle,Img } from './InfoElements';
import './data'

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,img,alt,description}) => {
    return (
        <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>
                            {topLine}
                        </TopLine>
                        <Heading lightText={lightText}>
                            {headline}
                        </Heading>
                        <Subtitle darkText={darkText}>
                        {description}
                        </Subtitle>
                        {/* <BtnWrap>
                             <Button to='home'>{buttonLabel}</Button> 
                        </BtnWrap> */}
                    </TextWrapper>
                </Column1>

                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>

            </InfoRow>
        </InfoWrapper>


            
        </InfoContainer>
    )
}

export default InfoSection
