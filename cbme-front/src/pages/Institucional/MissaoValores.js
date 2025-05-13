import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { institucional } from '../../data';

const MissaoValores = () => {
  const [activeValue, setActiveValue] = useState(null);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="mt-20 relative bg-gradient-to-b from-red-800 to-redapi text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Missão, Visão e Valores</h1>
          <p className="text-xl md:text-2xl mb-8">Os princípios que guiam nossa instituição</p>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl text-redapi mx-auto mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Missão</h3>
              <p>Democratizar o acesso à educação de qualidade através de metodologias inovadoras e formação humana integral.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl text-redapi mx-auto mb-4">👁️</div>
              <h3 className="text-xl font-bold mb-2">Visão</h3>
              <p>Ser referência nacional em educação transformadora até 2030, impactando positivamente a sociedade.</p>
            </div>
          </div>

          {/* Valores */}
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Nossos Valores</h2>
            <div className="space-y-4">
              {institucional.valores.map((value, index) => (
                <div 
                  key={index}
                  className="cursor-pointer p-4 hover:bg-gray-50 rounded-lg"
                  onClick={() => setActiveValue(activeValue === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-redapi mr-4">{value.icon}</div>
                      <span className="text-lg font-medium">{value.title}</span>
                    </div>
                    {activeValue === index ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                  {activeValue === index && (
                    <p className="mt-2 text-gray-600 pl-12">{value.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissaoValores;