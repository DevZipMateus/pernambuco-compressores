
import React from 'react';
import { CheckCircle, Users, Wrench, Award } from 'lucide-react';

const CompressorAbout = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Organização Completa",
      description: "Estrutura organizacional, física e operacional adequada para atender todas as demandas."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Profissionais Qualificados",
      description: "Equipe especializada e equipes de retaguarda sempre prontas para atendimento."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Oficina Moderna",
      description: "Equipamentos adequados para cada tipo de serviço e tecnologia de ponta."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Melhores Fornecedores",
      description: "Parcerias com os melhores fornecedores de peças do Brasil e do Mundo para garantir qualidade."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-compressor-navy-blue mb-6">
              Sobre a PERNAMBUCO COMPRESSORES
            </h2>
            <div className="w-24 h-1 bg-compressor-navy-blue mx-auto mb-8"></div>
            <p className="text-xl text-compressor-gray max-w-4xl mx-auto leading-relaxed">
              Especialista em ar comprimido com excelência em atendimento e qualidade garantida
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-bold text-compressor-navy-blue mb-6">
                Nossa Missão
              </h3>
              <div className="space-y-4 text-compressor-gray leading-relaxed">
                <p>
                  A PERNAMBUCO COMPRESSORES conta com estrutura organizacional, física e operacional completa, 
                  dispondo de investimentos permanentes em tecnologia e pessoas para proporcionar 
                  <strong className="text-compressor-navy-blue"> segurança, confiança e credibilidade</strong> em 
                  seus serviços e produtos.
                </p>
                <p>
                  Com profissionais qualificados, equipes de retaguarda, oficina moderna e equipamentos 
                  adequados para cada tipo de serviço, atuamos em conjunto com os melhores fornecedores 
                  de peças do Brasil. Com isso, atestamos a qualidade e damos 
                  <strong className="text-compressor-navy-blue"> total garantia</strong> para nossos clientes.
                </p>
                <p>
                  Trabalhamos com várias marcas de compressores, incluindo 
                  <strong className="text-compressor-navy-blue"> Atlas Copco, Chicago Pneumatic, Schulz, 
                  Ingersoll Rand</strong> entre outras marcas renomadas do mercado.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-lg p-8 text-center bg-black">
                <img 
                  src="/lovable-uploads/221fca45-5716-4c15-a43e-d0fd56fe493a.png" 
                  alt="PERNAMBUCO COMPRESSORES Logo" 
                  className="mx-auto h-32 w-auto mb-4" 
                />
                <div className="text-white font-bold text-lg tracking-wider">
                  VENDAS - SERVICE - LOCAÇÃO
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-compressor-light-gray/30">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-compressor-navy-blue text-white rounded-full mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-compressor-navy-blue mb-3">
                  {feature.title}
                </h4>
                <p className="text-compressor-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>)}
          </div>

          {/* Brands */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-compressor-navy-blue mb-8">
              Marcas com as quais trabalhamos
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-lg font-semibold text-compressor-gray">
              <span className="px-4 py-2 bg-compressor-light-gray rounded-lg">Atlas Copco</span>
              <span className="px-4 py-2 bg-compressor-light-gray rounded-lg">Chicago Pneumatic</span>
              <span className="px-4 py-2 bg-compressor-light-gray rounded-lg">Schulz</span>
              <span className="px-4 py-2 bg-compressor-light-gray rounded-lg">Ingersoll Rand</span>
              <span className="px-4 py-2 bg-compressor-light-gray rounded-lg">E outras</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompressorAbout;
