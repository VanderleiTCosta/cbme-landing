import React, { useState } from "react";
import { saude } from "../data";
import EspecialidadeModal from "./EspecialidadeModal";
import { FaClock, FaUserMd, FaArrowRight } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

const Saude = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const especialidadesFiltradas = saude.todasEspecialidades.filter((especialidade) => {
    if (categoriaAtiva === "Todos") return true;
    return especialidade.categoria === categoriaAtiva;
  });

  const descricaoChamativa = (especialidade) => {
    return `${especialidade.titulo.toUpperCase()} com profissionais qualificados. Tratamento especializado em ${especialidade.destaques[0].toUpperCase()} e ${especialidade.destaques[1].toUpperCase()}.`;
  };

  return (
    <section className="py-16 bg-gray-50 mt-10" id="saude">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Título */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Cuidando da sua saúde
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
            Profissionais qualificados para seu bem-estar
          </p>
        </div>

        {/* Filtro Mobile */}
        <div className="lg:hidden mb-6 flex justify-center">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 bg-redapi text-white rounded-full"
          >
            <FiFilter className="mr-2" />
            Filtrar Especialidades
          </button>
        </div>

        {/* Filtros */}
        <div className={`${showFilters ? "block" : "hidden"} lg:block mb-8`}>
          <div className="flex justify-center">
            <div className="w-full lg:w-auto">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Área de Atuação
              </h3>
              <div className="flex flex-wrap gap-2">
                {saude.categoriasSaude.map((categoria, index) => (
                  <button
                    key={index}
                    onClick={() => setCategoriaAtiva(categoria.nome)}
                    className={`px-4 py-2 rounded-full text-white text-sm ${
                      categoriaAtiva === categoria.nome
                        ? `${categoria.cor} ring-2 ring-offset-2 ring-gray-800`
                        : "bg-gray-500 hover:bg-gray-600"
                    } transition-colors`}
                  >
                    {categoria.nome}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Especialidades */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {especialidadesFiltradas.map((especialidade) => (
            <div
              key={especialidade.id}
              className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200"
            >
              {/* Imagem */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={especialidade.imagem}
                  alt={especialidade.titulo}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">
                    {especialidade.titulo}
                  </h3>
                </div>
              </div>

              {/* Corpo do Card */}
              <div className="flex-grow p-6 flex flex-col">
                <p className="mb-4 text-gray-700 font-medium">
                  {descricaoChamativa(especialidade)}
                </p>

                <div className="mt-auto space-y-3">
                  <div className="flex items-center text-sm bg-gray-50 p-2 rounded-lg">
                    <FaClock className="mr-2 text-redapi" />
                    <span className="font-medium">{especialidade.duracaoConsulta}</span>
                  </div>
                  <div className="flex items-center text-sm bg-gray-50 p-2 rounded-lg">
                    <FaUserMd className="mr-2 text-redapi" />
                    <span className="font-medium">
                      {especialidade.profissional.nome.split(' ')[0]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Botão */}
              <div className="px-6 py-4 bg-gray-50 border-t">
                <a
                  href={`/saude/${especialidade.slug}`}
                  className="w-full flex items-center justify-center px-4 py-3 font-bold text-white bg-gradient-to-r from-redapi to-redapi/80 rounded-lg hover:from-redapi/90 hover:to-redapi transition-all shadow-md hover:shadow-lg"
                >
                  Ver Detalhes <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há especialidades */}
        {especialidadesFiltradas.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-xl text-gray-500">
              Nenhuma especialidade encontrada com estes filtros.
            </p>
            <button
              onClick={() => setCategoriaAtiva("Todos")}
              className="mt-4 inline-block px-6 py-2 font-medium text-redapi bg-white border border-redapi rounded-lg hover:bg-blue-50 transition-colors"
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* Modal */}
        {especialidadeSelecionada && (
          <EspecialidadeModal
            especialidade={especialidadeSelecionada}
            onClose={() => setEspecialidadeSelecionada(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Saude;