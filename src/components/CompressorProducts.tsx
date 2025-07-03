import React, { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CompressorProducts = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const productImages = [
    {
      src: '/lovable-uploads/6a5a5741-e6b8-4cda-ae9d-e9633e7c7368.png',
      title: 'Kit de Reparo',
      description: 'Kits completos de reparo para compressores'
    },
    {
      src: '/lovable-uploads/50ebba6d-bc0d-48fa-97b9-b51e356bcbf0.png',
      title: 'Sistema de Tubulação',
      description: 'Sistemas de ar comprimido com tubulação especializada'
    },
    {
      src: '/lovable-uploads/dd5621a8-e1dc-4151-b0ab-d69e2bfdd32d.png',
      title: 'Compressor Industrial',
      description: 'Compressores de alta performance para uso industrial'
    },
    {
      src: '/lovable-uploads/e037214a-4b8b-419d-af32-ede23e5489c8.png',
      title: 'Kit de Vedação',
      description: 'Kits de vedação e anéis para manutenção'
    },
    {
      src: '/lovable-uploads/83e5ab26-6459-4aa5-991a-bc114041a849.png',
      title: 'Tubulação de Ar',
      description: 'Sistemas completos de distribuição de ar comprimido'
    },
    {
      src: '/lovable-uploads/335e9b32-3794-4f1f-a2b2-f33eaa3eb978.png',
      title: 'Componentes Internos',
      description: 'Peças internas de precisão para compressores'
    },
    {
      src: '/lovable-uploads/8c4fd8ee-8e15-44bb-869d-653b7a1447f7.png',
      title: 'Engrenagens',
      description: 'Engrenagens e componentes mecânicos especializados'
    },
    {
      src: '/lovable-uploads/35ad9820-3761-458b-b99a-8547198e2191.png',
      title: 'Filtros e Acessórios',
      description: 'Filtros de ar e óleo, separadores e acessórios'
    },
    {
      src: '/lovable-uploads/7a3a5699-661c-4264-832c-23c818d92a4e.png',
      title: 'Instalação Industrial',
      description: 'Projetos completos de instalação industrial'
    }
  ];

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

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={el => elementsRef.current[0] = el}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 opacity-0 text-compressor-navy-blue"
            style={{ animationDelay: '200ms' }}
          >
            PRODUTOS E SERVIÇOS
          </h2>
          <p 
            ref={el => elementsRef.current[1] = el}
            className="text-compressor-gray text-lg sm:text-xl max-w-3xl mx-auto opacity-0"
            style={{ animationDelay: '400ms' }}
          >
            Oferecemos uma linha completa de produtos e serviços para sistemas de ar comprimido, 
            desde componentes individuais até projetos completos de instalação.
          </p>
        </div>

        <div 
          ref={el => elementsRef.current[2] = el}
          className="max-w-4xl mx-auto opacity-0"
          style={{ animationDelay: '600ms' }}
        >
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {productImages.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.src}
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-compressor-navy-blue mb-2">
                          {product.title}
                        </h3>
                        <p className="text-compressor-gray text-sm">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div 
          ref={el => elementsRef.current[3] = el}
          className="text-center mt-12 opacity-0"
          style={{ animationDelay: '800ms' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-compressor-navy-blue mb-2">500+</div>
              <div className="text-compressor-gray">Produtos em Estoque</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-compressor-navy-blue mb-2">24h</div>
              <div className="text-compressor-gray">Entrega Emergencial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-compressor-navy-blue mb-2">100%</div>
              <div className="text-compressor-gray">Qualidade Garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompressorProducts;