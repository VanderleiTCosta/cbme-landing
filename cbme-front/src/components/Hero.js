import React, { useState, useEffect } from "react";
import { hero } from "../data";
import Cadastro from "./Cadastro";
import { HiOutlineChevronDown, HiX } from "react-icons/hi";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  const { title, subtitle, btnText, carouselImages } = hero;
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setShowForm(false);
        setFormSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  return (
    <section id="home" className="relative py-8 mt-12 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Carrossel primeiro em todas as telas */}
        <div className="w-full mb-8">
          <HeroCarousel images={carouselImages} />
        </div>

        {/* Conteúdo de texto abaixo em todas as telas */}
        <div className="w-full text-center space-y-6 px-4 mt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-300 mx-auto"
          >
            {btnText}
            <HiOutlineChevronDown className="ml-2" />
          </button>
        </div>
      </div>

      {/* Modal de cadastro (mantido igual) */}
      {showForm && (
        <div className="fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
            onClick={() => setShowForm(false)}
          ></div>
          
          <div className="relative z-50 flex justify-center items-center h-full p-4">
            <div className="relative w-full max-w-md bg-white rounded-lg p-6">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
              >
                <HiX className="w-6 h-6" />
              </button>
              
              <Cadastro 
                onClose={() => setShowForm(false)} 
                onSuccess={() => setFormSubmitted(true)}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;