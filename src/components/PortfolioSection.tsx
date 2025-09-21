import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import project1 from "../assets/project1.png";

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
    image: project1,
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
    <motion.a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: getAnimationDelay() }}
      className="group relative block cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      <div className={`relative rounded-lg overflow-hidden ${bgColor} drop-shadow-xl shadow-black/10 dark:shadow-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Degradado permanente en la parte inferior para efecto profesional */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black/60 via-black/30 to-transparent sm:from-black/80 sm:via-black/40 pointer-events-none"></div>
        
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
    </motion.a>
  );
};

const PortfolioSection = () => {
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
    <section id="projects" className="container py-16 sm:py-20">
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
          <h2 className="text-3xl md:text-4xl font-bold">
            Mi <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Portafolio</span>
          </h2>
          <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
            Cada proyecto cuenta una historia de innovación. Descubre cómo transformo ideas en 
            experiencias digitales excepcionales que impulsan el crecimiento empresarial.
          </p>
        </motion.div>

        {/* Grid Layout Uniforme - 2 columnas en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8"
        >
          <div className="bg-muted/50 border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Colaboremos para crear algo extraordinario. Desde la idea inicial hasta el lanzamiento, 
              te acompaño en cada paso del proceso.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg text-lg font-medium inline-flex items-center gap-2 transition-all">
                Hablemos de tu proyecto
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;