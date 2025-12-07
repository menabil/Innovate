import Banner from "../pages/Banner";
import About from "./About";
import Blog from "./Blog";
import Price from "./Price";
import Protfolio from "./Protfolio";
import Review from "./Review";
import Service from "./Service";

const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <About />
      <Protfolio />
      <Price />
      <Review />
      <Blog />
    </>
  );
};

export default Home;
