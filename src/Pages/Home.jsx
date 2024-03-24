import Hero from "../Components/Hero";
import bg from "../assets/bg.svg";

const Home = () => {
  return (
    <div className="hero relative  min-h-[calc(100vh-116px)]">
      <Hero />
      <img className=" absolute rotate-180 bottom-0 " src={bg} alt="" />
    </div>
  );
};

export default Home;
