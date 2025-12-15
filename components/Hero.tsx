import React, { useEffect, useState } from 'react';
import { Play, Sparkles, X } from 'lucide-react';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="relative bg-agency-black min-h-[90vh] overflow-hidden flex flex-col pt-24">
        
        {/* Top Content Row */}
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-12 h-full flex-1 relative z-10">
          
          {/* Left Stats Column */}
          <div className="col-span-2 hidden lg:flex flex-col justify-center gap-8 text-white">
             <div className="flex items-center gap-2 mb-8">
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border border-white bg-gray-300 overflow-hidden">
                         <img 
                            src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=50&h=50&fit=crop`} 
                            className="w-full h-full object-cover" 
                            loading="lazy" 
                            alt="User"
                         />
                      </div>
                   ))}
                </div>
             </div>

             <div>
                <p className="font-display text-4xl">100<span className="text-agency-red text-lg align-top">%</span></p>
                <p className="text-[10px] uppercase font-bold tracking-wider opacity-80">E-commerce Ecuador</p>
             </div>
             <div>
                <p className="font-display text-4xl">UX<span className="text-agency-red text-lg align-top">/UI</span></p>
                <p className="text-[10px] uppercase font-bold tracking-wider opacity-80">Diseño Digital</p>
             </div>
             <div>
                <p className="font-display text-4xl">24/7<span className="text-agency-red text-lg align-top">h</span></p>
                <p className="text-[10px] uppercase font-bold tracking-wider opacity-80">Soporte Digital</p>
             </div>
          </div>

          {/* Center Visuals */}
          <div className="col-span-12 lg:col-span-8 relative flex items-end justify-center group/hero-image">
              
              {/* Background Typography - Parallax Layer 1 (Back) */}
              <div 
                 className="absolute top-10 left-0 right-0 text-center leading-[0.85] select-none z-0 will-change-transform"
                 style={{ transform: `translateY(${scrollY * 0.4}px)` }}
              >
                 {/* Reduced size slightly to fit AGENCIA DE */}
                 <h1 className="font-display text-[12vw] text-agency-red">AGENCIA DE</h1>
                 <h1 className="font-display text-[12vw] text-white opacity-10">DISEÑO WEB</h1>
              </div>

               <div 
                 className="absolute top-10 left-0 right-0 text-center leading-[0.85] select-none z-0 will-change-transform"
                 style={{ transform: `translateY(${scrollY * 0.45}px)` }}
              >
                 <h1 className="font-display text-[12vw] text-agency-red mix-blend-screen opacity-50">AGENCIA DE</h1>
              </div>

              {/* Person Image - Parallax Layer 2 (Mid) - CLICKABLE NOW */}
              {/* Added priority loading for LCP */}
              <img 
                src="http://elizabethrugel.com/wp-content/uploads/2025/05/DISENO-WEB-min-1.png" 
                alt="Elizabeth Rugel Diseño Web" 
                className="relative z-10 w-auto h-[60vh] lg:h-[75vh] object-contain object-bottom drop-shadow-2xl will-change-transform cursor-pointer hover:scale-[1.02] transition-transform duration-500"
                style={{ mixBlendMode: 'normal', transform: `translateY(${scrollY * 0.1}px)` }}
                onClick={() => setIsVideoOpen(true)}
                // @ts-ignore
                fetchPriority="high"
                loading="eager"
              />

               {/* Bottom Text Layer - Parallax Layer 3 (Front/Back) */}
               <div 
                 className="absolute bottom-10 left-0 right-0 text-center leading-[0.85] select-none z-0 will-change-transform pointer-events-none"
                 style={{ transform: `translateY(${scrollY * 0.25}px)` }}
              >
                 <h1 className="font-display text-[12vw] text-white">DISEÑO WEB</h1>
              </div>
              
               {/* Floating Play Button */}
               <div className="absolute bottom-20 right-10 lg:right-[-2rem] z-20">
                  <button 
                    onClick={() => setIsVideoOpen(true)}
                    className="w-20 h-20 rounded-full bg-agency-red text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(230,0,0,0.6)] animate-pulse hover:animate-none"
                    aria-label="Ver video de presentación"
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
                    Impulsamos marcas en Ecuador con Diseño Digital, E-commerce, Catálogos Interactivos y Tarjetas Digitales.
                 </p>
                 <a href="https://wa.me/593991886726" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block border border-white px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors">
                    Cotizar Ahora
                 </a>
              </div>
          </div>

        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setIsVideoOpen(false)}>
            {/* Close Button - Outside */}
            <button 
              onClick={(e) => { e.stopPropagation(); setIsVideoOpen(false); }}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white hover:rotate-90 transition-all duration-300 z-[110]"
            >
              <X size={40} />
            </button>
            
            {/* Video Container - Stop Propagation so clicking video doesn't close it */}
            <div 
              className="relative w-full max-w-sm md:max-w-md aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(230,0,0,0.2)] animate-in fade-in zoom-in duration-300 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
               <video 
                  src="http://elizabethrugel.com/wp-content/uploads/2025/04/Presencia-digital.mp4" 
                  controls 
                  autoPlay 
                  className="w-full h-full object-cover"
               />
            </div>
        </div>
      )}
    </>
  );
};