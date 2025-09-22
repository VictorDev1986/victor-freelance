import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GlobalBackground } from "@/components/GlobalBackground";
import BlogSection from "@/components/BlogSection";

export const BlogPage = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <GlobalBackground />
      
      <div className="relative z-10">
        <Navbar />
        <BlogSection />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default BlogPage;