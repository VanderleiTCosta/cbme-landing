import React from "react";
import { contato } from "../data";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContatoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {contato.titulo}
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            {contato.subtitulo}
          </p>
        </div>

        {/* Cards de Informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaEnvelope className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Email</h2>
            </div>
            <a 
              href={`mailto:${contato.email}`}
              className="text-blue-600 hover:text-blue-500 text-lg"
            >
              {contato.email}
            </a>
          </div>

          {/* Telefone */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FaPhone className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Telefone</h2>
            </div>
            <a 
              href={`tel:${contato.telefone.replace(/\D/g, '')}`}
              className="text-gray-800 hover:text-gray-600 text-lg"
            >
              {contato.telefone}
            </a>
          </div>

          {/* Endereço */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Endereço</h2>
            </div>
            <p className="text-gray-800 text-lg">
              {contato.endereco}
            </p>
          </div>

          {/* Horário */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <FaClock className="h-6 w-6 text-yellow-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Horário de Atendimento</h2>
            </div>
            <p className="text-gray-800 text-lg">
              {contato.horario}
            </p>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Nossas Redes Sociais
          </h2>
          <div className="flex justify-center space-x-8">
            {contato.redesSociais.map((rede, index) => (
              <a
                key={index}
                href={rede.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${rede.cor} hover:opacity-80 transition-opacity`}
                title={rede.nome}
              >
                <span className="sr-only">{rede.nome}</span>
                <div className="h-10 w-10">
                  {React.cloneElement(rede.icone, { className: "h-full w-full" })}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;