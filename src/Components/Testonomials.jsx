import React from 'react';
import '../Styles/Testonomials.css';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const isAuthenticated = localStorage.getItem("travel-token");

function Testonomials() {
  const handleContactClick = () => {
    if (!isAuthenticated) {
      toast.error("Please login to Contact.");
      
      
    }
  };
  return (
    <>
      <div className="testonomials" id='testnomial' data-aos="fade-right">
        <h3 className="title">Testimonials</h3>
        <p className="subtitle">What Our Clients Think About Us..</p>
        <div className="parent-box">
          <div className="test-box">
            <div className="image-box">
              <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww" alt="Client 1" />
            </div>
            <div className="content">
              <p>"The trip was absolutely fantastic! The arrangements were perfect, and the experience was beyond my expectations. I highly recommend this service to anyone looking for a memorable vacation."</p>
              <h5>Jane Smith</h5>
            </div>
          </div>
          <div className="test-box">
            <div className="image-box">
              <img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww" alt="Client 2" />
            </div>
            <div className="content">
              <p>"Exceptional service and attention to detail. From start to finish, everything was handled with professionalism and care. I had a wonderful time and will definitely be booking again."</p>
              <h5>Michael Brown</h5>
            </div>
          </div>
          <div className="test-box">
            <div className="image-box">
              <img src="https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW58ZW58MHx8MHx8fDA%3D" alt="Client 3" />
            </div>
            <div className="content">
              <p>"A truly remarkable experience! The team went above and beyond to ensure my trip was flawless. I felt well taken care of, and the destinations were stunning. Highly recommended!"</p>
              <h5>Emily Davis</h5>
            </div>
          </div>
        </div>
        <div className="feedback" onClick={handleContactClick}>
          <Link to='/contact'>
            <button className="button">Leave Us a Feedback</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Testonomials;
