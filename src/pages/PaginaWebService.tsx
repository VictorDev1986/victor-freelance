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

export const PaginaWebService = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <GlobalBackground />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="container pt-40 pb-20 md:pt-40 md:pb-28">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              🌐 Presencia Digital
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Páginas Web que
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Impresionan{" "}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sitios web corporativos profesionales que generan confianza y credibilidad. 
              Diseño moderno, funcionalidad completa y optimización SEO incluida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6">
                Solicitar Cotización
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Ver Portafolio
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Diseño responsivo
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                SEO optimizado
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Hosting incluido
              </span>
            </div>
          </div>
        </section>

        {/* Why Website Section */}
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
                  src="/src/assets/undraw_building-a-website_1wrp.svg"
                  alt="Página Web Profesional"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-contain drop-shadow-2xl"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-500 hover:bg-blue-600">
                    🌐 Presencia Digital
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
                    Página Web profesional?
                  </span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Tu página web es tu carta de presentación digital las 24 horas del día. 
                    Es la primera impresión que muchos clientes tendrán de tu empresa, 
                    y esa primera impresión puede determinar si confían en ti o buscan a la competencia.
                  </p>
                  
                  <p>
                    <span className="font-semibold text-foreground">Credibilidad instantánea:</span> Una página web 
                    profesional genera confianza inmediata. Los clientes te ven como una empresa establecida y seria.
                  </p>
                  
                  <p>
                    <span className="font-semibold text-foreground">Alcance global:</span> Tu negocio ya no está limitado 
                    por la ubicación geográfica. Cualquier persona puede encontrarte y conocer tus servicios.
                  </p>
                  
                  <p>
                    <span className="font-semibold text-foreground">Información siempre disponible:</span> Horarios, servicios, 
                    contacto, testimonios: toda la información que tus clientes necesitan está disponible 24/7.
                  </p>
                  
                  <p>
                    <span className="font-semibold text-foreground">Ventaja competitiva:</span> En muchos sectores, 
                    no tener página web significa quedarse atrás frente a competidores que sí la tienen.
                  </p>
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
                  Quiero mi Página Web
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-8 sm:py-12 lg:py-16">
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para Profesionalizar tu Presencia Digital?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Crea una presencia digital sólida con una página web que refleje la calidad 
                de tu empresa. Desde $900.000 COP con todo incluido.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="text-lg px-8 py-6">
                  Consulta Gratuita
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Ver Ejemplos
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8 text-sm">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">💰 Precio</h3>
                  <p className="text-muted-foreground">Desde $900.000 COP</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">⏱️ Entrega</h3>
                  <p className="text-muted-foreground">7-10 días hábiles</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">📄 Páginas</h3>
                  <p className="text-muted-foreground">Hasta 10 páginas</p>
                </div>
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

export default PaginaWebService;