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

export const SoftwareMedidaService = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <GlobalBackground />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="container pt-40 pb-20 md:pt-40 md:pb-28">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              ⚙️ Solución Personalizada
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Software que se
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Adapta a Ti{" "}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Desarrollo de software personalizado que se ajusta perfectamente a las necesidades 
              específicas de tu empresa. Desde sistemas de gestión hasta aplicaciones web complejas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6">
                Solicitar Cotización
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Ver Casos de Éxito
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                100% personalizado
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Escalable
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Soporte continuo
              </span>
            </div>
          </div>
        </section>

        {/* Why Custom Software Section */}
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
                  src="/src/assets/undraw_developer-activity_4zqd.svg"
                  alt="Software a Medida"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-contain drop-shadow-2xl"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-500 hover:bg-purple-600">
                    ⚙️ 100% Personalizado
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
                  ¿Por qué elegir{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
                    Software a Medida?
                  </span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Los software genéricos te obligan a adaptar tus procesos a ellos. 
                    Con software a medida, es la tecnología la que se adapta a tu forma de trabajar, 
                    maximizando la eficiencia y productividad de tu equipo.
                  </p>
                  
                  <p>
                    <span className="font-semibold text-foreground">Ajuste perfecto:</span> Cada función 
                    está diseñada específicamente para tus procesos, eliminando pasos innecesarios y optimizando workflows.
                  </p>
                  
                  <p>
                    <span className="font-semibold text-foreground">Escalabilidad garantizada:</span> El software 
                    crece contigo. Agregamos nuevas funcionalidades según tus necesidades evolucionen.
                  </p>
                  
                  <p>
                    <span className="font-semibold text-foreground">Integración total:</span> Se conecta 
                    perfectamente con tus sistemas existentes, evitando duplicación de datos y trabajo manual.
                  </p>
                  
                  <p>
                    <span className="font-semibold text-foreground">Ventaja competitiva:</span> Herramientas 
                    únicas que tus competidores no pueden replicar, diferenciando tu operación en el mercado.
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
                  Quiero mi Software
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
                ¿Listo para Optimizar tus Procesos?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Desarrollemos juntos la solución perfecta para tu empresa. Software que se adapta 
                a tus necesidades exactas y crece contigo en el tiempo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="text-lg px-8 py-6">
                  Consulta Gratuita
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Ver Proyectos
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8 text-sm">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">💰 Inversión</h3>
                  <p className="text-muted-foreground">Desde $3.500.000 COP</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">⏱️ Desarrollo</h3>
                  <p className="text-muted-foreground">30-90 días hábiles</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">🛡️ Garantía</h3>
                  <p className="text-muted-foreground">12 meses completos</p>
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

export default SoftwareMedidaService;