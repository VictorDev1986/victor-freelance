import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalBackground } from "./components/GlobalBackground";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home.tsx";
import LandingPageService from "./pages/LandingPageService";
import EcommerceService from "./pages/EcommerceService";
import PaginaWebService from "./pages/PaginaWebService";
import SoftwareMedidaService from "./pages/SoftwareMedidaService";
import BlogPage from "./pages/BlogPage";
import "./App.css";

function App() {
  return (
    <Router>
  {/* overflow-x-hidden previene scroll horizontal causado por elementos absolutos expansivos */}
  <div className="relative min-h-screen bg-background overflow-x-hidden">
        <GlobalBackground />
        
        {/* Contenido principal */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/servicios/landing-page" element={<LandingPageService />} />
            <Route path="/servicios/ecommerce" element={<EcommerceService />} />
            <Route path="/servicios/pagina-web" element={<PaginaWebService />} />
            <Route path="/servicios/software-medida" element={<SoftwareMedidaService />} />
          </Routes>
          <ScrollToTop />
        </div>
      </div>
    </Router>
  );
}

export default App;
