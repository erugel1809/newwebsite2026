import React, { useEffect } from 'react';

export const Academy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-agency-black min-h-screen pt-20 relative flex flex-col">
      <div className="flex-1 w-full relative bg-agency-black">
        {/* Loader placeholder behind iframe */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-8 h-8 border-4 border-agency-red border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        <iframe
          src="https://v0-open-in-v0-seven-smoky.vercel.app/"
          className="w-full h-[calc(100vh-80px)] border-none relative z-10 bg-agency-black"
          title="Academia Teckmark"
          allowFullScreen
        />
      </div>
    </section>
  );
};