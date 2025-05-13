import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaClock } from "react-icons/fa";

const EmBrevePage = () => {
  return (
    <div className="min-h-screen mt-10 bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
        {/* Ícone de "Em Breve" */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <FaClock className="text-5xl text-redapi animate-pulse" />
          </div>
        </div>
        
        {/* Título e mensagem */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Em Breve!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Estamos preparando conteúdo especial para você. Volte em breve para conferir as novidades!
        </p>
        
        {/* Botão para voltar à home */}
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-redapi hover:bg-redapi/90 text-white font-medium rounded-lg transition-colors duration-300"
        >
          <FaHome className="mr-2" />
          Voltar para a Página Inicial
        </Link>
        
        {/* Rodapé opcional */}
        <p className="mt-8 text-sm text-gray-500">
          Estamos trabalhando para melhorar sua experiência.
        </p>
      </div>
    </div>
  );
};

export default EmBrevePage;