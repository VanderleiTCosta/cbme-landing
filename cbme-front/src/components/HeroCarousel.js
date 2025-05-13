import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const HeroCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Configurações responsivas
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: dots => (
      <div className="absolute bottom-2 sm:bottom-4 w-full">
        <ul className="flex justify-center space-x-1 sm:space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
        i === currentSlide ? 'bg-red-600' : 'bg-gray-600 opacity-50'
      }`}></div>
    ),
    dotsClass: "slick-dots !bottom-0"
  };

  return (
    <div className="w-full mx-auto rounded-lg sm:rounded-xl mt-10 overflow-hidden shadow-md sm:shadow-lg relative
                   lg:w-[80vw] lg:max-w-none"> {/* Alteração principal aqui */}
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="relative aspect-video">
            <img
              src={item.image}
              alt={item.altText}
              className="w-full h-full object-cover"
              style={{ maxHeight: "80vh" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Componentes das setas (mantidos iguais)
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="hidden sm:block absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full cursor-pointer transition-all duration-300"
  >
    <HiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="hidden sm:block absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full cursor-pointer transition-all duration-300"
  >
    <HiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
  </div>
);

export default HeroCarousel;