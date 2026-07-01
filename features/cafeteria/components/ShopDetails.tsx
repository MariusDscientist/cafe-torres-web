import React from 'react';
import { Clock, MapPin, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { BRAND } from '../../../content/brand';

export default function ShopDetails() {
  const hours = [
    { days: 'Lunes a Sábado', hours: '8:00 AM - 9:00 PM' },
    { days: 'Domingos y Festivos', hours: '9:00 AM - 8:00 PM' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
      {/* Horarios y Datos de Contacto */}
      <div className="bg-stone-900 text-stone-100 rounded-[2.5rem] p-8 md:p-12 border border-stone-800 flex flex-col justify-between space-y-8 relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-amber-800/10 rounded-full blur-[60px]" />
        
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">Contacto & Visitas</span>
            <h3 className="text-3xl font-serif font-bold text-white">¿Dónde encontrarnos?</h3>
            <p className="text-stone-400 text-sm font-light">Ven a disfrutar del mejor café de especialidad en Pereira.</p>
          </div>

          <div className="space-y-5 pt-4">
            {/* Ubicación */}
            <div className="flex gap-4 items-start">
              <div className="bg-amber-800/20 text-amber-400 p-3 rounded-2xl border border-amber-800/30 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Dirección de la Barra</h4>
                <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                  Calle de la Especialidad, Corazón de Pereira, Risaralda
                </p>
              </div>
            </div>

            {/* Horarios */}
            <div className="flex gap-4 items-start">
              <div className="bg-amber-800/20 text-amber-400 p-3 rounded-2xl border border-amber-800/30 shrink-0">
                <Clock size={20} />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-white text-sm">Horarios de Atención</h4>
                <div className="space-y-1">
                  {hours.map((h, i) => (
                    <div key={i} className="flex justify-between gap-6 text-xs text-stone-400">
                      <span className="font-semibold">{h.days}:</span>
                      <span>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Teléfono / WhatsApp */}
            <div className="flex gap-4 items-start">
              <div className="bg-amber-800/20 text-amber-400 p-3 rounded-2xl border border-amber-800/30 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Línea de la Barra</h4>
                <p className="text-stone-400 text-xs mt-1">
                  {BRAND.phone} / {BRAND.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="pt-6 border-t border-stone-800 flex flex-wrap gap-4">
          <a
            href={`https://wa.me/${BRAND.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25d366]/90 hover:bg-[#25d366] text-white px-5 py-3 rounded-full text-xs font-bold transition-colors"
          >
            <MessageSquare size={16} /> Escríbenos por WhatsApp
          </a>
        </div>
      </div>

      {/* Mapa Visual Premium */}
      <div className="relative rounded-[2.5rem] overflow-hidden border border-stone-200 shadow-sm group min-h-[350px]">
        {/* Background static map or aesthetic texture simulating a stylized vector map */}
        <div className="absolute inset-0 bg-stone-900 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />
        
        {/* Visual Map content */}
        <div className="absolute inset-0 bg-stone-950 flex flex-col items-center justify-center p-8 text-center space-y-4">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <span className="absolute animate-ping inline-flex h-12 w-12 rounded-full bg-amber-500 opacity-20" />
            <div className="relative bg-amber-900 border-2 border-amber-400 p-4 rounded-full text-amber-400 shadow-lg">
              <MapPin size={28} />
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-white font-serif text-xl font-bold">Pereira, Eje Cafetero</h4>
            <p className="text-stone-400 text-xs max-w-xs mx-auto">
              Ubicación privilegiada en la capital del café de especialidad de Risaralda.
            </p>
          </div>
          
          <a
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-900 text-amber-50 hover:bg-amber-800 px-6 py-3 rounded-full text-xs font-bold transition-all shadow-md group-hover:-translate-y-1"
          >
            Abrir en Google Maps <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
