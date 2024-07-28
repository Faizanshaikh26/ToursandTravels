import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Slider.css';
import { galleryData } from '../HardcoreData/Gallery';



const Slider = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const timeRef = useRef(null);

  const [timeRunning, setTimeRunning] = useState(3000);
  const [timeAutoNext, setTimeAutoNext] = useState(7000);

  useEffect(() => {
    const nextDom = nextRef.current;
    const prevDom = prevRef.current;
    const carouselDom = carouselRef.current;
    const sliderDom = sliderRef.current;
    const thumbnailBorderDom = thumbnailRef.current;
    const timeDom = timeRef.current;

    thumbnailBorderDom.appendChild(thumbnailBorderDom.querySelectorAll('.item')[0]);

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    const showSlider = (type) => {
      const sliderItemsDom = sliderDom.querySelectorAll('.item');
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

      if (type === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    nextDom.onclick = () => {
      showSlider('next');
    };

    prevDom.onclick = () => {
      showSlider('prev');
    };

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, [timeAutoNext, timeRunning]);



  return (
    <div className="carousel" ref={carouselRef} data-aos="fade-down">
      <div className="list" ref={sliderRef}>
      {
        galleryData.map((data)=>{
          return (
            <>
            <div className="item">
                <img src={data.image}/> 
                <div className="content">
                    <div className="author">{data.author}</div>
                    <div className="title">{data.title}</div>
                    <div className="topic">{data.topic}</div>
                    <div className="des">
                
                       {data.description}
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        {/* <button>SUBSCRIBE</button> */}
                    </div>
                </div>
            </div>
            
            </>
          )
        })
      }
    
      </div>
      <div className="thumbnail" ref={thumbnailRef}>
      {
        galleryData.map((data)=>{
          return (<>
          
          <div className="item">
                <img src={data.image}/>
                <div className="content">
                    <div className="title">
                        {data.name}
                    </div>
                    {/* <div className="description">
                        {data.description}
                    </div> */}
                </div>
            </div>
          </>)
        })
      }
    
      

      </div>
      <div className="arrows">
        <button id="prev" ref={prevRef}>{'<'}</button>
        <button id="next" ref={nextRef}>{'>'}</button>
      </div>
      <div className="time" ref={timeRef}></div>
    </div>
  );
};

export default Slider;
