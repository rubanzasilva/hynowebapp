import React, {useState}from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroCategory from '../components/Hero';
//import CommunityActivites from '../components/CommunityActivites';
import Ingredients from '../components/Ingredients';
import { homeObjA, homeObjB, homeObjC } from '../components/SectionA/data';
import {homeObjX} from '../components/Hero/data';
import { homeObjY } from '../components/Ingredients/data';
import Section from '../components/SectionA';
import SectionB from '../components/SectionB';
import { homeObjZ } from '../components/SectionB/data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className='homeWrapper'>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <HeroCategory {...homeObjX}/>
        <Section {...homeObjA} />
        <SectionB {...homeObjZ}/>
        <Ingredients {...homeObjY} />
        <Section {...homeObjB} />
        {/* <Section {...homeObjC} /> */}

        

        <Footer/>
            
        </div>
    )
}

export default Home
