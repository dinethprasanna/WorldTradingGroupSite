import ScoreGrid from "./score-grid";

function AboutUsHero() {
  return (
    <section className="about-us-hero px-5 lg:px-4 mx-auto mt-12 mb-10 md:mt-20 md:mb13 lg:mt-25 lg:mb-15 max-w-7xl">
      <h1 className="text-white font-bold max-w-[640px] mx-auto text-[42px] md:text-[48px] lg:text-[54px] text-center">
      Lorem ipsum <br className="hidden lg:block" />
        <span className="text-(--yellow-text)">dolor sit amet</span> ?
      </h1>
      <div className="company-logo mx-auto my-6 my:mb-8 lg:my-11 w-10/12 md:w-full md:max-w-lg">
        <img
          src="/SiteAssests/AboutUsPage/sample-img.png"
          alt="sample-img"
          width="100%"
          height="auto"
          className="w-full"
        />
      </div>
      <div className="abt-company-info">
        <p className="text-white text-center text-sm md:text-base max-w-[748px] mx-auto">
        Lorem ipsum,{" "}
          <span className="text-(--yellow-text)">dolor sit amet</span> consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.
        </p>
      </div>

      <div className="abt-scroes max-w-[748px] mx-auto mt-8 lg:mt-11">
        <ScoreGrid />
      </div>
    </section>
  );
}

export default AboutUsHero;
