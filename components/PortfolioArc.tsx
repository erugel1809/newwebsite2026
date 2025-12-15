import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const portfolioItems = [
  "http://elizabethrugel.com/wp-content/uploads/2025/08/adnweb.png",
  "http://elizabethrugel.com/wp-content/uploads/2025/08/cargooceanweb-1.png",
  "http://elizabethrugel.com/wp-content/uploads/2025/08/solutec.png",
  "http://elizabethrugel.com/wp-content/uploads/2025/08/drroberto-1.png",
  "http://elizabethrugel.com/wp-content/uploads/2025/08/draabigail-1.png",
  "http://elizabethrugel.com/wp-content/uploads/2025/08/masuq-1.png"
];

// Triple items for the carousel to ensure seamless infinite scroll on wide screens
const carouselItems = [...portfolioItems, ...portfolioItems, ...portfolioItems];

export const PortfolioArc: React.FC = () => {
  return (
    <section className="relative bg-agency-black min-h-screen overflow-hidden flex flex-col justify-between">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-agency-red/10 via-agency-black to-agency-black pointer-events-none" />

      {/* Spacer to push content down */}
      <div className="flex-1"></div>

      {/* Main Content Layer */}
      <div className="relative z-10 text-center max-w-5xl px-6 mb-16 mx-auto flex flex-col items-center">
         <h2 className="font-display text-5xl md:text-8xl text-white mb-6 leading-[0.9] uppercase tracking-wide">
            Portafolio <br/> <span className="text-agency-red">Exclusivo</span>
         </h2>
         <p className="text-gray-400 mb-10 max-w-xl text-sm md:text-base leading-relaxed">
            Colaboramos para crear marcas audaces y experiencias digitales fluidas. Explora nuestra selección de proyectos recientes.
         </p>
         
         <Link to="/proyectos">
            <button className="group bg-agency-red text-white hover:bg-white hover:text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shadow-[0_0_20px_rgba(230,0,0,0.4)]">
                <span>Ver Proyectos</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
         </Link>
      </div>

      {/* Bottom Carousel Strip */}
      <div className="relative z-20 w-full bg-black/40 border-t border-white/5 py-8 backdrop-blur-md overflow-hidden">
        <div className="flex w-max animate-marquee-scroll pause-on-hover hover:cursor-grab">
           {/* First Set */}
           <div className="flex gap-8 px-4">
              {carouselItems.map((src, idx) => (
                 <div key={`set1-${idx}`} className="w-64 h-40 flex-shrink-0 rounded-lg overflow-hidden border border-white/10 group/item relative shadow-lg">
                    <img 
                      src={src} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105 grayscale group-hover/item:grayscale-0" 
                      alt={`Project ${idx}`}
                      loading="lazy"
                      width="256"
                      height="160"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover/item:bg-transparent transition-colors duration-300" />
                 </div>
              ))}
           </div>
           {/* Second Set (Duplicate for seamless loop) */}
           <div className="flex gap-8 px-4">
              {carouselItems.map((src, idx) => (
                 <div key={`set2-${idx}`} className="w-64 h-40 flex-shrink-0 rounded-lg overflow-hidden border border-white/10 group/item relative shadow-lg">
                    <img 
                      src={src} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105 grayscale group-hover/item:grayscale-0" 
                      alt={`Project ${idx}`} 
                      loading="lazy"
                      width="256"
                      height="160"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover/item:bg-transparent transition-colors duration-300" />
                 </div>
              ))}
           </div>
        </div>
      </div>

    </section>
  );
};