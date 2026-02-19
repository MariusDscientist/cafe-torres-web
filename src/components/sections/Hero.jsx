import React from 'react';
import { ChevronRight } from 'lucide-react';
import CTAButton from '../ui/CTAButton';
import { CONTENT } from '../../content/content';

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-stone-900/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1600" 
          alt="Hero Background" 
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="relative z-20 max-w-4xl px-6">
        <span className="inline-block bg-amber-600/20 backdrop-blur-sm text-amber-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-amber-600/30">
          Especialistas en Café de Origen
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]">
          {CONTENT.home.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-light italic">
          {CONTENT.home.hero.subtitle}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <CTAButton variant="primary" className="w-full md:w-auto px-10 py-4 text-lg">
            {CONTENT.home.hero.primaryCTA} <ChevronRight size={20} />
          </CTAButton>
          <CTAButton variant="secondary" className="w-full md:w-auto px-10 py-4 text-lg bg-transparent border-white text-white hover:bg-white/10 hover:text-white">
            {CONTENT.home.hero.secondaryCTA}
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
