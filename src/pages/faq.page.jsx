import CallToAction from "@/components/siteSections/call-to-action";
import FAQAccordion from "@/components/siteSections/faq-accordion";
import LogoSlider from "@/components/siteSections/logo-slider";

const FAQPage = () => {
  return (
    <main>

      <section className="faq-hero px-5 lg:px-4 mx-auto mt-12 mb-10 md:mt-20 md:mb13 lg:mt-25 lg:mb-15 max-w-7xl">
        <h1 className="text-white font-bold max-w-[650px] mx-auto text-[42px] md:text-[48px] lg:text-[54px] text-center">
          Frequently Asked
          <br className="hidden lg:block" />
          Questions
        </h1>
        <div className="faq-info max-w-[650px] mx-auto mt-6 md:mt-8">
          <p className="text-white text-center text-sm md:text-base max-w-[748px] mx-auto">
            Here you'll find answers to frequently asked questions about our
            company and services.
          </p>
        </div>
      </section>

      <FAQAccordion />
      <LogoSlider />
      <CallToAction />
    </main>
  );
};

export default FAQPage;