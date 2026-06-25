"use client";

import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import CTAButton from '../../../shared/ui/CTAButton';

const StationQuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    empleados: '',
    comentarios: '',
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
    if (!formData.nombre.trim() || !formData.empresa.trim() || !formData.email.trim() || !formData.empleados) {
      setStatus('error');
      setErrorMsg('Por favor rellena todos los campos marcados como obligatorios.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMsg('Por favor ingresa un email válido.');
      return;
    }

    const numEmpleados = parseInt(formData.empleados, 10);
    if (isNaN(numEmpleados) || numEmpleados <= 0) {
      setStatus('error');
      setErrorMsg('El número de empleados debe ser mayor que 0.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="p-8 text-center bg-amber-50 rounded-2xl border border-amber-200 shadow-sm animate-in fade-in duration-300">
        <CheckCircle className="mx-auto mb-4 text-amber-700" size={48} />
        <h3 className="text-2xl font-serif font-bold text-amber-900 mb-2">¡Cotización Solicitada!</h3>
        <p className="text-amber-800 max-w-md mx-auto leading-relaxed">
          Muchas gracias por tu interés. Hemos recibido la solicitud de cotización para <strong>{formData.empresa}</strong>. 
          Un asesor B2B de Café Torres VIP se pondrá en contacto contigo al correo <strong>{formData.email}</strong> para presentarte una propuesta a la medida de tu oficina.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-stone-900/40 p-6 md:p-8 rounded-3xl border border-stone-850 backdrop-blur-md text-white shadow-xl">
      <h3 className="text-xl font-serif font-bold italic mb-6 text-amber-400">Solicitar Cotización Empresarial</h3>
      
      {status === 'error' && (
        <div className="p-4 bg-red-950/80 text-red-200 border border-red-900 rounded-xl flex items-center gap-3">
          <AlertCircle size={20} className="text-red-400" />
          <p className="text-sm font-medium">{errorMsg}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Nombre de Contacto *</label>
          <input 
            required 
            id="nombre"
            name="nombre"
            type="text" 
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-stone-800 bg-stone-950/60 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-white placeholder-stone-600" 
            placeholder="Ej. Carlos Mendoza" 
          />
        </div>
        <div>
          <label htmlFor="empresa" className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Nombre de la Empresa *</label>
          <input 
            required 
            id="empresa"
            name="empresa"
            type="text" 
            value={formData.empresa}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-stone-800 bg-stone-950/60 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-white placeholder-stone-600" 
            placeholder="Ej. Empresa S.A.S." 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Email Corporativo *</label>
          <input 
            required 
            id="email"
            name="email"
            type="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-stone-800 bg-stone-950/60 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-white placeholder-stone-600" 
            placeholder="carlos@empresa.com" 
          />
        </div>
        <div>
          <label htmlFor="empleados" className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Número de Empleados *</label>
          <input 
            required 
            id="empleados"
            name="empleados"
            type="number" 
            min="1"
            value={formData.empleados}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-stone-800 bg-stone-950/60 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-white placeholder-stone-600" 
            placeholder="Ej. 25" 
          />
        </div>
      </div>

      <div>
        <label htmlFor="comentarios" className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Mensaje o Requerimientos Particulares</label>
        <textarea 
          id="comentarios"
          name="comentarios"
          value={formData.comentarios}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-stone-800 bg-stone-950/60 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-white placeholder-stone-600" 
          placeholder="Cuéntanos más sobre el espacio, preferencias de café o si necesitas baristas..."
        />
      </div>

      <CTAButton 
        type="submit" 
        className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-stone-950 border-none" 
        variant="primary"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Enviando Solicitud...' : 'Solicitar Propuesta Corporativa'}
      </CTAButton>
    </form>
  );
};

export default StationQuoteForm;
