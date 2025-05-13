import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { saude } from "../data";
import { FaClock, FaUserMd, FaMoneyBillWave, FaStethoscope } from "react-icons/fa";
import AgendamentoModal from "../components/AgendamentoModal";

const EspecialidadeDetalhes = () => {
  const { slug } = useParams();
  const [showAgendamento, setShowAgendamento] = useState(false);
  const especialidade = saude.todasEspecialidades.find((e) => e.slug === slug);

  if (!especialidade) {
    return (
      <div className="container py-12 mx-auto text-center">
        Especialidade não encontrada
      </div>
    );
  }

  return (
    <div className="container px-4 py-12 mx-auto">
      {showAgendamento && (
        <AgendamentoModal
          especialidade={especialidade}
          onClose={() => setShowAgendamento(false)}
        />
      )}

      <div className="overflow-hidden bg-white rounded-xl shadow-md">
        {/* Cabeçalho */}
        <div className="p-6 mt-10 text-white bg-gradient-to-r from-red-600 to-red-800">
          <h1 className="text-3xl font-bold text-white">{especialidade.titulo}</h1>
          <p className="mt-2">{especialidade.descricao}</p>
        </div>

        {/* Corpo */}
        <div className="grid gap-8 p-6 md:grid-cols-3">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="p-4 rounded-lg bg-gray-50">
              <h2 className="mb-4 text-lg font-bold">Detalhes</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaClock className="mr-2 text-redapi" />
                  <span>
                    <strong>Duração:</strong> {especialidade.duracaoConsulta}
                  </span>
                </li>
                <li className="flex items-center">
                  <FaUserMd className="mr-2 text-redapi" />
                  <span>
                    <strong>Profissional:</strong> {especialidade.profissional.nome}
                  </span>
                </li>
                <li className="flex items-center">
                  <FaMoneyBillWave className="mr-2 text-redapi" />
                  <span>
                    <strong>Valor:</strong> {especialidade.valor}
                  </span>
                </li>
                <li className="flex items-center">
                  <FaStethoscope className="mr-2 text-redapi" />
                  <span>
                    <strong>Modalidade:</strong> {especialidade.modalidade}
                  </span>
                </li>
              </ul>

              <button
                onClick={() => setShowAgendamento(true)}
                className="w-full px-4 py-2 mt-6 text-white bg-redapi rounded-full hover:bg-redapi/90 transition-colors"
              >
                Agendar Consulta
              </button>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="md:col-span-2">
            {/* Profissional */}
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold">Sobre o Profissional</h2>
              <div className="flex items-start gap-4">
                <img
                  src={especialidade.profissional.foto}
                  alt={especialidade.profissional.nome}
                  className="object-cover w-20 h-20 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{especialidade.profissional.nome}</h3>
                  <p className="text-gray-600">{especialidade.profissional.bio}</p>
                  <p className="mt-2 text-sm text-gray-500">
                    <strong>Formação:</strong> {especialidade.profissional.formacao}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    <strong>Experiência:</strong> {especialidade.profissional.experiencia}
                  </p>
                </div>
              </div>
            </div>

            {/* Abordagem */}
            <div>
              <h2 className="mb-4 text-xl font-bold">Abordagem Terapêutica</h2>
              <div className="space-y-4">
                {especialidade.abordagem.map((modulo, index) => (
                  <div key={index} className="pl-4 border-l-2 border-redapi">
                    <h3 className="text-lg font-semibold">{modulo.modulo}</h3>
                    <ul className="mt-2 space-y-2">
                      {modulo.itens.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-2 h-2 mt-2 mr-2 bg-redapi rounded-full"></span>
                          {item}
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

export default EspecialidadeDetalhes;