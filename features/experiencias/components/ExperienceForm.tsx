"use client";

import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import CTAButton from '../../../shared/ui/CTAButton';
import { EXPERIENCES } from '../../../content/experiences';

export interface ExperienceFormProps {
  initialExperienceId?: string;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ initialExperienceId = '' }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    experienceId: initialExperienceId,
    fecha: '',
    comentarios: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // Sync initialExperienceId when it changes
  useEffect(() => {
    if (initialExperienceId) {
      setFormData(prev => ({ ...prev, experienceId: initialExperienceId }));
    }
  }, [initialExperienceId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.experienceId) {
      setStatus('error');
      setErrorMsg('Por favor rellena todos los campos obligatorios.');
      return;
    }

    setStatus('loading');
    // Simulating API request to a CRM
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="p-8 text-center bg-green-50 rounded-2xl border border-green-200 shadow-sm animate-in fade-in duration-300">
        <CheckCircle className="mx-auto mb-4 text-green-600" size={48} />
        <h3 className="text-2xl font-serif font-bold text-green-900 mb-2">¡Reserva Solicitada con Éxito!</h3>
        <p className="text-green-850 max-w-md mx-auto leading-relaxed">
          Hemos registrado tu solicitud para <strong>{EXPERIENCES.find(e => e.id === formData.experienceId)?.title}</strong>. 
          Un experto de Café Torres VIP te contactará a <strong>{formData.email}</strong> en menos de 2 horas para formalizar tu experiencia de lujo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-sm">
      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl flex items-center gap-3">
          <AlertCircle size={20} />
          <p className="text-sm font-medium">{errorMsg}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Nombre Completo *</label>
          <input 
            required 
            id="nombre"
            name="nombre"
            type="text" 
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-800 focus:ring-2 focus:ring-amber-800/20 outline-none transition-all text-stone-900 bg-stone-50" 
            placeholder="Ej. Juan Pérez" 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Email de Contacto *</label>
          <input 
            required 
            id="email"
            name="email"
            type="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-800 focus:ring-2 focus:ring-amber-800/20 outline-none transition-all text-stone-900 bg-stone-50" 
            placeholder="juan@correo.com" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="experienceId" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Experiencia de Interés *</label>
          <select 
            required
            id="experienceId"
            name="experienceId"
            value={formData.experienceId}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-800 focus:ring-2 focus:ring-amber-800/20 outline-none transition-all text-stone-900 bg-white"
          >
            <option value="">Selecciona una opción</option>
            {EXPERIENCES.map(e => (
              <option key={e.id} value={e.id}>{e.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="fecha" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Fecha Sugerida</label>
          <input 
            id="fecha"
            name="fecha"
            type="date" 
            value={formData.fecha}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-800 focus:ring-2 focus:ring-amber-800/20 outline-none transition-all text-stone-900 bg-stone-50" 
          />
        </div>
      </div>

      <div>
        <label htmlFor="comentarios" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Comentarios o Requerimientos Especiales</label>
        <textarea 
          id="comentarios"
          name="comentarios"
          value={formData.comentarios}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-800 focus:ring-2 focus:ring-amber-800/20 outline-none transition-all text-stone-900 bg-stone-50" 
          placeholder="Ej. Restricciones alimenticias, celebración de de cumpleaños..."
        />
      </div>

      <CTAButton 
        type="submit" 
        className="w-full mt-2" 
        variant="primary"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Enviando Solicitud...' : 'Solicitar Reserva VIP'}
      </CTAButton>
    </form>
  );
};

export default ExperienceForm;
