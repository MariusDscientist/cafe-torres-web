import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ChevronRight, Star, Quote } from 'lucide-react';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import CTAButton from '../shared/ui/CTAButton';
import SectionHeading from '../shared/ui/SectionHeading';
import { EXPERIENCES } from '../content/experiences';
import { STATIONS } from '../content/stations';

export const metadata: Metadata = {
  title: 'Café Torres VIP | Café de Origen en Pereira',
  description: 'Descubre Café Torres VIP en Pereira. Disfruta de la mejor cafetería local, reserva experiencias sensoriales premium de catación y barismo, o cotiza estaciones de café B2B corporativas.',
  openGraph: {
    title: 'Café Torres VIP | Café de Origen en Pereira',
    description: 'Café de especialidad, experiencias sensoriales y servicios B2B en Risaralda.',
  }
};

export default function HomePage() {
  const experiencesPreview = EXPERIENCES.slice(0, 2);

  return (
    <>
      <HeroSection 
        title="Elevamos la Cultura Cafetera a un Nivel VIP"
        subtitle="Desde la taza diaria en Pereira hasta estaciones empresariales y experiencias sensoriales premium."
        primaryCTA="Reserva una Experiencia"
        secondaryCTA="Servicios Corporativos"
      />

      <div className="bg-[#fcfbf9]">
        <StatsSection />

        {/* Section: Sensory Experiences Preview (Asymmetric showcase) */}
        <section className="py-28 bg-white border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="max-w-2xl text-left">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-3">
                  Experiencias Sensoriales
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-stone-900 leading-tight">
                  Inmersiones en la <br />
                  <span className="font-bold italic text-amber-900 font-serif">cultura del café</span>
                </h2>
              </div>
              <p className="text-stone-500 text-base max-w-sm mt-4 md:mt-0 font-light leading-relaxed">
                Diseñadas para calibrar tu paladar y descubrir los secretos de los mejores granos de Risaralda en nuestra barra exclusiva.
              </p>
            </div>
            
            {/* Asymmetric layout: first card is lower, second card is higher (via translate) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16 items-start">
              {experiencesPreview.map((exp, index) => {
                const isSecond = index === 1;
                return (
                  <div 
                    key={exp.id} 
                    className={`group bg-stone-50 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-200/60 ${
                      isSecond ? 'md:translate-y-8' : ''
                    }`}
                  >
                    <div className="relative h-72 overflow-hidden bg-stone-100">
                      <Image 
                        src={exp.image}
                        alt={exp.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-750 group-hover:scale-105"
                      />
                      <div className="absolute top-6 right-6 bg-[#0c0a09]/95 text-amber-400 font-bold text-sm px-4 py-1.5 rounded-full border border-stone-850 shadow-md">
                        {exp.price}
                      </div>
                    </div>
                    <div className="p-8 space-y-4">
                      <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                        {exp.subtitle}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-stone-900 leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed font-light line-clamp-3">
                        {exp.desc}
                      </p>
                      
                      <div className="pt-4 border-t border-stone-200/50 flex justify-between items-center text-xs font-semibold text-stone-500">
                        <span>Duración: {exp.duration}</span>
                        <Link href="/experiencias" className="text-amber-800 hover:text-amber-950 font-bold flex items-center gap-1">
                          Ver detalles <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-16">
              <Link href="/experiencias" className="inline-block">
                <CTAButton variant="primary" className="px-10 py-4">
                  Reservar en el Catálogo <ChevronRight size={18} />
                </CTAButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Section: B2B Coffee Stations (Sleek Dark Card) */}
        <section className="py-24 bg-[#0c0a09] text-white relative overflow-hidden">
          {/* Radial Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-800/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-950/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Text column (Col span 7) */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <span className="inline-block bg-amber-600/15 border border-amber-500/20 text-amber-400 font-bold uppercase tracking-widest text-xs px-4 py-1.5 rounded-full">
                  Soluciones Empresariales
                </span>
                
                <h2 className="text-4xl md:text-5xl font-serif font-light text-stone-100 leading-tight">
                  Lleva la cultura <br />
                  <span className="font-bold italic text-amber-500 font-serif">VIP</span> a tu oficina
                </h2>
                
                <p className="text-stone-400 text-lg font-light leading-relaxed max-w-xl">
                  {STATIONS.subtitle} Creamos un punto de encuentro premium para inspirar a tus colaboradores e impresionar a tus clientes de Pereira.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {STATIONS.features.slice(0, 4).map((feat, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-stone-200 text-sm">{feat.title}</h4>
                        <p className="text-stone-500 text-xs mt-1 leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <Link href="/estaciones">
                    <CTAButton variant="secondary" className="border-amber-500 text-amber-400 hover:bg-amber-600 hover:text-stone-950 px-8 py-3.5 text-sm md:text-base font-bold bg-transparent">
                      Solicitar Catálogo Corporativo
                    </CTAButton>
                  </Link>
                </div>
              </div>

              {/* Image Frame Column (Col span 5) */}
              <div className="lg:col-span-5 relative w-full h-[400px] shrink-0 flex justify-center items-center">
                <div className="absolute inset-4 border border-amber-600/20 rounded-[2.5rem] transform translate-x-4 translate-y-4 rotate-2 pointer-events-none" />
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-850 -rotate-1">
                  <Image 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" 
                    alt="Estación de café automatizada en oficinas corporativas" 
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: Social Proof (Refined Letterpress Reviews) */}
        <section className="py-28 bg-[#faf9f6]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-3">
              Testimonios de Clientes
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-stone-900 mb-16 leading-tight">
              Respaldado por amantes del <br />
              <span className="font-bold italic text-amber-900 font-serif">buen café</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              
              <div className="p-10 bg-white rounded-3xl border border-stone-200 shadow-sm relative space-y-6">
                <Quote className="absolute top-6 right-6 text-stone-100" size={54} />
                <div className="flex gap-1 text-amber-500 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-amber-500" />
                  ))}
                </div>
                <p className="text-stone-600 italic leading-relaxed text-sm md:text-base font-light relative z-10">
                  "La experiencia de catación con Café Torres cambió por completo mi forma de consumir café. Ahora puedo apreciar la acidez y notas frutales de los granos locales de Pereira. ¡Totalmente recomendado!"
                </p>
                <div className="border-t border-stone-100 pt-4 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-900 text-sm">Alejandro Gómez</div>
                    <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Cliente Catación Premium</div>
                  </div>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded uppercase tracking-wider">B2C</span>
                </div>
              </div>

              <div className="p-10 bg-white rounded-3xl border border-stone-200 shadow-sm relative space-y-6">
                <Quote className="absolute top-6 right-6 text-stone-100" size={54} />
                <div className="flex gap-1 text-amber-500 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-amber-500" />
                  ))}
                </div>
                <p className="text-stone-600 italic leading-relaxed text-sm md:text-base font-light relative z-10">
                  "Implementamos la estación de café corporativa de Café Torres en nuestra oficina y la satisfacción del equipo es total. La calidad del espresso y la calibración del equipo semanal es intachable."
                </p>
                <div className="border-t border-stone-100 pt-4 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-900 text-sm">Valentina Henao</div>
                    <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Dir. de Recursos Humanos</div>
                  </div>
                  <span className="text-[10px] bg-stone-100 text-stone-600 font-bold px-2 py-0.5 rounded uppercase tracking-wider">B2B</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
