import React, {useState} from 'react'
import ContactTitleA from '../components/ContactTitle';
import { homeObjW } from '../components/ContactTitle/data';
import ContactHypno from '../components/ContactUs';
import { homeObjA } from '../components/ContactUs/data';
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

const ContactUs = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <div className='contact-us-page'>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle} />
        <ContactTitleA {...homeObjW}/>
        <ContactHypno {...homeObjA}/>
    </div>
  )
}

export default ContactUs