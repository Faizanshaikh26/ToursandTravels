import React from 'react'
import '../Styles/Expertice.css'
import { ExperticeData } from '../HardcoreData/Expertice'

function Expertice() {
  
  return (
    <>
    <div className="Expertice-cointainer">
        <h3>Our Expertice</h3>

 <div className="product">
{
  ExperticeData.map((data)=>{
    return (
      <>
       <div id="container">
      <div className="product-details">
        <h1>{data.place_name}</h1>
        <span className="hint-star star">
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </span>
        <p className="information">"{data.information}".</p>
        <div className="control">
          <button className="btn">
            <span className="price">{data.price}</span>
            <span className="shopping-cart">
            <i className="fa-solid fa-bookmark"></i>
             </span>
            <span className="buy">Book now</span>
          </button>
        </div>
      </div>
      <div className="product-image">
        <img src={data.image} alt="" />
        <div className="info">
          <h2> Description</h2>
          <ul>
            <li><strong>Height : </strong>5 Ft </li>
            <li><strong>Shade : </strong>Olive green</li>
            <li><strong>Decoration: </strong>balls and bells</li>
            <li><strong>Material: </strong>Eco-Friendly</li>
          </ul>
        </div>
      </div>
    </div>
      </>
    )
  })
}

    </div>
 </div>
    
    
    </>
  )
}

export default Expertice