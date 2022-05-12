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
                     <FooterLinkTitle>ABOUT HYPNO</FooterLinkTitle>
                     <FooterLink to="/about-us">History</FooterLink>
                     <FooterLink to="/about-us">Our Product</FooterLink>
                     <FooterLink to="/about-us">Testimonials</FooterLink>
                     <FooterLink to="/about-us">Terms and Conditions</FooterLink>
                 </FooterLinkItems>

                 <FooterLinkItems>

                     <FooterLinkTitle>BECOME A WHOLESALER</FooterLinkTitle>
   
                     <FooterLink to="/about-us">Contact Us</FooterLink>
                     <FooterLink to="/about-us">Find a wholesaler near you</FooterLink>
                     <FooterLink to="/about-us">Roasted Coffee</FooterLink>
                     <FooterLink to="/about-us">Roastery</FooterLink>
                     

                 </FooterLinkItems>

                </FooterLinksWrapper>

{/* second footer link wrapper */}
                <FooterLinksWrapper>

                 <FooterLinkItems>

                     <FooterLinkTitle>INGREDIENTS</FooterLinkTitle>
   
                     <FooterLink to="/about-us">Caffeine</FooterLink>
                     <FooterLink to="/about-us">B Group vitamins</FooterLink>
                     <FooterLink to="/about-us">Sugar</FooterLink>
                     <FooterLink to="/about-us">Taurine</FooterLink>
                     

                 </FooterLinkItems>

                 <FooterLinkItems>

                     <FooterLinkTitle>REACH US</FooterLinkTitle>
   
                     <FooterLink to="/about-us">Contact us</FooterLink>
                     <FooterLink to="/about-us">Blog</FooterLink>
                     <FooterLink to="/about-us">Hypno Merchandise</FooterLink>
                     <FooterLink to="/about-us">Careers</FooterLink>
                     

                 </FooterLinkItems>

                </FooterLinksWrapper>

            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/"> HYPNO ENERGY BY HERITAGE </SocialLogo>
                    <WebsiteRights>HYPNO © {new Date().getFullYear()}
                    All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/hypnoug" target="_blank" arial-label="Facebook">
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