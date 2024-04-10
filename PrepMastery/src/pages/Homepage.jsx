import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from '../components/About'
import Team from '../components/Team'
import Tracks from '../components/Tracks'
import 'react-toastify/dist/ReactToastify.css'
import Contact from '../components/Contact'

function Homepage() {
  
  return (
    <div className='bg-yello'>
        <Nav/>
        <Hero/>
        <Tracks/>
        <About/>
        <Team />
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Homepage