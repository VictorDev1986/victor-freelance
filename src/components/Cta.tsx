import { memo } from "react";
import { Button } from "./ui/button";

const CtaComponent = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          {/* Refactor: uso de section-title y heading-gradient */}
          <h2 className="section-title ">
            ¡Oferta Especial!
            <span className="heading-gradient">
              {" "}
              Tiendas en Línea{" "}
            </span>
            con 30% de Descuento
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Aprovecha nuestra oferta limitada para crear tu tienda online profesional. 
            Incluye diseño responsivo, pasarelas de pago, panel administrativo y hosting gratuito. 
            ¡Solo por tiempo limitado!
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Solicitar Demo</Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            Ver Ofertas
          </Button>
        </div>
      </div>
    </section>
  );
};

export const Cta = memo(CtaComponent);
