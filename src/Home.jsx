import React from 'react'
import Navbar from "./Components/Navbar"
import Hero from './Components/Hero'
import Expertice from './Components/Expertice'
import Service from './Components/Service'
import Choose from './Components/Choose'
import About from './Components/About'
import Experience from './Components/Experience'
import Gallery from './Components/Gallery'



function Home() {
  return (
   <>
   <Navbar/>
   <Gallery/>
   {/* <Hero/> */}
   <Expertice/>
   <Service/>
   <Choose/>
   <About/>
   <Experience/>
   
   </>
  )
}

export default Home