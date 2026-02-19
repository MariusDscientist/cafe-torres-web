import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import CTAButton from '../../ui/CTAButton';

const ExperienceForm = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="p-8 text-center bg-green-50 rounded-2xl border border-green-200">
        <CheckCircle className="mx-auto mb-4 text-green-600" size={48} />
        <h3 className="text-xl font-bold text-green-900 mb-2">¡Reserva Solicitada!</h3>
        <p className="text-green-800">Un experto se contactará contigo en menos de 2 horas para confirmar tu experiencia VIP.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-stone-50 p-6 md:p-8 rounded-2xl border border-stone-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Nombre Completo</label>
          <input required type="text" className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-800 outline-none transition-all" placeholder="Ej. Juan Pérez" />
        </div>
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Email</label>
          <input required type="email" className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-800 outline-none transition-all" placeholder="juan@correo.com" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Experiencia de Interés</label>
        <select className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-800 outline-none transition-all appearance-none bg-white">
          <option>Selecciona una opción</option>
          <option>Catación de Origen</option>
          <option>Taller de Barismo</option>
          <option>Tour Privado</option>
        </select>
      </div>
      <CTAButton type="submit" className="w-full" variant="primary">
        {status === 'loading' ? 'Enviando...' : 'Solicitar Reserva'}
      </CTAButton>
    </form>
  );
};

export default ExperienceForm;
