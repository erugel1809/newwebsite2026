import React from 'react';
import { MoveUpRight, Sparkles, Layout, ShieldCheck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  return (
    <section className="bg-agency-gray text-white py-24 relative overflow-hidden content-visibility-auto" id="servicios">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="flex items-start gap-4">
              <Sparkles className="text-agency-red mt-1" aria-hidden="true" />
              <div>
                 <p className="text-xs font-bold uppercase tracking-widest text-agency-red mb-2">Servicios Digitales Ecuador</p>
                 <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight max-w-2xl">
                    Soluciones Web para <span className="text-outline-red">Empresas Líderes.</span>
                 </h2>
                 <p className="mt-4 text-gray-400 text-sm max-w-xl leading-relaxed">
                    Elevamos el estándar de tu marca. Creamos ecosistemas digitales que funcionan, combinando diseño gráfico de alto nivel con tecnología de vanguardia para conectar con el mercado local.
                 </p>
              </div>
           </div>
           <Link to="/catalogo" className="w-full md:w-auto">
             <button className="w-full md:w-auto border border-white/20 px-8 py-4 rounded-full text-xs font-bold uppercase hover:bg-white hover:text-black active-scale transition-all flex items-center justify-center gap-2 group whitespace-nowrap">
                Ver Todo el Catálogo
                <MoveUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </button>
           </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           
           {/* Card 1: Presencia Digital */}
           <article className="bg-[#0a0a0a] rounded-lg group hover:bg-[#111] transition-all flex flex-col justify-between min-h-[350px] border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <img 
                    src="https://elizabethrugel.com/wp-content/uploads/2025/08/masuq-1.png" 
                    alt="Ejemplo de diseño web corporativo para Grupo Masuq" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 object-center"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="350"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              </div>

              <div className="p-8 relative z-10 h-full flex flex-col justify-between">
                 <div>
                    <div className="flex justify-between items-start mb-6">
                       <h3 className="font-display text-2xl uppercase max-w-[200px] drop-shadow-lg">Presencia Digital Total.</h3>
                       <div className="w-10 h-10 rounded-full bg-agency-gray/80 backdrop-blur border border-white/10 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Globe size={20} />
                       </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed drop-shadow-md">
                       Haz que tu marca destaque en Google. Desarrollamos sitios web estructurados para captar leads desde el primer segundo de navegación.
                    </p>
                 </div>
                 <div className="pt-6 border-t border-white/10">
                    <span className="text-agency-red text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-agency-red animate-pulse"></span>
                       Ver Casos de Éxito
                    </span>
                 </div>
              </div>
           </article>

           {/* Card 2: Strategic Design */}
           <article className="bg-agency-red p-8 rounded-lg flex flex-col justify-between min-h-[350px] relative overflow-hidden group shadow-[0_0_30px_rgba(230,0,0,0.2)]">
              <div className="relative z-10">
                 <div className="flex justify-between items-start mb-6">
                     <h3 className="font-display text-2xl uppercase max-w-[200px]">Diseño Estratégico (UX/UI).</h3>
                     <div className="w-10 h-10 rounded-full bg-black/20 text-white flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <Layout size={20} />
                     </div>
                 </div>
                 <p className="text-sm text-white/90 leading-relaxed mb-6">
                    Optimizamos el viaje del usuario para maximizar conversiones. Diseños intuitivos que eliminan la fricción en el proceso de compra.
                 </p>
                 <ul className="space-y-2 mt-4" role="list">
                    <li className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-white/80">
                       <Sparkles size={12} /> Mobile-First Design
                    </li>
                    <li className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-white/80">
                       <Sparkles size={12} /> Alta Velocidad de Carga
                    </li>
                 </ul>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>
           </article>

           {/* Card 3: Tech & Support */}
           <article className="bg-[#0a0a0a] rounded-lg group hover:bg-[#111] transition-all flex flex-col justify-between min-h-[350px] border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <img 
                    src="https://elizabethrugel.com/wp-content/uploads/2025/08/adnweb.png" 
                    alt="Plataforma tecnológica diseñada por Elizabeth Rugel" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 object-center"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="350"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              </div>

              <div className="p-8 relative z-10 h-full flex flex-col justify-between">
                 <div>
                    <div className="flex justify-between items-start mb-6">
                       <h3 className="font-display text-2xl uppercase max-w-[200px] drop-shadow-lg">Tecnología & Soporte.</h3>
                       <div className="w-10 h-10 rounded-full bg-agency-gray/80 backdrop-blur border border-white/10 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ShieldCheck size={20} />
                       </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed drop-shadow-md">
                       Infraestructura web robusta y segura. Tu negocio siempre online con los mejores tiempos de respuesta del mercado en Ecuador.
                    </p>
                 </div>
                  <div className="pt-6 border-t border-white/10">
                    <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                       Soporte Senior 24/7
                    </span>
                 </div>
              </div>
           </article>

        </div>

      </div>
    </section>
  );
};