"use client";

import React, { useState, useRef } from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import { EXPERIENCES, COMPARISON_TABLE } from '../../content/experiences';
import ExperienceCard from '../../features/experiencias/components/ExperienceCard';
import ExperienceForm from '../../features/experiencias/components/ExperienceForm';
import SectionHeading from '../../shared/ui/SectionHeading';

const ExperiencesContainer: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>('');
  const formRef = useRef<HTMLDivElement>(null);

  const handleSelectExperience = (id: string) => {
    setSelectedExpId(id);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getStatusIconOrText = (value: string) => {
    if (value === "Incluido") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
          <Check size={14} /> Incluido
        </span>
      );
    }
    if (value === "No incluido") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-400 border border-stone-200">
          <X size={14} /> No incluido
        </span>
      );
    }
    return <span className="text-sm font-medium text-stone-700">{value}</span>;
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Cards Catalog */}
      <SectionHeading 
        title="Nuestras Experiencias In-Store" 
        subtitle="Diseñamos experiencias inmersivas dentro de nuestra tienda en Pereira para compartir la alta cultura del café de especialidad."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
        {EXPERIENCES.map(exp => (
          <ExperienceCard 
            key={exp.id} 
            experience={exp} 
            onSelect={handleSelectExperience}
          />
        ))}
      </div>

      {/* Comparison Table Section */}
      <section className="mb-24 py-16 bg-stone-50 rounded-[2.5rem] border border-stone-200 p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-800/5 blur-[80px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100/50 px-3 py-1 rounded-full mb-3">
              <Sparkles size={12} /> Comparar Planes
            </span>
            <h3 className="text-3xl font-serif font-bold text-stone-900">Cuadro Comparativo</h3>
            <p className="text-stone-500 text-sm mt-2 max-w-lg mx-auto">Compara los beneficios de cada inmersión y elige la ideal para tu grupo.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-900 text-white border-b border-stone-850">
                  <th className="p-5 font-serif text-base font-bold">{COMPARISON_TABLE.headers[0]}</th>
                  <th className="p-5 font-serif text-base font-bold text-center">{COMPARISON_TABLE.headers[1]}</th>
                  <th className="p-5 font-serif text-base font-bold text-center bg-amber-950/20 text-amber-400">{COMPARISON_TABLE.headers[2]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {COMPARISON_TABLE.rows.map((row, i) => (
                  <tr key={i} className="hover:bg-stone-50/50 transition-colors">
                    <td className="p-5 text-sm font-bold text-stone-900">{row.name}</td>
                    <td className="p-5 text-center text-sm">{getStatusIconOrText(row.arriero)}</td>
                    <td className="p-5 text-center text-sm bg-amber-500/[0.02]">{getStatusIconOrText(row.hacendado)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200/80 p-5 rounded-2xl max-w-3xl mx-auto text-center text-sm text-stone-700 leading-relaxed">
            <p>
              💡 <strong>Registro de Fórmulas en el Legado del Hacendado:</strong> Al diseñar tu blend, registramos tu receta personalizada en nuestro sistema. Así, podrás solicitar tu café exclusivo en tienda o a domicilio de por vida.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <div ref={formRef} className="max-w-3xl mx-auto py-12 scroll-mt-24">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-serif font-bold italic text-stone-900">Reserva Tu Fecha Hoy</h3>
          <p className="text-stone-500 mt-2">Al cerrar la agenda para tu grupo, nuestra barra trabaja en exclusiva para ustedes.</p>
        </div>
        <ExperienceForm initialExperienceId={selectedExpId} />
      </div>
    </div>
  );
};

export default ExperiencesContainer;
