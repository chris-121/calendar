import YIEButton from "../YIEUI/YIEButton";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      Home Page
      <YIEButton content='Button One' bgColor='red' />
      <YIEButton content='Button One' bgColor='blue' />
      <Testimonial />
    </div>
  );
};

export default Home;
