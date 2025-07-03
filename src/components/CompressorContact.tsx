import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const CompressorContact = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-compressor-navy-blue mb-6">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-compressor-navy-blue mx-auto mb-8"></div>
            <p className="text-xl text-compressor-gray max-w-4xl mx-auto">
              Estamos prontos para atender você. Fale conosco!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-compressor-light-gray/30 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-compressor-navy-blue text-white rounded-full mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-compressor-navy-blue mb-2">Telefone</h3>
              <p className="text-compressor-gray">(81) 3125-1484</p>
            </div>
            
            <div className="text-center p-6 bg-compressor-light-gray/30 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-compressor-navy-blue text-white rounded-full mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-compressor-navy-blue mb-2">WhatsApp</h3>
              <p className="text-compressor-gray">Atendimento rápido</p>
            </div>
            
            <div className="text-center p-6 bg-compressor-light-gray/30 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-compressor-navy-blue text-white rounded-full mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-compressor-navy-blue mb-2">Email</h3>
              <p className="text-compressor-gray text-sm">gerencia@pecompressores.com.br</p>
            </div>
            
            <div className="text-center p-6 bg-compressor-light-gray/30 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-compressor-navy-blue text-white rounded-full mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-compressor-navy-blue mb-2">Localização</h3>
              <p className="text-compressor-gray text-sm">BR 101 SUL KM 78,6</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompressorContact;