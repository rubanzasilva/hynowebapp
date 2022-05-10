import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';

export const CommunityCard = styled.div`
    margin:auto;
 line-height:75px;
 display:flex;
 flex-direction:column;
 height:100%;
 width:100%;
 flex-basis:45%;
 text-align:center;
 align-content:center;
 justify-content:center;
 padding:156px 156px 156px 156px;



 @media screen and (max-width:780px) {
     margin-top:16px;
 }

`

export const CommunityH1 = styled.h1`
    font-family: "futura", "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 72px;
    line-height: 72px;
    font-weight: 600px;
    letter-spacing: .005em;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 40px;
        justify-content:center;
        text-align:center;
    }

`
export const CommunityP = styled.p`
    font-family: "Lato", "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 19px;
    margin-top: .7em;
    line-height: 1.8;
    line-spacing:8px;
    margin-bottom: 10px;
    font-color:#fff;

`
export const CommunityButton = styled.div`
    margin-top:9px;
 display: flex;
 justify-content:center;
 align-items:center;
 font-style: normal;
 text-align:center;
 font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
 font-weight:400;
 margin-top:.4rem;
 font-size: 21px;
 line-height: 1.381;
 padding:36px;
 
 &:hover {
     transition: all 0.2s ease-in-out;
     text-decoration:underline;
     ${'' /* background:#fff;
     color:#010606; */}
 }

`
export const CommunityButtonLink = styled(LinkR)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    color:green;

`