import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GlobalBackground } from "@/components/GlobalBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Code, Database, Cog, Users, Shield, Zap, Cloud, BarChart } from "lucide-react";

export const SoftwareMedidaService = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Desarrollo Personalizado",
      description: "Código completamente personalizado según tus requerimientos específicos y necesidades de negocio."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Base de Datos Optimizada",
      description: "Diseño de base de datos eficiente y escalable para manejar grandes volúmenes de información."
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Panel de Administración",
      description: "Interface administrativa completa para gestionar todos los aspectos de tu aplicación."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Sistema de Usuarios",
      description: "Gestión avanzada de usuarios con roles, permisos y autenticación segura."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Integraciones API",
      description: "Conexión con servicios externos, APIs y sistemas de terceros según tus necesidades."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Reportes Avanzados",
      description: "Dashboards interactivos con métricas, análisis y reportes personalizados."
    }
  ];

  const includes = [
    "Análisis completo de requerimientos",
    "Desarrollo personalizado 100%",
    "Base de datos optimizada",
    "Panel de administración completo",
    "Integración con APIs externas",
    "Hosting empresarial 1 año",
    "Mantenimiento 3 meses gratis",
    "Capacitación completa incluida",
    "Soporte técnico 6 meses",
    "Documentación técnica",
    "Testing y Quality Assurance",
    "Respaldos automáticos"
  ];

  const process = [
    {
      step: "1",
      title: "Análisis de Requerimientos",
      description: "Reuniones detalladas para entender completamente tus necesidades y objetivos de negocio."
    },
    {
      step: "2", 
      title: "Arquitectura y Diseño",
      description: "Diseñamos la arquitectura técnica y la experiencia de usuario de tu aplicación."
    },
    {
      step: "3",
      title: "Desarrollo Iterativo", 
      description: "Desarrollo ágil con entregas parciales para validar funcionalidades paso a paso."
    },
    {
      step: "4",
      title: "Testing y Deployment",
      description: "Pruebas exhaustivas, optimización y despliegue en ambiente de producción."
    }
  ];

  const applications = [
    {
      title: "🏢 Sistemas Empresariales",
      description: "ERP, CRM, gestión de inventarios, recursos humanos"
    },
    {
      title: "📊 Plataformas de Análisis",
      description: "Business Intelligence, dashboards, reportes personalizados"
    },
    {
      title: "🎓 Plataformas Educativas",
      description: "LMS, e-learning, gestión académica, evaluaciones online"
    },
    {
      title: "🏥 Sistemas de Salud",
      description: "Gestión de pacientes, citas médicas, historias clínicas"
    },
    {
      title: "🏪 Marketplaces",
      description: "Plataformas multi-vendor, comparadores de precios"
    },
    {
      title: "📱 Aplicaciones SaaS",
      description: "Software como servicio, suscripciones, multi-tenant"
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
              Según requerimientos
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Software a Medida
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Personalizado{" "}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Desarrollo de aplicaciones web completamente personalizadas para satisfacer 
              las necesidades específicas de tu negocio. Desde la idea hasta la implementación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Consultar Proyecto
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Ver Casos de Éxito
              </Button>
            </div>
          </div>
        </section>

        {/* Precio */}
        <section className="container py-16">
          <div className="max-w-md mx-auto">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Software Personalizado</CardTitle>
                <div className="text-3xl font-bold text-primary mt-4">
                  Según requerimientos
                </div>
                <CardDescription>
                  Cotización personalizada según complejidad
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
                  Solicitar Cotización
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tipos de Aplicaciones */}
        <section className="container py-24 bg-muted/30">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tipos de
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Aplicaciones{" "}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desarrollamos cualquier tipo de aplicación web según tus necesidades específicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{app.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Características */}
        <section className="container py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tecnología
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Avanzada{" "}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Utilizamos las mejores tecnologías para crear software robusto, escalable y seguro.
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
              Metodología ágil y transparente para garantizar el éxito de tu proyecto.
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

        {/* Tecnologías */}
        <section className="container py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stack
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Tecnológico{" "}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">React, HTML5, CSS3, TailwindCSS</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Node.js, Express, PHP, Laravel</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Base de Datos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">MySQL, PostgreSQL, MongoDB</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cloud & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">AWS, Docker, CI/CD, Git</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="container py-24 bg-muted/30">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Tienes una Idea
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}Innovadora?{" "}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Convirtamos tu idea en realidad. Desarrollo software personalizado que se adapta 
              perfectamente a las necesidades de tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Agendar Consulta
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Ver Portfolio
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

export default SoftwareMedidaService;