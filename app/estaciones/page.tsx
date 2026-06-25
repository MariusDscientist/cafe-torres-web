import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { STATIONS } from '../../content/stations';
import StationQuoteForm from '../../features/estaciones/components/StationQuoteForm';
import SectionHeading from '../../shared/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Estaciones de Café Corporativas | Soluciones B2B en Pereira',
  description: 'Instala estaciones de café premium de especialidad en tus oficinas en Pereira. Equipamiento italiano de espresso, baristas profesionales y suministro de granos de origen.',
  openGraph: {
    title: 'Estaciones de Café Corporativas B2B | Café Torres VIP',
    description: 'Servicio de café de especialidad para oficinas y eventos empresariales en Pereira.',
  }
};

export default function EstacionesPage() {
  return (
    <div className="pt-16 pb-20">
      {/* Banner */}
      <div className="relative h-64 md:h-80 bg-stone-900 text-white flex items-center justify-center mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-stone-950/70 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200"
          alt="Estación de café corporativa moderna"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-20 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold italic mb-4">Estaciones Corporativas</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light">
            Lleva el estándar VIP y la cultura del café de especialidad a tus espacios de trabajo.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <SectionHeading 
            title="Bienestar e Inspiración en Cada Taza"
            subtitle="Ofrecemos un servicio llave en mano que se adapta al tamaño de tu empresa para transformar las pausas de café en experiencias memorables de productividad y networking."
          />
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {STATIONS.features.map((feat, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-stone-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-stone-150 mb-6">
                <CheckCircle className="text-amber-800 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{feat.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action and Quote Form */}
        <div id="cotizar" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-stone-950 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden scroll-mt-24">
          <div className="relative z-10 text-white">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Cotización a la Medida</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-6 leading-snug">
              ¿Listo para transformar tu oficina?
            </h2>
            <p className="text-stone-400 mb-8 leading-relaxed">
              Diligencia el formulario de cotización. Analizaremos el número de colaboradores y el volumen de consumo estimado para presentarte una oferta personalizada en menos de 24 horas hábiles.
            </p>
            <div className="space-y-4 text-sm text-stone-300">
              <p className="flex items-center gap-3">✓ Suministro programado semanalmente</p>
              <p className="flex items-center gap-3">✓ Mantenimiento técnico preventivo incluido</p>
              <p className="flex items-center gap-3">✓ Flexibilidad sin cláusulas de permanencia abusivas</p>
            </div>
          </div>
          <div className="relative z-10">
            <StationQuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
