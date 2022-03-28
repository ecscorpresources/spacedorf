import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function HeroSlide({
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
}) {
  return (
    <div>
      <Carousel autoPlay interval="2000" transitionTime="1000" infiniteLoop>
        <div>
          <img src={banner1} alt="banner" />
        </div>
        <div>
          <img src={banner2} alt="banner" />
        </div>
        <div>
          <img src={banner3} alt="banner" />
        </div>
        <div>
          <img src={banner4} alt="banner" />
        </div>
        <div>
          <img src={banner5} alt="banner" />
        </div>
      </Carousel>
    </div>
  );
}
