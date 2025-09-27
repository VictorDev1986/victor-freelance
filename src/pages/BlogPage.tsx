import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GlobalBackground } from "@/components/GlobalBackground";
import BlogSection from "@/components/BlogSection";

export const BlogPage = () => {
  return (
    <div className="container pt-28 pb-20 md:pt-40 md:pb-28 bg-transparent">
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