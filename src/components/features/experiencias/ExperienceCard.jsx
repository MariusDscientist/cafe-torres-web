import React from 'react';
import { ChevronRight } from 'lucide-react';
import CTAButton from '../../ui/CTAButton';

const ExperienceCard = ({ experience }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={experience.image} 
        alt={experience.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-amber-900">
        {experience.price}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-stone-900 mb-2">{experience.title}</h3>
      <p className="text-stone-600 mb-6 line-clamp-2 text-sm leading-relaxed">{experience.desc}</p>
      <CTAButton variant="ghost" className="p-0">
        Ver detalles <ChevronRight size={18} />
      </CTAButton>
    </div>
  </div>
);

export default ExperienceCard;
