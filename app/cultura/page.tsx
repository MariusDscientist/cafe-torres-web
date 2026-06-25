import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { BRAND } from '../../content/brand';
import GeneralContactForm from '../../features/contacto/components/GeneralContactForm';
import SectionHeading from '../../shared/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Cultura, Origen y Contacto | Café Torres VIP',
  description: 'Conoce la historia detrás del café de especialidad de Café Torres VIP en Pereira. Ponte en contacto con nosotros para reservas o dudas generales.',
  openGraph: {
    title: 'Cultura y Contacto | Café Torres VIP',
    description: 'Nuestra historia en Pereira y formulario de contacto general.',
  }
};

export default function CulturaPage() {
  return (
    <div className="pt-16 pb-20">
      {/* Banner */}
      <div className="relative h-64 md:h-80 bg-stone-900 text-white flex items-center justify-center mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-stone-950/70 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=1200"
          alt="Granos de café de origen en manos de un recolector"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-20 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold italic mb-4">Cultura y Origen</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light">
            Nuestra historia y compromiso con la excelencia cafetera en el Eje Cafetero.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="rounded-3xl overflow-hidden shadow-xl relative h-[450px] bg-stone-100">
            <Image 
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800" 
              alt="Finca cafetera en las montañas de Pereira"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-amber-800 font-bold uppercase tracking-widest text-xs mb-4 block">Nuestra Historia</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 italic leading-tight">
              De la Finca a la Taza: Una Pasión Familiar
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm md:text-base">
              <p>
                Café Torres VIP nació en Pereira, Risaralda, con el propósito de honrar el esfuerzo de los caficultores de la región. Creemos que cada grano de café cuenta la historia del suelo volcánico, la lluvia andina y las manos artesanas que lo recolectan.
              </p>
              <p>
                Nuestra misión es llevar ese esfuerzo al más alto nivel técnico y sensorial. Seleccionamos únicamente microlotes excepcionales, tostados con precisión matemática y preparados bajo los estándares internacionales más rigurosos.
              </p>
              <p>
                Hoy, no solo servimos café; educamos y creamos conexiones a través de talleres premium y estaciones corporativas que transforman la cotidianidad de las oficinas colombianas.
              </p>
            </div>
          </div>
        </div>

        {/* Contact and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start py-12 border-t border-stone-200">
          <div>
            <span className="text-amber-800 font-bold uppercase tracking-widest text-xs mb-4 block">Contacto</span>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 italic">Ponte en contacto</h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              ¿Tienes alguna duda sobre nuestras experiencias, servicios B2B, o deseas visitarnos? Escríbenos directamente o visítanos en nuestro local.
            </p>

            <div className="space-y-6 text-stone-700">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-800 w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Ubicación</h4>
                  <p className="text-stone-600 text-sm">{BRAND.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-amber-800 w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Email</h4>
                  <p className="text-stone-600 text-sm">{BRAND.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-amber-800 w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Teléfono</h4>
                  <p className="text-stone-600 text-sm">{BRAND.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-amber-800 w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Horario</h4>
                  <p className="text-stone-600 text-sm">Lunes a Sábado: 8:00 AM - 8:00 PM</p>
                  <p className="text-stone-600 text-sm">Domingos: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <GeneralContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
