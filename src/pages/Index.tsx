import Nav from "@/components/ventura/Nav";
import MouseGlow from "@/components/ventura/MouseGlow";
import Hero from "@/components/ventura/Hero";
import StudioReel from "@/components/ventura/StudioReel";
import HighlightedWork from "@/components/ventura/HighlightedWork";
import Services from "@/components/ventura/Services";
import Testimonial from "@/components/ventura/Testimonial";
import Contact from "@/components/ventura/Contact";
import Footer from "@/components/ventura/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MouseGlow />
      <Nav />
      <main>
        <Hero />
        <StudioReel />
        <HighlightedWork />
        <Services />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
