import Starfield from "@/components/Starfield";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Starfield />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
