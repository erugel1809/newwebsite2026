import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPostsData } from '../data/blogPosts';

const categories = ["Todos", "Diseño Web", "E-commerce", "Estrategia", "Academia"];

export const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPostsData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let result = blogPostsData;
    
    if (activeCategory !== "Todos") {
      result = result.filter(post => post.category === activeCategory);
    }
    
    if (searchQuery) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredPosts(result);
  }, [activeCategory, searchQuery]);

  return (
    <section className="bg-agency-black min-h-screen pt-40 pb-24 text-white font-sans">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <h1 className="font-display text-6xl md:text-9xl uppercase leading-[0.85] mb-8">
            Expertise & <br/> <span className="text-agency-red">Insights</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Como profesional con más de 20 años en la industria, comparto mi visión sobre cómo construir una presencia digital que no solo sea bella, sino altamente rentable.
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 pb-8 border-b border-white/5">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-agency-red border-agency-red text-white'
                    : 'bg-transparent border-white/10 text-gray-500 hover:border-white hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Buscar tema..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-agency-red transition-colors"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group flex flex-col h-full bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-agency-red/30 transition-all duration-500">
              {/* Image Link */}
              <Link to={`/blog/${post.slug}`} className="relative h-60 overflow-hidden block">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-agency-red text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider z-10">
                  {post.category}
                </div>
              </Link>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-agency-red" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User size={12} className="text-agency-red" /> Elizabeth Rugel</span>
                </div>
                
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="font-display text-2xl uppercase mb-4 leading-tight group-hover:text-agency-red transition-colors">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                  {post.excerpt}
                </p>

                <Link 
                  to={`/blog/${post.slug}`} 
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:text-agency-red transition-colors"
                >
                  Leer Artículo <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 opacity-30">
            <p className="text-xl uppercase font-display">No se encontraron artículos que coincidan.</p>
          </div>
        )}

      </div>
    </section>
  );
};