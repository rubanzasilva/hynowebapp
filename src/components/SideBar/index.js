import React from 'react'
//import {SideBarContainer,Icon,CloseIcon, SideBtnWrap} from './SideBarElements';
import {SideBarContainer, Icon ,CloseIcon,SideBarWrapper,SideBarMenu,SideBarLink,SideBtnWrap,SideBarRoute} from './SideBarElements'


const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="/About" onClick={toggle}>
                    About HYPNO
                    </SideBarLink>
                    
                    <SideBarLink to="https://www.jumia.ug/hypno-energy-drink-250-ml-can-32244325.html" onClick={toggle}>
                    Shop
                    </SideBarLink>

                    <SideBarLink to="https://www.jumia.ug/hypno-energy-drink-250-ml-can-32244325.html" onClick={toggle}>
                    Cart
                    </SideBarLink>

                    <SideBtnWrap>
                        <SideBarRoute to="/signup">
                            Contact Us
                        </SideBarRoute>
                    </SideBtnWrap>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>

    );
};

export default SideBar