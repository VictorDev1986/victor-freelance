import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
// import { supabase } from "@/supabaseClient";
// Tipos para comentarios
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
  content?: string;
}

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  // Comentarios eliminados


  // Cargar post y estado inicial de likes/comentarios
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('/src/data/posts.json');
        const data: BlogPost[] = await response.json();
        const found = data.find((p) => p.id === Number(id));
        setPost(found || null);
      } catch (error) {
        setPost(null);
      }
    };
    fetchPost();
    // Comentarios solo en memoria/local
  }, [id]);

  // Manejar like global del post (opcional, si tienes columna de likes en la tabla posts)
  // Si no, puedes eliminar esta función o implementarla en Supabase

  // Función de comentarios eliminada

  // Función de like a comentario eliminada



  if (!post) return (
    <>
      <Navbar />
      <div className="container py-20 text-center">Post no encontrado</div>
      <Footer />
    </>
  );

  return (
    <>
      <Navbar />
      <div className="container pt-32 pb-20 max-w-3xl mx-auto">
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-xl mb-8" />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-muted-foreground mb-6">{post.date}</div>
        {/* Mostrar excerpt si no hay content, o content con formato si existe */}
        {post.content ? (
          <div className="prose prose-neutral dark:prose-invert font-sans text-lg leading-relaxed mb-8 max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        ) : (
          <p className="text-lg leading-relaxed mb-8">{post.excerpt}</p>
        )}

        {/* Botón Me gusta eliminado */}

        {/* Sección de comentarios eliminada */}
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
