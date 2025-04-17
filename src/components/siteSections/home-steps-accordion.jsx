import { useEffect } from "react";

function HomeStepsAccordion() {
  useEffect(() => {
    $('.home-steps-accordion .accordion-cell').off("click").on("click", function () {
      $('.home-steps-accordion .accordion-cell').removeClass('expanded').addClass('collapsed');
      $(this).removeClass('collapsed').addClass('expanded');
    });
    return () => {
      $('.home-steps-accordion .accordion-cell').off("click");
    };
  }, []);
  return (
    <section className="home-steps-accordion px-5 lg:px-4 mx-auto pt-10 pb-10 md:pt-13 md:pb-13 lg:pt-15 lg:pb-15 max-w-7xl">
      <h2 className="text-white text-center mb-8 font-bold md:mb-10 text-[38px] md:text-[42px] lg:text-5xl">
      Simple Steps to Get Started
      </h2>

      <div className="accordion-body">
        <div className="accordion flex flex-col lg:block h-auto lg:h-[420px] bg-white">
          <div className="accordion-cell h-full relative expanded">
            <h4 className="text-(--yellow-text) text-[26px] md:text-[28px] lg:text-[32px] mb-6 font-bold">
              Step 01
            </h4>
            <div className="accordion-cell-content">
              <h6 className="text-(--dark-grey) font-bold text-[20px] lg:text-[32px] mb-2 md:mb-4 lg:mb-6">Title</h6>
              <p className="text-(--dark-grey) text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="accordion-cell h-full relative">
            <h4 className="text-(--yellow-text) text-[26px] md:text-[28px] lg:text-[32px] mb-6 font-bold">
              Step 02
            </h4>
            <div className="accordion-cell-content">
              <h6 className="text-(--dark-grey) font-bold text-[20px] lg:text-[32px] mb-2 md:mb-4 lg:mb-6">Title</h6>
              <p className="text-(--dark-grey) text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="accordion-cell h-full relative">
            <h4 className="text-(--yellow-text) text-[26px] md:text-[28px] lg:text-[32px] mb-6 font-bold">
              Step 03
            </h4>
            <div className="accordion-cell-content">
              <h6 className="text-(--dark-grey) font-bold text-[20px] lg:text-[32px] mb-2 md:mb-4 lg:mb-6">Title</h6>
              <p className="text-(--dark-grey) text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="accordion-cell h-full relative">
            <h4 className="text-(--yellow-text) text-[26px] md:text-[28px] lg:text-[32px] mb-6 font-bold">
              Step 04
            </h4>
            <div className="accordion-cell-content">
              <h6 className="text-(--dark-grey) font-bold text-[20px] lg:text-[32px] mb-2 md:mb-4 lg:mb-6">Title</h6>
              <p className="text-(--dark-grey) text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="accordion-cell h-full relative">
            <h4 className="text-(--yellow-text) text-[26px] md:text-[28px] lg:text-[32px] mb-6 font-bold">
              Step 05
            </h4>
            <div className="accordion-cell-content">
              <h6 className="text-(--dark-grey) font-bold text-[20px] lg:text-[32px] mb-2 md:mb-4 lg:mb-6">Title</h6>
              <p className="text-(--dark-grey) text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeStepsAccordion;
