import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LogoLoader from './components/LogoLoader';
import PageLoader from './components/PageLoader';
import { GlobalBackground } from "./components/GlobalBackground";
import { ScrollToTop } from "./components/ScrollToTop";
import { ChatBot } from "./components/ChatBot";
// Carga diferida de páginas para reducir bundle inicial
const Home = lazy(() => import('./pages/Home'));
const LandingPageService = lazy(() => import('./pages/LandingPageService'));
const EcommerceService = lazy(() => import('./pages/EcommerceService'));
const PaginaWebService = lazy(() => import('./pages/PaginaWebService'));
const SoftwareMedidaService = lazy(() => import('./pages/SoftwareMedidaService'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
import "./App.css";

function App() {
  return (
    <Router>
  {/* overflow-x-hidden previene scroll horizontal causado por elementos absolutos expansivos */}
  <div className="relative min-h-screen bg-background overflow-x-hidden">
        <GlobalBackground />
        
  {/* Loader por navegación de página */}
  <PageLoader />
  {/* Contenido principal */}
  <div className="relative z-10">
          <Suspense fallback={<LogoLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/servicios/landing-page" element={<LandingPageService />} />
              <Route path="/servicios/ecommerce" element={<EcommerceService />} />
              <Route path="/servicios/pagina-web" element={<PaginaWebService />} />
              <Route path="/servicios/software-medida" element={<SoftwareMedidaService />} />
            </Routes>
          </Suspense>
          <ScrollToTop />
          <ChatBot />
        </div>
      </div>
    </Router>
  );
}

export default App;
