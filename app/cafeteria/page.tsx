import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { CAFETERIA } from '../../content/cafeteria';
import SectionHeading from '../../shared/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Menú de Cafetería Diaria | Café de Especialidad en Pereira',
  description: 'Explora nuestra selección diaria en Pereira: espresso doble, cappuccino VIP, cold brew y repostería artesanal infusionada con café de origen.',
  openGraph: {
    title: 'Menú de Cafetería Diaria | Café Torres VIP',
    description: 'Menú de café de especialidad y repostería artesanal en Pereira.',
  }
};

export default function CafeteriaPage() {
  const categories = [
    { key: 'bebidas-calientes', name: 'Bebidas Calientes', desc: 'Espressos y filtrados calientes preparados con granos seleccionados.' },
    { key: 'bebidas-frias', name: 'Bebidas Frías', desc: 'Preparaciones refrescantes y cold brew de extracción prolongada.' },
    { key: 'reposteria', name: 'Repostería Artesanal', desc: 'Acompañamientos dulces horneados diariamente en casa.' },
  ];

  return (
    <div className="pt-16 pb-20">
      {/* Banner */}
      <div className="relative h-64 md:h-80 bg-stone-900 text-white flex items-center justify-center mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-stone-950/70 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200"
          alt="Taza de cappuccino y repostería en mesa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-20 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold italic mb-4">Menú de Cafetería</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light">
            El sabor único del café de origen y delicias dulces en el corazón de Pereira.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading 
          title="Nuestra Selección de Autor"
          subtitle="Cada taza es calibrada y extraída por baristas apasionados utilizando perfiles de tostión optimizados."
        />

        <div className="space-y-16">
          {categories.map(cat => {
            const items = CAFETERIA.items.filter(item => item.category === cat.key);
            return (
              <div key={cat.key} className="bg-white p-8 md:p-10 rounded-[2rem] border border-stone-200 shadow-sm">
                <div className="border-b border-stone-100 pb-6 mb-8">
                  <h3 className="text-2xl font-serif font-bold text-amber-900 mb-2">{cat.name}</h3>
                  <p className="text-stone-500 text-sm">{cat.desc}</p>
                </div>

                <div className="space-y-6">
                  {items.map((item, index) => (
                    <div key={index} className="flex justify-between items-start gap-4 pb-6 border-b border-stone-50 last:border-b-0 last:pb-0">
                      <div>
                        <h4 className="font-bold text-stone-900 text-base md:text-lg mb-1">{item.name}</h4>
                        <p className="text-stone-500 text-sm leading-relaxed max-w-xl">{item.desc}</p>
                      </div>
                      <span className="font-serif font-black text-amber-800 shrink-0 text-base md:text-lg">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
