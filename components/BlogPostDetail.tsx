import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, ArrowRight } from 'lucide-react';
import { blogPostsData } from '../data/blogPosts';

export const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPostsData.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-agency-black flex flex-col items-center justify-center text-white p-6">
        <h1 className="font-display text-4xl mb-4 uppercase">Artículo no encontrado</h1>
        <Link to="/blog" className="text-agency-red hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Volver al blog
        </Link>
      </div>
    );
  }

  // Helper to parse content and transform bold paragraphs with links into MASTER CTAs
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, idx) => {
      // Check if it's a bold Master CTA paragraph: starts and ends with ** and contains a [TEXT](URL)
      const isMasterCTA = paragraph.startsWith('**') && paragraph.endsWith('**') && paragraph.includes('[');

      if (isMasterCTA) {
        const cleanParagraph = paragraph.replace(/\*\*/g, '');
        const linkRegex = /\[(.*?)\]\((.*?)\)/g;
        const match = linkRegex.exec(cleanParagraph);

        if (match) {
          const fullText = cleanParagraph.replace(match[0], '').trim();
          const buttonText = match[1];
          const buttonUrl = match[2];

          return (
            <div key={idx} className="my-20 group/cta-block">
              <a 
                href={buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-black hover:bg-agency-red hover:text-white p-8 md:p-12 transition-all duration-700 shadow-2xl relative overflow-hidden group/btn"
              >
                {/* Background Text Effect */}
                <div className="absolute -bottom-10 -right-10 font-display text-[15vw] opacity-[0.03] select-none pointer-events-none group-hover/btn:opacity-[0.07] transition-opacity">
                  GO
                </div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
                  <div className="flex-1 text-center md:text-left">
                    <p className="font-display text-2xl md:text-4xl uppercase leading-tight tracking-tight mb-2">
                      {fullText}
                    </p>
                  </div>
                  <div className="flex flex-col items-center md:items-end flex-shrink-0">
                    <div className="bg-black text-white group-hover/btn:bg-white group-hover/btn:text-agency-red px-10 py-5 rounded-full font-display text-2xl md:text-3xl uppercase tracking-wider flex items-center gap-4 transition-all duration-500 shadow-lg">
                      {buttonText}
                      <ArrowRight size={28} className="group-hover/btn:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        }
      }

      // Render Subheadings
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={idx} className="font-display text-2xl md:text-4xl uppercase text-white pt-10 mb-6 border-l-4 border-agency-red pl-6">
            {paragraph.replace(/\*\*/g, '')}
          </h3>
        );
      }

      // Normal paragraph
      return (
        <p key={idx} className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 font-light">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <article className="bg-agency-black min-h-screen pt-40 pb-24 text-white font-sans selection:bg-agency-red selection:text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Navigation */}
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 uppercase text-[10px] font-bold tracking-[0.2em]"
        >
          <ArrowLeft size={14} /> Volver a Insights
        </button>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-agency-red text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="bg-agency-red/10 px-3 py-1 rounded-full border border-agency-red/20">{post.category}</span>
            <span className="text-gray-800">/</span>
            <span className="text-gray-500 flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
          </div>
          <h1 className="font-display text-4xl md:text-7xl uppercase leading-[1.05] mb-10">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 border-t border-b border-white/5 py-8">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-agency-red bg-agency-dark p-1">
               <img src="https://elizabethrugel.com/wp-content/uploads/2025/03/LOGO-BLANCO-350.png" alt="Elizabeth Rugel" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-agency-red mb-1">Autoridad Digital</p>
              <h4 className="font-display text-2xl uppercase tracking-wide">Elizabeth Rugel</h4>
            </div>
          </div>
        </header>

        {/* Main Image */}
        <div className="aspect-video rounded-[2rem] overflow-hidden mb-20 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative group">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-agency-black/60 to-transparent"></div>
        </div>

        {/* Content Body */}
        <div className="prose prose-invert max-w-none">
          {renderContent(post.content)}
        </div>

        {/* Final Footer CTA */}
        <div className="mt-32 pt-16 border-t border-white/10">
           <div className="bg-[#0a0a0a] p-12 md:p-20 rounded-[3rem] border border-agency-red/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-agency-red/10 blur-[120px] group-hover:bg-agency-red/20 transition-all duration-1000"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="text-agency-red text-xs font-bold uppercase tracking-[0.4em] mb-8">Soluciones Boutique de Alto Impacto</span>
                <h3 className="font-display text-5xl md:text-7xl uppercase mb-8 leading-[0.9] max-w-3xl">
                   Diseñemos el futuro <br/> <span className="text-outline-red group-hover:text-agency-red transition-colors duration-500">De tu Empresa</span>
                </h3>
                <p className="text-gray-400 mb-12 max-w-xl text-lg md:text-xl leading-relaxed">
                  No te conformes con una web que solo se ve bien. Obtén una herramienta comercial diseñada para dominar tu mercado en Ecuador.
                </p>
                <a 
                  href="https://wa.me/593991886726" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-5 bg-agency-red text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-500 shadow-[0_20px_40px_rgba(230,0,0,0.4)] group/btn"
                >
                  Agendar Consultoría Gratuita <ArrowRight size={22} className="group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>
           </div>
        </div>

        {/* Navigation Bottom */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 py-10 border-b border-white/5">
            <Link to="/blog" className="text-gray-500 hover:text-white transition-colors font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-3">
               <ArrowLeft size={18} /> Explorar más Artículos
            </Link>
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">Compartir Insight:</span>
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-agency-red transition-all group">
                <Share2 size={16} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
        </div>

      </div>
    </article>
  );
};