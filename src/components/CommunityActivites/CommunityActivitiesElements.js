import styled from "styled-components";


export const CommunityContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-basis:100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: black;
    margin: 10px;

    @media screen and (max-width: 768px) {
        height: auto;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
    }


`
export const CommunityContent = styled.div`
    display:flex; 
    flex-direction:row;
    flex-wrap:wrap;
    width:98%;
    padding:16px;
    margin:auto;
    justify-content:space-around;
    align-items:center;
    text-align:center;

 }

    
`



export const CommunityIcon = styled.div`
    margin:auto;
 display:flex; 
 flex-direction:row;
 flex-wrap:wrap;
 justify-content:space-around;
 align-items:center;
 text-align:center;
 flex-basis:40%;

 @media screen and (max-width: 768px) {
        flex-basis:100%;
    }
`

//removing the width causes element to go wild
export const CommunityImageCard = styled.img`
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





