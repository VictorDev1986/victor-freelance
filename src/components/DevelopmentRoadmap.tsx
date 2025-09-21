import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle, Circle, Play } from "lucide-react";

interface RoadmapPhase {
  id: number;
  title: string;
  dateRange: string;
  description: string;
  image: string;
  status: "completed" | "in-progress" | "upcoming";
  deliverables: string[];
}

const roadmapData: RoadmapPhase[] = [
  {
    id: 1,
    title: "Planificación y Análisis",
    dateRange: "Semana 1-2",
    description: "Definición de objetivos, análisis de requerimientos y planificación del proyecto completo.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    status: "completed",
    deliverables: ["Documento de requerimientos", "Wireframes", "Cronograma del proyecto"]
  },
  {
    id: 2,
    title: "Diseño UI/UX",
    dateRange: "Semana 3-4",
    description: "Creación de mockups, prototipos y definición de la experiencia de usuario.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
    status: "completed",
    deliverables: ["Mockups de alta fidelidad", "Prototipo interactivo", "Guía de estilo"]
  },
  {
    id: 3,
    title: "Desarrollo Frontend",
    dateRange: "Semana 5-8",
    description: "Implementación de la interfaz de usuario usando tecnologías modernas como React y TypeScript.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    status: "in-progress",
    deliverables: ["Componentes React", "Páginas responsivas", "Integración de APIs"]
  },
  {
    id: 4,
    title: "Desarrollo Backend",
    dateRange: "Semana 6-9",
    description: "Desarrollo de APIs, configuración de base de datos y lógica del servidor.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    status: "upcoming",
    deliverables: ["API RESTful", "Base de datos", "Autenticación y autorización"]
  },
  {
    id: 5,
    title: "Testing y QA",
    dateRange: "Semana 10-11",
    description: "Pruebas exhaustivas, corrección de bugs y optimización del rendimiento.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop",
    status: "upcoming",
    deliverables: ["Plan de pruebas", "Reporte de bugs", "Documentación de testing"]
  },
  {
    id: 6,
    title: "Despliegue",
    dateRange: "Semana 12",
    description: "Configuración del servidor, despliegue en producción y configuración de dominios.",
    image: "https://images.unsplash.com/photo-1640622300473-977435c38c04?w=600&h=400&fit=crop",
    status: "upcoming",
    deliverables: ["Aplicación en producción", "Configuración de dominio", "Monitoreo"]
  },
  {
    id: 7,
    title: "Mantenimiento",
    dateRange: "Continuo",
    description: "Soporte técnico, actualizaciones de seguridad y mejoras continuas del sistema.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    status: "upcoming",
    deliverables: ["Soporte técnico", "Actualizaciones", "Reportes de rendimiento"]
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
    <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Roadmap de Desarrollo
            </span>
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
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-row lg:justify-between`}
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
                          <div className="flex items-center gap-3 mb-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">{phase.dateRange}</span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-2">{phase.title}</h3>
                          <p className="text-muted-foreground">{phase.description}</p>
                        </div>
                      </div>

                      {/* Entregables */}
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Entregables
                        </h4>
                        <ul className="space-y-1">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Imagen - Desktop: alternada, Mobile: oculta para ahorrar espacio */}
                  <div className={`hidden lg:block w-5/12 ${
                    isEven ? 'lg:pl-8' : 'lg:pr-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative overflow-hidden rounded-2xl shadow-lg group"
                    >
                      <img
                        src={phase.image}
                        alt={phase.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                      
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