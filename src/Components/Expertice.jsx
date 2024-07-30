import React, { useEffect } from 'react';
import '../Styles/Expertice.css';
import { ExperticeData } from '../HardcoreData/Expertice';
import Aos from 'aos';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Expertice() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("travel-token");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleBookNowClick = () => {
    if (!isAuthenticated) {
      toast.error("Please login to book a tour.");
      navigate('/login'); // Redirect to the login page
    }
  };

  return (
    <>
      <div className="Expertice-cointainer" id='expertice'>
        <h3>Our Expertise</h3>
        <div className="product" data-aos="zoom-in">
          {ExperticeData.map((data) => (
            <div id="container" key={data.place_name}>
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
                  <button className="btn" onClick={handleBookNowClick}>
                    <span className="price">{data.price}</span>
                    <span className="shopping-cart">
                      <i className="fa-solid fa-bookmark"></i>
                    </span>
                    <Link to='/booking'><span className="buy">Book now</span></Link>
                  </button>
                </div>
              </div>
              <div className="product-image">
                <img src={data.image} alt="" />
                <div className="info">
                  <h2>Description</h2>
                  <ul>
                    <li><strong>Height : </strong>5 Ft</li>
                    <li><strong>Shade : </strong>Olive green</li>
                    <li><strong>Decoration: </strong>balls and bells</li>
                    <li><strong>Material: </strong>Eco-Friendly</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Expertice;
