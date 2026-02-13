import RecentPosts from "@/components/RecentPosts";
import { About } from "../components/About";
import { Cta } from "../components/Cta";
import { DevelopmentRoadmap } from "../components/DevelopmentRoadmap";
import { FAQSection } from "../components/FAQSection";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Navbar } from "../components/Navbar";
import PortfolioSection from "../components/PortfolioSection";
import { Pricing } from "@/components/Pricing";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <DevelopmentRoadmap />
      <PortfolioSection />
      <Cta />
      <RecentPosts />
      <Pricing />
      <FAQSection />
      <Footer />
    </>
  );
}