import React, { Suspense, lazy } from 'react';
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

// Lazy load page components to split the bundle
const ServiceCatalog = lazy(() => import('./components/ServiceCatalog').then(module => ({ default: module.ServiceCatalog })));
const PortfolioPage = lazy(() => import('./components/PortfolioPage').then(module => ({ default: module.PortfolioPage })));
const FreeTools = lazy(() => import('./components/FreeTools').then(module => ({ default: module.FreeTools })));
const Academy = lazy(() => import('./components/Academy').then(module => ({ default: module.Academy })));

// Loading Spinner for route transitions
const PageLoader = () => (
  <div className="min-h-screen bg-agency-black flex items-center justify-center pt-20">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-agency-gray border-t-agency-red rounded-full animate-spin"></div>
      <span className="text-agency-red text-xs font-bold uppercase tracking-widest animate-pulse">Cargando...</span>
    </div>
  </div>
);

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-agency-black text-white font-sans selection:bg-agency-red selection:text-white">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
}

export default App;