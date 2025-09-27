import { motion } from "framer-motion";
import { CheckCircle, Circle, Play } from "lucide-react";
import buildingWebsiteImg from "../assets/undraw_building-a-website_1wrp.svg";
import designerImg from "../assets/undraw_designer_efwz.svg";
import backend from "../assets/undraw_version-control_e4yu.svg";
import developerActivityImg from "../assets/undraw_developer-activity_4zqd.svg";
import dragAndDropImg from "../assets/undraw_drag-and-drop_v4po.svg";
import prodcutionImg from "../assets/undraw_startup-life_7hl8.svg";
import soport from "../assets/undraw_deep-work_muov.svg";

interface RoadmapPhase {
  id: number;
  title: string;
  description: string;
  image: string;
  status: "completed" | "in-progress" | "upcoming";
}

const roadmapData: RoadmapPhase[] = [
  {
    id: 1,
    title: "Planificación y Análisis",
    description: "Definición de objetivos, análisis de requerimientos y planificación del proyecto completo.",
    image: buildingWebsiteImg,
    status: "completed"
  },
  {
    id: 2,
    title: "Diseño UI/UX",
    description: "Creación de mockups, prototipos y definición de la experiencia de usuario.",
    image: designerImg,
    status: "completed"
  },
  {
    id: 3,
    title: "Desarrollo Frontend",
    description: "Implementación de la interfaz de usuario usando tecnologías modernas como React y TypeScript.",
    image: dragAndDropImg,
    status: "in-progress"
  },
  {
    id: 4,
    title: "Desarrollo Backend",
    description: "Desarrollo de APIs, configuración de base de datos y lógica del servidor.",
    image: backend,
    status: "upcoming"
  },
  {
    id: 5,
    title: "Testing y QA",
    description: "Pruebas exhaustivas, corrección de bugs y optimización del rendimiento.",
    image: developerActivityImg,
    status: "upcoming"
  },
  {
    id: 6,
    title: "Despliegue",
    description: "Configuración del servidor, despliegue en producción y configuración de dominios.",
    image: prodcutionImg,
    status: "upcoming"
  },
  {
    id: 7,
    title: "Mantenimiento",
    description: "Soporte técnico, actualizaciones de seguridad y mejoras continuas del sistema.",
    image: soport,
    status: "upcoming"
  }
];

export const DevelopmentRoadmap = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case "in-progress":
        return <Play className="w-6 h-6 text-blue-500" />;
      case "upcoming":
        return <Circle className="w-6 h-6 text-gray-400" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500 bg-green-500/10";
      case "in-progress":
        return "border-blue-500 bg-blue-500/10";
      case "upcoming":
        return "border-gray-400 bg-gray-400/10";
      default:
        return "border-gray-400 bg-gray-400/10";
    }
  };

  return (
  <section className="py-16 sm:py-20 section-x-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-6">
            <span className="heading-gradient">Roadmap de </span>Desarrollo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proceso completo desde la planificación hasta el lanzamiento de tu proyecto web
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea central - oculta en mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden lg:block"></div>
          
          {/* Línea izquierda en mobile */}
          <div className="absolute left-8 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 lg:hidden"></div>

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {roadmapData.map((phase, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } lg:justify-between`}
                >
                  {/* Punto central del timeline */}
                  <div className={`absolute ${
                    'lg:left-1/2 lg:transform lg:-translate-x-1/2 left-8 transform -translate-x-1/2'
                  } w-12 h-12 rounded-full border-4 ${getStatusColor(phase.status)} backdrop-blur-sm flex items-center justify-center z-10`}>
                    {getStatusIcon(phase.status)}
                  </div>

                  {/* Contenido - Desktop: alternado, Mobile: siempre a la derecha */}
                  <div className={`w-full lg:w-5/12 ${
                    isEven ? 'lg:pr-8' : 'lg:pl-8'
                  } pl-20 lg:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Header de la fase */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-1">
                          {/* Eliminado dateRange */}
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {(() => {
                              const words = phase.title.split(' ');
                              if (words.length < 2) return phase.title;
                              return <>
                                {words.slice(0, -1).join(' ')}{' '}
                                <span className="text-green-500">{words[words.length - 1]}</span>
                              </>;
                            })()}
                          </h3>
                          <p className="text-muted-foreground">{phase.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Imagen - Visible en todos los dispositivos */}
                  <div className={`w-full lg:w-5/12 ${
                    isEven ? 'lg:pl-8' : 'lg:pr-8'
                  } mt-4 lg:mt-0`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <img
                        src={phase.image}
                        alt={phase.title}
                        loading="lazy"
                        className="w-full h-48 lg:h-64 object-contain max-w-full transition-transform duration-500 group-hover:scale-110 mx-auto"
                      />
                      
                      {/* Badge de estado */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          phase.status === 'completed' ? 'bg-green-500/90 text-white' :
                          phase.status === 'in-progress' ? 'bg-blue-500/90 text-white' :
                          'bg-gray-500/90 text-white'
                        }`}>
                          {phase.status === 'completed' ? 'Completado' :
                           phase.status === 'in-progress' ? 'En Progreso' : 'Próximo'}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ¿Listo para comenzar tu proyecto?
          </h3>
          <p className="text-muted-foreground mb-6">
            Sigamos este roadmap juntos para crear algo increíble
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg text-lg font-medium inline-flex items-center gap-2 transition-all"
          >
            Comenzar Proyecto
            <Play className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};