import React from 'react';
import { Plus } from 'lucide-react';

export const Marquee: React.FC = () => {
  const items = ["Diseño Web", "E-commerce", "Catálogos Digitales", "Tarjetas Digitales", "Diseño Digital", "Tiendas Online"];

  return (
    <div className="bg-agency-red text-white py-4 overflow-hidden relative z-20 -mt-2 rotate-[-1deg] scale-105 origin-left shadow-[0_0_50px_rgba(230,0,0,0.3)]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="font-display text-3xl md:text-4xl uppercase px-4">{item}</span>
                <Plus strokeWidth={4} className="w-6 h-6 mx-4" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};