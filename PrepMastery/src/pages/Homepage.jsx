import React ,{useEffect} from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from '../components/About'
import Team from '../components/Team'
import Tracks from '../components/Tracks'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux';

function Homepage() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Welcome back! You have logged in successfully.");
    }
  }, [isAuthenticated]); // Depend on isAuthenticated

  
  return (
    <div>
        <Nav/>
        <ToastContainer autoClose={1000}/>
        <Hero/>
        <Tracks/>
        <About/>
        <Team />
        <Footer/>
    </div>
  )
}

export default Homepage