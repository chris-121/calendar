import Features from "./Features";
import Hero from "./Hero";
import Footer from "../Components/Footer"
import Faq from "../Components/Faq";
import Achievements from "../Components/Achievements";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Features />
      <Achievements />
      <Faq />
      <Footer/>
    </div>
  );
};

export default Home;
