import React from "react";
import { noticiasData } from "../data";

const UltimasNoticias = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-8 bg-gray-50">
      <h1
        className="text-[18px] font-bold text-center"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        Últimas Notícias
      </h1>
      <div
        className="w-16 xs:w-18 sm:w-20 h-0.5 sm:h-1 bg-redapi mx-auto mt-3 xs:mt-3.5 sm:mt-4 mb-10"
        data-aos="fade-down"
        data-aos-delay="300"
      ></div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6 lg:gap-8">
        {noticiasData.map((noticia) => (
          <div
            key={noticia.id}
            className="w-full xs:w-[280px] sm:w-[320px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={noticia.delay}
          >
            <a href={noticia.link} className="block h-full">
              <div className="relative h-[180px] sm:h-[200px] overflow-hidden">
                <img
                  src={noticia.imagem}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white text-sm">{noticia.data}</span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {noticia.titulo}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {noticia.resumo}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UltimasNoticias;
