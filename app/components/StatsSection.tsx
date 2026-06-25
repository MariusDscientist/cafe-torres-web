import React from 'react';
import { Users, Briefcase, MapPin, Star } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    { icon: <Users size={32} className="mx-auto text-amber-700 mb-4 transition-transform group-hover:scale-110 duration-300" />, label: "Clientes Satisfechos", val: "5000+" },
    { icon: <Briefcase size={32} className="mx-auto text-amber-700 mb-4 transition-transform group-hover:scale-110 duration-300" />, label: "Empresas Atendidas", val: "40+" },
    { icon: <MapPin size={32} className="mx-auto text-amber-700 mb-4 transition-transform group-hover:scale-110 duration-300" />, label: "Origen Pereira", val: "100%" },
    { icon: <Star size={32} className="mx-auto text-amber-700 mb-4 transition-transform group-hover:scale-110 duration-300" />, label: "Calificación Google", val: "4.9/5" },
  ];

  return (
    <section className="py-20 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="group p-6 bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              {stat.icon}
              <div className="text-3xl md:text-4xl font-serif font-black text-stone-900 mb-1">{stat.val}</div>
              <div className="text-xs md:text-sm font-bold text-stone-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
