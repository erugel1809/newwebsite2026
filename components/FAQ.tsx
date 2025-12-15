import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un sitio web?",
    answer: "El tiempo varía según la complejidad del proyecto. Un sitio web corporativo o catálogo suele tomar entre 2 a 3 semanas, mientras que un E-commerce completo puede requerir de 4 a 6 semanas para asegurar una integración perfecta de pagos y productos."
  },
  {
    question: "¿Incluyen dominio y hosting en el servicio?",
    answer: "Ofrecemos asesoría completa para la compra de tu dominio y hosting. Trabajamos con los mejores proveedores para asegurar velocidad y seguridad. En algunos de nuestros paquetes 'Todo Incluido', podemos gestionar esto por ti durante el primer año."
  },
  {
    question: "¿Mi sitio web estará optimizado para Google (SEO)?",
    answer: "Absolutamente. Todos nuestros diseños se construyen bajo las mejores prácticas de SEO técnico: estructura limpia, velocidad de carga rápida (Core Web Vitals), etiquetas meta correctas y diseño responsive para móviles, fundamental para posicionar en Ecuador."
  },
  {
    question: "¿Ofrecen mantenimiento después de la entrega?",
    answer: "Sí, creemos en las relaciones a largo plazo. Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, copias de seguridad diarias y pequeños cambios de contenido para que tu negocio nunca se detenga."
  },
  {
    question: "¿Cómo funcionan las tarjetas de presentación digitales?",
    answer: "Son micro-sitios interactivos. Te entregamos un enlace único (o código QR) que puedes compartir por WhatsApp o redes. Al abrirlo, tus clientes pueden llamarte, guardar tu contacto, ver tu portafolio o ubicarte en el mapa con un solo clic."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-agency-black py-24 border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Title - Sticky only on Desktop */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase leading-[0.9] mb-6">
            Preguntas <br/> <span className="text-agency-red">Frecuentes</span>
          </h2>
          <p className="text-gray-400 text-sm mt-6 max-w-xs leading-relaxed">
            Resolvemos tus dudas antes de empezar. Si tienes otra pregunta, contáctanos directamente por WhatsApp.
          </p>
        </div>

        {/* Right Accordion */}
        <div className="lg:col-span-8">
          <div className="divide-y divide-white/10 border-t border-white/10 lg:border-t-0">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6 group">
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left focus:outline-none py-2 select-none"
                  aria-expanded={openIndex === index}
                >
                  <span className={`font-display text-xl md:text-2xl uppercase transition-colors duration-300 pr-8 ${openIndex === index ? 'text-agency-red' : 'text-white group-hover:text-gray-300'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${openIndex === index ? 'bg-agency-red text-white rotate-180' : 'bg-white/5 text-white group-hover:bg-white/10'}`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl pb-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};