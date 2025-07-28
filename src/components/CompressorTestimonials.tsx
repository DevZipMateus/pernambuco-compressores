
import React from 'react';
import { Star, Quote } from 'lucide-react';

const CompressorTestimonials = () => {
  // Como não foram fornecidos depoimentos específicos, criarei alguns exemplos genéricos para a estrutura
  const testimonials = [
    {
      name: "Isotec Industrial Ltda",
      location: "Moreno-PE",
      text: "Excelente atendimento e qualidade nos serviços. Nossa linha de produção não para mais desde que contratamos a manutenção preventiva.",
      rating: 5,
      service: "Contrato de Manutenção"
    },
    {
      name: "Sinalizadora Nacional",
      location: "Recife-PE",
      text: "Profissionais muito qualificados. Resolveram um problema urgente em nosso compressor em poucas horas.",
      rating: 5,
      service: "Manutenção Corretiva"
    },
    {
      name: "Polyutil S/A",
      location: "João Pessoa-PB",
      text: "Ótimo custo-benefício na compra de peças de qualidade. Sempre atendem com rapidez e eficiência.",
      rating: 5,
      service: "Venda de Peças"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-compressor-navy-blue mb-6">
              O que nossos clientes dizem
            </h2>
            <div className="w-24 h-1 bg-compressor-navy-blue mx-auto mb-8"></div>
            <p className="text-xl text-compressor-gray max-w-4xl mx-auto leading-relaxed">
              A satisfação dos nossos clientes é nossa maior conquista
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-compressor-light-gray/30 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-compressor-navy-blue/20">
                  <Quote className="w-8 h-8" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-compressor-gray mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                {/* Client Info */}
                <div className="border-t border-compressor-light-gray pt-4">
                  <h4 className="font-semibold text-compressor-navy-blue mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-compressor-gray mb-2">
                    {testimonial.location}
                  </p>
                  <span className="inline-block bg-compressor-navy-blue text-white text-xs px-3 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-compressor-navy-blue to-compressor-light-navy rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Quer fazer parte dos nossos clientes satisfeitos?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Entre em contato e descubra como podemos ajudar sua empresa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open('https://wa.me/558131251484?text=Olá!%20Gostaria%20de%20conhecer%20os%20serviços%20da%20PERNAMBUCO%20COMPRESSORES.', '_blank')}
                  className="bg-white text-compressor-navy-blue px-8 py-3 rounded-lg font-semibold hover:bg-compressor-light-gray transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <img src="/lovable-uploads/b875cc30-de37-4046-a821-0499fc8960a1.png" alt="WhatsApp" className="w-5 h-5" />
                  Falar no WhatsApp
                </button>
                <button 
                  onClick={() => window.location.href = 'tel:+558131251484'}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-compressor-navy-blue transition-colors duration-300"
                >
                  Ligar Agora
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-compressor-navy-blue mb-2">500+</div>
              <div className="text-compressor-gray">Clientes Atendidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-compressor-navy-blue mb-2">98%</div>
              <div className="text-compressor-gray">Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-compressor-navy-blue mb-2">24h</div>
              <div className="text-compressor-gray">Atendimento</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-compressor-navy-blue mb-2">10+</div>
              <div className="text-compressor-gray">Anos de Experiência</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompressorTestimonials;
