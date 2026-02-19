import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ExperienceCard from '../features/experiencias/ExperienceCard';
import ExperienceForm from '../features/experiencias/ExperienceForm';
import { CONTENT } from '../../content/content';

const ExperiencesSection = () => {
  return (
    <section id="experiencias" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Experiencias Sensoriales" 
          subtitle="Descubre el alma del café a través de talleres diseñados para elevar tu conocimiento y paladar." 
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {CONTENT.features.experiencias.map(exp => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif font-bold italic">Reserva tu lugar ahora</h3>
            <p className="text-stone-500">Cupos limitados para garantizar la calidad de la experiencia.</p>
          </div>
          <ExperienceForm />
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
