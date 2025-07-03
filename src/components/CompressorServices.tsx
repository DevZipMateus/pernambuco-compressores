import React from 'react';
import { 
  Settings, 
  ShoppingCart, 
  Wrench, 
  RotateCcw, 
  FileText, 
  Clock, 
  Network, 
  Gauge 
} from 'lucide-react';

const CompressorServices = () => {
  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Venda de Peças",
      description: "Peças originais e compatíveis para todos os tipos de compressores, com garantia de qualidade e procedência.",
      features: ["Peças originais", "Entrega rápida", "Compatibilidade garantida"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Óleos Lubrificantes",
      description: "Venda de óleos sintéticos, semi-sintéticos e minerais para máxima performance do seu equipamento.",
      features: ["Sintético", "Semi-sintético", "Mineral"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Máquinas Novas e Seminovas",
      description: "Venda de compressores novos e seminovas das melhores marcas do mercado, com garantia e suporte.",
      features: ["Máquinas novas", "Seminovas revisadas", "Garantia incluída"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Manutenção Preventiva",
      description: "Serviços de revisão preventiva para evitar problemas e aumentar a vida útil dos equipamentos.",
      features: ["Agendamento programado", "Relatórios detalhados", "Prevenção de falhas"]
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Manutenção Corretiva",
      description: "Reparo e correção de problemas em compressores com diagnóstico preciso e soluções eficazes.",
      features: ["Diagnóstico gratuito", "Reparo especializado", "Garantia no serviço"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Revisão de Unidade Compressora",
      description: "Revisão completa da unidade compressora com troca de componentes e ajustes necessários.",
      features: ["Revisão completa", "Componentes novos", "Testes de qualidade"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Contrato de Manutenção",
      description: "Planos de manutenção personalizados para garantir o funcionamento contínuo dos equipamentos.",
      features: ["Planos flexíveis", "Atendimento prioritário", "Custos previsíveis"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Locação de Máquinas",
      description: "Aluguel de compressores para necessidades temporárias ou testes antes da compra.",
      features: ["Locação flexível", "Equipamentos novos", "Suporte técnico"]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Instalação de Rede de Ar PPR",
      description: "Projeto e instalação de sistemas de distribuição de ar comprimido com tubulação PPR.",
      features: ["Projeto personalizado", "Instalação profissional", "Materiais de qualidade"]
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Teste Hidrostático",
      description: "Teste de pressão em reservatórios de ar comprimido para garantir segurança e conformidade.",
      features: ["Teste certificado", "Relatório técnico", "Conformidade NR-13"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-compressor-light-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-compressor-navy-blue mb-6">
              Nossos Serviços
            </h2>
            <div className="w-24 h-1 bg-compressor-navy-blue mx-auto mb-8"></div>
            <p className="text-xl text-compressor-gray max-w-4xl mx-auto leading-relaxed">
              Soluções completas em ar comprimido para sua empresa
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-compressor-light-gray/50"
              >
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-compressor-navy-blue text-white rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-compressor-navy-blue">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-compressor-gray mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-sm text-compressor-gray"
                    >
                      <div className="w-1.5 h-1.5 bg-compressor-navy-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-compressor-navy-blue rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Precisa de um orçamento personalizado?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Entre em contato conosco e receba uma proposta adequada às suas necessidades
              </p>
              <button 
                onClick={() => window.open('https://wa.me/558131251484?text=Olá!%20Gostaria%20de%20um%20orçamento%20personalizado%20para%20os%20serviços%20da%20PERNAMBUCO%20COMPRESSORES.', '_blank')}
                className="bg-white text-compressor-navy-blue px-8 py-3 rounded-lg font-semibold hover:bg-compressor-light-gray transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <img src="/lovable-uploads/b875cc30-de37-4046-a821-0499fc8960a1.png" alt="WhatsApp" className="w-5 h-5" />
                Solicitar Orçamento
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompressorServices;