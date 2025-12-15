import React, { useEffect } from 'react';

export const FreeTools: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-black min-h-screen py-20 pt-40 relative overflow-hidden font-sans selection:bg-agency-red selection:text-white">
        
        <div className="container mx-auto max-w-[1400px] z-10 relative px-6">
            {/* Title */}
            <div className="text-center mb-20">
                <div className="inline-block relative">
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 relative z-10 font-display uppercase leading-none">
                        Herramientas <br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">Gratuitas</span>
                    </h2>
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-red-800/20 blur-xl rounded-full"></div>
                </div>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans mt-4">
                    Soluciones profesionales sin costo para potenciar tu productividad y optimizar tus activos digitales.
                </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
                
                {/* Tool 1 */}
                <ToolCard 
                    title="Compresor de Imágenes"
                    desc="Optimiza tus imágenes sin perder calidad. Reduce el tamaño de archivos hasta un 80% manteniendo la nitidez perfecta."
                    features={["Compresión inteligente con IA", "Recorte automático", "Formatos: JPG, PNG, WebP", "Sin límites de uso"]}
                    link="https://elizabethrugel.com/eli-compressor/"
                    btnText="Comprimir Imágenes"
                    gradient="from-purple-600 to-pink-600"
                    glow="bg-purple-600/20 group-hover:bg-purple-600/30"
                    icon={<svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>}
                    extraIcon={<div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"><svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></div>}
                />

                {/* Tool 2 */}
                <ToolCard 
                    title="Extractor CSV"
                    desc="Convierte con facilidad. Filtra, ordena y exporta datos estructurados en segundos."
                    features={["Conversión instantánea a CSV", "Vista previa en tiempo real", "Limpieza de datos", "Exportación rápida"]}
                    link="https://elizabethrugel.com/eli-csv-extractor/"
                    btnText="Extraer CSV"
                    gradient="from-green-600 to-emerald-600"
                    glow="bg-green-600/20 group-hover:bg-green-600/30"
                    icon={<svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/></svg>}
                />

                {/* Tool 3 */}
                <ToolCard 
                   title="Compresor de PDF"
                   desc="Reduce el tamaño de tus archivos PDF sin perder calidad. Optimiza documentos para web y email."
                   features={["Compresión hasta 90%", "Configuración de calidad", "Procesamiento seguro", "Múltiples archivos"]}
                   link="https://elizabethrugel.com/eli-pdf-compress/"
                   btnText="Comprimir PDF"
                   gradient="from-blue-600 to-cyan-600"
                   glow="bg-blue-600/20 group-hover:bg-blue-600/30"
                   icon={<svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/></svg>}
                />

                {/* Tool 4 */}
                <ToolCard 
                   title="Conversor Universal"
                   desc="Convierte entre cientos de unidades de medida. Desde longitud hasta monedas, todo en un lugar."
                   features={["Más de 500 unidades", "Longitud, peso, temperatura", "Interfaz intuitiva", "Resultados precisos"]}
                   link="https://elizabethrugel.com/eli-convert/"
                   btnText="Convertir Unidades"
                   gradient="from-orange-600 to-red-600"
                   glow="bg-orange-600/20 group-hover:bg-orange-600/30"
                   icon={<svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/></svg>}
                />

            </div>
            
            {/* CTA */}
             <div className="text-center pb-20">
                <div className="bg-gradient-to-r from-red-900/10 to-red-800/10 backdrop-blur-sm border border-red-500/20 rounded-3xl p-12 max-w-4xl mx-auto hover:border-red-500/40 transition-colors duration-500">
                    <h3 className="text-3xl font-bold text-white mb-4 font-display uppercase">¿Necesitas más herramientas?</h3>
                    <p className="text-gray-400 mb-8 text-lg font-sans">
                        Estamos constantemente añadiendo nuevas herramientas gratuitas para ayudarte en tus proyectos digitales.
                    </p>
                    <a href="https://wa.me/593991886726?text=Hola,%20me%20interesa%20solicitar%20una%20nueva%20herramienta" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 px-8 py-4 rounded-full font-bold uppercase tracking-widest inline-flex items-center gap-2 transition-all hover:-translate-y-1 shadow-lg shadow-red-500/30 group">
                        <span>Solicitar Herramienta</span>
                        <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
                    </a>
                </div>
            </div>

        </div>
    </section>
  )
}

const ToolCard = ({ title, desc, features, link, btnText, gradient, glow, icon, extraIcon }: any) => (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-red-900/20 rounded-3xl p-8 hover:border-red-500/40 transition-all duration-700 group h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(239,68,68,0.25)]">
        <div className="text-left h-full flex flex-col">
            <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg relative`}>
                    {icon}
                    {extraIcon}
                </div>
                <div className={`absolute -inset-2 ${glow} rounded-full blur-lg transition-all duration-500 pointer-events-none opacity-50 group-hover:opacity-100`}></div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 font-display uppercase tracking-wide">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                {desc}
            </p>
            
            <div className="mb-8 flex-grow">
                <h4 className="text-white font-semibold mb-3 font-display uppercase text-xs tracking-widest text-agency-red">Características</h4>
                <ul className="text-gray-400 text-sm space-y-2 font-sans">
                    {features.map((f: string, i: number) => (
                        <li key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                            {f}
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="mt-auto">
                <a href={link} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs w-full inline-block text-center transition-all hover:-translate-y-1 shadow-lg shadow-red-500/20">
                    {btnText}
                </a>
            </div>
        </div>
    </div>
)