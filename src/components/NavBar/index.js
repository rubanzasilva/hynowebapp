import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav,NavBarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavBarElements';
import {Button ,Typography } from "antd";
import "antd/dist/antd.css";

const { Title , Text } = Typography;

const NavBar = ({toggle}) => {
    return (
        <>
          <Nav>
              <NavBarContainer>
                  <NavLogo to='/'>
                  <img src={require('../../Images/hpyno-logo.png')} alt="logo" style={{width:"100px"}}/>
                      {/* HYPNO */}
                  </NavLogo>

                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>

                  <NavMenu>
                      <NavItem>
                          <NavLinks to="/About ">ABOUT HYPNO ENERGY</NavLinks>
                      </NavItem>
                      
                   

                      <NavItem>
                          <NavLinks to="/Shop">EVENTS</NavLinks>
                      </NavItem>

                      <NavItem>
                          <NavLinks to="/Cart">FIND WHOLESALERS</NavLinks>
                      </NavItem>

                      <NavItem>
                          <NavLinks to="/Cart">CONTACT US</NavLinks>
                      </NavItem>


                  </NavMenu>

                  <NavBtn>
                      {/* <NavBtnLink to="/signin"> SIGN IN </NavBtnLink> */}
                      <Button type="link" size="large" style={{color:"red",
                       borderRadius:"6px" }}>SHOP NOW</Button>
                  </NavBtn>
                  
              </NavBarContainer>
          </Nav>
            
        </>
    )
}

export default NavBar