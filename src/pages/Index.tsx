import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import About from "@/components/site/About";
import Projects from "@/components/site/Projects";
import Stats from "@/components/site/Stats";
import Testimonials from "@/components/site/Testimonials";
import Team from "@/components/site/Team";
import Clients from "@/components/site/Clients";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Stats />
      <Testimonials />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
