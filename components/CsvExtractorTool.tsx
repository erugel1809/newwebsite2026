import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Loader2, FileSpreadsheet } from 'lucide-react';

export const CsvExtractorTool: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full h-screen bg-agency-black flex flex-col overflow-hidden">
      {/* Barra de navegación superior de la herramienta (HEADER ESTANDARIZADO) */}
      <div className="flex items-center justify-between px-6 py-4 bg-agency-black border-b border-white/10 z-50 mt-16 md:mt-20">
        <Link 
          to="/herramientas" 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <div className="p-2 rounded-full border border-white/10 group-hover:bg-agency-red group-hover:border-agency-red transition-all">
            <ArrowLeft size={18} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest hidden md:block">Volver a Herramientas</span>
        </Link>
        
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold text-agency-red uppercase tracking-[0.2em] leading-none mb-1">Herramientas Pro</span>
          <h2 className="font-display text-xl uppercase tracking-wider text-white">Extractor CSV</h2>
        </div>

        <div className="hidden md:flex items-center gap-2 text-agency-red">
          <FileSpreadsheet size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Data Engine</span>
        </div>
        <div className="w-10 h-10 md:hidden"></div>
      </div>

      {/* Contenedor del Iframe */}
      <div className="flex-1 relative bg-white">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-agency-black z-40">
            <Loader2 className="text-agency-red animate-spin mb-4" size={48} />
            <p className="text-agency-red text-xs font-bold uppercase tracking-[0.2em] animate-pulse">Iniciando Motor de Datos...</p>
          </div>
        )}
        
        <iframe
          src="https://studio--tablamgica2.us-central1.hosted.app/"
          className={`w-full h-full border-none transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          title="Extractor de CSV Mágico"
          sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-modals"
          onLoad={() => setIsLoading(false)}
        />
      </div>
      
      {/* Footer minimalista de la herramienta */}
      <div className="bg-agency-black py-2 px-6 border-t border-white/10 text-center">
        <p className="text-[8px] text-gray-600 uppercase tracking-widest">
          Desarrollado por Elizabeth Rugel &copy; 2026 - Procesamiento de datos 100% privado y seguro
        </p>
      </div>
    </div>
  );
};