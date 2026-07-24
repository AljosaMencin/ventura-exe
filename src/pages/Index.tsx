import Nav from "@/components/ventura/Nav";
import Hero from "@/components/ventura/Hero";
import StudioReel from "@/components/ventura/StudioReel";
import SelectedProjects from "@/components/ventura/SelectedProjects";
import Services from "@/components/ventura/Services";
import Testimonial from "@/components/ventura/Testimonial";
import Contact from "@/components/ventura/Contact";
import Footer from "@/components/ventura/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <StudioReel />
        <SelectedProjects />
        <Services />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
