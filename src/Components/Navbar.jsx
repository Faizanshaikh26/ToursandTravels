import React, { useState } from "react"
import '../Styles/Navbar.css'
function Navbar() {
  const [Openmenu, setOpenmenu] = useState(false);
  const Menuopen = () => {
    setOpenmenu(!Openmenu);
  };
  return (
    <>
    
    <div className="Header">
      <a href="/">
        <img src="" alt="Logo" />
      </a>
      <div>
        <ul id="Navbar" className={Openmenu ? "Active-Menu" : ""}>
          <i
            id="X-Bar"
            onClick={Menuopen}
            className="fa-sharp  fa-solid fa-xmark"
          ></i>
          <li>
            <a  href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        
          
         
        </ul>
      </div>

      <div id="Mobile">
        
        <i
          id="Bar"
          className="fa-sharp  fa-solid fa-bars"
          onClick={Menuopen}
        ></i>
      </div>
    </div>

  
   
    
    </>
  )
}

export default Navbar