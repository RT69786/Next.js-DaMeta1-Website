"use client";

import React from "react";
import Slider from "react-slick";
import "./_mainslider.scss";

const MainSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <section className="main-slider">
      <Slider {...settings}>
        <div className="slide slide-1">
          <div className="slide-content">
            <h2>2025: AI Integration</h2>
          </div>
        </div>

        <div className="slide slide-2">
          <div className="slide-content">
            <h2>2026: Da1Ilmverse MVR</h2>
          </div>
        </div>

        <div className="slide slide-3">
          <div className="slide-content">
            <h2>2027: First Whitepaper</h2>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default MainSlider;
