import React from 'react';
import { CheckCircle } from 'lucide-react';
import CTAButton from '../ui/CTAButton';

const B2BSection = () => {
  return (
    <section id="estaciones" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-amber-800/20 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-16">
          <div>
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Soluciones Empresariales</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic">Lleva la cultura VIP a tu oficina</h2>
            <p className="text-stone-400 text-lg mb-8 leading-relaxed">
              Nuestras estaciones de café automáticas y de autor mejoran el clima organizacional y la productividad. Calidad barista en cada reunión.
            </p>
            <div className="space-y-4 mb-10 text-stone-300">
              <div className="flex items-center gap-3"><CheckCircle size={18} className="text-amber-500"/> Servicio técnico 24/7</div>
              <div className="flex items-center gap-3"><CheckCircle size={18} className="text-amber-500"/> Suministro recurrente de granos premium</div>
              <div className="flex items-center gap-3"><CheckCircle size={18} className="text-amber-500"/> Capacitación para personal</div>
            </div>
            <CTAButton variant="secondary" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-stone-900">
              Solicitar Catálogo Corporativo
            </CTAButton>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" 
              alt="Office Coffee Station" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
