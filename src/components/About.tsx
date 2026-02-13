import { Statistics } from "./Statistics";
import { TechSlider } from "./TechSlider";
import fotoPerfil from "../assets/foto_perfil.png";

export const About = () => {
  return (
    <>
      <section
        id="about"
        className="container py-20 sm:py-24 md:py-32"
      >
  {/* Fondo actualizado a bg-card para igualar el estilo visual de las Cards */}
  <div className="bg-card rounded-lg py-12 drop-shadow-xl shadow-black/10">
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            {/* Imagen optimizada: se agrega loading="lazy" y se asegura adaptación sin overflow */}
            <img
              src={fotoPerfil}
              alt="Victor Sánchez - Ingeniero de Sistemas"
              loading="lazy"
              className="w-[240px] sm:w-[260px] md:w-[300px] aspect-square object-cover rounded-full mx-auto md:mx-0 max-w-full"
            />
            <div className="bg-green-0 flex flex-col justify-between">
              <div className="pb-6">
                {/* Uso de utilidades reutilizables para consistencia visual */}
                <h2 className="section-title">
                  <span className="heading-gradient">
                    Acerca de{" "}
                  </span>
                  Victor
                </h2>
                <p className="text-xl text-muted-foreground mt-4">
                  Soy Ingeniero de Sistemas con 2 años de experiencia especializado en 
                  desarrollo de software a la medida. Me enfoco en crear soluciones 
                  tecnológicas innovadoras para empresas, PyMES y emprendedores, incluyendo 
                  plataformas de e-commerce robustas y páginas web modernas que impulsan el 
                  crecimiento de los negocios.
                </p>
                <p className="text-lg text-muted-foreground mt-3">
                  Mi pasión por la tecnología me lleva a mantenerme actualizado con las 
                  últimas tendencias en desarrollo web, integrando inteligencia artificial 
                  y mejores prácticas para entregar productos de calidad excepcional.
                </p>
              </div>

              <Statistics />
            </div>
          </div>
        </div>
      </section>
      {/* Sección de tecnologías */}
      <TechSlider />
    </>
  );
};
