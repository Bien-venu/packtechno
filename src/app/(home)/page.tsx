import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { services } from "@/Data/Services";

const Home = () => {
  return (
    <div className="flex h-fit flex-col">
      <Hero />
      <About />
      <Services services={services} />
      <Projects />
      <div className="bg-primary flex h-screen w-full py-8">Be ware!</div>
    </div>
  );
};

export default Home;
