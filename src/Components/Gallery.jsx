import React from 'react';
import '../Styles/Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-cointainer">
      <h3 className="title">Our Gallery</h3>
      <p className="subtitle">Memorable moments captured by our talented photographers</p>
      <div className="gallery">
        <div className="gallery__column">
          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" className="gallery__image"/>
              <figcaption className="gallery__caption">Portrait by Jessica Felicio</figcaption>
            </figure>
          </div>

          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="Portrait by Oladimeji Odunsi" className="gallery__image"/>
              <figcaption className="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
            </figure>
          </div>

          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src="https://source.unsplash.com/VLPLo-GtrIE/300x300" alt="Portrait by Alex Perez" className="gallery__image"/>
              <figcaption className="gallery__caption">Portrait by Alex Perez</figcaption>
            </figure>
          </div>
        </div>

        <div className="gallery__column">
          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src="https://source.unsplash.com/A9rQeI2AdR4/300x300" alt="Portrait by Hikiapp" className="gallery__image"/>
              <figcaption className="gallery__caption">Portrait by Hikiapp</figcaption>
            </figure>
          </div>
          
          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src="https://source.unsplash.com/dnL6ZIpht2s/300x300" alt="Portrait by Ivana Cajina" className="gallery__image"/>
              <figcaption className="gallery__caption">Portrait by Ivana Cajina</figcaption>
            </figure>
          </div>

          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src="https://source.unsplash.com/vp9mRauo68c/300x500" alt="Portrait by Jeffery Erhunse" className="gallery__image"/>
              <figcaption className="gallery__caption">Portrait by Jeffery Erhunse</figcaption>
            </figure>
          </div>
        </div>

        <div className="gallery__column">
          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src="https://source.unsplash.com/Xm9-vA_bhm0/300x500" alt="Portrait by Mari Lezhava" className="gallery__image"/>
              <figcaption className="gallery__caption">Portrait by Mari Lezhava</figcaption>
            </figure>
          </div>
          
          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src="https://source.unsplash.com/NTjSR3zYpsY/300x300" alt="Portrait by Ethan Haddox" className="gallery__image"/>
              <figcaption className="gallery__caption">Portrait by Ethan Haddox</figcaption>
            </figure>
          </div>

          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src="https://source.unsplash.com/2JH8d3ChNec/300x300" alt="Portrait by Amir Geshani" className="gallery__image"/>
              <figcaption className="gallery__caption">Portrait by Amir Geshani</figcaption>
            </figure>
          </div>
        </div>

        <div className="gallery__column">
          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src="https://source.unsplash.com/sh3LSNbyj7k/300x300" alt="Portrait by Tyler Nix" className="gallery__image"/>
              <figcaption className="gallery__caption">Portrait by Tyler Nix</figcaption>
            </figure>
          </div>

          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src="https://source.unsplash.com/OQd9zONSx7s/300x300" alt="Portrait by Jasmin Chew" className="gallery__image"/>
              <figcaption className="gallery__caption">Portrait by Jasmin Chew</figcaption>
            </figure>
          </div>
          
          <div className="gallery__link">
            <figure className="gallery__thumb">
              <img src="https://source.unsplash.com/XZkEhowjx8k/300x500" alt="Portrait by Dima DallAcqua" className="gallery__image"/>
              <figcaption className="gallery__caption">Portrait by Dima DallAcqua</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
