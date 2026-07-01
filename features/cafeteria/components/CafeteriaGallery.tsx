"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  title: string;
  category: 'tienda' | 'barismo' | 'experiencias';
  image: string;
  alt: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'tienda-1',
    title: 'Nuestra Barra VIP',
    category: 'tienda',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    alt: 'Barra premium de madera y luces cálidas en Café Torres VIP'
  },
  {
    id: 'barismo-1',
    title: 'Extracción por Goteo V60',
    category: 'barismo',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    alt: 'Barista preparando café de origen en método V60'
  },
  {
    id: 'experiencias-1',
    title: 'Catación Técnica',
    category: 'experiencias',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800',
    alt: 'Cucharas de catación profesional y granos en taza'
  },
  {
    id: 'tienda-2',
    title: 'Espacios de Encuentro',
    category: 'tienda',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800',
    alt: 'Mesas acogedoras y diseño rústico-moderno'
  },
  {
    id: 'barismo-2',
    title: 'Arte Latte de Autor',
    category: 'barismo',
    image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=800',
    alt: 'Cappuccino con arte latte impecable en taza de cerámica'
  },
  {
    id: 'experiencias-2',
    title: 'Momentos y Sonrisas',
    category: 'experiencias',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800',
    alt: 'Grupo de personas riendo y compartiendo tazas de café'
  }
];

export default function CafeteriaGallery() {
  const [filter, setFilter] = useState<'todo' | 'tienda' | 'barismo' | 'experiencias'>('todo');

  const categories = [
    { key: 'todo', name: 'Todo' },
    { key: 'tienda', name: 'La Tienda' },
    { key: 'barismo', name: 'Barismo & Métodos' },
    { key: 'experiencias', name: 'Experiencias VIP' },
  ] as const;

  const filteredItems = filter === 'todo' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="space-y-10">
      {/* Category selector */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
              filter === cat.key
                ? 'bg-amber-900 text-amber-50 shadow-md border-amber-900 border'
                : 'bg-white text-stone-600 hover:text-amber-900 border border-stone-200 hover:border-amber-950/20'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Photo Grid with Transitions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            className="group relative h-80 rounded-[2rem] overflow-hidden border border-stone-200 bg-stone-100 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Elegant overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block mb-1">
                  {item.category === 'tienda' ? 'Nuestra Tienda' : item.category === 'barismo' ? 'Arte Barista' : 'Experiencia VIP'}
                </span>
                <h4 className="text-lg font-serif font-semibold">{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
