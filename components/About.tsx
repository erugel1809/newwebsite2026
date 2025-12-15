import React, { useState, useRef } from 'react';
import { Trophy, Users, Zap, CheckCircle2, Volume2, VolumeX } from 'lucide-react';

export const About: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="bg-agency-black text-white py-24 relative border-t border-white/5 overflow-hidden">
       <div className="container mx-auto px-6 md:px-12">
          
          <div className="max-w-4xl mx-auto">
             
             {/* Text Content & Video Section */}
             <div className="relative z-10 flex flex-col justify-center h-full">
                
                {/* Header Row: Title Left, Video Right */}
                <div className="flex flex-row items-end justify-between gap-8 mb-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                           <SparklesIcon />
                           <span className="font-bold text-xs uppercase tracking-widest text-agency-red">Elizabeth Rugel</span>
                        </div>
                        
                        <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
                           Innovación <br/> Digital Ecuador.
                        </h2>
                    </div>

                    {/* Video Header - Vertical & Small (Phone Style) - Positioned Right */}
                    <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(230,0,0,0.15)] relative w-28 md:w-36 aspect-[9/16] group bg-black flex-shrink-0 mb-1">
                        <div className="absolute inset-0 bg-agency-red/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none mix-blend-overlay"></div>
                        <video 
                            ref={videoRef}
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full object-cover"
                        >
                            <source src="http://elizabethrugel.com/wp-content/uploads/2025/04/Presencia-digital.mp4" type="video/mp4" />
                        </video>
                        
                        {/* Audio Toggle Button */}
                        <button 
                           onClick={toggleSound}
                           className="absolute top-3 right-3 z-30 w-6 h-6 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-agency-red transition-all duration-300 hover:scale-110"
                           aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                        >
                           {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                        </button>

                        {/* Compact Badge */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-black/70 backdrop-blur-md px-2 py-1 rounded-full border border-white/10 whitespace-nowrap">
                            <span className="text-[6px] uppercase font-bold tracking-widest text-agency-red flex items-center gap-1">
                               <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse"></span>
                               Live
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="prose prose-invert max-w-none mb-12">
                   <p className="text-white text-xl font-medium leading-relaxed mb-6">
                      Soy Elizabeth Rugel. Con más de <span className="text-agency-red font-bold">20 años de experiencia</span> fusionando el diseño gráfico, digital y web.
                   </p>
                   <p className="text-gray-400 text-base leading-relaxed">
                      Mi trayectoria abarca desde las bases del diseño visual tradicional hasta la creación de ecosistemas digitales complejos. No soy solo una desarrolladora; soy una estratega visual que entiende cómo la estética vende. He evolucionado junto con la tecnología para ofrecer soluciones que no solo se ven increíbles, sino que impulsan el crecimiento real de tu negocio en el mercado ecuatoriano y global.
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                   <div className="flex items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/5 hover:border-agency-red/30 transition-colors">
                      <CheckCircle2 className="text-agency-red" size={24} />
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide text-white mb-1">Visión 360° de Marca</h4>
                        <p className="text-xs text-gray-500">Coherencia visual en todos los canales.</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/5 hover:border-agency-red/30 transition-colors">
                      <CheckCircle2 className="text-agency-red" size={24} />
                       <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide text-white mb-1">Tecnología + Arte</h4>
                        <p className="text-xs text-gray-500">Funcionalidad sin sacrificar estética.</p>
                      </div>
                   </div>
                </div>

                {/* Brand Strip */}
                <div className="bg-agency-gray text-agency-red p-8 rounded-xl flex justify-between items-center overflow-hidden border border-white/5">
                    {[1,2,3,4,5,6].map((i) => (
                       <div key={i} className="opacity-40 hover:opacity-100 transition-opacity transform hover:scale-110 duration-300">
                          <Zap size={24} />
                       </div>
                    ))}
                </div>
             </div>

          </div>

       </div>
    </section>
  );
};

const SparklesIcon = () => (
   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E60000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z"/></svg>
);