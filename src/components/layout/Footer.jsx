import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
