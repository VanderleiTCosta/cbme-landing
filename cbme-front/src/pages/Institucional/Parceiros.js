import React from 'react';
import { institucional } from '../../data';

const Parceiros = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="mt-20 relative bg-gradient-to-b from-red-800 to-redapi text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nossos Parceiros</h1>
          <p className="text-xl md:text-2xl mb-8">Juntos transformando a educação</p>
        </div>
      </section>

      {/* Lista de Parceiros */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institucional.parceirosPagina.parceiros.map((parceiro, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-center mb-4 h-20">
                  {parceiro.logo ? (
                    <img 
                      src={parceiro.logo} 
                      alt={parceiro.nome} 
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="text-4xl text-gray-400">🏢</div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-center">{parceiro.nome}</h3>
                <p className="text-gray-600 text-center mt-2">{parceiro.descricao}</p>
                {parceiro.area && (
                  <p className="text-sm text-gray-500 text-center mt-2">{parceiro.area}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção para novos parceiros */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Seja nosso parceiro</h2>
          <p className="text-xl mb-8">Junte-se a nós nessa missão de transformar vidas</p>
          <button className="bg-redapi text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition">
            Fale conosco
          </button>
        </div>
      </section>
    </div>
  );
};

export default Parceiros;