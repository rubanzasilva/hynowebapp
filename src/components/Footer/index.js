import React from 'react';
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,WebsiteRights} from './FooterElements';
import {FaFacebook,FaInstagram,FaWhatsapp,FaTwitter,FaTiktok} from 'react-icons/fa';
const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap>

            <FooterLinksContainer>
                <FooterLinksWrapper>

                 <FooterLinkItems>

                     <FooterLinkTitle>About Hypno</FooterLinkTitle>
   
                     <FooterLink to="/about-us">Career</FooterLink>
                     <FooterLink to="https://www.jumia.ug/hypno-energy-drink-250-ml-can-32244325.html">Shop Online</FooterLink>
                     <FooterLink to="/about-us">Privacy Policy</FooterLink>
                     <FooterLink to="/about-us">Terms & Conditions</FooterLink>

                
                 </FooterLinkItems>

                 {/* <FooterLinkItems>

                     <FooterLinkTitle>BECOME A WHOLESALER</FooterLinkTitle>
   
                     <FooterLink to="/about-us">Contact Us</FooterLink>
                     <FooterLink to="/about-us">Find Wholesaler</FooterLink>
                     <FooterLink to="/about-us">Become Distributor</FooterLink>
                
                 </FooterLinkItems> */}

 
                </FooterLinksWrapper>

{/* second footer link wrapper */}
                <FooterLinksWrapper>

                <FooterLinkItems>

                     <FooterLinkTitle>About Hypno</FooterLinkTitle>
   
                     <FooterLink to="/about-us">Contact Us</FooterLink>
                     <FooterLink to="/about-us">Find Wholesaler</FooterLink>
                     <FooterLink to="/about-us">Become Distributor</FooterLink>
                     <FooterLink to="/about-us">Map</FooterLink>

                
                 </FooterLinkItems>

                 

                </FooterLinksWrapper>

            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/"> Hypno Energy By Heritage </SocialLogo>
                    <WebsiteRights>HYPNO ENERGY DRINK © {new Date().getFullYear()} - 
                        All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/hypnoenergyug" target="_blank" arial-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/hypnoenergyug/" target="_blank" arial-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="https://twitter.com/hypnoug" target="_blank" arial-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.tiktok.com/@hypnoug" target="_blank" arial-label="tiktok">
                            <FaTiktok/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>

        </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer