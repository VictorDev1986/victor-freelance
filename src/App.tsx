import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { DevelopmentRoadmap } from "./components/DevelopmentRoadmap";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { GlobalBackground } from "./components/GlobalBackground";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import PortfolioSection from "./components/PortfolioSection";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen bg-background">
      <GlobalBackground />
      
      {/* Contenido principal */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <HowItWorks />
         <DevelopmentRoadmap />
        <PortfolioSection />
        <Services />
        <Cta />
        <Testimonials />
        <Team />
        <Pricing />
        <Newsletter />
        <FAQ />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
