
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import fotoPerfil from "@/assets/foto_perfil.jpg";

export const HeroCards = () => {
  return (
    /* Ajuste responsive: en lugar de ancho fijo, se limita con max-w y se previene overflow horizontal */
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-full max-w-[700px] h-[500px]">
      {/* Testimonial */}
      

      {/* Team */}
  <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-none">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src={fotoPerfil}
            alt="Victor Sánchez"
            loading="lazy"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Victor Sánchez</CardTitle>
          <CardDescription className="font-normal text-primary">
            Desarrollador de software
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Desarrollo soluciones web innovadoras y escalables.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/VictorDev1986"
              target="_blank"
              aria-label="Perfil de GitHub de Victor"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/victorsanchez1986/"
              target="_blank"
              aria-label="Perfil de LinkedIn de Victor"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* E-commerce */}
  <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-none">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            E-commerce
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Más popular
            </Badge>
          </CardTitle>
         
          <CardDescription>
            Tienda online completa y gestión avanzada.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Solicitar Cotización</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Panel de administración", "Inventario automático", "SEO basico", "Diseño responsive","Integración con pasarelas de pago","Soporte 24/7","Hosting y dominio primer año"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2 text-sm">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* IA Solutions */}
  <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-none">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Soluciones IA</CardTitle>
            <CardDescription className="text-md mt-2">
              Integro inteligencia artificial en tu negocio: chatbots, automatización.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
