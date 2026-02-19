import React from 'react';
import { Users, Briefcase, MapPin, Star } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: <Users className="mx-auto text-amber-700 mb-4" />, label: "Clientes Satisfechos", val: "5000+" },
    { icon: <Briefcase className="mx-auto text-amber-700 mb-4" />, label: "Empresas Atendidas", val: "40+" },
    { icon: <MapPin className="mx-auto text-amber-700 mb-4" />, label: "Origen Pereira", val: "100%" },
    { icon: <Star className="mx-auto text-amber-700 mb-4" />, label: "Calificación Google", val: "4.9/5" },
  ];

  return (
    <section className="py-20 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="p-6">
              {stat.icon}
              <div className="text-3xl font-black text-stone-900 mb-1">{stat.val}</div>
              <div className="text-sm font-bold text-stone-500 uppercase tracking-tighter">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
