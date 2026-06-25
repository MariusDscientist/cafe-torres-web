import React from 'react';
import Image from 'next/image';
import { ChevronRight, Clock, Users as UsersIcon, Check, Sparkles } from 'lucide-react';
import CTAButton from '../../../shared/ui/CTAButton';
import { Experience } from '../../../content/experiences';

export interface ExperienceCardProps {
  experience: Experience;
  onSelect?: (id: string) => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onSelect }) => (
  <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-stone-200/80 flex flex-col h-full">
    <div className="relative h-64 overflow-hidden bg-stone-100 shrink-0">
      <Image 
        src={experience.image} 
        alt={experience.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute top-4 right-4 bg-amber-800 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
        {experience.price}
      </div>
    </div>
    
    <div className="p-8 flex flex-col flex-grow">
      <div className="mb-4">
        <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">
          {experience.subtitle}
        </span>
        <h3 className="text-2xl font-serif font-bold text-stone-900 leading-tight">
          {experience.title}
        </h3>
      </div>
      
      <p className="text-stone-600 text-sm leading-relaxed mb-6 font-light">
        {experience.desc}
      </p>

      {/* Meta specifications */}
      <div className="grid grid-cols-2 gap-4 p-4 bg-stone-50 rounded-2xl mb-6 text-xs text-stone-600 border border-stone-150">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-amber-800 shrink-0" />
          <div>
            <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Duración</span>
            <span className="font-semibold">{experience.duration}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <UsersIcon size={16} className="text-amber-800 shrink-0" />
          <div>
            <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Capacidad</span>
            <span className="font-semibold">{experience.capacity}</span>
          </div>
        </div>
      </div>

      {/* Key Inclusions */}
      <div className="mb-8 flex-grow">
        <span className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <Sparkles size={12} className="text-amber-700" /> Qué Incluye:
        </span>
        <ul className="space-y-2 text-stone-600 text-sm">
          {experience.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Check size={16} className="text-green-600 shrink-0 mt-0.5" />
              <span className="font-light">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <CTAButton 
        variant="primary" 
        className="w-full justify-between"
        onClick={() => onSelect && onSelect(experience.id)}
      >
        <span>Reservar esta Experiencia</span>
        <ChevronRight size={18} />
      </CTAButton>
    </div>
  </div>
);

export default ExperienceCard;
