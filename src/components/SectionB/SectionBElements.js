import styled from "styled-components";

// export const GridContainer = styled.div`
//  height:800px;
//  width:1200px;
//  display:grid;
// `
export const GridWrapper = styled.ul`
 display:grid;
 grid-template-columns:1fr 1fr;
 background-color:#000;
 list-style-type:none;
 margin:56px;
 
@media screen and (max-width:960px) {
    grid-template-columns:1fr;
    align-items:Center;
    text-align:Center;
    margin:16px;
}
`


export const GridItem = styled.li`
background-color:#000;
text-align:center;

`

export const SectionText = styled.div`
    margin:auto;
 line-height:75px;
 display:flex;
 flex-direction:column;
 text-align:center;
 align-content:center;
 padding:64px;


 @media screen and (max-width:780px) {
     margin:16px 0 16px 0;
     padding:32px;

 }

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


 @media screen and (max-width: 968px) {
    }
`

//removing the width causes element to go wild
export const Img = styled.img`
    margin:auto;
   width:100%;
   height:100%;
   object-fit:contain;
   left:0;
 display:flex; 
 flex-wrap:wrap;

 
 @media screen and (max-width:720px) {
     flex-direction:column;
     align-items:center;
     margin-top:0;

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
    
    @media screen and (max-width: 768px) {
        flex-basis:100%;
    }
`