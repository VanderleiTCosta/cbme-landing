import React from "react";
import { Link } from "react-router-dom";
import { institucional } from "../../data";

const Equipe = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="mt-20 relative bg-gradient-to-b from-red-800 to-redapi text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Nossa Equipe
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Conheça quem faz a diferença na nossa instituição
          </p>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {institucional.equipe.map((membro, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                  <div className="text-4xl text-gray-400">👤</div>
                </div>
                <h3 className="text-xl font-bold">{membro.name}</h3>
                <p className="text-redapi mb-2">{membro.role}</p>
                <p className="text-gray-600">{membro.bio}</p>
                {membro.departamento && (
                  <p className="text-sm text-gray-500 mt-2">
                    {membro.departamento}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Quer fazer parte do nosso time?
          </h2>
          <Link
            to="/trabalhe-conosco"
            className="bg-redapi text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition inline-block"
          >
            Ver Oportunidades
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Equipe;
