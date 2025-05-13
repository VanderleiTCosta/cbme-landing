import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { institucional } from '../data'; // Importe os dados centralizados

const SobreNos = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activeValue, setActiveValue] = useState(null);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="mt-20 relative bg-gradient-to-b from-red-800 to-redapi text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Transformando vidas através da educação</h1>
          <p className="text-xl md:text-2xl mb-8">Desde 2005, formando profissionais e cidadãos</p>
          <button className="bg-white text-redapi px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
            Agende uma visita
          </button>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Nossa História</h2>
        <div className="relative">
          <div className="hidden md:block absolute h-full w-1 bg-redapi left-1/2 transform -translate-x-1/2"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {institucional.timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative p-6 rounded-lg shadow-md bg-white ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}
                onMouseEnter={() => setActiveTimeline(index)}
              >
                <div className={`absolute top-6 -ml-10 w-6 h-6 rounded-full border-4 border-red-600 ${activeTimeline === index ? 'bg-redapi' : 'bg-white'}`}></div>
                <div className="text-redapi">{item.icon}</div>
                <h3 className="text-xl font-bold text-redapi">{item.year}</h3>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-white" id='missao'>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Princípios</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl text-red-600 mx-auto mb-4">🏛️</div>
              <h3 className="text-xl font-bold mb-2">Missão</h3>
              <p>Democratizar o acesso à educação de qualidade através de metodologias inovadoras e formação humana integral.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl text-red-600 mx-auto mb-4">👁️</div>
              <h3 className="text-xl font-bold mb-2">Visão</h3>
              <p>Ser referência nacional em educação transformadora até 2030, impactando positivamente a sociedade.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl text-red-600 mx-auto mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-2">Valores</h3>
              <div className="space-y-2">
                {institucional.valores.map((value, index) => (
                  <div 
                    key={index}
                    className="cursor-pointer"
                    onClick={() => setActiveValue(activeValue === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{value.title}</span>
                      {activeValue === index ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                    {activeValue === index && (
                      <p className="text-sm mt-1 text-gray-600">{value.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">O Que Nos Diferencia</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {institucional.valores.map((value, index) => (
              <div key={index} className={`${value.cor} p-6 rounded-lg shadow-sm text-center hover:shadow-md transition`}>
                <div className="text-red-600 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Conheça Nossa Equipe</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {institucional.equipe.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                  <div className="text-4xl text-gray-400">👤</div>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-red-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
                <p className="text-sm text-gray-500 mt-2">{member.departamento}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-16 bg-red-600 text-white">
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

      {/* CTA Final */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Quer fazer parte da nossa história?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition">
              Fale com um Consultor
            </button>
            <button className="border border-red-600 text-red-600 px-8 py-3 rounded-full font-bold hover:bg-red-50 transition">
              Baixar Brochura
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;