import React from 'react'
import Footer from '../components/Footer'
import HeroCategory from '../components/Hero'
import NavBar from '../components/NavBar'
//import Community from '../components/CommunityActivites'
//import Community from '../components/CommunityActivities'

const About = () => {
    return (
        <div className='homeWrapper'>
        <NavBar/>
        <h1>ABOUT PAGE</h1>
        <HeroCategory/>
        <Footer/>
        </div>
    )
}

export default About
