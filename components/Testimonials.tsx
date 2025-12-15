import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "CEO, TechSolutions EC",
    content: "La transformación digital de nuestra empresa fue total. El diseño web no solo es visualmente impactante, sino que la funcionalidad del e-commerce ha incrementado nuestras ventas un 40%.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Sofía Alvarado",
    role: "Directora de Marketing, ModaVogue",
    content: "Buscábamos una estética minimalista pero con carácter. Elizabeth captó la esencia de nuestra marca a la perfección. El catálogo digital es súper intuitivo para nuestros clientes.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Andrés Pinto",
    role: "Fundador, GastroBar 593",
    content: "Necesitábamos tarjetas digitales y un sitio para reservas rápido. La respuesta fue inmediata y el resultado final superó nuestras expectativas. Soporte 10/10.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
];

// Client Logos
const brands = [
  "http://elizabethrugel.com/wp-content/uploads/2025/03/1.png",
  "http://elizabethrugel.com/wp-content/uploads/2025/03/2.png",
  "http://elizabethrugel.com/wp-content/uploads/2025/03/3.png",
  "http://elizabethrugel.com/wp-content/uploads/2025/03/4.png",
  "http://elizabethrugel.com/wp-content/uploads/2025/03/5.png",
  "http://elizabethrugel.com/wp-content/uploads/2025/03/6.png",
  "http://elizabethrugel.com/wp-content/uploads/2025/03/7.png"
];

const BrandLogo: React.FC<{ src: string }> = ({ src }) => (
  <div className="group/brand cursor-pointer px-8 md:px-12 flex items-center justify-center">
    <img 
      src={src} 
      alt="Cliente" 
      loading="lazy"
      className="h-16 w-auto object-contain opacity-50 group-hover/brand:opacity-100 grayscale group-hover/brand:grayscale-0 transition-all duration-500 filter brightness-200 invert-[0.1] hover:brightness-100 hover:invert-0"
    />
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-agency-black py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-agency-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-agency-red font-bold text-xs uppercase tracking-[0.2em] mb-4">Confianza & Resultados</p>
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase leading-tight">
            Lo que dicen <br/> <span className="text-outline">nuestros clientes.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl relative group hover:border-agency-red/30 transition-all duration-300 hover:-translate-y-2">
              <Quote className="absolute top-8 right-8 text-agency-red/20 w-10 h-10 group-hover:text-agency-red/40 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#E60000" className="text-agency-red" />
                ))}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 relative z-10">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                  />
                </div>
                <div>
                  <h4 className="font-display text-lg text-white uppercase tracking-wide">{item.name}</h4>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Logos Carousel - Seamless Loop */}
        <div className="pt-20 border-t border-white/5">
           <p className="text-center text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-16">
              Empresas que impulsamos
           </p>
           
           <div 
             className="w-full overflow-hidden"
             style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
           >
              {/* 
                  Structure: Two identical sets inside the flex container.
                  Animation: Moves translateX(-50%) (exactly one set length).
                  Result: Perfectly seamless loop.
              */}
              <div className="flex w-max animate-marquee-scroll pause-on-hover [animation-duration:30s]">
                 {/* Set 1 */}
                 <div className="flex items-center gap-8">
                    {brands.map((src, idx) => (
                       <BrandLogo key={`b1-${idx}`} src={src} />
                    ))}
                 </div>
                 {/* Set 2 (Identical Duplicate) */}
                 <div className="flex items-center gap-8">
                    {brands.map((src, idx) => (
                       <BrandLogo key={`b2-${idx}`} src={src} />
                    ))}
                 </div>
                 {/* Set 3 (Triple Duplicate for safety on large screens) */}
                 <div className="flex items-center gap-8">
                    {brands.map((src, idx) => (
                       <BrandLogo key={`b3-${idx}`} src={src} />
                    ))}
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};