import React, { useState } from 'react';
import { institucional } from '../../data';

const Sobre = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);


  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="mt-20 relative bg-gradient-to-b from-red-800 to-redapi text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nossa História</h1>
          <p className="text-xl md:text-2xl mb-8">Conheça nossa trajetória e conquistas</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Linha do Tempo</h2>
        <div className="relative">
          <div className="hidden md:block absolute h-full w-1 bg-redapi left-1/2 transform -translate-x-1/2"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {institucional.timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative p-6 rounded-lg shadow-md bg-white ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}
                onMouseEnter={() => setActiveTimeline(index)}
              >
                <div className={`absolute top-6 -ml-10 w-6 h-6 rounded-full border-4 border-redapi ${activeTimeline === index ? 'bg-redapi' : 'bg-white'}`}></div>
                <h3 className="text-xl font-bold text-redapi">{item.year}</h3>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-16 bg-redapi text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Em Números</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {institucional.numeros.map((item, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{item.valor}</div>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;