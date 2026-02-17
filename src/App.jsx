import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  MapPin, 
  Users, 
  Briefcase, 
  ChevronRight, 
  Star, 
  Instagram, 
  Facebook, 
  Menu, 
  X,
  CheckCircle,
  Calendar,
  Send
} from 'lucide-react';
import { CONTENT } from './content/content.js';
import CTAButton from './components/ui/CTAButton.jsx';
import SectionHeading from './components/ui/SectionHeading.jsx';
import Navbar from './components/layout/Navbar.jsx';




// --- SHARED: CONTENT LAYER (Simulando /content/brand.ts) ---


// --- SHARED: UI COMPONENTS ---




// --- FEATURE: EXPERIENCIAS (COMPONENTS) ---
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

// --- FEATURE: FORMS (DESACOPLADOS) ---
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

// --- LAYOUT: HEADER & FOOTER ---


// --- MAIN PAGE COMPONENT (App Router simulation) ---
export default function App() {
  const [view, setView] = useState('home');

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-900/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1600" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105"
          />
        </div>

        <div className="relative z-20 max-w-4xl px-6">
          
          <span className="inline-block bg-amber-600/20 backdrop-blur-sm text-amber-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-amber-600/30">
            Especialistas en Café de Origen
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]">
            {CONTENT.home.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-light italic">
            {CONTENT.home.hero.subtitle}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <CTAButton variant="primary" className="w-full md:w-auto px-10 py-4 text-lg">
              {CONTENT.home.hero.primaryCTA} <ChevronRight size={20} />
            </CTAButton>
            <CTAButton variant="secondary" className="w-full md:w-auto px-10 py-4 text-lg bg-transparent border-white text-white hover:bg-white/10 hover:text-white">
              {CONTENT.home.hero.secondaryCTA}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* AUTHORITY SECTION */}
      <section className="py-20 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Users className="mx-auto text-amber-700 mb-4" />, label: "Clientes Satisfechos", val: "5000+" },
              { icon: <Briefcase className="mx-auto text-amber-700 mb-4" />, label: "Empresas Atendidas", val: "40+" },
              { icon: <MapPin className="mx-auto text-amber-700 mb-4" />, label: "Origen Pereira", val: "100%" },
              { icon: <Star className="mx-auto text-amber-700 mb-4" />, label: "Calificación Google", val: "4.9/5" },
            ].map((stat, i) => (
              <div key={i} className="p-6">
                {stat.icon}
                <div className="text-3xl font-black text-stone-900 mb-1">{stat.val}</div>
                <div className="text-sm font-bold text-stone-500 uppercase tracking-tighter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE: EXPERIENCIAS */}
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

      {/* B2B / ESTACIONES TEASER */}
      <section id="estaciones" className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-amber-800/20 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Soluciones Empresariales</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic">Lleva la cultura VIP a tu oficina</h2>
              <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                Nuestras estaciones de café automáticas y de autor mejoran el clima organizacional y la productividad. Calidad barista en cada reunión.
              </p>
              <div className="space-y-4 mb-10 text-stone-300">
                <div className="flex items-center gap-3"><CheckCircle size={18} className="text-amber-500"/> Servicio técnico 24/7</div>
                <div className="flex items-center gap-3"><CheckCircle size={18} className="text-amber-500"/> Suministro recurrente de granos premium</div>
                <div className="flex items-center gap-3"><CheckCircle size={18} className="text-amber-500"/> Capacitación para personal</div>
              </div>
              <CTAButton variant="secondary" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-stone-900">
                Solicitar Catálogo Corporativo
              </CTAButton>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" 
                alt="Office Coffee Station" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-50 py-20 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-serif font-black tracking-tighter text-amber-900 mb-4">
              TORRES<span className="text-amber-600 italic">VIP</span>
            </div>
            <p className="text-stone-500 max-w-md mb-8">
              Café Torres VIP es el referente de calidad en Pereira. Transformamos el consumo de café en una experiencia de lujo accesible para personas y empresas.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center hover:bg-amber-800 hover:text-white transition-colors cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center hover:bg-amber-800 hover:text-white transition-colors cursor-pointer">
                <Facebook size={20} />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-stone-900 mb-6 uppercase tracking-wider text-sm">Navegación</h4>
            <ul className="space-y-3 text-stone-500">
              <li><a href="#" className="hover:text-amber-800 transition-colors">Experiencias</a></li>
              <li><a href="#" className="hover:text-amber-800 transition-colors">Estaciones B2B</a></li>
              <li><a href="#" className="hover:text-amber-800 transition-colors">Cultura Cafetera</a></li>
              <li><a href="#" className="hover:text-amber-800 transition-colors">Menú Cafetería</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-stone-900 mb-6 uppercase tracking-wider text-sm">Contacto</h4>
            <p className="text-stone-500 mb-2">Av. Circunvalar, Pereira</p>
            <p className="text-stone-500 mb-2">+57 (300) 123-4567</p>
            <p className="text-stone-500">contacto@cafetorresvip.com</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-stone-200 text-center text-stone-400 text-sm">
          &copy; {new Date().getFullYear()} Café Torres VIP. Todos los derechos reservados. | Pereira, Colombia.
        </div>
      </footer>
    </div>
  );
}