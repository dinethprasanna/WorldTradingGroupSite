import { Button } from "../ui/button";

function CallToAction() {
  return (
    <section className="123 cta-section px-5 lg:px-4 mx-auto pt-10 pb-10 md:pt-13 md:pb-13 lg:pt-15 lg:pb-15 max-w-7xl">
      <div className="cta-wrapper grid grid-col-1 md:grid-cols-3 bg-center bg-no-repeat bg-cover bg-[url('/SiteAssests/GlobalElement/CTA/cta-background.jpg')] px-6 pt-8 pb-8 md:px-8 md:pt-28 md:pb-20 rounded-xl overflow-hidden">
        <div className="md:col-span-2">
          <h2 className="text-white text-center md:text-left font-bold text-[38px] md:text-[42px] lg:text-5xl drop-shadow-(--yellow-text)">Lorem Ipsum!</h2>
          <p className="text-white text-base mt-4 mb-6 max-w-[622px] text-center md:text-left">
            Lorem ipsum dolor sit amet. Ut mollitia alias id expedita
            perferendis At amet saepe eum minima velit et dolorum voluptas a
            molestias consequatur eos autem amet? Non provident nesciunt ut sunt
            nemo in porro reprehenderit. 
          </p>
          <Button className="w-full h-14 cursor-pointer text-base md:text-lg md:w-[190px] py-3 hidden md:block">
            Get Started
          </Button>
        </div>
        <div className="md:col-span-1">
            <img src="SiteAssests/GlobalElement/CTA/company-logo.png" alt="CTA Image" className="w-60 mx-auto md:w-60" />
            <Button className="w-full h-14 cursor-pointer text-base md:text-lg md:w-[190px] py-3 block md:hidden mt-4">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
