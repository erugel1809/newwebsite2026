import React, { useState, useEffect } from 'react';
import { ExternalLink, Filter, Layers, ShoppingBag, Globe, Smartphone, ArrowUpRight } from 'lucide-react';

// Project Data
const projects = [
  // NUEVOS PROYECTOS (REALES)
  {
    id: 101,
    title: "ADN Web",
    category: "Web Corporativa",
    image: "http://elizabethrugel.com/wp-content/uploads/2025/08/adnweb.png",
    desc: "Diseño web corporativo moderno enfocado en la identidad de marca y presentación clara de servicios profesionales.",
    tags: ["Corporativo", "Identidad", "UX/UI"]
  },
  {
    id: 102,
    title: "Cargo Ocean",
    category: "Web Corporativa",
    image: "http://elizabethrugel.com/wp-content/uploads/2025/08/cargooceanweb-1.png",
    desc: "Plataforma digital para empresa de logística internacional, optimizada para presentar servicios de carga y transporte.",
    tags: ["Logística", "B2B", "Corporativo"]
  },
  {
    id: 103,
    title: "Solutec",
    category: "Web Corporativa",
    image: "http://elizabethrugel.com/wp-content/uploads/2025/08/solutec.png",
    desc: "Sitio web tecnológico para empresa de soluciones integrales, destacando innovación y soporte técnico.",
    tags: ["Tecnología", "Industrial", "Web"]
  },
  {
    id: 104,
    title: "Dr. Roberto Silva",
    category: "Web Médicos",
    image: "http://elizabethrugel.com/wp-content/uploads/2025/08/drroberto-1.png",
    desc: "Sitio web profesional para especialista médico con integración de perfil profesional y contacto directo.",
    tags: ["Salud", "Medicina", "Marca Personal"]
  },
  {
    id: 105,
    title: "Dra. Abigail",
    category: "Web Médicos",
    image: "http://elizabethrugel.com/wp-content/uploads/2025/08/draabigail-1.png",
    desc: "Diseño web médico con enfoque cálido y profesional, optimizado para generar confianza en pacientes.",
    tags: ["Pediatría", "Salud", "Web"]
  },
  {
    id: 106,
    title: "Grupo Masuq",
    category: "Web Corporativa",
    image: "http://elizabethrugel.com/wp-content/uploads/2025/08/masuq-1.png",
    desc: "Portal corporativo integral para presentación de portafolio de servicios y captación de clientes.",
    tags: ["Negocios", "Corporativo", "Servicios"]
  }
];

const categories = [
  "Todos", 
  "Web Corporativa", 
  "Web Médicos"
];

export const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter Logic
  useEffect(() => {
    if (activeFilter === "Todos") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section className="bg-agency-black min-h-screen text-white relative font-sans selection:bg-agency-red selection:text-white">
      
      {/* Header */}
      <header className="pt-32 pb-12 px-6 md:px-12 container mx-auto text-center">
         <h1 className="font-display text-5xl md:text-8xl uppercase leading-[0.9] mb-8">
            Nuestros <br/> <span className="text-agency-red">Proyectos</span>
         </h1>
         <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed mb-12">
            Una selección curada de trabajos que definen nuestra pasión por el diseño, la funcionalidad y los resultados tangibles.
         </p>

         {/* Filters */}
         <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
               <button 
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                     activeFilter === cat 
                     ? 'bg-agency-red border-agency-red text-white' 
                     : 'bg-transparent border-white/20 text-gray-400 hover:border-white hover:text-white'
                  }`}
               >
                  {cat}
               </button>
            ))}
         </div>
      </header>

      {/* Grid */}
      <div className="container mx-auto px-6 md:px-12 pb-32">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
               <div key={project.id} className="group relative bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden hover:border-agency-red/30 transition-all duration-500 hover:-translate-y-2">
                  
                  {/* Image */}
                  <div className="h-64 overflow-hidden relative">
                     <div className="absolute inset-0 bg-agency-black/20 group-hover:bg-transparent transition-all z-10" />
                     <img 
                        src={project.image} 
                        alt={project.title} 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                     />
                     <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white">{project.category}</span>
                     </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                     <h3 className="font-display text-2xl uppercase mb-3 text-white group-hover:text-agency-red transition-colors">
                        {project.title}
                     </h3>
                     <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {project.desc}
                     </p>
                     
                     {/* Tags */}
                     <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag, i) => (
                           <span key={i} className="text-[10px] text-gray-500 border border-white/10 px-2 py-1 rounded uppercase tracking-wide">
                              {tag}
                           </span>
                        ))}
                     </div>
                  </div>

               </div>
            ))}
         </div>

         {/* Empty State */}
         {filteredProjects.length === 0 && (
            <div className="text-center py-20 opacity-50">
               <p className="text-xl font-display uppercase">No hay proyectos en esta categoría.</p>
            </div>
         )}
      </div>

      {/* Footer CTA */}
      <div className="py-20 border-t border-white/10 text-center bg-[#080808]">
         <h2 className="font-display text-3xl uppercase mb-6">¿Te gusta lo que ves?</h2>
         <a 
            href="https://wa.me/593991886726" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-black hover:bg-agency-red hover:text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all"
         >
            Inicia tu Proyecto
         </a>
      </div>

    </section>
  );
};