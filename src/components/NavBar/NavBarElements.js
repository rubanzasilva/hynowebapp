import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
//import {NavLink as LinkNav} from 'react-router-dom';

export const Nav = styled.nav`
 background:#000;
 height: 100px;
 margin-top:10px;
 display:flex;
 justify-content:space-between;
 align-items:center;
 font-size: 17px;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;
 position:sticky;
 top:0;
 cursor:pointer;
 

 @media screen and (max-width:960px) {
     transition: 0.8s all ease;
 }
`

export const NavBarContainer = styled.div`
 display:flex;
 justify-content:space-between;
 height:80px;
 z-index:1;
 width:100%;
 padding: 0 24px;
 max-width:1200px;
`


export const NavLogo = styled(LinkR)`
 color:red;
 justify-self:flex-start;
 cursor:pointer;
 font-size:1.5rem;
 display:flex;
 align-items:center;
 font-weight:bold;
 text-decoration:none;
`


export const MobileIcon = styled.div`
 display:none;

 @media screen and (max-width:780px) {
     display:block;
     position:absolute;
     top:0;
     right:0;
     transform: translate(-100%,60%);
     font-size:1.8rem;
     cursor:pointer;
     color:#fff;
 }
`

export const NavMenu = styled.ul`
 display:flex;
 align-items:center;
 list-style:none;
 text-align:center;
 ${'' /* margin-right:-22px; */}
 align-items:stretch;
 justify-content:space-between;

 @media screen and (max-width:760px) {
     display:none;
 }
`

export const NavItem = styled.li`
 height:80px;
`

//to change the color of the links in the navbar
export const NavLinks = styled(LinkR)`
 color:#fff;
 font-size:14px;
 display:flex;
 align-items:center;
 text-decoration:none;
 padding:0 24px;
 height:100%;
 cursor:pointer;

 &:visited {
    color:blurywood;
}

&:hover {
    color:red;
    border-bottom: 2px solid red;
    
}

&:active {
    border-bottom: 2px solid green;
    color:blue;
}




`

export const NavBtn = styled.nav`
 display:flex;
 align-items:center;


 @media screen and (max-width:768px) {
     display:none;
 }
`

export const NavBtnLink = styled(LinkR)`
border-radius:50px;
background:#fff;
white-space:nowrap;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;
 
 &:hover {
     transition: all 0.2s ease-in-out;
     border-bottom: 2px solid green;

 }
`