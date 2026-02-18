import { useState, useEffect } from 'react';
import CTAButton from '../ui/CTAButton.jsx';
import { 
  Menu, 
  X
} from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* <div className={`text-2xl font-serif font-black tracking-tighter transition-colors ${scrolled ? 'text-amber-900' : 'text-white'}`}>
          CAFE TORRES<span className="text-amber-600 italic">VIP</span>
        </div> */}

        <a href="/" className="flex items-center">
        <div
          className={`
            transition-all duration-300
            ${scrolled
              ? "bg-transparent"
              : "bg-white px-6 py-3 shadow-md rounded-b-2xl"
            }
           `}>

            <img
            src = "/logocafe.png"
            alt = "LOGO CAFE TORRES VIP"
            className={`h-20 w-auto transition-all duration-300 ${
              scrolled ? "opacity-100" : "opacity-90"}
        `}
        />
        </div>

        </a>
        
        {/* Desktop Links */}
        <div className={`hidden md:flex gap-8 font-medium ${scrolled ? 'text-stone-700' : 'text-white/90'}`}>
          {['Experiencias', 'Estaciones', 'Cafetería', 'Cultura'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-600 transition-colors">{item}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <CTAButton variant={scrolled ? 'primary' : 'secondary'} className="hidden md:flex py-2 px-5 text-sm">
            Contacto B2B
          </CTAButton>
          <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${scrolled ? 'text-stone-900' : 'text-white'}`}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 p-6 flex flex-col gap-4 shadow-xl">
          {['Experiencias', 'Estaciones', 'Cafetería', 'Cultura'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-stone-800 font-bold text-lg border-b border-stone-50 pb-2">{item}</a>
          ))}
          <CTAButton className="w-full">Contacto B2B</CTAButton>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
