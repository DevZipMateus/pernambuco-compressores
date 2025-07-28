import React, { useEffect, useRef } from 'react';
import { ArrowDown, Phone, MessageCircle } from 'lucide-react';

const CompressorHero = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        elementsRef.current.forEach((el) => {
          if (el) observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/558131251484?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20PERNAMBUCO%20COMPRESSORES.', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+558131251484';
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/e57dd087-8cc9-499a-92f6-37b1c9083392.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay para melhor contraste */}
      <div className="absolute inset-0 bg-compressor-navy-blue/80"></div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Cpath d='M30 20v20M20 30h20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Logo Principal */}
          <div 
            ref={el => elementsRef.current[0] = el}
            className="opacity-0 mb-8"
            style={{ animationDelay: '200ms' }}
          >
            <img 
              src="/lovable-uploads/221fca45-5716-4c15-a43e-d0fd56fe493a.png" 
              alt="PERNAMBUCO COMPRESSORES" 
              className="mx-auto h-24 sm:h-32 lg:h-40 w-auto mb-6"
            />
          </div>
          
          {/* Título principal */}
          <h1 
            ref={el => elementsRef.current[1] = el}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 opacity-0 leading-tight text-white"
            style={{ animationDelay: '400ms' }}
          >
            ATENDER COM QUALIDADE
            <br />
            <span className="text-white">ESSE É O NOSSO OBJETIVO</span>
          </h1>
          
          {/* Subtítulo */}
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-8 opacity-0 leading-relaxed"
            style={{ animationDelay: '600ms' }}
          >
            Profissionais qualificados, equipamentos modernos e parcerias com os melhores fornecedores do Brasil. 
            <span className="block mt-2 font-semibold text-white">
              Atlas Copco • Chicago Pneumatic • Schulz • Ingersoll Rand
            </span>
          </p>

          {/* Call to Actions */}
          <div 
            ref={el => elementsRef.current[3] = el}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 opacity-0 mb-12"
            style={{ animationDelay: '800ms' }}
          >
            <button 
              onClick={handleWhatsAppClick}
              className="bg-compressor-navy-blue hover:bg-compressor-dark-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            >
              <img src="/lovable-uploads/b875cc30-de37-4046-a821-0499fc8960a1.png" alt="WhatsApp" className="w-6 h-6" />
              FALE NO WHATSAPP
            </button>
            <button 
              onClick={handlePhoneClick}
              className="bg-white hover:bg-compressor-light-gray text-compressor-navy-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-compressor-navy-blue flex items-center justify-center gap-3"
            >
              <Phone size={24} />
              (81) 3125-1484
            </button>
          </div>

          {/* Características principais */}
          <div 
            ref={el => elementsRef.current[4] = el}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto opacity-0"
            style={{ animationDelay: '1000ms' }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">+15</div>
              <div className="text-white/80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">24h</div>
              <div className="text-white/80">Atendimento Emergencial</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Garantia nos Serviços</div>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Scroll para próxima seção"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default CompressorHero;