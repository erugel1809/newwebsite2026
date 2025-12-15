import React, { useEffect } from 'react';
import { Image, FileSpreadsheet, FileText, ArrowRightLeft, ArrowUpRight, Sparkles, Zap } from 'lucide-react';

export const FreeTools: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-agency-black min-h-screen pt-32 pb-20 relative overflow-hidden font-sans selection:bg-agency-red selection:text-white">
        
        {/* Background Noise/Gradient similar to other pages */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-agency-red/10 via-agency-black to-agency-black pointer-events-none" />

        <div className="container mx-auto max-w-[1200px] z-10 relative px-6">
            
            {/* Header */}
            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 mb-6 border border-white/20 px-4 py-2 rounded-full">
                    <Zap size={14} className="text-agency-red" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Utilidades Web</span>
                </div>
                <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] mb-6 text-white">
                    Herramientas <br/> <span className="text-agency-red">Gratuitas</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                    Hemos liberado parte de nuestro set de herramientas internas. Optimiza tus archivos y datos con la misma tecnología que usamos en nuestros proyectos.
                </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-24">
                
                {/* Tool 1 */}
                <ToolCard 
                    title="Compresor de Imágenes"
                    desc="Reduce el peso de tus imágenes JPG, PNG y WebP hasta un 80% sin sacrificar la calidad visual. Vital para SEO."
                    features={["Compresión IA", "Formato WebP", "Sin Marcas de Agua"]}
                    link="https://elizabethrugel.com/eli-compressor/"
                    btnText="Comprimir Ahora"
                    icon={Image}
                />

                {/* Tool 2 */}
                <ToolCard 
                    title="Extractor CSV"
                    desc="Limpia, filtra y organiza grandes volúmenes de datos. Convierte texto desordenado en tablas listas para Excel."
                    features={["Limpieza de Datos", "Exportación Rápida", "Vista Previa"]}
                    link="https://elizabethrugel.com/eli-csv-extractor/"
                    btnText="Extraer Datos"
                    icon={FileSpreadsheet}
                />

                {/* Tool 3 */}
                <ToolCard 
                   title="Compresor de PDF"
                   desc="Optimiza documentos PDF para enviarlos por correo o publicarlos en web. Mantiene la legibilidad del texto."
                   features={["Alta Compresión", "Seguridad Total", "Procesamiento Rápido"]}
                   link="https://elizabethrugel.com/eli-pdf-compress/"
                   btnText="Optimizar PDF"
                   icon={FileText}
                />

                {/* Tool 4 */}
                <ToolCard 
                   title="Conversor Universal"
                   desc="Transforma unidades de medida al instante. Longitud, peso, temperatura y monedas en una interfaz minimalista."
                   features={["500+ Unidades", "Conversión Moneda", "Cálculo Real"]}
                   link="https://elizabethrugel.com/eli-convert/"
                   btnText="Convertir Unidades"
                   icon={ArrowRightLeft}
                />

            </div>
            
            {/* CTA Section */}
             <div className="border-t border-white/10 pt-20 text-center relative">
                <div className="max-w-3xl mx-auto bg-[#0a0a0a] border border-white/5 rounded-2xl p-10 md:p-16 relative overflow-hidden group hover:border-agency-red/30 transition-all duration-500">
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-agency-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <Sparkles className="text-agency-red w-12 h-12 mx-auto mb-6" />
                    
                    <h3 className="text-3xl md:text-4xl font-display uppercase text-white mb-4">¿Te falta alguna herramienta?</h3>
                    <p className="text-gray-400 mb-10 text-sm md:text-base">
                        Desarrollamos soluciones a medida. Si necesitas una automatización específica para tu flujo de trabajo, contáctanos.
                    </p>
                    
                    <a 
                        href="https://wa.me/593991886726?text=Hola,%20quisiera%20sugerir%20una%20nueva%20herramienta%20gratuita" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-3 bg-white text-black hover:bg-agency-red hover:text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300"
                    >
                        <span>Solicitar Feature</span>
                        <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>

        </div>
    </section>
  )
}

interface ToolCardProps {
    title: string;
    desc: string;
    features: string[];
    link: string;
    btnText: string;
    icon: React.ElementType;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, desc, features, link, btnText, icon: Icon }) => (
    <div className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl p-8 hover:border-agency-red/50 transition-all duration-500 flex flex-col hover:-translate-y-1">
        
        {/* Hover Background subtle red */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

        <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-agency-gray border border-white/10 flex items-center justify-center text-white group-hover:text-agency-red group-hover:border-agency-red/50 transition-colors duration-300">
                    <Icon size={24} />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight size={20} className="text-agency-red" />
                </div>
            </div>
            
            <h3 className="text-2xl font-display uppercase text-white mb-3 tracking-wide">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {desc}
            </p>
            
            <div className="mb-8 mt-auto pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-3">
                    {features.map((f, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-white/60 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:border-white/10 transition-colors">
                            {f}
                        </span>
                    ))}
                </div>
            </div>
            
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full block text-center border border-white/20 text-white hover:bg-agency-red hover:border-agency-red hover:text-white py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300"
            >
                {btnText}
            </a>
        </div>
    </div>
);