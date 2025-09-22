import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Landing Page",
    popular: 0,
    price: 200000,
    description:
      "Perfecta para promocionar tu producto o servicio con diseño atractivo.",
    buttonText: "Comenzar Proyecto",
    benefitList: [
      "Diseño responsivo moderno",
      "Optimización SEO básica",
      "Formulario de contacto",
      "Hosting y dominio gratis 1 año",
      "Certificado SSL incluido",
    ],
  },
  {
    title: "Página Web",
    popular: 0,
    price: 350000,
    description:
      "Sitio web corporativo completo con múltiples secciones.",
    buttonText: "Ver Detalles",
    benefitList: [
      "Hasta 10 páginas",
      "Blog integrado",
      "Galería de imágenes",
      "Formularios avanzados",
      "Botón de WhatsApp",
      "Hosting y dominio por 1 año",
      "Optimización SEO básica",
      "Soporte técnico 3 meses"
    ],
  },
  {
    title: "E-commerce",
    popular: 1,
    price: 400000,
    description:
      "Tienda online completa y gestion avanzada.",
    buttonText: "Solicitar Cotización",
    benefitList: [
      "Catálogo de productos",
      "Pasarelas de pago integradas",
      "Carrito de compras",
      "Panel de administración",
      "Gestión de inventario",
      "Botón de WhatsApp",
      "Reportes de ventas",
      "Hosting y dominio por 1 año",
      "hasta 10 páginas",
      "Capacitación incluida",
      "Soporte técnico 6 meses",
    ],
  },
  {
    title: "Software a Medida",
    popular: 0,
    price: 0,
    description:
      "Desarrollo de aplicaciones web personalizadas para satisfacer las necesidades específicas de tu negocio.",
    buttonText: "Consultar Proyecto",
    benefitList: [
      "Análisis de requerimientos",
      "Desarrollo personalizado",
      "Base de datos optimizada",
      "Panel de administración",
      "Integración con APIs",
      "Hosting empresarial 1 año",
      "Mantenimiento 3 meses gratis",
      "Capacitación incluida",
      "Soporte técnico 6 meses",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Planes y
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Servicios{" "}
        </span>
        Web
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Desde landing pages hasta software personalizado. Encuentra la solución perfecta para tu proyecto digital.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Más Popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price.toLocaleString()}</span>
                <span className="text-muted-foreground"> COP</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
