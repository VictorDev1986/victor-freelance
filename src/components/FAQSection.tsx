import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Datos de las preguntas frecuentes
const faqData: FAQItem[] = [
  {
    id: 1,
    question: "¿Cuánto tiempo tarda en desarrollarse un sitio web?",
    answer: "El tiempo de desarrollo varía según el tipo de proyecto: Landing Page (3 días), Página Web corporativa (5 días), E-commerce (8 días), y Software a Medida depende de la complejidad del proyecto (puede variar de 2 a 12 semanas). Te proporcionaré un cronograma detallado durante la consulta inicial."
  },
 
  {
    id: 3,
    question: "¿Ofreces mantenimiento después de la entrega?",
    answer: "¡Absolutamente! Todos los proyectos incluyen soporte técnico gratuito (3-6 meses según el plan). Después ofrezco planes de mantenimiento mensual que incluyen actualizaciones de seguridad, backups, monitoreo y soporte técnico continuo."
  },
  {
    id: 4,
    question: "¿Cómo debo entregar el contenido (fotos, textos y archivos multimedia)?",
    answer: "Te proporcionaré una guía detallada con las especificaciones técnicas. Generalmente necesito: textos en formato Word/Google Docs, imágenes en alta resolución (JPG/PNG), logos en formato vectorial (SVG/AI), y videos optimizados. También puedo ayudarte con la creación de contenido si lo necesitas."
  },
  {
    id: 5,
    question: "¿Cómo es el proceso de trabajo desde la idea hasta la entrega?",
    answer: "Mi proceso incluye 7 fases: 1) Análisis de requerimientos, 2) Planificación y wireframes, 3) Diseño visual, 4) Desarrollo frontend, 5) Desarrollo backend, 6) Testing y optimización, 7) Entrega y capacitación. Mantengo comunicación constante y te muestro avances en cada etapa."
  },
  {
    id: 6,
    question: "¿Incluyes hosting y dominio en el proyecto?",
    answer: "¡Sí! Todos mis planes incluyen hosting y dominio gratuito por 1 año. Me encargo de toda la configuración técnica: registro del dominio, configuración del hosting, certificado SSL, correos electrónicos profesionales y respaldos automáticos. Después del primer año, puedes renovar directamente o transferir la administración a donde prefieras."
  },
  {
    id: 7,
    question: "¿Qué opciones de pago y financiación a cuotas ofreces?",
    answer: "Acepto múltiples formas de pago: Nequi, Daviplata, transferencia bancaria y PayPal. Manejo un inicio mínimo del 30% del proyecto y puedo diferir el resto en cuotas dependiendo del monto total. Esto hace más accesibles los proyectos y te permite planificar mejor tu inversión."
  },
  {
    id: 8,
    question: "¿Incluyes capacitación para aprender a administrar mi sitio web?",
    answer: "¡Sí! Todos los proyectos incluyen una sesión de capacitación donde te enseño a: agregar/editar contenido, subir imágenes, gestionar productos (e-commerce), usar el panel administrativo, y realizar tareas básicas de mantenimiento. También te entrego documentación detallada."
  },
  {
    id: 9,
    question: "¿Qué tecnologías utilizas y por qué?",
    answer: "Utilizo un stack tecnológico moderno y versátil: HTML, CSS, TailwindCSS para estilos eficientes, React para interfaces dinámicas, Node.js y Express para backend robusto, PHP y Laravel para aplicaciones empresariales, Bagisto para e-commerce avanzado, WordPress para sitios de contenido, y MySQL como base de datos confiable. Esta combinación me permite elegir la mejor tecnología para cada proyecto específico."
  },
  {
    id: 10,
    question: "¿Incluyes optimización SEO básica?",
    answer: "¡Absolutamente! Todos mis proyectos incluyen SEO básico: meta tags optimizados, estructura de URLs amigables, sitemap XML, velocidad de carga optimizada, diseño responsive, y configuración inicial de Google Analytics y Search Console. Para SEO avanzado ofrezco servicios adicionales."
  },
  {
    id: 11,
    question: "¿Qué garantía ofreces sobre tu trabajo?",
    answer: "Ofrezco garantía completa sobre mi trabajo: 3-6 meses de soporte técnico gratuito según el plan, corrección de errores sin costo, y garantía de funcionamiento. Si algo no funciona como acordamos, lo corrijo sin cargo adicional. Tu satisfacción es mi prioridad."
  },
  {
    id: 12,
    question: "¿Puedo hacer cambios durante el desarrollo?",
    answer: "¡Por supuesto! Trabajo con metodología ágil mostrando avances constantes. Puedes solicitar cambios menores sin costo durante el desarrollo. Para cambios mayores que afecten el alcance original, evaluamos el impacto en tiempo y costo, siempre con total transparencia."
  },
  {
    id: 13,
    question: "¿El sitio será compatible con móviles?",
    answer: "¡Definitivamente! Todos mis sitios web son 100% responsive y se adaptan perfectamente a móviles, tablets y desktop. Uso un enfoque 'mobile-first' para garantizar la mejor experiencia en dispositivos móviles, donde está la mayoría de tus usuarios."
  }
];

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Función para alternar el estado de un ítem
  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
  <section id="faq" className="container py-24 sm:py-32 section-x-padding">
      {/* Header de la sección */}
      <div className="text-center mb-16">
        {/* Refactor: reemplazo clases repetidas por section-title y heading-gradient */}
        <h2 className="section-title mb-4">
          Preguntas
          <span className="heading-gradient">
            {" "}Frecuentes{" "}
          </span>
        </h2>
        <p className="section-lead max-w-2xl mx-auto">
          Resuelve tus dudas sobre el proceso de desarrollo web freelance. 
          Si no encuentras la respuesta que buscas, ¡contáctame directamente!
        </p>
      </div>

      {/* Lista de preguntas frecuentes */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((item) => {
          const isOpen = openItems.includes(item.id);
          
          return (
            <div
              key={item.id}
              className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Pregunta - Botón clickeable */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/50 rounded-lg transition-colors duration-200 group"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200 pr-4">
                  {item.question}
                </h3>
                
                {/* Ícono que cambia según el estado */}
                <div className="flex-shrink-0 text-primary">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 transform transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 transform transition-transform duration-300" />
                  )}
                </div>
              </button>

              {/* Respuesta - Se despliega con animación */}
              <div
                id={`faq-answer-${item.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-border pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to action al final */}
      <div className="text-center mt-12">
        <div className="bg-accent/30 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">
            ¿Tienes más preguntas?
          </h3>
          <p className="text-muted-foreground mb-4">
            No dudes en contactarme para una consulta gratuita personalizada
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200 font-medium">
            Consulta Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;