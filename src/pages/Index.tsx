import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Anthem from "@/components/Anthem";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AnnouncementPopup from "@/components/AnnouncementPopup";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Anthem />
      <CTA />
      <Footer />
      <AnnouncementPopup />
    </main>
  );
};

export default Index;
