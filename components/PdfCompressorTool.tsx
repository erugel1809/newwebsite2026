import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Loader2, FileText } from 'lucide-react';

const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>>_Eli PDF Compressor - Reduce el tamaño de tus archivos</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            background: #000;
        }
        .gradient-bg {
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
        }
        .glass-effect {
            backdrop-filter: blur(15px);
            background: rgba(255, 0, 0, 0.1);
            border: 1px solid rgba(255, 0, 0, 0.3);
            box-shadow: 0 8px 32px rgba(255, 0, 0, 0.1);
        }
        .feature-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body class="gradient-bg min-h-screen">
    {/* Removido header interno para consistencia con el sitio */}
    
    <main class="container mx-auto px-4 py-12">
        <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter font-display">
                Comprime tus archivos PDF
            </h2>
            <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto font-light">
                Reduce el tamaño de tus documentos PDF sin perder calidad. Rápido, seguro y completamente gratuito.
            </p>
        </div>

        <div id="avepdf-container-id" class="bg-white rounded-xl overflow-hidden shadow-2xl min-h-[400px]">
            <script type="text/javascript" src="https://avepdf.com/api/js/embedwidgets.js"></script>
            <script type="text/javascript">
                window.onload = function() {
                    if (typeof loadAvePDFWidget === 'function') {
                        loadAvePDFWidget('b7a2efad-c66f-4401-a4ab-8a0ff57f3bb7', 'auto', 'hyper-compress-pdf', 'avepdf-container-id');
                    }
                };
            </script>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-16 mt-16">
            <div class="feature-card glass-effect rounded-xl p-6 text-center">
                <div class="w-16 h-16 bg-red-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-2 uppercase tracking-wide">Súper Rápido</h3>
                <p class="text-red-200/80 text-sm">Compresión instantánea con tecnología avanzada de optimización</p>
            </div>

            <div class="feature-card glass-effect rounded-xl p-6 text-center">
                <div class="w-16 h-16 bg-red-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-2 uppercase tracking-wide">100% Seguro</h3>
                <p class="text-red-200/80 text-sm">Tus archivos se procesan de forma segura y se eliminan automáticamente</p>
            </div>

            <div class="feature-card glass-effect rounded-xl p-6 text-center">
                <div class="w-16 h-16 bg-red-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-2 uppercase tracking-wide">Gratis Siempre</h3>
                <p class="text-red-200/80 text-sm">Sin límites, sin registro, sin costos ocultos. Completamente gratuito</p>
            </div>
        </div>
    </main>
</body>
</html>
`;

export const PdfCompressorTool: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full h-screen bg-agency-black flex flex-col overflow-hidden">
      {/* Barra de navegación superior integrada (HEADER ESTANDARIZADO) */}
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
          <span className="text-[10px] font-bold text-agency-red uppercase tracking-[0.2em] leading-none mb-1">Optimización de Archivos</span>
          <h2 className="font-display text-xl uppercase tracking-wider text-white">Compresor PDF Pro</h2>
        </div>

        <div className="hidden md:flex items-center gap-2 text-agency-red">
          <FileText size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">PDF Engine</span>
        </div>
        <div className="w-10 h-10 md:hidden"></div>
      </div>

      {/* Contenedor del Motor de Compresión */}
      <div className="flex-1 relative bg-black">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-agency-black z-40">
            <Loader2 className="text-agency-red animate-spin mb-4" size={48} />
            <p className="text-agency-red text-xs font-bold uppercase tracking-[0.2em] animate-pulse">Cargando Motor PDF...</p>
          </div>
        )}
        
        <iframe
          srcDoc={htmlContent}
          className={`w-full h-full border-none transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          title="Eli PDF Compressor"
          sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-modals"
          onLoad={() => setIsLoading(false)}
        />
      </div>
      
      {/* Footer minimalista de la herramienta */}
      <div className="bg-agency-black py-2 px-6 border-t border-white/10 text-center">
        <p className="text-[8px] text-gray-600 uppercase tracking-widest">
          Desarrollado por Elizabeth Rugel &copy; 2026 - Herramienta Pro para Empresas de Ecuador
        </p>
      </div>
    </div>
  );
};