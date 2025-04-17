import CallToAction from "@/components/siteSections/call-to-action";
import CoreValues from "@/components/siteSections/core-values";
import HomeCompanyInfo from "@/components/siteSections/home-company-info";
import HomeHero from "@/components/siteSections/home-hero";
import HomeStepsAccordion from "@/components/siteSections/home-steps-accordion";
import HomeTradingProducts from "@/components/siteSections/home-trading-products";
import LogoSlider from "@/components/siteSections/logo-slider";


const HomePage = () => {
  return (
    <main>
      <HomeHero />
      <HomeCompanyInfo />
      <LogoSlider />
      <CoreValues />
      <CallToAction />
      <HomeTradingProducts />
      <HomeStepsAccordion />
      <CallToAction />
    </main>
  );
};

export default HomePage;
