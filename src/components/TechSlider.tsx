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
  color: string; // clase tailwind para color oficial aproximado
}

// Array de tecnologías con sus íconos
const technologies: TechItem[] = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-orange-400" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "Docker", icon: SiDocker, color: "text-sky-500" },
  { name: "AWS", icon: SiAmazon, color: "text-amber-500" },
  { name: "Vercel", icon: SiVercel, color: "text-white dark:text-white" },
  { name: "WordPress", icon: SiWordpress, color: "text-sky-600" },
  { name: "Linux", icon: SiLinux, color: "text-yellow-500" },
  { name: "Figma", icon: SiFigma, color: "text-pink-500" },
  { name: "GitHub Copilot", icon: SiGithubcopilot, color: "text-teal-400" },
  { name: "Claude AI", icon: SiClaude, color: "text-amber-400" },
];

export const TechSlider = () => {
  // Duplicar el array para crear el efecto de loop infinito
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section className="py-10">{/* Versión simplificada: solo logos con colores oficiales */}
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          {/* Fade lateral sutil para suavizar entrada/salida */}
          <div className="pointer-events-none absolute left-0 top-0 w-10 sm:w-16 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 w-10 sm:w-16 h-full bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedTechs.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 flex flex-col items-center"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
              >
                <tech.icon
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 transition-colors duration-300 ${tech.color}`}
                />
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-foreground/70 dark:text-foreground/60 text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};