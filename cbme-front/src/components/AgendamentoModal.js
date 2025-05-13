import React from "react";
import { FaTimes } from "react-icons/fa";
import { PhoneIcon } from "@heroicons/react/24/outline";

const AgendamentoModal = ({ especialidade, onClose }) => {
  const specialties = [
    "Psicanalistas Clínicos",
    "Psicólogos",
    "Pediatras",
    "Psiquiatras",
    "Enfermagem",
    "Nutricionistas",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-y-auto max-h-[90vh]">
        <div className="p-6">
          {/* Cabeçalho */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Agendar Consulta: {especialidade.titulo}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-redapi transition-colors"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Formulário */}
          <div className="bg-white shadow-md rounded-lg p-6" data-aos="fade-up">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6 flex items-center">
              
              Procura por especialidade:
            </h3>

            <form
              action="https://formspree.io/f/xqaqpvbz"
              method="POST"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6"
            >
              <div className="col-span-1 sm:col-span-2 md:col-span-2">
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="Nome"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Digite seu nome"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="specialty"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Especialidade
                </label>
                <select
                  id="specialty"
                  name="Especialidade"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                  defaultValue={especialidade.titulo} // Preenche com a especialidade atual
                >
                  <option value="">Selecione</option>
                  {specialties.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="estado"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Estado
                </label>
                <input
                  type="text"
                  id="estado"
                  name="Estado"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Digite o estado (UF)"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Município
                </label>
                <input
                  type="text"
                  id="city"
                  name="Município"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Digite o município"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="neighborhood"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Bairro
                </label>
                <input
                  type="text"
                  id="neighborhood"
                  name="Bairro"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Digite o bairro"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Endereço
                </label>
                <input
                  type="text"
                  id="address"
                  name="Endereço"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Digite o endereço"
                />
              </div>

              <div className="sm:col-span-2 md:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>

              <div className="sm:col-span-2 md:col-span-4">
                <div
                  className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4"
                  data-aos="fade-right"
                >
                  <div className="flex items-start gap-3">
                    <PhoneIcon className="h-5 w-5 text-yellow-600 mt-1" />
                    <p className="text-sm text-yellow-700">
                      O contato será sempre o do CBME para fornecer o horário e
                      dia da consulta.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 mt-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  data-aos="fade-up"
                >
                  Buscar Profissionais
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendamentoModal;