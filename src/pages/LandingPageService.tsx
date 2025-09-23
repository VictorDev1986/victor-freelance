import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GlobalBackground } from "@/components/GlobalBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Pricing } from "@/components/Pricing";
import { FAQSection } from "@/components/FAQSection";

export const LandingPageService = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <GlobalBackground />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section - padding alineado al Hero principal (mayor espacio superior para compensar navbar fixed) */}
        <section className="container pt-28 pb-20 md:pt-40 md:pb-28">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              🚀 Landing Pages Profesionales
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Landing Pages que
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Convierten{" "}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Páginas optimizadas para maximizar conversiones. Diseño centrado 
              en UX/UI, enfoque en el objetivo del negocio y métricas claras de rendimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6">
                Solicitar Cotización
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Ver Portfolio
              </Button>
            </div>
            <p className="text-lg text-muted-foreground">
              Desde <span className="text-2xl font-bold text-primary">$700.000 COP</span>
            </p>
          </div>
        </section>

        {/* Image and Content Section */}
        <section className="container py-8 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full h-full"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <img
                  src="/src/assets/landing.png"
                  alt="Landing Page Profesional"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-contain drop-shadow-2xl"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 hover:bg-green-600">
                    📈 +300% ROI
                  </Badge>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Por qué necesitas una{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
                    Landing Page profesional?
                  </span>
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Conversión Optimizada</h3>
                      <p className="text-muted-foreground">Diseño enfocado en un único objetivo: convertir visitantes en clientes potenciales con hasta 300% más conversiones.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Disponibilidad 24/7</h3>
                      <p className="text-muted-foreground">Tu vendedor digital trabajando las 24 horas, capturando leads mientras duermes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">ROI Medible</h3>
                      <p className="text-muted-foreground">Métricas claras para medir conversiones y optimizar continuamente tu retorno de inversión.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Enfoque Específico</h3>
                      <p className="text-muted-foreground">Mensaje claro y llamada a la acción única que elimina distracciones y aumenta conversiones.</p>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="pt-4"
                >
                  <Button size="lg" className="text-lg px-8 py-6">
                    Quiero mi Landing Page
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-8 sm:py-12 lg:py-16">
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para Incrementar tus Conversiones?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                No dudes en contactarme para una consulta gratuita
                personalizada. Analizaremos tu proyecto y te propondré la mejor
                solución.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  Consulta Gratuita
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  Ver Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
  <Pricing />
      <FAQSection />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default LandingPageService;