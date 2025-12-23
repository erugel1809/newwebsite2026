import React, { useEffect, useState } from 'react';

export const Academy: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-agency-black min-h-screen pt-20 relative flex flex-col">
      <div className="flex-1 w-full relative bg-agency-black min-h-[calc(100vh-80px)]">
        
        {/* Prominent Loader Overlay */}
        {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-agency-black">
                <div className="w-16 h-16 border-4 border-agency-gray border-t-agency-red rounded-full animate-spin mb-4 shadow-[0_0_20px_rgba(230,0,0,0.2)]"></div>
                <span className="text-agency-red text-xs font-bold uppercase tracking-[0.2em] animate-pulse">Cargando Academia...</span>
            </div>
        )}
        
        <iframe
          src="https://v0-open-in-v0-seven-smoky.vercel.app/"
          className={`w-full h-[calc(100vh-80px)] border-none relative z-10 bg-agency-black transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          title="Academia Teckmark"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </section>
  );
};