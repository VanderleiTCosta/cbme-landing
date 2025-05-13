import React from "react";
import { featuresData } from "../data";

const Feature1 = () => {
  const mainFeature = featuresData.find((f) => f.isMain) || featuresData[0];
  const otherFeatures = featuresData.filter((f) => f.id !== mainFeature.id);

  return (
    <section
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white"
      id="produto"
    >
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
        {/* Header - Mantido do Feature1 original */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1
            className="text-2xl sm:text-3xl font-bold text-center text-gray-900 leading-tight"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Benefícios Exclusivos
          </h1>
          <div
            className="w-16 xs:w-18 sm:w-20 h-0.5 sm:h-1 bg-redapi mx-auto mt-3 xs:mt-3.5 sm:mt-4"
            data-aos="fade-down"
            data-aos-delay="300"
          ></div>
        </div>

        {/* Main Feature - Adaptado para estrutura similar ao Feature2/3 */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
          {/* Text Content */}
          <div 
            className="flex-1 order-2 lg:order-1 mb-6 sm:mb-8 md:mb-10 lg:mb-0"
            data-aos="fade-right"
            data-aos-offset="200"
          >
            <h2 className="text-xl xs:text-2xl sm:text-2.5xl md:text-3xl lg:text-[2rem] xl:text-4xl text-gray-800 font-semibold mb-4 sm:mb-5 md:mb-6 leading-snug">
              {mainFeature.titulo}
            </h2>
            <p className="text-base xs:text-[1.05rem] sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-5 sm:mb-6 md:mb-7 lg:mb-8">
              {mainFeature.resumo}
            </p>
            <button 
              className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all text-redapi hover:text-redapi/80 font-medium text-base sm:text-lg"
              onClick={() => window.location.href = mainFeature.link}
            >
              {mainFeature.btnLink} <img src={mainFeature.btnIcon} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <p className="text-xs xs:text-sm text-gray-500 mt-1.5 sm:mt-2">
              {mainFeature.data}
            </p>
          </div>

          {/* Image */}
          <div 
            className="flex-1 order-1 lg:order-2 mb-5 sm:mb-6 md:mb-8 lg:mb-0"
            data-aos="fade-left"
            data-aos-offset="250"
          >
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-shadow duration-500">
              <img
                src={mainFeature.imagem}
                alt={mainFeature.titulo}
                className="w-full h-auto object-cover rounded-lg sm:rounded-xl transform hover:scale-[1.03] sm:hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Other Features Grid - Mantido do Feature1 original */}
        {otherFeatures.length > 0 && (
          <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
            {otherFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-4 sm:p-5 md:p-6 rounded-md sm:rounded-lg shadow-sm sm:shadow-md hover:shadow-md sm:hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={feature.delay}
              >
                <div className="mb-3 sm:mb-4 h-32 xs:h-36 sm:h-40 overflow-hidden rounded-md sm:rounded-lg">
                  <img
                    src={feature.imagem}
                    alt={feature.titulo}
                    className="w-full h-full object-cover hover:scale-[1.03] sm:hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 sm:mb-3 leading-tight">
                  {feature.titulo}
                </h3>
                <p className="text-sm xs:text-base text-gray-600 mb-2.5 sm:mb-3 md:mb-4 leading-relaxed">
                  {feature.resumo}
                </p>
                <p className="text-xs text-gray-500 mb-2 sm:mb-3">
                  {feature.data}
                </p>
                <button
                  className="text-redapi hover:text-redapi/80 flex items-center text-xs sm:text-sm font-medium"
                  onClick={() => window.location.href = feature.link}
                >
                  {feature.btnLink}
                  <img
                    src={feature.btnIcon}
                    alt=""
                    className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4"
                  />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Feature1;