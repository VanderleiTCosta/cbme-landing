import React from "react";
import { produtosData } from "../data";

const Produtos = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8">
      <h1
        className="text-[18px] mt-6 sm:mt-10 font-bold text-center"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        O QUE VOCÊ PRECISA
      </h1>
      <div
        className="w-16 xs:w-18 sm:w-20 h-0.5 sm:h-1 bg-redapi mx-auto mt-3 xs:mt-3.5 sm:mt-4"
        data-aos="fade-down"
        data-aos-delay="300"
      ></div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-10">
        {produtosData.map((produto) => (
          <div
            key={produto.id}
            className="w-full xs:w-[280px] sm:w-[300px] h-[250px] sm:h-[300px] rounded-xl sm:rounded-[20px] overflow-hidden group"
            data-aos="fade-down"
            data-aos-delay={produto.delay}
          >
            <a
              href={produto.link}
              className="block h-full"
            >
              <img
                src={produto.imagem}
                alt={produto.titulo}
                className="w-full h-full object-cover rounded-xl sm:rounded-[20px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-xl sm:rounded-[20px] transition-all duration-300 group-hover:bg-opacity-60">
                <p className="text-white text-lg sm:text-xl font-bold">
                  {produto.titulo}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
