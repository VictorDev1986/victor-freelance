"use client";

import { motion } from "framer-motion";
import { 
  SiReact, 
  SiTailwindcss, 
  SiVercel, 
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiGit,
  SiDocker,
  SiAmazon,
  SiWordpress,
  SiLaravel,
  SiLinux,
  SiFigma,
  SiCss3,
  SiHtml5,
  SiGithubcopilot,
  SiClaude
} from "react-icons/si";

// Definir el tipo para cada tecnología
interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Array de tecnologías con sus íconos
const technologies: TechItem[] = [
  { name: "React", icon: SiReact },
  { name: "Laravel", icon: SiLaravel },
  { name: "PHP", icon: SiPhp },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: SiAmazon },
  { name: "Vercel", icon: SiVercel },
  { name: "WordPress", icon: SiWordpress },
  { name: "Linux", icon: SiLinux },
  { name: "Figma", icon: SiFigma },
  { name: "GitHub Copilot", icon: SiGithubcopilot },
  { name: "Claude AI", icon: SiClaude },
];

export const TechSlider = () => {
  // Duplicar el array para crear el efecto de loop infinito
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Contenedor del slider con overflow hidden */}
        <div className="relative overflow-hidden">
          {/* Gradientes para crear el efecto de fade en los bordes */}
          <div className="absolute left-0 top-0 w-10 sm:w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-10 sm:w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
          
          {/* Slider animado */}
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {duplicatedTechs.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-lg group">
                  {/* Ícono de la tecnología */}
                  <tech.icon className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300" />
                  
                  {/* Nombre de la tecnología */}
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300 text-center">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};