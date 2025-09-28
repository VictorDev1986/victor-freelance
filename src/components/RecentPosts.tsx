import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
  content?: string;
}

const RecentPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/data/posts.json");
        const data: BlogPost[] = await response.json();
        // Ordenar por fecha descendente y tomar los 3 más recientes
        const sorted = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPosts(sorted.slice(0, 3));
      } catch (error) {
        setPosts([]);
      }
    };
    fetchPosts();
  }, []);

  const navigate = useNavigate();
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-6">
          Últimas
          <span className="heading-gradient"> Publicaciones </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.slice(0, 3).map((post) => (
            <div key={post.id} className="group">
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                {/* Imagen del Post */}
                <div className="relative overflow-hidden">
                  <Link to={`/blog/${post.id}`}> 
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>
                <CardContent className="p-6 space-y-4">
                  {/* Fecha */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>{post.date}</time>
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
                      onClick={() => navigate(`/blog/${post.id}`)}
                    >
                      <span className="flex items-center gap-2">
                        Leer más
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            variant="default"
            size="lg"
            onClick={() => navigate("/blog")}
            className="text-lg px-8 py-3"
          >
            Ver más publicaciones
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
