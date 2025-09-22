import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GlobalBackground } from "@/components/GlobalBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ShoppingCart, CreditCard, BarChart3, Users, Shield, Headphones } from "lucide-react";

export const EcommerceService = () => {
  const features = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Catálogo Completo",
      description: "Sistema completo de productos con categorías, filtros, búsqueda avanzada y gestión de inventario."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Pagos Integrados",
      description: "Pasarelas de pago seguras: tarjetas, transferencias, Nequi, Daviplata y más opciones."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Dashboard Completo",
      description: "Panel administrativo con reportes de ventas, estadísticas y gestión completa del negocio."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gestión de Clientes",
      description: "Base de datos de clientes, historial de compras, programas de fidelización y marketing."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Seguridad Avanzada",
      description: "Certificados SSL, encriptación de datos, protección contra fraudes y respaldos automáticos."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Soporte Extendido",
      description: "6 meses de soporte técnico, capacitación completa y actualizaciones de seguridad."
    }
  ];

  const includes = [
    "Catálogo de productos ilimitados",
    "Pasarelas de pago integradas",
    "Panel de administración completo",
    "Gestión de inventario avanzada",
    "Botón de WhatsApp integrado",
    "Reportes de ventas detallados",
    "Hosting y dominio por 1 año",
    "Hasta 10 páginas adicionales",
    "Capacitación completa incluida",
    "Soporte técnico 6 meses",
    "Certificado SSL premium",
    "Optimización SEO avanzada"
  ];

  const process = [
    {
      step: "1",
      title: "Análisis del Negocio",
      description: "Estudiamos tu modelo de negocio, productos y objetivos comerciales específicos."
    },
    {
      step: "2", 
      title: "Diseño de la Tienda",
      description: "Creamos el diseño visual y la experiencia de usuario optimizada para ventas online."
    },
    {
      step: "3",
      title: "Desarrollo E-commerce", 
      description: "Desarrollamos la tienda con todas las funcionalidades y integraciones necesarias."
    },
    {
      step: "4",
      title: "Testing y Lanzamiento",
      description: "Realizamos pruebas exhaustivas y lanzamos tu tienda online con capacitación completa."
    }
  ];

  return (
    <div className="relative min-h-screen bg-background">
      <GlobalBackground />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="container py-24 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              ⭐ Más Popular
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Solicitar Cotización
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Ver Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Precio */}
        <section className="container py-16">
          <div className="max-w-md mx-auto">
            <Card className="border-primary/20 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Más Popular</Badge>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl">E-commerce Profesional</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">
                  $1.800.000
                  <span className="text-lg font-normal text-muted-foreground"> COP</span>
                </div>
                <CardDescription>
                  Tienda online completa y funcional
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" size="lg">
                  Empezar Mi Tienda
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Características */}
        <section className="container py-24 bg-muted/30">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              E-commerce Completo y
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Profesional{" "}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para vender online con éxito. Desde el catálogo hasta los reportes de ventas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Proceso */}
        <section className="container py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proceso de
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Desarrollo{" "}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desarrollo profesional en 8 días con metodología probada y resultados garantizados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Beneficios Adicionales */}
        <section className="container py-24 bg-muted/30">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beneficios
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Adicionales{" "}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center">📱 App Móvil Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Tu tienda se verá perfecta en móviles, donde ocurre el 70% de las compras online.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center">📊 Analytics Incluidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Google Analytics configurado para rastrear ventas, conversiones y comportamiento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center">🚀 SEO Optimizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Configuración SEO avanzada para que tus productos aparezcan en Google.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="container py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Vender
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Online?{" "}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Comienza a vender las 24 horas del día con una tienda online profesional. 
              Tu e-commerce estará listo en solo 8 días.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Comenzar Mi Tienda
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Agendar Consulta
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default EcommerceService;