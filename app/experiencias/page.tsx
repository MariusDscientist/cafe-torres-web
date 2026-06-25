import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import ExperiencesContainer from './ExperiencesContainer';

export const metadata: Metadata = {
  title: 'Experiencias Cafeteras VIP | Catación y Barismo en Pereira',
  description: 'Explora y reserva nuestras cataciones de origen, talleres de barismo y tours privados en Pereira. Vive la verdadera cultura del café de especialidad con Café Torres VIP.',
  openGraph: {
    title: 'Experiencias Cafeteras VIP | Café Torres VIP',
    description: 'Catación de origen, talleres de barismo y tours privados de café en Pereira.',
  }
};

export default function ExperienciasPage() {
  return (
    <div className="pt-16 pb-20">
      {/* Banner de Página */}
      <div className="relative h-64 md:h-80 bg-stone-900 text-white flex items-center justify-center mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-stone-950/70 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200"
          alt="Preparación manual de café de especialidad"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-20 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold italic mb-4">Experiencias Exclusivas</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light">
            Sumérgete en la historia, aroma y sabor del café de especialidad de Risaralda.
          </p>
        </div>
      </div>

      <ExperiencesContainer />
    </div>
  );
}
