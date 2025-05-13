import React from "react";
import { useParams } from "react-router-dom";
import { cursos } from "../data";
import { FaClock, FaUserTie, FaMoneyBillWave, FaCertificate } from "react-icons/fa";

const CursoDetalhes = () => {
    const { slug } = useParams();
    const curso = cursos.todosCursos.find(c => c.slug === slug);
  

  if (!curso) {
    return (
      <div className="container py-12 mx-auto text-center">
        Curso não encontrado
      </div>
    );
  }

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="overflow-hidden bg-white rounded-xl shadow-md">
        {/* Cabeçalho */}
        <div className="p-6 mt-10 text-white bg-gradient-to-r from-red-600 to-red-800">
          <h1 className="text-3xl font-bold text-white">{curso.titulo}</h1>
          <p className="mt-2">{curso.descricao}</p>
        </div>

        {/* Corpo */}
        <div className="grid gap-8 p-6 md:grid-cols-3">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="p-4 rounded-lg bg-gray-50">
              <h2 className="mb-4 text-lg font-bold">Detalhes</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaClock className="mr-2 text-red-600" />
                  <span><strong>Duração:</strong> {curso.duracao}</span>
                </li>
                <li className="flex items-center">
                  <FaUserTie className="mr-2 text-red-600" />
                  <span><strong>Ministrante:</strong> {curso.ministrante.nome}</span>
                </li>
                <li className="flex items-center">
                  <FaMoneyBillWave className="mr-2 text-red-600" />
                  <span><strong>Investimento:</strong> {curso.valor}</span>
                </li>
                <li className="flex items-center">
                  <FaCertificate className="mr-2 text-red-600" />
                  <span><strong>Certificado:</strong> Incluso</span>
                </li>
              </ul>

              <button className="w-full px-4 py-2 mt-6 text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors">
                Inscreva-se Agora
              </button>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="md:col-span-2">
            {/* Ministrante */}
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold">Sobre o Ministrante</h2>
              <div className="flex items-start gap-4">
                <img
                  src={curso.ministrante.foto}
                  alt={curso.ministrante.nome}
                  className="object-cover w-20 h-20 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{curso.ministrante.nome}</h3>
                  <p className="text-gray-600">{curso.ministrante.bio}</p>
                </div>
              </div>
            </div>

            {/* Cronograma */}
            <div>
              <h2 className="mb-4 text-xl font-bold">Cronograma</h2>
              <div className="space-y-4">
                {curso.cronograma.map((modulo, index) => (
                  <div key={index} className="pl-4 border-l-2 border-red-600">
                    <h3 className="text-lg font-semibold">{modulo.modulo}</h3>
                    <ul className="mt-2 space-y-2">
                      {modulo.aulas.map((aula, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-2 h-2 mt-2 mr-2 bg-red-600 rounded-full"></span>
                          {aula}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursoDetalhes;