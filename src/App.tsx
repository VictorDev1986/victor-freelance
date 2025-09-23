import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { GlobalBackground } from "./components/GlobalBackground";
import { ScrollToTop } from "./components/ScrollToTop";
// Carga diferida de páginas para reducir bundle inicial
const Home = lazy(() => import('./pages/Home'));
const LandingPageService = lazy(() => import('./pages/LandingPageService'));
const EcommerceService = lazy(() => import('./pages/EcommerceService'));
const PaginaWebService = lazy(() => import('./pages/PaginaWebService'));
const SoftwareMedidaService = lazy(() => import('./pages/SoftwareMedidaService'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
import "./App.css";

function App() {
  return (
    <Router>
  {/* overflow-x-hidden previene scroll horizontal causado por elementos absolutos expansivos */}
  <div className="relative min-h-screen bg-background overflow-x-hidden">
        <GlobalBackground />
        
        {/* Contenido principal */}
        <div className="relative z-10">
          <Suspense fallback={<div className="w-full py-20 text-center text-sm text-muted-foreground animate-pulse">Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/servicios/landing-page" element={<LandingPageService />} />
              <Route path="/servicios/ecommerce" element={<EcommerceService />} />
              <Route path="/servicios/pagina-web" element={<PaginaWebService />} />
              <Route path="/servicios/software-medida" element={<SoftwareMedidaService />} />
            </Routes>
          </Suspense>
          <ScrollToTop />
        </div>
      </div>
    </Router>
  );
}

export default App;
