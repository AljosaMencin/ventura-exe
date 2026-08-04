import Nav from "@/components/ventura/Nav";
import Hero from "@/components/ventura/Hero";
import HighlightedWork from "@/components/ventura/HighlightedWork";
import Services from "@/components/ventura/Services";
import About from "@/components/ventura/About";
import Testimonial from "@/components/ventura/Testimonial";
import ClientLogos from "@/components/ventura/ClientLogos";
import Contact from "@/components/ventura/Contact";
import Footer from "@/components/ventura/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <HighlightedWork />
        <Services />
        <About />
        <Testimonial />
        <Contact />
        <ClientLogos />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
