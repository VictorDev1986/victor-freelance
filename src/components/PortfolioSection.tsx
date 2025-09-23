import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";

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
    title: "E-commerce Platform",
    description: "Plataforma completa de comercio electrónico con pagos integrados y gestión avanzada",
    image: project1,
    demoUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/victor/ecommerce",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    category: "E-commerce",
    featured: true
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Panel de control moderno para aplicaciones SaaS con métricas en tiempo real",
    image: project2,
    demoUrl: "https://demo-dashboard.com",
    githubUrl: "https://github.com/victor/saas-dashboard",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    category: "SaaS",
    featured: true
  },
  {
    id: 3,
    title: "Corporate Website",
    description: "Sitio web corporativo con diseño elegante y optimización SEO",
    image: project1,
    demoUrl: "https://demo-corporate.com",
    technologies: ["React", "Tailwind", "Framer Motion"],
    category: "Corporate"
  },
  {
    id: 4,
    title: "Mobile App Design",
    description: "Diseño UI/UX para aplicación móvil de fitness y wellness",
    image: project1,
    demoUrl: "https://demo-mobile.com",
    technologies: ["Figma", "React Native", "Expo"],
    category: "Mobile"
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "Plataforma de blog moderna con CMS headless y editor avanzado",
    image: project1,
    demoUrl: "https://demo-blog.com",
    githubUrl: "https://github.com/victor/blog-platform",
    technologies: ["Next.js", "Sanity", "Vercel"],
    category: "Blog"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Portfolio personal con animaciones interactivas y diseño único",
    image: project1,
    demoUrl: "https://demo-portfolio.com",
    technologies: ["React", "Three.js", "GSAP"],
    category: "Portfolio"
  }
];

// Componente para el badge de categoría
const CategoryBadge = ({ category, color }: { 
  category: string; 
  color: string; 
}) => (
  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 z-10">
    <span className={`inline-flex items-center gap-1 sm:gap-2 ${color} backdrop-blur-md text-white px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full text-xs sm:text-sm font-medium`}>
      <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${color.includes('green') ? 'bg-green-400' : color.includes('blue') ? 'bg-blue-400' : 'bg-purple-400'} rounded-full`}></span>
      {category}
    </span>
  </div>
);

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
  index, 
  bgColor = "bg-gradient-to-br from-gray-800 to-gray-900",
  badgeColor = "bg-white/20"
}: { 
  project: Project; 
  index: number; 
  bgColor?: string;
  badgeColor?: string;
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
      <div className={`rounded-lg overflow-hidden drop-shadow-xl shadow-black/10 dark:shadow-white/10 border border-white/10 backdrop-blur-sm ${bgColor}`}>
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-auto object-contain max-w-full transition-all duration-700 group-hover:scale-105"
          />

          {/* Overlay que aparece en hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* Badge de categoría */}
          <CategoryBadge category={project.category} color={badgeColor} />

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
  const getBadgeColor = (index: number) => {
    if (index === 0) return "bg-white/20";
    if (index === 1) return "bg-blue-500/20";
    if (index === 2) return "bg-purple-500/20";
    return "bg-white/20";
  };

  const getBgColor = (index: number) => {
    if (index === 0) return "bg-white dark:bg-gray-900";
    if (index === 1) return "bg-gradient-to-br from-blue-900 to-purple-900";
    if (index === 2) return "bg-gradient-to-br from-purple-900 to-pink-900";
    return "bg-gradient-to-br from-gray-800 to-gray-900";
  };

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
              bgColor={getBgColor(index)}
              badgeColor={getBadgeColor(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default memo(PortfolioSectionComponent);