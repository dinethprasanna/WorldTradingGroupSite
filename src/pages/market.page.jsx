import CallToAction from "@/components/siteSections/call-to-action";
import MarketAccordion from "@/components/siteSections/market-accordion";
import MarketHero from "@/components/siteSections/market-hero";

const MarketPage = () => {
  return (
    <main>
      <MarketHero />
      <MarketAccordion />
      <CallToAction />
    </main>
  );
};

export default MarketPage;
