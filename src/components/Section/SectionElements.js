import styled from "styled-components";


export const SectionContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-basis:100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color:#000;

    @media screen and (max-width: 768px) {
        height: auto;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
    }
`

export const SectionWrapper = styled.div`
    display:flex; 
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
    flex-basis:100%;
    padding:16px;
    margin:auto;
    justify-content:space-around;
    align-items:center;
    text-align:center;

 }
`

//column 1
export const SectionText = styled.div`
    margin:auto;
 line-height:75px;
 display:flex;
 flex-direction:column;
 height:100%;
 width:100%;
 flex-basis:30%;
 text-align:center;
 align-content:right;
 justify-content:center;
 margin-left:15%;



 @media screen and (max-width:780px) {
     margin-top:16px;
 }

`

export const SectionH1 = styled.h1`
    font-family: "futura", "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 72px;
    line-height: 72px;
    font-weight: 600px;
    letter-spacing: .005em;
    color:#fff;

    @media screen and (max-width: 768px) {
        font-size: 40px;
        justify-content:center;
        text-align:center;
    }

`

export const SectionH2 = styled.h1`
    font-family: "futura", "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 72px;
    line-height: 72px;
    font-weight: 600px;
    letter-spacing: .005em;
    color:#fff;

    @media screen and (max-width: 768px) {
        font-size: 40px;
        justify-content:center;
        text-align:center;
    }

`
export const SectionP = styled.p`
    font-family: "Lato", "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 19px;
    margin-top: .7em;
    line-height: 1.8;
    line-spacing:8px;
    margin-bottom: 10px;
    color:#fff;

`

//column 2
export const ImgWrap = styled.div`
    margin:auto;
 display:flex; 
 flex-direction:row;
 flex-wrap:wrap;
 justify-content:space-around;
 align-items:center;
 text-align:center;
 flex-basis:40%;
 margin-right:15%;
 padding-bottom:64px;

 @media screen and (max-width: 768px) {
        flex-basis:100%;
    }
`

//removing the width causes element to go wild
export const Img = styled.img`
    margin:auto;
   width:100%;
   height:100%;
   padding:16px;
 display:flex; 
 flex-wrap:wrap;
 
 @media screen and (max-width:720px) {
     flex-direction:column;
     align-items:center;

 }
`

export const BtnWrap = styled.div`
    margin:auto;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin-top:64px;

    @media screen and (max-width: 768px) {

        flex-basis:100%;
    }
`
export const Button = styled.button`    
    background-color: #fff; 
    border: 1px solid #fff;
    border-radius: 4px;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .3s ease;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`






