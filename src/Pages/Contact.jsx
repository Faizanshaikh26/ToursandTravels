import React from 'react'
import '../Styles/Contact.css'
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <>
    
    <div className="contact">
  
    <div className="form-details">
        <form>
        <Link to="/"><i className="fa-solid fa-arrow-left"></i></Link>
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            
          />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            
            
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            
            
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Your Message"
            name="message"
          
            
          ></textarea>
          <button>Submit</button>
        </form>

        <div className="people">
          <div>
            <img src=""  />
            <p>
              <span>Jhone Doe</span> Senior Marketing Manager <br />
              Phone : +0099886655 <br />
              Email: ex@gmail.com
            </p>
          </div>
          <div>
            <img src=""  />
            <p>
              <span>Willaim Smithe</span> Senior Marketing Manager <br />
              Phone : +0099886655 <br />
              Email: ex@gmail.com
            </p>
          </div>
          <div>
            <img src=""  />
            <p>
              <span>kevin Peter</span> Senior Marketing Manager <br />
              Phone : +0099886655 <br />
              Email: ex@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact