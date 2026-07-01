"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Star, ArrowUpRight, Coffee } from 'lucide-react';
import { CAFETERIA, MenuItem } from '../../../content/cafeteria';

export default function MenuTabs() {
  const [activeCategory, setActiveCategory] = useState<string>(CAFETERIA.categories[0].key);

  const activeCategoryDetails = CAFETERIA.categories.find(cat => cat.key === activeCategory);
  const activeItems = CAFETERIA.items.filter(item => item.category === activeCategory);

  // Group by featured and regular items
  const featuredItems = activeItems.filter(item => item.featured);
  const regularItems = activeItems.filter(item => !item.featured);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Sidebar Navigation */}
      <div className="lg:col-span-4 bg-stone-50 border border-stone-200/80 p-6 md:p-8 rounded-[2.5rem] sticky top-24 space-y-6">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-amber-800 mb-2">Nuestra Carta</h3>
          <p className="text-stone-500 text-xs font-light">Explora nuestras selecciones tradicionales de Pereira.</p>
        </div>

        {/* Scrollable list on mobile, vertical stack on desktop */}
        <div className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory">
          {CAFETERIA.categories.map(cat => {
            const isActive = cat.key === activeCategory;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`snap-start shrink-0 text-left px-5 py-4 rounded-2xl transition-all duration-300 border flex items-center justify-between w-[220px] lg:w-full ${
                  isActive
                    ? 'bg-amber-900 border-amber-900 text-amber-50 shadow-md translate-x-1'
                    : 'bg-white hover:bg-stone-100 border-stone-200 text-stone-700 hover:text-stone-900'
                }`}
              >
                <div>
                  <span className="font-serif font-bold text-sm block">{cat.name}</span>
                  <span className={`text-[10px] block mt-0.5 line-clamp-1 ${isActive ? 'text-amber-200/90' : 'text-stone-400'}`}>
                    {cat.key === 'el-finquerito' ? 'Café Negro' : cat.key === 'la-chapolera' ? 'Con Leche' : cat.key === 'el-arriero' ? 'Aromáticas' : cat.key === 'fondita-vip' ? 'Fríos & Helados' : cat.key === 'bitutte' ? 'Comidas' : cat.key === 'postres' ? 'Dulces' : 'Café en Grano'}
                  </span>
                </div>
                <Coffee size={14} className={isActive ? 'text-amber-300' : 'text-stone-300'} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Items Section */}
      <div className="lg:col-span-8 space-y-10">
        {/* Category Description Banner */}
        <div className="border-b border-stone-200 pb-6">
          <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest block mb-2">Categoría Activa</span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">{activeCategoryDetails?.name}</h2>
          <p className="text-stone-500 text-sm mt-1.5 font-light">{activeCategoryDetails?.desc}</p>
        </div>

        {/* Featured Items Grid (if any exist in active category) */}
        {featuredItems.length > 0 && (
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
              <Sparkles size={14} className="text-amber-600 animate-pulse" /> Recomendados de la Casa
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-amber-50/50 border border-amber-200/80 p-8 rounded-[2rem] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-amber-800/10 rounded-full blur-xl pointer-events-none" />
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <h5 className="font-serif font-bold text-lg text-amber-950">{item.name}</h5>
                      <span className="text-xs font-bold bg-amber-100/90 text-amber-800 px-2.5 py-1 rounded-full border border-amber-200/50 shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-stone-600 text-xs leading-relaxed font-light">{item.desc}</p>
                  </div>

                  {item.link ? (
                    <div className="pt-6 mt-4 border-t border-amber-200/40">
                      <Link 
                        href={item.link} 
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 transition-colors"
                      >
                        Más información <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  ) : (
                    <div className="pt-6 mt-4 border-t border-amber-200/40 flex items-center gap-1 text-[10px] text-amber-700/80 font-bold uppercase tracking-wider">
                      <Star size={10} fill="currentColor" /> Receta de Autor
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Items List */}
        <div className="space-y-4">
          {featuredItems.length > 0 && regularItems.length > 0 && (
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 pt-4">Otras Delicias</h4>
          )}
          
          <div className="bg-white border border-stone-200/80 rounded-[2.5rem] p-8 md:p-10 shadow-sm divide-y divide-stone-100">
            {regularItems.map((item, idx) => (
              <div 
                key={idx} 
                className="flex justify-between items-start gap-6 py-6 first:pt-0 last:pb-0"
              >
                <div className="space-y-1 max-w-xl">
                  <h5 className="font-bold text-stone-900 text-base md:text-lg">{item.name}</h5>
                  <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-light">{item.desc}</p>
                  {item.link && (
                    <Link 
                      href={item.link} 
                      className="inline-flex items-center gap-1 text-xs text-amber-800 hover:underline pt-1.5 font-semibold"
                    >
                      Ver más detalles <ArrowUpRight size={12} />
                    </Link>
                  )}
                </div>
                <span className="font-serif font-black text-amber-800 text-sm md:text-base shrink-0 pt-0.5">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
