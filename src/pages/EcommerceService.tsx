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

export const EcommerceService = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <GlobalBackground />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="container py-16 sm:py-20 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              🛒 E-commerce Completo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tiendas Online que
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Venden 24/7{" "}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              E-commerce completo con carrito de compras, pasarelas de pago integradas y panel 
              administrativo profesional. Tu negocio online funcionando las 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6">
                Solicitar Cotización
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Ver Demo
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Pagos integrados
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Panel administrativo
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Soporte 6 meses
              </span>
            </div>
          </div>
        </section>

        {/* Why E-commerce Section */}
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
                  src="/src/assets/project1.png"
                  alt="E-commerce Profesional"
                  loading="lazy"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-contain max-w-full drop-shadow-2xl"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 hover:bg-green-600">
                    🛒 Ventas 24/7
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
                    Tienda Online profesional?
                  </span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Una tienda online es tu vendedor más eficiente trabajando 24/7. No se cansa, 
                    no pide vacaciones y siempre está listo para procesar pedidos y generar ventas, 
                    incluso mientras duermes.
                  </p>
                  
                  <p>
                    <span className="font-semibold text-foreground">Ventas automáticas:</span> Tu tienda 
                    procesa pedidos automáticamente, acepta pagos y envía confirmaciones sin intervención manual.
                  </p>
                  
                  <p>
                    <span className="font-semibold text-foreground">Alcance ilimitado:</span> Vende a cualquier 
                    persona en cualquier lugar del país. Tu mercado se expande más allá de tu ubicación física.
                  </p>
                  
                  <p>
                    <span className="font-semibold text-foreground">Gestión centralizada:</span> Panel administrativo 
                    que te permite controlar inventario, ventas, clientes y reportes desde un solo lugar.
                  </p>
                  
                  <p>
                    <span className="font-semibold text-foreground">Escalabilidad garantizada:</span> Desde 10 hasta 
                    10,000 productos, tu tienda crece contigo sin limitaciones técnicas.
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
                  Quiero mi E-commerce
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
                ¿Listo para Vender Online?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Transforma tu negocio con una tienda online profesional. Desde $1.800.000 COP 
                incluye todo lo necesario para empezar a vender hoy mismo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="text-lg px-8 py-6">
                  Consulta Gratuita
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Ver Demo
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8 text-sm">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">💰 Precio</h3>
                  <p className="text-muted-foreground">$1.800.000 COP</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">⏱️ Entrega</h3>
                  <p className="text-muted-foreground">15-20 días hábiles</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">🛡️ Soporte</h3>
                  <p className="text-muted-foreground">6 meses incluidos</p>
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

export default EcommerceService;