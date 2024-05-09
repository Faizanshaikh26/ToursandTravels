import React, { useRef } from 'react';
import '../Styles/Gallery.css'; // Import your CSS file

const Gallery = () => {
  const slideRef = useRef(null);

  const nextSlide = () => {
    const slide = slideRef.current;
    const items = slide.querySelectorAll('.item');
    slide.appendChild(items[0]);
  };

  const prevSlide = () => {
    const slide = slideRef.current;
    const items = slide.querySelectorAll('.item');
    slide.prepend(items[items.length - 1]);
  };

  return (
   <>
   
   <div className="gallery-cointainer">
    <h3 className='title'>Our Gallery</h3>
    <p className='sub-title'>Welcome to our gallery showcasing the adventures of our clients on their tours around the world. Explore the beauty of different destinations through their lens and get inspired to embark on your own journey of discovery. </p>
  
    <p></p>
   <div className="sub-container">
      <div className="slide" ref={slideRef}>

       
        <div className="item" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1689805586474-e59c51f38254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D)' }}>
          <div className="content">
            <div className="name">Switzerland</div>
            <div className="des">Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps.'</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522885147691-06d859633fb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmlubGFuZHxlbnwwfHwwfHx8MA%3D%3D)' }}>
          <div className="content">
            <div className="name">Finland</div>
            <div className="des">Finland is a Northern European nation bordering Sweden, Norway, and Russia. Its capital, Helsinki, occupies a peninsula and surrounding islands in the Baltic Sea</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1520475178495-a8d5b36f1782?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEljZWxhbmR8ZW58MHx8MHx8fDA%3D)' }}>
          <div className="content">
            <div className="name">Iceland</div>
            <div className="des">Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields.'</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXVzdHJhbGlhfGVufDB8fDB8fHww)' }}>
          <div className="content">
            <div className="name">Australia</div>
            <div className="des">Australia is a country, and continent, surrounded by the Indian and Pacific oceans. Its major cities – Sydney, Brisbane, Melbourne, Perth, Adelaide  are coastal.</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1673452731692-d06dc66f6468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5vcndheXxlbnwwfHwwfHx8MA%3D%3D))' }}>
          <div className="content">
            <div className="name">Norway</div>
            <div className="des">Norway is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords.</div>
            <button>See More</button>
          </div>
        </div>
      
      </div>
      <div className="button">
        <button className="prev" onClick={prevSlide}><i className="fa-solid fa-arrow-left"></i></button>
        <button className="next" onClick={nextSlide}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
   </div>
   </>
  );
}

export default Gallery;
