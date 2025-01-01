

import React from 'react';

const Banner = () => {
    return (

        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/hm1kmNV/young-man-showing-approving-doing-positive-gesture-choosing-happy-smiley-face-icon-give-satisfaction.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/f41Mg1w/13862339-5359387.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/JR29zmy/rb-2148950275.png"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/pvjChXY/rb-2148946803.png"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;