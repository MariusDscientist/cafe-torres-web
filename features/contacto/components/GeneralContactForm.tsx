"use client";

import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import CTAButton from '../../../shared/ui/CTAButton';

const GeneralContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validations
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.asunto.trim() || !formData.mensaje.trim()) {
      setStatus('error');
      setErrorMsg('Por favor diligencia todos los campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMsg('Por favor ingresa un correo electrónico válido.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="p-8 text-center bg-green-50 rounded-2xl border border-green-200 shadow-sm animate-in fade-in duration-300">
        <CheckCircle className="mx-auto mb-4 text-green-600" size={48} />
        <h3 className="text-2xl font-serif font-bold text-green-900 mb-2">¡Mensaje Enviado!</h3>
        <p className="text-green-800 max-w-md mx-auto leading-relaxed">
          Gracias por escribirnos. Tu mensaje con el asunto <strong>"{formData.asunto}"</strong> ha sido enviado correctamente. 
          Nos pondremos en contacto contigo en breve al correo <strong>{formData.email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-sm">
      <h3 className="text-xl font-serif font-bold italic mb-6 text-stone-900">Formulario de Contacto</h3>
      
      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl flex items-center gap-3">
          <AlertCircle size={20} className="text-red-500" />
          <p className="text-sm font-medium">{errorMsg}</p>
        </div>
      )}

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
          placeholder="Ej. Sofía Restrepo" 
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Correo Electrónico *</label>
        <input 
          required 
          id="email"
          name="email"
          type="email" 
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-800 focus:ring-2 focus:ring-amber-800/20 outline-none transition-all text-stone-900 bg-stone-50" 
          placeholder="sofia@correo.com" 
        />
      </div>

      <div>
        <label htmlFor="asunto" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Asunto *</label>
        <input 
          required 
          id="asunto"
          name="asunto"
          type="text" 
          value={formData.asunto}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-800 focus:ring-2 focus:ring-amber-800/20 outline-none transition-all text-stone-900 bg-stone-50" 
          placeholder="Ej. Consulta sobre eventos privados" 
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Mensaje *</label>
        <textarea 
          required
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-800 focus:ring-2 focus:ring-amber-800/20 outline-none transition-all text-stone-900 bg-stone-50" 
          placeholder="Escribe aquí tu duda o consulta y te responderemos lo antes posible..."
        />
      </div>

      <CTAButton 
        type="submit" 
        className="w-full mt-2" 
        variant="primary"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
      </CTAButton>
    </form>
  );
};

export default GeneralContactForm;
