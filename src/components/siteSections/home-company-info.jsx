function HomeCompanyInfo() {
  return (
    <>
      <section className="company-info px-5 lg:px-4 mx-auto pt-10 pb-10 md:pt-13 md:pb-13 lg:pt-15 lg:pb-15 max-w-7xl">
        <h2 className="text-white mb-8 font-bold md:mb-10 text-[38px] md:text-[42px] lg:text-5xl">
          <span className="text-(--light-green)">Worldwide Link</span>{" "}
          Currency Exchange Group
        </h2>
        <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-2 md:gap-5">
          <div className="md:col-span-7">
            <p className="text-white text-base mb-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.
            </p>
            <p className="text-white text-base">              
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
            </p>
          </div>
          <div className="md:col-span-5 flex items-center justify-center">
          <img src="/SiteAssests/HomePage/home-company-info.png" alt="Company Logo" className="md:max-w-[320px]" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeCompanyInfo;
