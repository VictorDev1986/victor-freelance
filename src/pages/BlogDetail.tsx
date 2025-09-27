import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { supabase } from "@/supabaseClient";
// Tipos para comentarios
interface Comment {
  id: string;
  name: string;
  comment: string;
  created_at: string;
  likes: number;
}
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
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");
  const [commentName, setCommentName] = useState("");


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
  const handleLike = () => {
    // Implementa si tienes likes globales por post en Supabase
  };

  // Manejar envío de comentario solo en memoria/local
  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim() || !commentName.trim()) return;
    const newComment: Comment = {
      id: Math.random().toString(36).substr(2, 9),
      name: commentName,
      comment: commentText,
      created_at: new Date().toISOString(),
      likes: 0,
    };
    setComments([newComment, ...comments]);
    setCommentText("");
    setCommentName("");
  };

  // Like a comment solo en memoria/local
  const handleLikeComment = (commentId: string) => {
    setComments(comments.map(c => c.id === commentId ? { ...c, likes: (c.likes || 0) + 1 } : c));
  };



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
        <p className="text-lg leading-relaxed mb-8">{post.excerpt}</p>

        {/* Botón Me gusta */}
        <button
          onClick={handleLike}
          aria-label="Me gusta"
          className={`mb-8 flex items-center gap-2 justify-start text-2xl transition-transform duration-150 focus:outline-none border-0 bg-transparent hover:scale-110 active:scale-95 select-none`}
          style={{ outline: 'none' }}
        >
          <span style={{
            transition: 'color 0.2s',
            color: '#e11d48',
            filter: 'drop-shadow(0 2px 8px #e11d4880)',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            fontSize: '1.5em',
          }}>
            {'❤️'}
          </span>
        </button>

        {/* Comentarios */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Comentarios</h2>
          <form onSubmit={handleComment} className="flex flex-col gap-4 mb-8 bg-card/70 dark:bg-card/40 rounded-xl p-6 shadow-md border border-border">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="commentName" className="block text-sm font-medium text-muted-foreground mb-1">Nombre</label>
                <input
                  id="commentName"
                  className="w-full border border-border bg-background dark:bg-background rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary transition placeholder:text-muted-foreground"
                  placeholder="Tu nombre"
                  value={commentName}
                  onChange={e => setCommentName(e.target.value)}
                  maxLength={32}
                  required
                  autoComplete="off"
                />
              </div>
            </div>
            <div>
              <label htmlFor="commentText" className="block text-sm font-medium text-muted-foreground mb-1">Comentario</label>
              <textarea
                id="commentText"
                className="w-full border border-border bg-background dark:bg-background rounded-lg p-3 resize-none min-h-[80px] focus:outline-none focus:ring-2 focus:ring-primary transition placeholder:text-muted-foreground"
                placeholder="Escribe un comentario..."
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-primary to-primary/80 text-white shadow-md hover:from-primary/90 hover:to-primary/70 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Comentar
              </button>
            </div>
          </form>
          <div className="space-y-6">
            {comments.length === 0 && (
              <div className="text-muted-foreground">Sé el primero en comentar.</div>
            )}
            {comments.map((c) => (
              <div key={c.id} className="rounded-xl p-6 bg-card/70 dark:bg-card/40 shadow-md transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-primary">{c.name}</span>
                  <span className="text-xs text-muted-foreground">{new Date(c.created_at).toLocaleString('es-ES', { hour12: false })}</span>
                </div>
                <div className="text-base mb-2">{c.comment}</div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleLikeComment(c.id)}
                    className="flex items-center gap-1 text-pink-600 hover:scale-110 transition-transform text-lg"
                    aria-label="Me gusta comentario"
                  >
                    <span>❤️</span>
                    <span className="text-base font-normal">{c.likes || 0}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
