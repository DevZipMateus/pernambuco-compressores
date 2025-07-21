
import React from 'react';
import { cn } from "@/lib/utils";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white pt-14 pb-8 relative z-10 border-t border-white/10" style={{ backgroundColor: '#0A2E76' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">
              PERNAMBUCO<span className="text-blue-300"> COMPRESSORES</span>
            </h3>
            <p className="text-white/80 mb-4 max-w-sm">
              Especialistas em compressores de ar há mais de 20 anos. Oferecemos vendas, assistência técnica e manutenção com qualidade e confiança.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#inicio" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('inicio');
                  }}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('sobre');
                  }}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('servicos');
                  }}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#produtos" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('produtos');
                  }}
                >
                  Produtos
                </a>
              </li>
              <li>
                <a 
                  href="#depoimentos" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('depoimentos');
                  }}
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a 
                  href="#localizacao" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('localizacao');
                  }}
                >
                  Localização
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contato');
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Contato
            </h3>
            <address className="not-italic text-white/80 space-y-2">
              <p>Rua dos Compressores, 456</p>
              <p>Recife - PE, 52020-000</p>
              <p>+55 (81) 3456-7890</p>
              <p>+55 (81) 99876-5432</p>
              <p>contato@pernambucocompressores.com.br</p>
            </address>
          </div>
        </div>
        
        <hr className="border-white/20 mb-8" />
        
        <div className="text-center text-white/80 text-sm">
          <p>&copy; {currentYear} Pernambuco Compressores. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
