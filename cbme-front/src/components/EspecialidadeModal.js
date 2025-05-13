import React from "react";
import { FaTimes, FaClock, FaUserMd, FaMoneyBillWave, FaStethoscope } from "react-icons/fa";

const EspecialidadeModal = ({ especialidade, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div className="w-full max-w-4xl overflow-y-auto bg-white rounded-lg shadow-xl max-h-[90vh]">
        <div className="p-6">
          {/* Cabeçalho */}
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-gray-900">{especialidade.titulo}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-redapi transition-colors"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Grid de Conteúdo */}
          <div className="grid gap-6 mt-4 md:grid-cols-2">
            {/* Coluna 1 */}
            <div>
              <h3 className="text-lg font-semibold">Sobre a Especialidade</h3>
              <p className="mt-2 text-gray-600">{especialidade.descricao}</p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <FaClock className="mr-2 text-redapi" />
                  <span><strong>Duração da consulta:</strong> {especialidade.duracaoConsulta}</span>
                </div>
                <div className="flex items-center">
                  <FaUserMd className="mr-2 text-redapi" />
                  <span><strong>Profissional:</strong> {especialidade.profissional.nome}</span>
                </div>
                <div className="flex items-center">
                  <FaMoneyBillWave className="mr-2 text-redapi" />
                  <span><strong>Valor:</strong> {especialidade.valor}</span>
                </div>
                <div className="flex items-center">
                  <FaStethoscope className="mr-2 text-redapi" />
                  <span><strong>Modalidade:</strong> {especialidade.modalidade}</span>
                </div>
              </div>
            </div>

            {/* Coluna 2 */}
            <div>
              <h3 className="text-lg font-semibold">Destaques</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {especialidade.destaques.map((item, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-sm rounded-full bg-blue-100 text-redapi"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Botões */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href={`/saude/${especialidade.slug}`}
              className="px-6 py-2 text-white bg-redapi rounded-full hover:bg-redapi/90 transition-colors"
            >
              Ver Profissional Completo
            </a>
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EspecialidadeModal;