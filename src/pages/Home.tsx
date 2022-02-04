import Features from "./Features";
import Hero from "./Hero";
import Footer from "../Components/Footer"
import Faq from "../Components/Faq";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Faq />
      <Footer/>
    </div>
  );
};

export default Home;
