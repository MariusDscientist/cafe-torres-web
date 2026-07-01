import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Coffee, Compass, ShieldCheck, ChevronRight } from 'lucide-react';
import SectionHeading from '../../shared/ui/SectionHeading';
import CTAButton from '../../shared/ui/CTAButton';
import MenuTabs from '../../features/cafeteria/components/MenuTabs';
import CafeteriaGallery from '../../features/cafeteria/components/CafeteriaGallery';
import ShopDetails from '../../features/cafeteria/components/ShopDetails';

export const metadata: Metadata = {
  title: 'Menú de Cafetería Diaria & Experiencia In-Store | Café Torres VIP',
  description: 'Explora nuestra barra de especialidad en Pereira. Conoce nuestra carta con café de origen, repostería artesanal y explora fotos reales de nuestra experiencia in-store.',
  openGraph: {
    title: 'Menú de Cafetería & Galería de Experiencias | Café Torres VIP',
    description: 'Nuestra barra de especialidad en Pereira, carta de autor, fotos reales del espacio y barismo en vivo.',
  }
};

export default function CafeteriaPage() {
  return (
    <div className="pt-16 pb-24 bg-[#fcfbf9]">
      {/* Banner Hero */}
      <div className="relative h-[450px] bg-stone-900 text-white flex items-center justify-center mb-20 overflow-hidden">
        <div className="absolute inset-0 bg-stone-950/70 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1600"
          alt="Barra de café y repostería artesanal en Pereira"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        
        {/* Glow decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-800/20 blur-[130px] rounded-full pointer-events-none z-15" />
        
        <div className="relative z-20 text-center px-6 max-w-3xl space-y-6">
          <span className="inline-block bg-amber-500/10 border border-amber-400/20 text-amber-400 font-bold uppercase tracking-widest text-xs px-4.5 py-1.5 rounded-full">
            El Eje Cafetero en una Taza
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-stone-100 leading-tight">
            La Cafetería Diaria <br />
            <span className="font-bold italic text-amber-500 font-serif">Café Torres VIP</span>
          </h1>
          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Una barra exclusiva donde la tostión artesanal de Pereira, la calidez de nuestro equipo y el café de especialidad crean momentos inolvidables.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link href="#carta-menu">
              <CTAButton variant="primary" className="px-8 py-3.5 text-xs sm:text-sm font-bold">
                Explorar la Carta
              </CTAButton>
            </Link>
            <Link href="#visitanos">
              <CTAButton variant="secondary" className="border-stone-400 text-stone-300 hover:text-white hover:border-white px-8 py-3.5 text-xs sm:text-sm font-bold bg-transparent">
                Ver Ubicación & Horarios
              </CTAButton>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-28">
        
        {/* Section 1: In-store Photo Gallery (Ambiance & Barismo) */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-3">
              Ambiente & Pasión
            </span>
            <SectionHeading 
              title="Galería de la Experiencia"
              subtitle="Capturas reales de nuestra barra de especialidad, momentos cotidianos y el arte de nuestros baristas en Pereira."
            />
          </div>
          <CafeteriaGallery />
        </section>

        {/* Section 2: Interactive Menu Tabs */}
        <section id="carta-menu" className="scroll-mt-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-3">
              Selección de Autor
            </span>
            <SectionHeading 
              title="Carta de Especialidad"
              subtitle="Calibrada y preparada meticulosamente utilizando perfiles de tostión optimizados y granos de alta calificación."
            />
          </div>
          <MenuTabs />
        </section>

        {/* Section 3: Specialty Pillars (Atributos de Especialidad) */}
        <section className="py-16 bg-white border border-stone-200/80 rounded-[3rem] p-8 md:p-14 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {/* Pillar 1 */}
            <div className="space-y-4">
              <div className="bg-amber-800/10 text-amber-800 p-4 rounded-2xl w-fit border border-amber-800/10">
                <Coffee size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">Origen & Micro-lotes</h3>
              <p className="text-stone-500 text-sm leading-relaxed font-light">
                Trabajamos de la mano con productores de Risaralda. Tostamos semanalmente para garantizar que las notas dulces, cítricas y achocolatadas brillen en tu taza.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-4">
              <div className="bg-amber-800/10 text-amber-800 p-4 rounded-2xl w-fit border border-amber-800/10">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">Métodos en Barra</h3>
              <p className="text-stone-500 text-sm leading-relaxed font-light">
                Descubre cómo cambia el sabor según la extracción. Pide tu café en Chemex, Sifón, V60 o AeroPress y disfruta del ritual de preparación en tu mesa.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-4">
              <div className="bg-amber-800/10 text-amber-800 p-4 rounded-2xl w-fit border border-amber-800/10">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">Espacio Cowork & Relax</h3>
              <p className="text-stone-500 text-sm leading-relaxed font-light">
                Diseñamos un oasis cómodo con excelente conexión Wi-Fi, aire climatizado y rincones tranquilos. El lugar perfecto para trabajar, reunirse o leer sin prisas.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Contact, Location & Hours */}
        <section id="visitanos" className="scroll-mt-24">
          <ShopDetails />
        </section>

        {/* Bottom Call-To-Action (Experiencias VIP Link) */}
        <section className="bg-stone-900 text-white rounded-[3rem] p-10 md:p-16 border border-stone-800 relative overflow-hidden text-center max-w-5xl mx-auto shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,#78350f_0%,transparent_100%)] opacity-30 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">¿Quieres ir más allá?</span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold italic leading-tight">Vive una Inmersión Sensorial Completa</h3>
            <p className="text-stone-300 text-sm md:text-base font-light leading-relaxed">
              No te quedes solo con una taza. Únete a nuestras cataciones guiadas a ciegas, aprende barismo profesional y diseña tu propio blend de café de autor.
            </p>
            <div className="pt-4">
              <Link href="/experiencias" className="inline-block">
                <CTAButton variant="secondary" className="border-amber-500 text-amber-400 hover:bg-amber-600 hover:text-stone-950 px-8 py-3.5 text-sm font-bold bg-transparent">
                  Ver Experiencias In-Store <ChevronRight size={16} className="inline ml-1" />
                </CTAButton>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
