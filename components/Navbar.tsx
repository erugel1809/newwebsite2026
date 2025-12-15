import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cambia el estado si el usuario baja más de 20px
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex justify-between items-center text-white transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-agency-black/90 backdrop-blur-md border-b border-white/5 shadow-lg' 
          : 'py-6 bg-transparent'
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img 
          src="http://elizabethrugel.com/wp-content/uploads/2025/03/LOGO-BLANCO-350.png" 
          alt="Elizabeth Rugel Logo" 
          // Logo más pequeño: h-8 (32px) por defecto, h-10 (40px) solo en desktop cuando está arriba del todo
          className={`w-auto object-contain transition-all duration-300 ${
            isScrolled ? 'h-6 md:h-8' : 'h-8 md:h-10'
          }`}
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 xl:gap-8 text-xs font-bold uppercase tracking-widest">
        <Link to="/" className="hover:text-agency-red transition-colors">Inicio</Link>
        <Link to="/catalogo" className="hover:text-agency-red transition-colors">Servicios</Link>
        <Link to="/proyectos" className="hover:text-agency-red transition-colors">Portafolio</Link>
        <Link to="/herramientas" className="hover:text-agency-red transition-colors">Herramientas Gratuitas</Link>
        <Link to="/academia" className="hover:text-agency-red transition-colors">Academia Teckmark</Link>
      </div>

      {/* Right Button */}
      <div className="hidden md:flex items-center gap-3">
         <a 
            href="https://wa.me/593991886726"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 bg-agency-red hover:bg-white hover:text-black text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              isScrolled ? 'px-5 py-2' : 'px-6 py-2'
            }`}
         >
            <Phone size={16} />
            <span>Contacto</span>
         </a>
      </div>
    </nav>
  );
};