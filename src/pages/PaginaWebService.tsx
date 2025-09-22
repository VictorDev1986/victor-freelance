import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GlobalBackground } from "@/components/GlobalBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Globe, FileText, Image, Mail, MessageSquare, Search, Calendar, Phone } from "lucide-react";

export const PaginaWebService = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Sitio Corporativo",
      description: "Presencia profesional online con hasta 10 páginas completamente personalizadas."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Blog Integrado",
      description: "Sistema de blog completo para compartir noticias, artículos y contenido relevante."
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Galería Visual",
      description: "Galerías de imágenes elegantes para mostrar tus productos, servicios o portfolio."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Formularios Avanzados",
      description: "Formularios de contacto personalizados, cotizaciones y suscripciones a newsletter."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp Business",
      description: "Integración directa con WhatsApp para comunicación instantánea con clientes."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Profesional",
      description: "Optimización completa para motores de búsqueda y mejores posiciones en Google."
    }
  ];

  const includes = [
    "Hasta 10 páginas personalizadas",
    "Blog integrado con CMS",
    "Galería de imágenes avanzada",
    "Formularios personalizados",
    "Botón de WhatsApp integrado",
    "Hosting y dominio por 1 año",
    "Optimización SEO completa",
    "Soporte técnico 3 meses",
    "Certificado SSL premium",
    "Google Analytics configurado",
    "Diseño 100% responsive",
    "Capacitación administrativa"
  ];

  const process = [
    {
      step: "1",
      title: "Planificación",
      description: "Definimos la estructura, contenido y objetivos específicos de cada página."
    },
    {
      step: "2", 
      title: "Diseño Visual",
      description: "Creamos el diseño corporativo que refleje la identidad de tu empresa."
    },
    {
      step: "3",
      title: "Desarrollo Web", 
      description: "Desarrollamos todas las páginas con funcionalidades avanzadas y CMS."
    },
    {
      step: "4",
      title: "Testing y Entrega",
      description: "Probamos exhaustivamente y entregamos con capacitación completa."
    }
  ];

  const pageTypes = [
    "Página de Inicio", "Sobre Nosotros", "Servicios/Productos", "Portfolio/Galería",
    "Blog/Noticias", "Contacto", "Testimonios", "FAQ", "Ubicación", "Términos y Condiciones"
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
              Entrega en 5 días
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Páginas Web
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Corporativas{" "}
              </span>
              Completas
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sitio web corporativo completo con múltiples secciones, blog integrado y 
              todas las funcionalidades que tu empresa necesita para destacar online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Ver Detalles
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* Precio */}
        <section className="container py-16">
          <div className="max-w-md mx-auto">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Página Web Corporativa</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">
                  $1.400.000
                  <span className="text-lg font-normal text-muted-foreground"> COP</span>
                </div>
                <CardDescription>
                  Sitio web completo y profesional
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
                  Comenzar Proyecto
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Páginas Incluidas */}
        <section className="container py-24 bg-muted/30">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Páginas
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Incluidas{" "}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hasta 10 páginas completamente personalizadas según las necesidades de tu empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {pageTypes.map((page, index) => (
              <Card key={index} className="text-center p-4">
                <CardContent className="p-2">
                  <p className="text-sm font-medium">{page}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Características */}
        <section className="container py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Funcionalidades
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Avanzadas{" "}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para una presencia web profesional y efectiva.
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
        <section className="container py-24 bg-muted/30">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proceso de
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Desarrollo{" "}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Metodología estructurada para entregar tu sitio web en 5 días con la máxima calidad.
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

        {/* Beneficios */}
        <section className="container py-24">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Calendar className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl">Gestión de Citas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Integración opcional con sistemas de reservas y citas online para servicios profesionales.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl">Click to Call</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Botones de llamada directa optimizados para móviles y mejor experiencia de usuario.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Search className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl">SEO Local</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optimización para búsquedas locales y Google My Business para mayor visibilidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="container py-24 bg-muted/30">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para una Presencia
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Profesional?{" "}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Dale a tu empresa la presencia online que merece. En 5 días tendrás un sitio web 
              corporativo completo y profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Iniciar Proyecto
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Consulta Gratuita
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

export default PaginaWebService;