import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from '../data';

const Footer = () => {
  return (
    <footer className="bg-[#de1d1d] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 text-center md:text-left">

        {/* Coluna 1: Logo CBME */}
        <div className="md:flex-1 flex flex-col items-center md:items-start">
          <Link to="/">
            <img
              src={footer.logo}
              alt="CBME Logo"
              className="h-16 mb-3"
            />
          </Link>
          <p className="text-sm leading-relaxed">
            {footer.textoLogo}
          </p>
        </div>

        {/* Coluna 2: Institucional */}
        <div className="md:flex-1">
          <h4 className="font-semibold text-lg border-l-4 md:border-l-2 pl-2 border-white mb-2 inline-block">
            Institucional
          </h4>
          <ul className="space-y-1 text-sm">
            {footer.institucional.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className="block transition duration-200 hover:translate-x-1 hover:text-gray-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3: Serviços */}
        <div className="md:flex-1">
          <h4 className="font-semibold text-lg border-l-4 md:border-l-2 pl-2 border-white mb-2 inline-block">
            Serviços
          </h4>
          <ul className="space-y-1 text-sm">
            {footer.servicos.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className="block transition duration-200 hover:translate-x-1 hover:text-gray-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="flex justify-center md:justify-start gap-4 mt-6 md:mt-0">
          {footer.redesSociais.map((rede, idx) => (
            <a
              key={idx}
              href={rede.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110 duration-200"
              aria-label={rede.nome}
            >
              {React.cloneElement(rede.icon, { className: "text-white hover:text-gray-300 text-xl" })}
            </a>
          ))}
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/20 text-center text-sm">
        {footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;