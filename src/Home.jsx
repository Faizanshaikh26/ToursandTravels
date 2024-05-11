import React from 'react'
import Navbar from "./Components/Navbar"
import Hero from './Components/Hero'
import Expertice from './Components/Expertice'
import Service from './Components/Service'
import Choose from './Components/Choose'
import About from './Components/About'
import Experience from './Components/Experience'
import Slider from './Components/Slider'
import Gallery from './Components/Gallery'
import Testonomials from './Components/Testonomials'
import Footer from './Components/Footer'







function Home() {
  return (
   <>
   <Navbar/>
<Slider/>
   {/* <Hero/> */}
   <Expertice/>
   <Service/>
   <Choose/>
   <About/>
   <Experience/>
   <Gallery/>
   <Testonomials/>
   <Footer/>
  
   
   
   </>
  )
}

export default Home