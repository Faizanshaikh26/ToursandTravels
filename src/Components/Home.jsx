import React from 'react'
import Navbar from "../Components/Navbar"
import Hero from './Hero'
import Expertice from './Expertice'
import Service from './Service'
// import About from './About'


function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Expertice/>
   {/* <About/> */}
   <Service/>
   </>
  )
}

export default Home