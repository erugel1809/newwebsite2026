import React from 'react';
import { ArrowRight, Calendar, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPostsData } from '../data/blogPosts';

export const BlogHomeSection: React.FC = () => {
  // Mostramos los 2 últimos artículos
  const latestPosts = blogPostsData.slice(0, 2);

  return (
    <section className="bg-agency-black py-24 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <p className="text-agency-red font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Actualidad & Recursos</p>
            <h2 className="font-display text-4xl md:text-6xl text-white uppercase leading-none">
              Último en <br/> <span className="text-outline">el Blog.</span>
            </h2>
          </div>
          <Link to="/blog" className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white hover:text-agency-red transition-all">
            Ver todas las entradas
            <MoveRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestPosts.map((post) => (
            <Link 
              to={`/blog/${post.slug}`} 
              key={post.id}
              className="group relative flex flex-col md:flex-row bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-agency-red/30 transition-all duration-500"
            >
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-agency-red text-[10px] font-bold uppercase tracking-widest mb-4">
                  <Tag size={12} /> {post.category}
                  <span className="text-gray-800">|</span>
                  <span className="text-gray-500 flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                </div>
                <h3 className="font-display text-2xl text-white uppercase leading-tight group-hover:text-agency-red transition-colors mb-6">
                  {post.title}
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-2 group-hover:gap-4 transition-all">
                  Leer más <ArrowRight size={16} className="text-agency-red" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Tag = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>
);