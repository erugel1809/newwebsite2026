import React, { useEffect, useState } from 'react';
import { Play, Sparkles, X } from 'lucide-react';

const heroLogos = [
  "https://elizabethrugel.com/wp-content/uploads/2025/03/1.png",
  "https://elizabethrugel.com/wp-content/uploads/2025/03/2.png",
  "https://elizabethrugel.com/wp-content/uploads/2025/03/3.png"
];

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="relative bg-agency-black min-h-[90vh] overflow-hidden flex flex-col pt-24" aria-label="Introducción Elizabeth Rugel">
        
        {/* Top Content Row */}
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-12 h-full flex-1 relative z-10">
          
          {/* Left Stats Column */}
          <div className="col-span-2 hidden lg:flex flex-col justify-center gap-8 text-white">
             <div className="flex items-center gap-2 mb-8">
                <div className="flex -space-x-4 hover:space-x-1 transition-all duration-300">
                   {heroLogos.map((src, i) => (
                      <div key={i} className="w-12 h-12 rounded-full border border-white/20 bg-agency-black overflow-hidden flex items-center justify-center relative z-10 group cursor-default">
                         <img 
                            src={src} 
                            className="w-full h-full object-contain p-2 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all" 
                            loading="eager" 
                            width="48"
                            height="48"
                            alt="Logotipo Cliente de Confianza"
                         />
                      </div>
                   ))}
                </div>
             </div>

             <div className="transform transition-transform hover:translate-x-2">
                <p className="font-display text-4xl">100<span className="text-agency-red text-lg align-top">%</span></p>
                <p className="text-[10px] uppercase font-bold tracking-wider opacity-80">E-commerce Ecuador</p>
             </div>
             <div className="transform transition-transform hover:translate-x-2">
                <p className="font-display text-4xl">UX<span className="text-agency-red text-lg align-top">/UI</span></p>
                <p className="text-[10px] uppercase font-bold tracking-wider opacity-80">Diseño Digital</p>
             </div>
             <div className="transform transition-transform hover:translate-x-2">
                <p className="font-display text-4xl">24/7<span className="text-agency-red text-lg align-top">h</span></p>
                <p className="text-[10px] uppercase font-bold tracking-wider opacity-80">Soporte Digital</p>
             </div>
          </div>

          {/* Center Visuals */}
          <div className="col-span-12 lg:col-span-8 relative flex items-end justify-center group/hero-image">
              
              {/* Background Typography - Parallax Layer 1 (Back) */}
              <div 
                 className="absolute top-10 left-0 right-0 text-center leading-[0.85] select-none z-0 will-change-transform"
                 style={{ transform: `translateY(${scrollY * 0.2}px)` }}
              >
                 <span className="block font-display text-[12vw] text-agency-red">AGENCIA DE</span>
                 <span className="block font-display text-[12vw] text-white opacity-10">DISEÑO WEB</span>
              </div>

              {/* Person Image - LCP OPTIMIZED */}
              <img 
                src="https://elizabethrugel.com/wp-content/uploads/2025/05/DISENO-WEB-min-1.png" 
                alt="Elizabeth Rugel - Experta en Diseño Web en Ecuador" 
                className="relative z-10 w-auto h-[60vh] lg:h-[75vh] object-contain object-bottom drop-shadow-2xl will-change-transform cursor-pointer hover:scale-[1.01] transition-transform duration-700"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                onClick={() => setIsVideoOpen(true)}
                // @ts-ignore
                fetchpriority="high"
                loading="eager"
                decoding="async"
                width="800"
                height="1000"
              />

               {/* Bottom Text Layer */}
               <div 
                 className="absolute bottom-10 left-0 right-0 text-center leading-[0.85] select-none z-0 will-change-transform pointer-events-none"
                 style={{ transform: `translateY(${scrollY * 0.15}px)` }}
              >
                 <span className="block font-display text-[12vw] text-white">DISEÑO WEB</span>
              </div>
              
               {/* Floating Play Button */}
               <div className="absolute bottom-20 right-10 lg:right-[-2rem] z-20">
                  <button 
                    onClick={() => setIsVideoOpen(true)}
                    className="w-20 h-20 rounded-full bg-agency-red text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(230,0,0,0.6)] animate-pulse hover:animate-none"
                    aria-label="Ver video de presentación de servicios"
                  >
                     <Play fill="currentColor" size={24} />
                  </button>
               </div>
          </div>

          {/* Right Decor Column */}
          <div className="col-span-2 hidden lg:flex flex-col items-end pt-20">
              <div className="border border-white/20 rounded-full p-4 animate-spin-slow">
                 <Sparkles className="text-agency-red" size={32} />
              </div>
              
              <div className="mt-auto mb-20 text-right">
                 <p className="text-xs max-w-[150px] opacity-80 leading-relaxed">
                    Impulsamos marcas en Ecuador con Diseño Digital, E-commerce de alto impacto y Catálogos Interactivos.
                 </p>
                 <a href="https://wa.me/593991886726" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-4 inline-block border border-white px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-white hover:text-black active-scale transition-all"
                    title="Pedir cotización por WhatsApp"
                 >
                    Cotizar Ahora
                 </a>
              </div>
          </div>

        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4" 
             role="dialog" 
             aria-modal="true"
             onClick={() => setIsVideoOpen(false)}>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsVideoOpen(false); }}
              className="absolute top-6 right-6 text-white/50 hover:text-white hover:rotate-90 transition-all duration-300 z-[110]"
              aria-label="Cerrar video"
            >
              <X size={40} />
            </button>
            <div className="relative w-full max-w-sm md:max-w-md aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black"
                 onClick={(e) => e.stopPropagation()}>
               <video 
                  src="https://elizabethrugel.com/wp-content/uploads/2025/04/Presencia-digital.mp4" 
                  controls 
                  autoPlay 
                  playsInline
                  className="w-full h-full object-cover"
               />
            </div>
        </div>
      )}
    </>
  );
};