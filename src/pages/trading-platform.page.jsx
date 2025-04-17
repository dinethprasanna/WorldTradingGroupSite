import CallToAction from "@/components/siteSections/call-to-action";

const TradingPlatformPage = () => {
  return (
    <main>
      <section className="trading-platform-hero px-5 lg:px-4 mx-auto mt-12 mb-10 md:mt-20 md:mb13 lg:mt-25 lg:mb-15 max-w-7xl">
        <h1 className="text-white font-bold max-w-[640px] mx-auto text-[42px] md:text-[48px] lg:text-[54px] text-center">
          <span className="text-(--yellow-text)">Exchange </span> Interface
        </h1>
        <div className="top-img w-full max-w-[1120px] mx-auto my-6 my:mb-8 lg:my-11 md:w-full">
          <img
            src="SiteAssests/TradingPlatformPage/trading-platform-hero-img.jpeg"
            alt="Trading Platform"
            width="100%"
            height="auto"
            className="w-full"
          />
        </div>
      </section>

      <section className="apps-info px-5 lg:px-4 mx-auto pt-10 pb-10 md:pt-13 md:pb-13 lg:pt-15 lg:pb-15 max-w-7xl">
        <h2 className="text-white text-center mb-8 font-bold md:mb-10 text-[38px] md:text-[42px] lg:text-5xl">
          Trade On-the-Go With{" "}
          <span className="text-(--light-green)">TestApp</span>
        </h2>
        <p className="text-white text-center text-sm md:text-base max-w-[644px] mx-auto mt-6 md:mt-8 lg:mt-10">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>

        <div className="dowload-grid grid grid-cols-1 gap-8 lg:mt-16">
          <div className="col-span-1">
            <a href="#" target="_blank">
              <h4 className="text-(--yellow-text) text-center font-bold text-[24px] md:text-[28px] mb-6">Get it on Android</h4>
              <img src="SiteAssests/TradingPlatformPage/android.png" className="w-full max-w-[140px] md:max-w-[220px] block mx-auto" alt="Android" />
            </a>
          </div>
          <div className="col-span-1">
            <a href="#" target="_blank">
              <h4 className="text-(--yellow-text) text-center font-bold text-[24px] md:text-[28px] mb-6">Get it on Apple</h4>
              <img src="SiteAssests/TradingPlatformPage/apple.png" className="w-full max-w-[140px] md:max-w-[220px] block mx-auto" alt="Apple" />
            </a>
          </div>
          <div className="col-span-1">
            <a href="#" target="_blank">
              <h4 className="text-(--yellow-text) text-center font-bold text-[24px] md:text-[28px] mb-6">Install it on Windows</h4>
              <img src="SiteAssests/TradingPlatformPage/windows.png" className="w-full max-w-[140px] md:max-w-[220px] block mx-auto" alt="Windows" />
            </a>
          </div>
        </div>
      </section>

      
      <CallToAction />
    </main>
  );
};

export default TradingPlatformPage;
