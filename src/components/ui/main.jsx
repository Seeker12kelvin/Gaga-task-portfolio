import About from "./about";
import Header from "./header";
import HeroSection from "./heroSection";
import Masterclass from "./masterclass";
import News from "./news";
import Services from "./services";

const Main = () => {
  return (
    <main className="px-7">
      <Header />

      <HeroSection />

      <About />

      <Services />

      <News />

      <Masterclass />
    </main>
  );
};

export default Main;
