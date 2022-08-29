import styled from "styled-components";

// export const GridContainer = styled.div`
//  height:800px;
//  width:1200px;
//  display:grid;
// `
export const GridWrapper = styled.ul`
 ${'' /* display:grid;
 grid-template-columns:1fr 1fr;
 background-color:#000;
 height:100%;
 width:100%;
 list-style-type:none;
 padding-left:156px; */}
 display:grid;
 grid-template-columns:1fr 1fr;
 background-color:#000;
 list-style-type:none;
 margin:56px;
 

@media screen and (max-width:960px) {
    ${'' /* grid-template-columns:1fr;
    padding:10px;
    align-items:Center;
    text-align:Center; */}
    grid-template-columns:1fr;
    align-items:Center;
    text-align:Center;
    margin:16px;
}
`


export const GridItem = styled.li`
background-color:#000;
width:96%;
height:90%;
text-align:center;
padding:64px;

`

export const SectionText = styled.div`
    margin:auto;
 line-height:75px;
 display:flex;
 flex-direction:column;
 height:100%;
 width:100%;
 text-align:center;
 align-content:right;


 @media screen and (max-width:780px) {
     margin-top:16px;
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
 padding-left:0px;
 left:0;
 padding-bottom:64px;
 height:600px;
 width:600px;

 @media screen and (max-width: 968px) {
        flex-basis:100%;
        padding:0px;
        margin:0px;
        margin-top:-64px;
        margin-bottom:64px;
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