import Nav from "@/components/ventura/Nav";
import AmbientGlow from "@/components/ventura/AmbientGlow";
import Hero from "@/components/ventura/Hero";
import StudioReel from "@/components/ventura/StudioReel";
import HighlightedWork from "@/components/ventura/HighlightedWork";
import Services from "@/components/ventura/Services";
import About from "@/components/ventura/About";
import Testimonial from "@/components/ventura/Testimonial";
import Contact from "@/components/ventura/Contact";
import Footer from "@/components/ventura/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AmbientGlow />
      <Nav />
      <main>
        <Hero />
        <StudioReel />
        <HighlightedWork />
        <Services />
        <About />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
