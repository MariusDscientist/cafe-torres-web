import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import CTAButton from '../../shared/ui/CTAButton';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}) => {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-[#0c0a09] text-white pt-24 pb-16 overflow-hidden">
      {/* Background gradients and glows */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-900/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-amber-800/10 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Editorial Typography */}
        <div className="lg:col-span-7 text-left space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-amber-950/40 border border-amber-900/40 px-4 py-1.5 rounded-full backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              Cosecha de Origen · Pereira
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-light leading-[1.05] tracking-tight text-stone-100">
            Elevamos la cultura <br />
            <span className="font-bold italic text-amber-500 font-serif">cafetera</span> a un <br />
            nivel <span className="font-extrabold text-stone-50">VIP</span>
          </h1>

          <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            {subtitle} Descubre perfiles sensoriales únicos cosechados con orgullo en el corazón del Eje Cafetero.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/experiencias" className="w-full sm:w-auto">
              <CTAButton variant="primary" className="w-full sm:w-auto px-10 py-4 text-base font-bold bg-amber-700 hover:bg-amber-600 border-none transition-all shadow-amber-900/20 shadow-lg">
                {primaryCTA} <ChevronRight size={18} className="ml-1" />
              </CTAButton>
            </Link>
            <Link href="/estaciones" className="w-full sm:w-auto">
              <CTAButton variant="secondary" className="w-full sm:w-auto px-10 py-4 text-base font-bold bg-transparent border-stone-700 hover:border-amber-700 text-stone-300 hover:bg-stone-900/30">
                {secondaryCTA}
              </CTAButton>
            </Link>
          </div>
        </div>

        {/* Right column: Premium Overlapping Image Frame */}
        <div className="lg:col-span-5 relative w-full h-[400px] md:h-[500px] lg:h-[550px] shrink-0 mt-8 lg:mt-0 flex justify-center items-center">
          {/* Decorative frame elements */}
          <div className="absolute inset-4 border border-amber-900/30 rounded-[2rem] transform translate-x-4 translate-y-4 -rotate-2 pointer-events-none" />
          
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-stone-850 rotate-1 group">
            <Image 
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1200" 
              alt="Preparación premium de espresso por barista de Café Torres VIP" 
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/50 via-transparent to-transparent" />
            
            {/* In-image label */}
            <div className="absolute bottom-6 left-6 bg-[#0c0a09]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-stone-800 text-xs">
              <span className="block text-stone-400 font-bold uppercase tracking-wider">Variedad</span>
              <span className="font-serif font-bold text-amber-400">Microlote Castillo Rosado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
