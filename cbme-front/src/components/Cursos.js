import React, { useState } from "react";
import { cursos } from "../data";
import CursoModal from "./CursoModal";
import { FaClock, FaCertificate, FaArrowRight } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

const Cursos = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [tipoAtivo, setTipoAtivo] = useState("Todos");
  const [cursoSelecionado, setCursoSelecionado] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const cursosFiltrados = cursos.todosCursos.filter((curso) => {
    return (
      (categoriaAtiva === "Todos" || curso.categoria === categoriaAtiva) &&
      (tipoAtivo === "Todos" || curso.tipo === tipoAtivo)
    );
  });

  const descricaoChamativa = (curso) => {
    return `${curso.titulo.toUpperCase()} com metodologia exclusiva! Aprenda ${curso.destaques[0].toUpperCase()} e ${curso.destaques[1].toUpperCase()} em apenas ${
      curso.duracao
    }.`;
  };

  return (
    <section className="py-16 bg-gray-50 mt-10" id="cursos">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Título */}
        <div
          className="mb-12 text-center"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Transforme sua carreira
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
            Cursos especializados com alto índice de empregabilidade
          </p>
        </div>

        {/* Filtro Mobile */}
        <div
          className="lg:hidden mb-6 flex justify-center"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-full"
          >
            <FiFilter className="mr-2" />
            Filtrar Cursos
          </button>
        </div>

        {/* Filtros */}
        <div className={`${showFilters ? "block" : "hidden"} lg:block mb-8`}>
          <div
            className="flex flex-col lg:flex-row justify-center gap-4"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            {/* Filtro por Categoria */}
            <div className="w-full lg:w-auto">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Área de Conhecimento
              </h3>
              <div className="flex flex-wrap gap-2">
                {cursos.categorias.map((categoria, index) => (
                  <button
                    key={index}
                    onClick={() => setCategoriaAtiva(categoria.nome)}
                    className={`flex items-center px-4 py-2 rounded-full text-white text-sm ${
                      categoriaAtiva === categoria.nome
                        ? `${categoria.cor} ring-2 ring-offset-2 ring-gray-800`
                        : "bg-gray-500 hover:bg-gray-600"
                    } transition-colors`}
                  >
                    <span className="mr-2">{categoria.icone}</span>
                    {categoria.nome}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtro por Tipo */}
            <div className="w-full lg:w-auto">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Tipo de Curso
              </h3>
              <div className="flex flex-wrap gap-2">
                {cursos.tiposCursos.map((tipo, index) => (
                  <button
                    key={index}
                    onClick={() => setTipoAtivo(tipo.nome)}
                    className={`px-4 py-2 rounded-full text-white text-sm ${
                      tipoAtivo === tipo.nome
                        ? `${tipo.cor} ring-2 ring-offset-2 ring-gray-800`
                        : "bg-gray-500 hover:bg-gray-600"
                    } transition-colors`}
                  >
                    {tipo.nome}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Cursos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cursosFiltrados.map((curso) => (
            <div
              key={curso.id}
              className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200"
              data-aos="fade-down"
              data-aos-delay={curso.delay}
            >
              {/* Imagem com efeito hover */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={curso.imagem}
                  alt={curso.titulo}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">
                    {curso.titulo}
                  </h3>
                  <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded-full">
                    {curso.categoria}
                  </span>
                </div>
              </div>

              {/* Corpo do Card */}
              <div className="flex-grow p-6 flex flex-col">
                <p className="mb-4 text-gray-700 font-medium">
                  {descricaoChamativa(curso)}
                </p>

                <div className="mt-auto space-y-3">
                  <div className="flex items-center text-sm bg-gray-50 p-2 rounded-lg">
                    <FaClock className="mr-2 text-red-600" />
                    <span className="font-medium">{curso.duracao}</span>
                  </div>
                  <div className="flex items-center text-sm bg-gray-50 p-2 rounded-lg">
                    <FaCertificate className="mr-2 text-red-600" />
                    <span className="font-medium">
                      {curso.certificado
                        ? "Certificado incluso"
                        : "Sem certificado"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Botão */}
              <div className="px-6 py-4 bg-gray-50 border-t">
                <button
                  onClick={() => setCursoSelecionado(curso)}
                  className="w-full flex items-center justify-center px-4 py-3 font-bold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-md hover:shadow-lg"
                >
                  Quero me destacar <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há cursos */}
        {cursosFiltrados.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-xl text-gray-500">
              Nenhum curso encontrado com estes filtros.
            </p>
            <button
              onClick={() => {
                setCategoriaAtiva("Todos");
                setTipoAtivo("Todos");
              }}
              className="mt-4 inline-block px-6 py-2 font-medium text-red-600 bg-white border border-red-600 rounded-lg hover:bg-red-50 transition-colors"
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* Modal */}
        {cursoSelecionado && (
          <CursoModal
            curso={cursoSelecionado}
            onClose={() => setCursoSelecionado(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Cursos;
