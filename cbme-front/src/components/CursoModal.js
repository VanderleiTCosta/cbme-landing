import React from "react";
import { FaTimes, FaClock, FaUserTie, FaMoneyBillWave, FaCertificate } from "react-icons/fa";

const CursoModal = ({ curso, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div className="w-full max-w-4xl overflow-y-auto bg-white rounded-lg shadow-xl max-h-[90vh]">
        <div className="p-6">
          {/* Cabeçalho */}
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-gray-900">{curso.titulo}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Grid de Conteúdo */}
          <div className="grid gap-6 mt-4 md:grid-cols-2">
            {/* Coluna 1 */}
            <div>
              <h3 className="text-lg font-semibold">Sobre o Curso</h3>
              <p className="mt-2 text-gray-600">{curso.descricao}</p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <FaClock className="mr-2 text-red-600" />
                  <span><strong>Duração:</strong> {curso.duracao}</span>
                </div>
                <div className="flex items-center">
                  <FaUserTie className="mr-2 text-red-600" />
                  <span><strong>Ministrante:</strong> {curso.ministrante.nome}</span>
                </div>
                <div className="flex items-center">
                  <FaMoneyBillWave className="mr-2 text-red-600" />
                  <span><strong>Investimento:</strong> {curso.valor}</span>
                </div>
                <div className="flex items-center">
                  <FaCertificate className="mr-2 text-red-600" />
                  <span><strong>Certificado:</strong> Incluso</span>
                </div>
              </div>
            </div>

            {/* Coluna 2 */}
            <div>
              <h3 className="text-lg font-semibold">Destaques</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {curso.destaques.map((item, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-sm rounded-full bg-gray-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Botões - ATUALIZADO para usar curso.slug */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href={`/cursos/${curso.slug}`}
              className="px-6 py-2 text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors"
            >
              Ver Programa Completo
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

export default CursoModal;