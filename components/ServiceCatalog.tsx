import React, { useEffect } from 'react';
import { Check, Zap, Globe, ShoppingBag, Smartphone, Share2, Layers, MoveRight, MapPin } from 'lucide-react';

const servicesDetail = [
  {
    id: "01",
    title: "Web Corporativa",
    subtitle: "Presencia & Autoridad",
    description: "Diseñamos la sede digital de tu empresa. No es solo información, es persuasión. Estructuramos tu sitio para generar confianza inmediata, optimizando cada sección para convertir visitantes en clientes potenciales.",
    features: ["Diseño UX/UI Premium", "Optimización SEO Técnica", "Carga Ultra-Rápida", "Integración con CRM"],
    icon: Globe,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&fit=crop"
  },
  {
    id: "02",
    title: "E-commerce Pro",
    subtitle: "Ventas 24/7",
    description: "Tu tienda nunca cierra. Desarrollamos plataformas de comercio electrónico robustas, seguras y fáciles de administrar. Desde la gestión de inventario hasta pasarelas de pago locales en Ecuador.",
    features: ["Pasarelas de Pago Locales", "Gestión de Inventario", "Panel Administrativo Fácil", "Notificaciones Automáticas"],
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1200&fit=crop"
  },
  {
    id: "03",
    title: "Catálogos Interactivos",
    subtitle: "Experiencia & Facilidad",
    description: "Olvídate de los PDFs pesados. Nuestros catálogos web permiten a tus clientes navegar, filtrar y pedir productos directamente por WhatsApp. Una herramienta de venta ágil para equipos comerciales.",
    features: ["Pedidos por WhatsApp", "Filtrado de Productos", "Actualización en Tiempo Real", "Sin descargas de Apps"],
    icon: Layers,
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200&fit=crop"
  },
  {
    id: "04",
    title: "Tarjetas Digitales",
    subtitle: "Networking Inteligente",
    description: "La evolución de la tarjeta de presentación. Un micro-sitio personal donde compartes contacto, redes, portafolio y ubicación con un solo clic. Ideal para cerrar tratos en el momento.",
    features: ["Botón 'Guardar Contacto'", "Código QR Personalizado", "Enlaces a Redes Sociales", "Diseño Personalizable"],
    icon: Share2,
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1200&fit=crop"
  },
  {
    id: "05",
    title: "Google SEO Local",
    subtitle: "Visibilidad Geográfica",
    description: "Aparece justo cuando te buscan. Optimizamos tu Perfil de Negocio de Google (antes Google My Business) para dominar las búsquedas locales y los mapas. Ideal para atraer clientes físicos a tu local.",
    features: ["Ranking en Google Maps", "Gestión de Reseñas", "Publicaciones Semanales", "Estadísticas de Llamadas"],
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&fit=crop"
  }
];

export const ServiceCatalog: React.FC = () => {
  
  // Scroll to top on mount to ensure user starts at the beginning
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-agency-black min-h-screen text-white relative font-sans selection:bg-agency-red selection:text-white">
      
      {/* Hero Header */}
      <header className="pt-40 pb-20 px-6 md:px-12 container mx-auto text-center relative z-10">
         <div className="inline-flex items-center gap-2 mb-8 border border-white/20 px-4 py-2 rounded-full animate-pulse">
            <Zap size={16} className="text-agency-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Soluciones de Alto Impacto</span>
         </div>
         <h1 className="font-display text-6xl md:text-9xl uppercase leading-[0.85] mb-8">
            Nuestros <br/> <span className="text-outline-red hover:text-agency-red transition-colors duration-700 cursor-default">Servicios</span>
         </h1>
         <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
            Cada solución está diseñada para resolver un problema específico de crecimiento. No vendemos "webs", vendemos herramientas de negocio digitales.
         </p>
      </header>

      {/* Services List */}
      <div className="container mx-auto px-6 md:px-12 pb-32 space-y-32 md:space-y-48">
         {servicesDetail.map((service, index) => (
            <div key={service.id} className="group relative flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
               
               {/* Background Glow Effect on Hover */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-agency-red/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

               {/* Image Section (Alternating) */}
               <div className={`w-full md:w-1/2 h-[50vh] md:h-[70vh] relative overflow-hidden rounded-sm ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img 
                     src={service.image} 
                     alt={service.title} 
                     loading="lazy"
                     className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Floating Number - Parallax feel */}
                  <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 z-20 font-display text-[8rem] md:text-[12rem] leading-none text-white/5 group-hover:text-white/20 transition-colors duration-700 select-none">
                     {service.id}
                  </div>
               </div>

               {/* Content Section */}
               <div className={`w-full md:w-1/2 relative z-10 ${index % 2 === 1 ? 'md:order-1 md:text-right' : 'md:text-left'}`}>
                  <div className={`flex items-center gap-4 mb-8 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                     <div className="w-14 h-14 rounded-full bg-agency-red text-white flex items-center justify-center shadow-[0_0_30px_rgba(230,0,0,0.4)] group-hover:scale-110 transition-transform duration-500">
                        <service.icon size={28} />
                     </div>
                     <span className="font-bold text-agency-red tracking-widest uppercase text-xs md:text-sm">{service.subtitle}</span>
                  </div>

                  <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] mb-8 group-hover:translate-x-2 transition-transform duration-700">
                     {service.title}
                  </h2>

                  <p className={`text-gray-400 text-lg leading-relaxed mb-10 max-w-lg ${index % 2 === 1 ? 'ml-auto' : ''}`}>
                     {service.description}
                  </p>

                  <div className={`space-y-4 mb-12 ${index % 2 === 1 ? 'flex flex-col items-end' : ''}`}>
                     {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-4 group/feature">
                           {index % 2 === 0 && <div className="w-1.5 h-1.5 rounded-full bg-agency-red group-hover/feature:scale-150 transition-transform"/>}
                           <span className="text-sm font-medium uppercase tracking-wide text-white/80">{feature}</span>
                           {index % 2 === 1 && <div className="w-1.5 h-1.5 rounded-full bg-agency-red group-hover/feature:scale-150 transition-transform"/>}
                        </div>
                     ))}
                  </div>

                  <a href={`https://wa.me/593991886726`} target="_blank" rel="noopener noreferrer">
                     <button className={`flex items-center gap-3 border border-white/20 bg-transparent hover:bg-agency-red hover:border-agency-red text-white px-8 py-4 rounded-full uppercase text-xs font-bold tracking-widest transition-all duration-300 group/btn ${index % 2 === 1 ? 'ml-auto' : ''}`}>
                        <span>Cotizar {service.title}</span>
                        <MoveRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                     </button>
                  </a>
               </div>

            </div>
         ))}
      </div>

      {/* Bottom CTA */}
      <div className="py-32 border-t border-white/10 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-agency-red/5 animate-pulse" />
         <div className="relative z-10 container mx-auto px-6">
            <h2 className="font-display text-4xl md:text-6xl uppercase mb-10">¿Listo para transformar tu negocio?</h2>
            <a 
               href="https://wa.me/593991886726" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block bg-white text-agency-black hover:bg-agency-red hover:text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
               Agendar Reunión Gratis
            </a>
         </div>
      </div>

    </section>
  );
};