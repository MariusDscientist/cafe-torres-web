import React from 'react';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '../shared/layout/Navbar';
import Footer from '../shared/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: {
    default: 'Café Torres VIP | Café de Especialidad en Pereira',
    template: '%s | Café Torres VIP',
  },
  description: 'Elevamos la cultura cafetera en Pereira. Ofrecemos experiencias de catación de origen, barismo y estaciones de café empresariales B2B de lujo.',
  metadataBase: new URL('https://cafetorresvip.com'),
  openGraph: {
    title: 'Café Torres VIP',
    description: 'Elevamos la cultura cafetera en Pereira. Experiencias premium y café corporativo.',
    locale: 'es_CO',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-stone-50 font-sans text-stone-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
