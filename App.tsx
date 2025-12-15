import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { PortfolioArc } from './components/PortfolioArc';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ServiceCatalog } from './components/ServiceCatalog';
import { PortfolioPage } from './components/PortfolioPage';
import { FreeTools } from './components/FreeTools';
import { Academy } from './components/Academy';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-agency-black text-white font-sans selection:bg-agency-red selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Marquee />
              <About />
              <Services />
              <PortfolioArc />
              <Testimonials />
              <FAQ />
            </>
          } />
          <Route path="/catalogo" element={<ServiceCatalog />} />
          <Route path="/proyectos" element={<PortfolioPage />} />
          <Route path="/herramientas" element={<FreeTools />} />
          <Route path="/academia" element={<Academy />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
}

export default App;