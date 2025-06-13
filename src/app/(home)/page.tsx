import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { services } from "@/Data/Services";

const Home = () => {
  return (
    <div className="flex h-fit flex-col gap-4">
      <Hero />
      <About />
      <Services services={services} />
      <div className="bg-secondary flex h-screen w-full py-8">Be ware!</div>
    </div>
  );
};

export default Home;
