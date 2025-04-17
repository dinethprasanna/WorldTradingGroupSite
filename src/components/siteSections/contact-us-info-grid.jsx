function ContactUsInfoGrid() {
  return (
    <section className="contact-us-info-grid px-5 lg:px-4 mx-auto pt-10 pb-10 md:pt-13 md:pb-13 lg:pt-15 lg:pb-15 max-w-7xl">
      <h2 className="text-white mb-8 font-bold md:mb-10 text-[38px] md:text-[42px] lg:text-5xl text-center">
      Worldwide Link Currency <br className="hidden lg:block" /> Exchange Group
      </h2>
      <div className="grid grid-cols-2 gap-6 md:gap-4.5">
        <div className="phone col-span-2 md:col-span-1 bg-[#3B4C66] px-3.5 py-6 rounded-3xl">
          <div className="flex flex-row gap-2">
            <img
              src="/SiteAssests/ContactUsPage/phone-icon.png"
              className="w-[28px] object-contain object-center"
              alt="Phone"
              width="28px"
              height="auto"
            />
            <h5 className="text-(--yellow-text) font-bold text-[26px] md:text-[32px] text-left">
              Phone
            </h5>
          </div>
          <p className="text-white text-[18px] md:text-2xl text-left">
            +94 78 24 88 048
          </p>
        </div>

        <div className="email col-span-2 md:col-span-1 bg-[#3B4C66] px-3.5 py-6 rounded-3xl">
          <div className="flex flex-row gap-2">
            <img
              src="/SiteAssests/ContactUsPage/email-icon.png"
              className="w-[28px] object-contain object-center"
              alt="Phone"
              width="28px"
              height="auto"
            />
            <h5 className="text-(--yellow-text) font-bold text-[26px] md:text-[32px] text-left">
              E-mail
            </h5>
          </div>
          <p className="text-white text-[18px] md:text-2xl text-left">
            dinethprasanna58@gmail.com
          </p>
        </div>

        <div className="map-location col-span-2 lg:col-span-1 bg-[#3B4C66] px-3.5 py-6 rounded-3xl">
          <div className="map-container">
            <div className="relative w-full h-auto rounded-3xl overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31611.421420416227!2d80.74423540000001!3d7.954678199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca0dfa73179d1%3A0x1e04c1150cff0edf!2sSigiriya!5e0!3m2!1sen!2slk!4v1744883500003!5m2!1sen!2slk"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />
            </div>
          </div>
          <div className="address-area">
            <p className="text-white mt-6 md:mt-8 lg:mt-10 text-base text-center mx-auto max-w-[360px]">
            Location: Level 5, 17/42 Galle Road, Colombo 03, Sri Lanka
            </p>
          </div>
        </div>

        <div className="map-location col-span-2 lg:col-span-1 bg-[#3B4C66] px-3.5 py-6 rounded-3xl">
        <div className="map-container">
            <div className="relative w-full h-auto rounded-3xl overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31611.421420416227!2d80.74423540000001!3d7.954678199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca0dfa73179d1%3A0x1e04c1150cff0edf!2sSigiriya!5e0!3m2!1sen!2slk!4v1744883500003!5m2!1sen!2slk"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />
            </div>
          </div>
          <div className="address-area">
            <p className="text-white mt-6 md:mt-8 lg:mt-10 text-base text-center mx-auto max-w-[360px]">
            Location: 2nd Floor, 15/56 King Street, Kandy, Sri Lanka
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsInfoGrid;
