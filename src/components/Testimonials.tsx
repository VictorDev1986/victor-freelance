import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "María González",
    userName: "Restaurante La Tradición",
    comment: "Victor desarrolló nuestra página web en tiempo récord. Quedamos encantados con el diseño y la funcionalidad. Nuestras ventas online aumentaron un 40% desde que lanzamos el sitio. ¡Altamente recomendado! 🍽️✨",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Carlos Mendoza",
    userName: "MendozaTech Solutions",
    comment:
      "Excelente trabajo en nuestra tienda online. Victor no solo cumplió con los tiempos, sino que nos asesoró en aspectos que no habíamos considerado. El sitio funciona perfectamente y el soporte post-entrega es excepcional.",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Ana Patricia Ruiz",
    userName: "Boutique Elegancia",
    comment:
      "¡Increíble experiencia! Victor transformó nuestra idea en una hermosa página web. La capacitación que nos dio para administrar el contenido fue muy clara. Definitivamente volveremos a trabajar con él para futuros proyectos.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Dr. Fernando López",
    userName: "Clínica Dental Sonrisa",
    comment:
      "Profesional, puntual y muy creativo. Desarrolló nuestro sitio web con sistema de citas online. Los pacientes pueden agendar fácilmente y nosotros gestionar todo desde el panel administrativo. ¡Excelente inversión!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sofía Herrera",
    userName: "SH Consultorías",
    comment:
      "Victor superó nuestras expectativas. El diseño responsive se ve increíble en móviles y la velocidad de carga es excelente. Además, nos incluyó SEO básico y ya aparecemos en las primeras posiciones de Google. 🚀",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Roberto Castro",
    userName: "Castro Autopartes",
    comment:
      "Llevaba años posponiendo hacer mi sitio web. Victor me convenció con su propuesta y proceso claro. En una semana tenía mi landing page funcionando. El retorno de inversión se vio desde el primer mes. ¡Gracias!",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Lo Que Dicen Mis
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Clientes{" "}
        </span>
        Satisfechos
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Testimonios reales de empresarios y profesionales que confiaron en mis servicios 
        para desarrollar sus proyectos web y transformar sus negocios digitalmente.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
