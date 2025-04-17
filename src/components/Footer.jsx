import { Link } from "react-router";

function Footer(p) {
  return (
    <footer className="lg:mt-[60px] md:mt-[54px] mt-[40px]">
      <div className="footer-top lg:px-4 bg-(--dark-blue2) mx-auto py-6 md:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-6 text-white bg-(--dark-blue2) mx-auto max-w-[420px] lg:max-w-7xl px-1">
          <div className="col-span-2 mb-9 lg:pl-0 lg:mb-0">
            <div className="footer-logo flex flex-row items-center justify-center  lg:justify-start gap-2">
              <img
                src="/SiteAssests/Footer/footer-logo.png"
                alt="Footer Logo"
                width="165px"
                height="auto"
                className="max-w-[200px] md:max-w-[200px]"
              />
            </div>
            <p className="text-sm md:text-base font-light mt-3 mb-3 lg:mt-3 lg:mb-7 text-center lg:text-left max-w-md mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet. Ut mollitia alias id expedita
              perferendis At amet saepe eum minima velit et{" "}
            </p>
            <div className="social-media flex flex-row flex-wrap gap-2.5 justify-center lg:justify-start">
              <Link to="/" className="text-2xl font-bold ">
                <img
                  src="/SiteAssests/Footer/social-media-icons/facebook-white-logo.png"
                  alt="Facebook"
                  width="20px"
                  height="auto"
                />
              </Link>
              <Link to="/" className="text-2xl font-bold ">
                <img
                  src="/SiteAssests/Footer/social-media-icons/twitter-white-logo.png"
                  alt="Facebook"
                  width="20px"
                  height="auto"
                />
              </Link>
              <Link to="/" className="text-2xl font-bold ">
                <img
                  src="/SiteAssests/Footer/social-media-icons/instagram-white-logo.png"
                  alt="Facebook"
                  width="20px"
                  height="auto"
                />
              </Link>
              <Link to="/" className="text-2xl font-bold ">
                <img
                  src="/SiteAssests/Footer/social-media-icons/telegram-white-logo.png"
                  alt="Facebook"
                  width="20px"
                  height="auto"
                />
              </Link>
              <Link to="/" className="text-2xl font-bold ">
                <img
                  src="/SiteAssests/Footer/social-media-icons/discord-white-logo.png"
                  alt="Facebook"
                  width="20px"
                  height="auto"
                />
              </Link>
              <Link to="/" className="text-2xl font-bold ">
                <img
                  src="/SiteAssests/Footer/social-media-icons/linkedin-white-logo.png"
                  alt="Facebook"
                  width="20px"
                  height="auto"
                />
              </Link>
            </div>
          </div>
          <div className="col-span-1 pl-5 lg:pl-0 lg:mt-6">
            <h5 className="text-lg md:text-xl text-(--yellow-text) mb-3 md:mb-5 font-semibold">
              Company
            </h5>
            <div className="footer-link-list flex flex-col gap-1.5">
              <Link
                to={`/`}
                className="text-white text-sm md:text-base font-light"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
              <Link
                to={`/about-us`}
                className="text-white text-sm md:text-base font-light"
                onClick={() => window.scrollTo(0, 0)}
              >
                About Us
              </Link>
              <Link
                to={`/contact-us`}
                className="text-white text-sm md:text-base font-light"
                onClick={() => window.scrollTo(0, 0)}
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="col-span-1 pl-5 lg:pl-0 lg:mt-6">
            <h5 className="text-lg md:text-xl text-(--yellow-text) mb-3 md:mb-5 font-semibold">
              Quick Links
            </h5>
            <div className="footer-link-list flex flex-col gap-1.5">
              <Link
                to={`/faq`}
                className="text-white text-sm md:text-base font-light"
                onClick={() => window.scrollTo(0, 0)}
              >
                FAQ’s
              </Link>
              <Link
                to={`/privacy-policy`}
                className="text-white text-sm md:text-base font-light"
                onClick={() => window.scrollTo(0, 0)}
              >
                Privacy Policy
              </Link>
              <Link
                to={`/terms-and-conditions`}
                className="text-white text-sm md:text-base font-light"
                onClick={() => window.scrollTo(0, 0)}
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="col-span-2 pl-5 lg:pl-0 mt-4 lg:mt-6">
            <h5 className="text-lg md:text-xl text-(--yellow-text) mb-3 md:mb-5 font-semibold">
              Contact Us
            </h5>
            <div className="footer-link-list flex flex-col gap-1.5">
              <Link
                to={`/`}
                className="text-white text-sm md:text-base font-light"
              >
                <div className="footer-logo flex flex-row items-start justify-items-start gap-2">
                  <img
                    src="/SiteAssests/Footer/location-icon.png"
                    alt="location-icon"
                    width="16px"
                    height="auto"
                    className="mt-1"
                  />
                  <p className="text-white text-sm md:text-base font-light">No.123/A, 123 Street, Sri Lanka.</p>
                </div>
              </Link>
              <Link
                to={`/`}
                className="text-white text-sm md:text-base font-light"
              >
                <div className="footer-logo flex flex-row items-start justify-items-start gap-2">
                  <img
                    src="/SiteAssests/Footer/email-icon.png"
                    alt="email-icon"
                    width="16px"
                    height="auto"
                    className="mt-1"
                  />
                  <p className="text-white text-sm md:text-base font-light">dinethprasanna58@gmail.com</p>
                </div>
              </Link>
              <Link
                to={`/`}
                className="text-white text-sm md:text-base font-light"
              >
                <div className="footer-logo flex flex-row items-start justify-items-start gap-2">
                  <img
                    src="/SiteAssests/Footer/phone-icon.png"
                    alt="phone-icon"
                    width="16px"
                    height="auto"
                    className="mt-1"
                  />
                  <p className="text-white text-sm md:text-base font-light">+94 78 24 88 048</p>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-(--dark-blue3) mx-auto">
        <div className="copyright px-2 py-4 bg-(--dark-blue3) max-w-7xl mx-auto">
          <p className="text-center m-0 text-white text-sm font-light">
            &copy; Dineth Prasanna's Work - 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
