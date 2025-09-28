import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

// Tipo para los posts del blog
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
}

export const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Cargar posts desde el archivo JSON
  useEffect(() => {
    const loadPosts = async () => {
      try {
  const response = await fetch('/data/posts.json');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error cargando posts:', error);
        // Fallback con datos estáticos si falla la carga
        setPosts([
          {
            id: 1,
            title: "React 18: Nuevas Características y Beneficios",
            excerpt: "Descubre las últimas funcionalidades de React 18 incluyendo Concurrent Features, Automatic Batching y Suspense.",
            date: "2025-09-20",
            image: "/src/assets/react.svg",
            link: "/blog/react-18-nuevas-caracteristicas"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Función para formatear fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Variantes de animación para Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  if (loading) {
    return (
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 bg-muted animate-pulse rounded mb-4 max-w-md mx-auto"></div>
            <div className="h-4 bg-muted animate-pulse rounded max-w-2xl mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-muted animate-pulse rounded-xl h-96"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
  <section className="py-16 sm:py-20 lg:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            📝 Blog de Tecnología
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Últimas{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              Publicaciones
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mantente al día con las últimas tendencias, tutoriales y mejores prácticas 
            en desarrollo web, tecnologías frontend y estrategias digitales.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                {/* Imagen del Post */}
                <div className="relative overflow-hidden">
                  <Link to={`/blog/${post.id}`}> 
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Fecha */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  {/* Extracto */}
                  <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Botón Leer Más */}
                  <div className="pt-4">
                    <Button
                      variant="ghost"
                      className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary/80 transition-colors duration-300"
                      onClick={() => window.location.href = `/blog/${post.id}`}
                    >
                      <span className="flex items-center gap-2">
                        Leer más
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
       
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;