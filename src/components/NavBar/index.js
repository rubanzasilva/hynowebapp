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
                          <NavLinks to="/About ">About Hypno Energy</NavLinks>
                      </NavItem>
                      
                   

                      <NavItem>
                          <NavLinks to="/Shop">Events</NavLinks>
                      </NavItem>

                      <NavItem>
                          <NavLinks to="/Cart">Become Distributor</NavLinks>
                      </NavItem>

                      <NavItem>
                          <NavLinks to="/contactUs">Contact Us</NavLinks>
                      </NavItem>


                  </NavMenu>

                  <NavBtn>
                      {/* <NavBtnLink to="/signin"> SIGN IN </NavBtnLink> */}
                      <Button type="link" size="large" href='https://www.jumia.ug/hypno-energy-drink-250-ml-can-32244325.html' style={{color:"red",
                       borderRadius:"6px" }}>Shop Now</Button>
                  </NavBtn>
                  
              </NavBarContainer>
          </Nav>
            
        </>
    )
}

export default NavBar