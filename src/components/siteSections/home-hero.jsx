import { Button } from "../ui/button";
import ScoreGrid from "./score-grid";

function HomeHero(props) {
  return (
    <section className="home-hero px-5 lg:px-4 mx-auto mt-12 mb-10 md:mt-20 md:mb13 lg:mt-25 lg:mb-15 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <h1 className="text-white font-bold max-w-[640px] text-[42px] md:text-[48px] lg:text-[54px] text-center md:text-left">
            Unlock Boundless <br className="hidden lg:block" /><span className="text-(--yellow-text)">Power</span>{" "}
            Step into<br className="hidden lg:block" /> endless{" "}
            <span className="text-(--yellow-text)">new horizons</span>{" "}
          </h1>
          <Button className="w-full h-14 cursor-pointer text-base md:text-lg md:w-[190px] py-3 mt-8">
            Get Started
          </Button>
        </div>
        <div className="col-span-1 flex items-center justify-center  ">
          <img src="/SiteAssests/sample-img.png" alt="Hero-Image" className="block max-w-[320px] md:max-w-full" />
        </div>
        {/* <div className="home-score-grid col-span-1 md:col-span-2 mt-4 md:mt-8 lg:mt-4">
          <ScoreGrid />
        </div> */}
        {/* <div className="hero-button col-span-3 mt-2">
        <Button className="w-full h-14 cursor-pointer text-base md:text-lg md:w-[190px] py-3">
          Get Started
        </Button>
      </div> */}
      </div>
    </section>
  );
}

export default HomeHero;
