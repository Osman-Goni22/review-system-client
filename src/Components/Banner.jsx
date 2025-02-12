

import React from 'react';

const Banner = () => {
    return (

        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/tpCpGQym/istockphoto-1080885602-1024x1024.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/rKgYJ4vc/istockphoto-1337799654-1024x1024.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/zVj8MSr6/istockphoto-1489993701-1024x1024.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/hxYNvvJm/istockphoto-1449244353-1024x1024.jpg"
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