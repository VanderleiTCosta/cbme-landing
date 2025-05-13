import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaFileUpload,
  FaLinkedin,
} from "react-icons/fa";
import { trabalheConosco } from "../data";

const TrabalheConosco = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    areaInteresse: "",
    vagaInteresse: "",
    linkedin: "",
    curriculo: null,
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const formPayload = new FormData();
      formPayload.append('nome', formData.nome);
      formPayload.append('email', formData.email);
      formPayload.append('telefone', formData.telefone);
      formPayload.append('areaInteresse', formData.areaInteresse);
      formPayload.append('vagaInteresse', formData.vagaInteresse || '');
      formPayload.append('linkedin', formData.linkedin || '');
      formPayload.append('mensagem', formData.mensagem || '');
      if (formData.curriculo) {
        formPayload.append('curriculo', formData.curriculo);
      }
  
      const response = await fetch('http://localhost:5000/api/candidaturas', {
        method: 'POST',
        body: formPayload,
        // Não adicione headers Content-Type - o browser fará isso automaticamente para FormData
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar candidatura');
      }
  
      setSubmitSuccess(true);
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        areaInteresse: "",
        vagaInteresse: "",
        linkedin: "",
        curriculo: null,
        mensagem: ""
      });
  
    } catch (error) {
      console.error("Erro completo:", error);
      alert(`Erro: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const vagasAtivas = trabalheConosco.vagasDisponiveis.filter(
    (vaga) => vaga.ativo
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {trabalheConosco.titulo}
          </h1>
          <p className="mt-3 text-xl text-gray-600">
            {trabalheConosco.subtitulo}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Envie seu currículo
            </h2>
            
            {submitSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <p>Seu currículo foi enviado com sucesso! Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>

                  {/* Telefone */}
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>

                  {/* Área de Interesse */}
                  <div>
                    <label htmlFor="areaInteresse" className="block text-sm font-medium text-gray-700 mb-1">
                      Área de Interesse
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaGraduationCap className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="areaInteresse"
                        name="areaInteresse"
                        value={formData.areaInteresse}
                        onChange={handleChange}
                        required
                        className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="">Selecione uma área</option>
                        {trabalheConosco.areasInteresse.map((area, index) => (
                          <option key={index} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Vaga Específica */}
                  {vagasAtivas.length > 0 && (
                    <div>
                      <label htmlFor="vagaInteresse" className="block text-sm font-medium text-gray-700 mb-1">
                        Vaga Específica (opcional)
                      </label>
                      <select
                        id="vagaInteresse"
                        name="vagaInteresse"
                        value={formData.vagaInteresse}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="">Não especificada</option>
                        {vagasAtivas.map((vaga) => (
                          <option key={vaga.id} value={vaga.titulo}>
                            {vaga.titulo} ({vaga.tipo}) - {vaga.local}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* LinkedIn */}
                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                      LinkedIn (opcional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLinkedin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/in/seu-perfil"
                        className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>

                  {/* Currículo */}
                  <div>
                    <label htmlFor="curriculo" className="block text-sm font-medium text-gray-700 mb-1">
                      Currículo (PDF ou DOC, máximo 5MB)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaFileUpload className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="file"
                        id="curriculo"
                        name="curriculo"
                        onChange={handleChange}
                        required
                        accept=".pdf,.doc,.docx"
                        className="pl-10 block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem (opcional)
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows="4"
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    ></textarea>
                  </div>

                  {/* Botão de envio */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          <div className="space-y-8">
            {/* Vagas em Destaque */}
            {vagasAtivas.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Vagas em Destaque
                </h2>
                <div className="space-y-4">
                  {vagasAtivas.map((vaga) => (
                    <div
                      key={vaga.id}
                      className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                    >
                      <h3 className="font-medium text-gray-800">
                        {vaga.titulo}
                      </h3>
                      <div className="flex text-sm text-gray-600 mt-1">
                        <span className="mr-3">{vaga.tipo}</span>
                        <span>{vaga.local}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefícios */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Por que trabalhar no CBME?
              </h2>
              <ul className="space-y-3">
                {trabalheConosco.beneficios.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Processo Seletivo */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Nosso Processo Seletivo
              </h2>
              <ol className="space-y-4">
                {trabalheConosco.processoSeletivo.map((item) => (
                  <li key={item.step} className="flex">
                    <div className="flex-shrink-0 bg-red-100 text-red-600 font-bold rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrabalheConosco;