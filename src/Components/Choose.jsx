import React from 'react'
import '../Styles/Choose.css'


function Choose() {

  
  return (
    <>
    
    <section className="display__container" data-aos="slide-up" id='choose'>
      <div className="section__container">
        <h2 className="section__title">Why Choose Us</h2>
        <p className="section__subtitle">
          The gladdest moment in human life, is a departure into unknown lands.
        </p>
        <div className="display__grid">
          <div className="display__card grid-1">
            <img src="https://plus.unsplash.com/premium_photo-1661636737716-aecafc3bdb4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG91cnMlMjBhbmQlMjB0cmF2ZWxzfGVufDB8fDB8fHww" alt="grid" />
          </div>
          <div className="display__card">
          <i className="fa-solid fa-earth-americas"></i>
            <h4>Passionate Travel</h4>
            <p>Fuel your passion for adventure and discover new horizons</p>
          </div>
          <div className="display__card">
            <img src="https://plus.unsplash.com/premium_photo-1679088033235-3c029d36bd04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHRvdXJzJTIwYW5kJTIwdHJhdmVsc3xlbnwwfHwwfHx8MA%3D%3D" alt="grid" />
          </div>
          <div className="display__card">
            <img src="https://plus.unsplash.com/premium_photo-1664358190246-60cf5076e833?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRvdXJzJTIwYW5kJTIwdHJhdmVsc3xlbnwwfHwwfHx8MA%3D%3D" alt="grid" />
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