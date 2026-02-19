import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import ExperiencesSection from './components/sections/ExperiencesSection';
import B2BSection from './components/sections/B2BSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-900">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <ExperiencesSection />
        <B2BSection />
      </main>

      <Footer />
    </div>
  );
}
