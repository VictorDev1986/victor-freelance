import { memo } from "react";
import { Button, buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const HeroComponent = () => {
  return (
    <section
      className="
        container grid lg:grid-cols-2 place-items-center
        pt-40 pb-20 md:pt-40 md:pb-28 gap-10"
    >
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
               Desarrollador
            </span>{" "}
          </h1>{" "}
          de{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Software
            </span>{" "}
            Freelance
          </h2>
        </main>

        {/* section-lead reutilizada para consistencia tipográfica */}
        <p className="section-lead md:w-10/12 mx-auto lg:mx-0">
          Desarrollo soluciones web modernas y aplicaciones escalables con las 
          mejores tecnologías para hacer crecer tu negocio.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button
            className="w-full md:w-1/3"
            whatsappMessage="Hola Victor, vi tu portafolio y quiero contratar tus servicios de desarrollo de software. ¿Podemos hablar?"
          >
            Contratar Servicios
          </Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/victorsanchez"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Ver Portfolio
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};

// Memo: componente sin props; evita rerender al cambiar estado global no relacionado
export const Hero = memo(HeroComponent);
