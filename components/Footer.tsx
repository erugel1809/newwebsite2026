import React from 'react';
import { ArrowUpRight, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] text-white pt-24 pb-8 border-t border-white/5 font-sans relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-agency-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-20 border-b border-white/5 gap-10">
           <div>
              <p className="text-agency-red font-bold text-xs uppercase tracking-[0.2em] mb-4">¿Tienes un proyecto?</p>
              <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
                 Trabajemos <br/> <span className="text-outline-red hover:text-agency-red transition-colors duration-500 cursor-pointer">Juntos</span>
              </h2>
           </div>
           <a 
              href="https://wa.me/593991886726" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white text-black hover:bg-agency-red hover:text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-3"
           >
              <span>Iniciar Cotización</span>
              <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
           </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
           
           {/* Column 1: Brand */}
           <div className="space-y-6">
              <div className="flex items-center gap-2">
                 <img 
                   src="http://elizabethrugel.com/wp-content/uploads/2025/03/LOGO-BLANCO-350.png" 
                   alt="Elizabeth Rugel Logo" 
                   className="h-10 w-auto object-contain"
                 />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                 Elevamos marcas a través de diseño estratégico y desarrollo web de alto rendimiento. Tu socio digital en Ecuador.
              </p>
              <div className="flex gap-4">
                 <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-agency-red hover:border-agency-red hover:text-white transition-all">
                    <Instagram size={18} />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-agency-red hover:border-agency-red hover:text-white transition-all">
                    <Facebook size={18} />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-agency-red hover:border-agency-red hover:text-white transition-all">
                    <Linkedin size={18} />
                 </a>
              </div>
           </div>

           {/* Column 2: Services */}
           <div>
              <h4 className="font-display text-lg uppercase mb-6">Servicios</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                 <li><a href="#" className="hover:text-agency-red transition-colors">Diseño Web Corporativo</a></li>
                 <li><a href="#" className="hover:text-agency-red transition-colors">E-commerce & Tiendas</a></li>
                 <li><a href="#" className="hover:text-agency-red transition-colors">Catálogos Digitales</a></li>
                 <li><a href="#" className="hover:text-agency-red transition-colors">Tarjetas de Presentación</a></li>
                 <li><a href="#" className="hover:text-agency-red transition-colors">Branding & Identidad</a></li>
              </ul>
           </div>

           {/* Column 3: Company */}
           <div>
              <h4 className="font-display text-lg uppercase mb-6">Agencia</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                 <li><a href="#" className="hover:text-agency-red transition-colors">Sobre Nosotros</a></li>
                 <li><a href="#" className="hover:text-agency-red transition-colors">Portafolio</a></li>
                 <li><a href="#" className="hover:text-agency-red transition-colors">Testimonios</a></li>
                 <li><a href="#" className="hover:text-agency-red transition-colors">Preguntas Frecuentes</a></li>
                 <li><a href="#" className="hover:text-agency-red transition-colors">Contacto</a></li>
              </ul>
           </div>

           {/* Column 4: Contact */}
           <div>
              <h4 className="font-display text-lg uppercase mb-6">Contacto</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                 <li className="flex items-start gap-3">
                    <Mail size={16} className="text-agency-red mt-1" />
                    <span>hola@elizabethrugel.com</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <Phone size={16} className="text-agency-red mt-1" />
                    <span>+593 99 188 6726</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <MapPin size={16} className="text-agency-red mt-1" />
                    <span>Guayaquil, Ecuador <br/> Disponible Globalmente</span>
                 </li>
              </ul>
           </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-wider">
           <p>© 2026 Elizabeth Rugel. Todos los derechos reservados.</p>
           <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
           </div>
        </div>

      </div>
    </footer>
  );
};