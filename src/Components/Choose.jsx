import React from 'react'
import '../Styles/Choose.css'

function Choose() {
  return (
    <>
    
    <section className="display__container">
      <div className="section__container">
        <h2 className="section__title">Why Choose Us</h2>
        <p className="section__subtitle">
          The gladdest moment in human life, is a departure into unknown lands.
        </p>
        <div className="display__grid">
          <div className="display__card grid-1">
            <img src="src/Images/1.jpg" alt="grid" />
          </div>
          <div className="display__card">
          <i className="fa-solid fa-earth-americas"></i>
            <h4>Passionate Travel</h4>
            <p>Fuel your passion for adventure and discover new horizons</p>
          </div>
          <div className="display__card">
            <img src="src/Images/2.jpg" alt="grid" />
          </div>
          <div className="display__card">
            <img src="src/Images/4.jpg" alt="grid" />
          </div>
          <div className="display__card">
          <i className="fa-solid fa-location-dot"></i>
            <h4>Beautiful Places</h4>
            <p>Uncover the world's most breathtakingly beautiful places</p>
          </div>
        </div>
      </div>
    </section>


    
    </>
  )
}

export default Choose