import React from 'react'
import '../Styles/Hero.css'
// import Heroimg from "../Images/12.jpg"

function Hero() {
  return (
    <>
    <div className="hero">
        {/* <img src={Heroimg} alt="" /> */}

        <div className="hero-text">
            <h1>Your Journey Your Story</h1>
            <p>Choose Your Favourite Destination.</p>
           <button> <a href="/">Travel Plan</a></button>
        </div>
    </div>
    </>
  )
}

export default Hero