import React from 'react'
import Navbar from "./Components/Navbar"
import Hero from './Components/Hero'
import Expertice from './Components/Expertice'
import Service from './Components/Service'
import Choose from './Components/Choose'
import About from './Components/About'


function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Expertice/>
   <Service/>
   <Choose/>
   <About/>
   </>
  )
}

export default Home