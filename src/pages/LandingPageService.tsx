import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GlobalBackground } from "@/components/GlobalBackground";

export const LandingPageService = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <GlobalBackground />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Contenido mínimo para mantener estructura */}
        <section className="container py-24 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Landing Page Service
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contenido en desarrollo...
            </p>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default LandingPageService;