"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import CTAButton from '../ui/CTAButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Experiencias', href: '/experiencias' },
    { name: 'Estaciones', href: '/estaciones' },
    { name: 'Cafetería', href: '/cafeteria' },
    { name: 'Cultura', href: '/cultura' },
  ];

  // Scrolled glassmorphism state
  const isHome = pathname === '/';
  const bgClass = scrolled
    ? 'bg-white/85 backdrop-blur-md shadow-sm py-2 border-b border-stone-200/80'
    : isHome
    ? 'bg-transparent py-4'
    : 'bg-[#0c0a09]/90 backdrop-blur-md shadow-sm py-2 border-b border-stone-850';

  const textClass = scrolled
    ? 'text-stone-700 hover:text-amber-800'
    : 'text-white/90 hover:text-amber-400';

  const logoContainerClass = scrolled
    ? 'bg-transparent'
    : isHome
    ? 'bg-white px-6 py-3 shadow-md rounded-b-2xl'
    : 'bg-transparent';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <Link href="/" className="flex items-center">
          <div className={`transition-all duration-300 ${logoContainerClass}`}>
            <img
              src="/logocafe.png"
              alt="LOGO CAFE TORRES VIP"
              className={`h-16 w-auto transition-all duration-300 ${
                scrolled ? 'scale-90' : 'scale-100'
              }`}
            />
          </div>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors py-2 border-b-2 ${textClass} ${
                  isActive 
                    ? scrolled 
                      ? 'border-amber-700 text-amber-800 font-semibold' 
                      : 'border-amber-500 text-amber-400 font-semibold'
                    : 'border-transparent'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/estaciones#cotizar">
            <CTAButton
              variant={scrolled ? 'primary' : 'secondary'}
              className={`hidden md:flex py-2 px-5 text-sm ${
                !scrolled && !isHome 
                  ? 'border-amber-500 text-amber-400 bg-transparent hover:bg-amber-500/10' 
                  : ''
              }`}
            >
              Contacto B2B
            </CTAButton>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden focus:outline-none ${
              scrolled ? 'text-stone-900' : 'text-white'
            }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-bold text-lg border-b border-stone-50 pb-2 transition-colors ${
                  isActive ? 'text-amber-700' : 'text-stone-850 hover:text-amber-700'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link href="/estaciones#cotizar" className="w-full mt-2">
            <CTAButton className="w-full" variant="primary">Contacto B2B</CTAButton>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
