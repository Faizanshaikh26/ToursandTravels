import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <>
      <div className="about-cointainer">
        <h3 className="title">About us</h3>
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="about-des">
            <p>
              Welcome to Travel, where we transform ordinary journeys into
              extraordinary adventures.
            </p>
            <p>
              At Travel, we believe that traveling is more than just visiting
              new destinations; it's about immersing yourself in different
              cultures, creating lifelong memories, and discovering the beauty
              of the world around us.
            </p>
            <p>
              Our mission is to provide you with unforgettable travel
              experiences that enrich your life and broaden your horizons.
            </p>
          </div>
        </div>

       
      <div className="founder">
      <div className="title">
      <h3>Our Founder</h3>
      <div className="founder-container">
        <div className="card card0">
          <div className="border">
            <h2>Al Pacino</h2>
            <div className="icons">
              <i className="fa-brands fa-instagram favicon" aria-hidden="true"></i>
              <i className="fa-brands fa-youtube favicon" aria-hidden="true"></i>
              <i className="fa-brands fa-facebook favicon" aria-hidden="true"></i>
              <i className="fa-brands fa-twitter favicon" aria-hidden="true"></i>
              <i className="fa-brands fa-linkedin favicon" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="card card1">
          <div className="border">
            <h2>Ben Stiller</h2>
            <div className="icons">
              <i className="fa-brands fa-instagram favicon" aria-hidden="true"></i>
              <i className="fa-brands fa-youtube favicon" aria-hidden="true"></i>
              <i className="fa-brands fa-facebook favicon" aria-hidden="true"></i>
              <i className="fa-brands fa-twitter favicon" aria-hidden="true"></i>
              <i className="fa-brands fa-linkedin favicon" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="card card2">
          <div className="border">
            <h2>Patrick Stewart</h2>
            <div className="icons">
              <i className="fa-brands fa-instagram favicon" aria-hidden="true"></i>
              <i className="fa-brands fa-youtube favicon" aria-hidden="true"></i>
              <i className="fa-brands fa-facebook favicon" aria-hidden="true"></i>
              <i className="fa-brands fa-twitter favicon" aria-hidden="true"></i>
              <i className="fa-brands fa-linkedin favicon" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>



      </div>
    </>
  );
}

export default About;
