import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from '../components/About'
import Team from '../components/Team'
import Tracks from '../components/Tracks'

function Homepage() {
  return (
    <div>
        <Nav/>
        <Hero/>
        <Tracks/>
        <About/>
        <Team />
        <Footer/>
    </div>
  )
}

export default Homepage