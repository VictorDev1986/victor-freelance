import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon } from "../components/Icons";
import { Globe, ShoppingCart, Settings, Palette } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Globe className="w-14 h-14 text-primary" />,
    title: "Páginas Web & Landing Pages",
    description:
      "Desarrollo sitios web modernos y landing pages optimizadas para conversión, con diseño responsive y carga rápida.",
  },
  {
    icon: <ShoppingCart className="w-14 h-14 text-primary" />,
    title: "E-commerce",
    description:
      "Tiendas online completas con pasarelas de pago, gestión de inventario y panel de administración.",
  },
  {
    icon: <Settings className="w-14 h-14 text-primary" />,
    title: "Software a la Medida",
    description:
      "Aplicaciones personalizadas que se adaptan exactamente a las necesidades específicas de tu negocio.",
  },
  {
    icon: <Palette className="w-14 h-14 text-primary" />,
    title: "Diseño Gráfico Web",
    description:
      "Diseño de interfaces atractivas y funcionales con herramientas como Figma, enfocadas en UX/UI.",
  },
  {
    icon: <MedalIcon />,
    title: "Soporte y Mantenimiento",
    description:
      "Mantenimiento continuo, actualizaciones de seguridad y soporte técnico para tu proyecto web.",
  },
  {
    icon: <MapIcon />,
    title: "Hosting y Dominios",
    description:
      "Gestión completa de hosting, configuración de dominios y optimización de servidores para máximo rendimiento.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="services"
      className="container text-center py-24 sm:py-32"
    >
      {/* Refactor: uso de utilidades section-title y heading-gradient para consistencia */}
      <h2 className="section-title">
        Mis{" "}
        <span className="heading-gradient">Servicios{" "}</span>
        Profesionales
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 section-lead">
        Soluciones tecnológicas completas para empresas, PyMES y emprendedores 
        que buscan digitalizar y hacer crecer su negocio.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-card border-none drop-shadow-xl shadow-black/10 hover:bg-card/90 transition-colors duration-300"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center text-center">
                {icon}
                <span className="text-lg">{title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
