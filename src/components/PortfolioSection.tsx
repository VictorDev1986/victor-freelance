import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

// Tipo de datos para cada proyecto
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl?: string;
  technologies: string[];
  category: string;
  featured?: boolean;
}

// Array de proyectos con layout específico
const projects: Project[] = [
  {
    id: 1,
    title: "Carosublimados",
    description: "Plataforma completa de comercio electrónico con pagos integrados y gestión avanzada",
    image: project1,
    demoUrl: "https://carosublimados.shop/",
    githubUrl: "https://carosublimados.shop/",
    technologies: ["Wordpress", "WooCommerce", "php", "MySQL"],
    category: "E-commerce",
    featured: true
  },
  {
    id: 2,
    title: "MovieFlix",
    description: "Panel de control moderno para aplicaciones SaaS con métricas en tiempo real",
    image: project2,
    demoUrl: "https://moviefl.netlify.app/",
    githubUrl: "https://github.com/VictorDev1986/MovieFlix.git",
    technologies: ["React", "TypeScript", "Tailwind","Axios"],
    category: "SaaS",
    featured: true
  },
  {
    id: 3,
    title: "Mi podcast",
    description: "Sitio web corporativo con diseño elegante y optimización SEO",
    image: project3,
    demoUrl: "https://mi-podcast.vercel.app/",
    githubUrl: "https://github.com/VictorDev1986/Mi-Podcast.git",
    technologies: ["React", "Tailwind", "Framer Motion"],
    category: "Corporate"
  },
  {   
    id: 4,
    title: "https://cmtechcol.online/",
    description: "Diseño UI/UX para aplicación móvil de fitness y wellness",
    image: project4,
    demoUrl: "https://cmtechcol.online/",
    technologies: ["Wordpress", "woocommerce", "php", "MySQL"],
    category: "Mobile"
  },
  {
    id: 5,
    title: "Pet Vet",
    description: "Plataforma de blog moderna con CMS headless y editor avanzado",
    image: project5,
    demoUrl: "https://victordev1986.github.io/pet-vet/",
    githubUrl: "https://github.com/VictorDev1986/Pet-Vet.git",
    technologies: ["html", "tailwind",],
    category: "Blog"
  },

];

// Componente para las tecnologías
const TechStack = ({ technologies }: { 
  technologies: string[]; 
}) => (
  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-5">
    {technologies.map((tech, index) => (
      <span
        key={index}
        className="px-2 py-1 sm:px-3 sm:py-1 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm rounded-full"
      >
        {tech}
      </span>
    ))}
  </div>
);



// Componente principal de tarjeta de proyecto
const ProjectCard = ({ 
  project, 
  index
}: { 
  project: Project; 
  index: number; 
}) => {
  const getAnimationDelay = () => {
    return 0.1 + index * 0.1;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: getAnimationDelay() }}
      className="group relative block"
      whileHover={{ scale: 1.02 }}
    >
      <div className="rounded-lg overflow-hidden drop-shadow-xl shadow-black/10 border border-gray-200 bg-white">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-auto object-contain max-w-full transition-all duration-700 group-hover:scale-105"
          />

          {/* Overlay que aparece en hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* Content que aparece en hover */}
          <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
            <div className="transform translate-y-4 sm:translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-100">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-5">
                {project.title}
              </h3>
              <TechStack technologies={project.technologies} />
            </div>
          </div>
        </div>
      </div>
      <Button
        asChild
        className="w-full mt-3 px-4 py-3 sm:py-3.5 font-medium tracking-wide"
        data-whatsapp-ignore
      >
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver proyecto ${project.title}`}
        >
          Ver Proyecto
        </a>
      </Button>
    </motion.div>
  );
};

const PortfolioSectionComponent = () => {
  return (
  <section id="projects" className="container py-16 sm:py-20 section-x-padding">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="section-title">
            Mi <span className="heading-gradient">Portafolio</span>
          </h2>
          <p className="md:w-3/4 mx-auto mt-4 mb-8 section-lead">
            Cada proyecto cuenta una historia de innovación. Descubre cómo transformo ideas en 
            experiencias digitales excepcionales que impulsan el crecimiento empresarial.
          </p>
        </motion.div>

        {/* Grid Layout Uniforme - 3 columnas en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default memo(PortfolioSectionComponent);