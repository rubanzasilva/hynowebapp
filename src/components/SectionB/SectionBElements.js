// import styled from "styled-components";


// export const GridWrapper = styled.ul`
//  display:grid;
//  grid-template-columns:1fr 1fr;
//  background-color:#000;
//  list-style-type:none;
//  margin:56px;
 
// @media screen and (max-width:960px) {
//     grid-template-columns:1fr;
//     align-items:Center;
//     text-align:Center;
//     margin:16px;
// }
// `


// export const GridItem = styled.li`
// background-color:#000;
// height:auto;
// text-align:center;
// ${'' /* padding:64px; */}

// `


// //column 2
// export const ImgWrap = styled.div`
//     margin:auto;
//  display:flex; 
//  flex-direction:row;
//  flex-wrap:wrap;
//  justify-content:space-around;
//  align-items:center;
//  text-align:center;


//  @media screen and (max-width: 968px) {
//     flex-basis:100%;
//         padding:0px;
//         margin:0px;
//         margin-top:-64px;
//         margin-bottom:64px;
//     }
// `

// //removing the width causes element to go wild
// export const Img = styled.img`
//     margin:auto;
//    width:100%;
//    height:100%;
//    object-fit:contain;
//    left:0;
//  display:flex; 
//  flex-wrap:wrap;

 
//  @media screen and (max-width:720px) {
//      flex-direction:column;
//      align-items:center;
//      margin-top:0;

//  }
// `

// export const BtnWrap = styled.div`
//     margin:auto;
//     display:flex;
//     flex-direction:row;
//     flex-wrap:wrap;
//     justify-content:center;
//     align-items:center;
//     text-align:center;
//     ${'' /* margin-top:64px; */}
    
//     @media screen and (max-width: 768px) {
//         flex-basis:100%;
//     }
// `


import styled from "styled-components";


export const GridWrapper = styled.ul`
 display:grid;
 grid-template-columns:1fr 1fr;
 background-color:#000;
 list-style-type:none;
 margin:56px;
 ${'' /* padding:56px; */}
 
@media screen and (max-width:960px) {
    grid-template-columns:1fr;
    align-items:Center;
    text-align:Center;
    margin:16px;
    padding:56px 16px 56px 16px;
   
}
`

export const GridItem = styled.li`
background-color:#000;
text-align:center;

& .GridItemOne{
    

    @media screen and (max-width:960px) {
    }
}

& .GridItemTwo{
    @media screen and (max-width:960px) {
    }
}

`


// //column 2
// export const ImgWrap = styled.div`
//     margin:auto;
//  display:flex; 
//  flex-direction:row;
//  flex-wrap:wrap;
//  justify-content:space-around;
//  align-items:center;
//  text-align:center;


//  @media screen and (max-width: 968px) {
//     }
// `

export const ImgWrap = styled.div`
 margin:auto;
 display:flex; 
 flex-direction:row;
 flex-wrap:wrap;
 justify-content:space-around;
 align-items:center;
 text-align:center;

 @media screen and (max-width: 968px) {
        flex-basis:100%;
        margin-top:64px;
        margin-bottom:64px;
    }
`

//removing the width causes element to go wild
export const Img = styled.img`
    margin:auto;
   width:100%;
   height:100%;
   object-fit:contain;
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