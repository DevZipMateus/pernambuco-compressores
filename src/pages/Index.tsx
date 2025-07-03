
import React, { useEffect } from 'react';
import CompressorNavBar from '@/components/CompressorNavBar';
import CompressorHero from '@/components/CompressorHero';
import CompressorAbout from '@/components/CompressorAbout';
import CompressorServices from '@/components/CompressorServices';
import CompressorProducts from '@/components/CompressorProducts';
import CompressorTestimonials from '@/components/CompressorTestimonials';
import CompressorLocation from '@/components/CompressorLocation';
import CompressorContact from '@/components/CompressorContact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ClickSpark from '@/components/ClickSpark';

const Index = () => {
  return (
    <ClickSpark
      sparkColor="#1e3a8a"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={6}
      duration={500}
      easing="ease-out"
      extraScale={1.2}
    >
      <main className="min-h-screen flex flex-col antialiased overflow-x-hidden relative bg-white">
        <CompressorNavBar />
        <CompressorHero />
        <CompressorAbout />
        <CompressorServices />
        <CompressorProducts />
        <CompressorTestimonials />
        <CompressorLocation />
        <CompressorContact />
        <Footer />
        <WhatsAppButton />
      </main>
    </ClickSpark>
  );
};

export default Index;
