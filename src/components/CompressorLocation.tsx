import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const CompressorLocation = () => {
  return (
    <section id="localizacao" className="py-20 bg-compressor-light-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-compressor-navy-blue mb-6">
              Nossa Localização
            </h2>
            <div className="w-24 h-1 bg-compressor-navy-blue mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-compressor-navy-blue mb-6">Visite nossa loja</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-compressor-navy-blue mt-1" />
                  <div>
                    <h4 className="font-semibold text-compressor-navy-blue mb-1">Endereço</h4>
                    <p className="text-compressor-gray">ROD. BR 101 SUL KM 78,6 SN LOJA B</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-compressor-navy-blue mt-1" />
                  <div>
                    <h4 className="font-semibold text-compressor-navy-blue mb-1">Telefone</h4>
                    <p className="text-compressor-gray">(81) 3125-1484</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-compressor-navy-blue mt-1" />
                  <div>
                    <h4 className="font-semibold text-compressor-navy-blue mb-1">Email</h4>
                    <p className="text-compressor-gray">gerencia@pecompressores.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-compressor-navy-blue mt-1" />
                  <div>
                    <h4 className="font-semibold text-compressor-navy-blue mb-1">Horário de Funcionamento</h4>
                    <p className="text-compressor-gray">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-compressor-gray">Sábado: 8h às 12h</p>
                    <p className="text-compressor-gray">Emergência: 24h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-compressor-navy-blue mb-4">Entre em Contato</h3>
              <p className="text-compressor-gray mb-6">
                Estamos prontos para atender suas necessidades em ar comprimido
              </p>
              <div className="space-y-4">
                <button 
                  onClick={() => window.open('https://wa.me/558131251484', '_blank')}
                  className="w-full bg-compressor-navy-blue text-white py-3 rounded-lg font-semibold hover:bg-compressor-dark-navy transition-colors flex items-center justify-center gap-2"
                >
                  <img src="/lovable-uploads/b875cc30-de37-4046-a821-0499fc8960a1.png" alt="WhatsApp" className="w-5 h-5" />
                  WhatsApp
                </button>
                <button 
                  onClick={() => window.location.href = 'tel:+558131251484'}
                  className="w-full border-2 border-compressor-navy-blue text-compressor-navy-blue py-3 rounded-lg font-semibold hover:bg-compressor-navy-blue hover:text-white transition-colors"
                >
                  Ligar Agora
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompressorLocation;