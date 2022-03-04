import Achievements from "../Components/Achievements";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import Features from "./Features";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Achievements />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
