import React, { useEffect } from 'react';
import '../Styles/Gallery.css';
import { PhotosData } from '../HardcoreData/PhotosData';
import Aos from 'aos'

const Gallery = () => {
  const columns = 4;
  const photoColumns = Array.from({ length: columns }, () => []);

  PhotosData.forEach((photo, index) => {
    photoColumns[index % columns].push(photo);
  });
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className="gallery-cointainer" data-aos="fade-up"
    data-aos-duration="3000">
      <h3 className="title">Our Gallery</h3>
      <p className="subtitle">Memorable moments captured by our talented photographers</p>
      <div className="gallery">
        {photoColumns.map((column, columnIndex) => (
          <div className="gallery__column" key={columnIndex}>
            {column.map((photo) => (
              <div className="gallery__link" key={photo.id}>
                <figure className="gallery__thumb">
                  <img
                    src={photo.image}
                    alt={photo.caption}
                    className="gallery__image"
                  />
                  <figcaption className="gallery__caption">
                    {photo.caption}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
