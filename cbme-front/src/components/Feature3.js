import React from "react";
//import data
import { features } from "../data";

const Feature3 = () => {
  //destructure features
  const { feature3 } = features;
  //destructure feature1
  const { title, subtitle, btnLink, btnIcon, image } = feature3;


  return (
    <section className="section" id="produto">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
          {/* text */}
          <div className="flex-1 mt-10" data-aos="fade-right" data-aos-offsets="400">
            <h2 className="text-lg lg:text-[30px] text-black mb-4 lg:mb-6 uppercase font-normal">{title}</h2>
            <p className="lead">{subtitle}</p>
            <button
              className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all"
            >
              {btnLink} <img src={btnIcon} alt="" />
            </button>
          </div>
          {/* image */}
          <div className="flex-1" data-aos="fade-left" data-aos-offsets="300">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
