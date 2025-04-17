import CallToAction from "@/components/siteSections/call-to-action";
import ContactUsForm from "@/components/siteSections/contact-us-form";
import ContactUsInfoGrid from "@/components/siteSections/contact-us-info-grid";
import LogoSlider from "@/components/siteSections/logo-slider";

const ContactUsPage = () => {
  return (
    <main>
      <section className="contact-us-top-section px-5 lg:px-4 mx-auto mt-12 mb-10 md:mt-20 md:mb13 lg:mt-25 lg:mb-15 max-w-7xl">
        <h1 className="text-white font-bold max-w-[650px] mx-auto text-[42px] md:text-[48px] lg:text-[54px] text-center">
          Contact Us
        </h1>
        <div className="contact-info max-w-[650px] mx-auto mt-6 md:mt-8">
          <p className="text-white text-center text-sm md:text-base max-w-[748px] mx-auto">
            Lorem ipsum dolor sit amet. Ut mollitia alias id expedita
            perferendis At amet saepe eum minima velit et dolorum voluptas a
            molestias consequatur eos autem amet? Non provident nesciunt ut sunt
            nemo in porro reprehenderit. 
          </p>
        </div>
      </section>
      <ContactUsForm />
      <LogoSlider />
      <ContactUsInfoGrid />
      <CallToAction />
    </main>
  );
};

export default ContactUsPage;
