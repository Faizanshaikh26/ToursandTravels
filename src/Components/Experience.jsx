import React from 'react'
import "../Styles/Choose.css"
function Experience() {

  return (
    <>
     <section className="display__container" data-aos="fade-up-right">
      <div className="section__container">
        <h2 className="section__title">Our Expereince</h2>
        <p className="section__subtitle">
       ""Life is an experiment in which you may fail or succeed. Explore more, expect least." 
        </p>
        <div className="display__grid">
          <div className="display__card grid-1">
            <img src="https://plus.unsplash.com/premium_photo-1664908396244-55c2509ee26a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG91cnMlMjBhbmQlMjB0cmF2ZWwlMjBleHBlcmVpbmNlfGVufDB8fDB8fHww" alt="grid" />
          </div>
          <div className="display__card">
          <i className="fa-solid fa-plane"></i>
    <h4>Rich Experience</h4>
    <p>“The only source of knowledge is experience.</p>
          </div>
          <div className="display__card">
            <img src="https://images.unsplash.com/photo-1505164294036-5fad98506d20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHRvdXJzJTIwYW5kJTIwdHJhdmVsJTIwZXhwZXJlaW5jZXxlbnwwfHwwfHx8MA%3D%3D" alt="grid" />
          </div>
          <div className="display__card">
            <img src="https://plus.unsplash.com/premium_photo-1683141028915-523be058033f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHRvdXJzJTIwYW5kJTIwdHJhdmVsJTIwZXhwZXJlaW5jZXxlbnwwfHwwfHx8MA%3D%3D" alt="grid" />
          </div>
          <div className="display__card">
          <i className="fa-solid fa-globe"></i>
    <h4>Cultural Immersion</h4>
    <p>Immerse yourself in rich cultural experiences and traditions from around the globe</p>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Experience