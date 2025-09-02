import Hero from "@/app/services/catering/hero";
import Services from "@/app/services/catering/service";
import Gallery from "@/app/services/catering/gallery";
import Contact from "@/app/services/catering/contact";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Hero />
      <Services />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
