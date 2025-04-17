import { Button } from "../ui/button";

function HomePlansCards() {
  return (
    <section className="home-plans-cards px-5 lg:px-4 mx-auto pt-10 pb-10 md:pt-13 md:pb-13 lg:pt-15 lg:pb-15 max-w-7xl">
      <h2 className="text-white text-center mb-6 font-bold md:mb-8 lg:mb-10 text-[38px] md:text-[42px] lg:text-5xl">
        Plans
      </h2>
      <p className="text-white text-sm md:text-base text-center max-w-[835px] mx-auto">
        Lorem ipsum dolor sit amet. Ut mollitia alias id expedita perferendis At
        amet saepe eum minima velit et dolorum voluptas a molestias consequatur
        eos autem amet? Non provident nesciunt ut sunt nemo in porro
        reprehenderit. 
      </p>

      <div className="plans-card-grid grid lg:grid-cols-3 lg:gap-4 mt-8 md:mt-10 lg:mt-12 ">
        <div className="plan-card lg:col-span-1 bg-[#023A56] p-8 rounded-2xl">
            <h3>Card 01</h3>
            <Button
             variant="secondary"
          >
            Click
          </Button>
        </div>
        <div className="plan-card lg:col-span-1 bg-[#023A56] p-8 rounded-2xl">
            <h3>Card 02</h3>
            <Button
             variant="secondary"
          >
            Click
          </Button>
        </div>
        <div className="plan-card lg:col-span-1 bg-[#023A56] p-8 rounded-2xl">
            <h3>Card 03</h3>
            <Button
             variant="secondary"
          >
            Click
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HomePlansCards;
