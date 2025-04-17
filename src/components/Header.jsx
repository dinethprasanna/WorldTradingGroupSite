import { useState, useEffect  } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Link, useLocation } from "react-router";

function Header(p) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const hiddenRoutesForLoginAndSignIn = ["/user", "/admin"]; // check user or admin logged
  const shouldHideLogin = hiddenRoutesForLoginAndSignIn.some(route => location.pathname.startsWith(route));
  const isUserRoute = location.pathname.startsWith("/user"); //check user roles
  const isAdminRoute = location.pathname.startsWith("/admin");


  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`bg-(--dark-blue) mx-auto lg:px-4 z-50 w-full ${
      isScrolled || isMenuOpen ? "fixed top-0 left-0 z-50 shadow-lg" : "sticky top-0"
    }` }>
      <nav className="z-10 mx-auto max-w-7xl flex flex-row items-center justify-between px-4 lg:px-8 text-white py-4 ">
        <div className="header-site-logo flex-none">
          <Link to="/" className="text-2xl font-bold " onClick={closeMenu}>
            <img
              src="/SiteAssests/Header/header-logo.png"
              alt="Header Logo"
              width="140px"
              height="auto"
            />
          </Link>
        </div>

        <div className="grow-1 hidden lg:flex lg:justify-center space-x-6">
          <Link
            to={`/trading-platform`}
            className="text-white text-base font-light"
            onClick={closeMenu}
          >
            Our Places
          </Link>
          <Link to={`/about-us`} className="text-white text-base font-light" onClick={closeMenu}>
            About Us
          </Link>
          <Link to={`/market`} className="text-white text-base font-light" onClick={closeMenu}>
            Markets
          </Link>
          <Link to={`/contact-us`} className="text-white text-base font-light" onClick={closeMenu}>
            Contact Us
          </Link>
        </div>

        <div className="flex-none hidden lg:flex items-center space-x-4 ">  
        {shouldHideLogin ? (
        <div className="username">
          <Button
            asChild
            className="text-(--dark-green) text-base bg-white hover:bg-blue-100"
          >
            <Link to={`${isUserRoute ? ("/user") : isAdminRoute ? ("/admin") : null}`} className="text-base">
              Dashboard
            </Link>
          </Button>
        </div>
      ) : (
        <div className="login">
          <Button variant="ghost" asChild className="text-base">
            <Link to="/sign-in" className="text-(--yellow-text) text-base">
              Login
            </Link>
          </Button>
          <Button
            asChild
            className="text-(--dark-green) text-base bg-white hover:bg-blue-100"
          >
            <Link to="/sign-up" className="text-base">
              Register
            </Link>
          </Button>
        </div>
      )}     
          
        </div>

        {/* Mobile slide - Menu Bar */}
        <div className="mobile-menu block lg:hidden ">
          <div className="mob-menu-expander block z-2" onClick={toggleMenu}>
          {isMenuOpen ? (
            <div className="js-mob-menu-close z-1">
            <img
              src="/SiteAssests/Header/hamburge-menu-close-icon.png"
              alt="Close Mobile Menu"
            />
          </div>
            )
             : (
            <div className="js-mob-menu-open z-1">
            <img
              src="/SiteAssests/Header/hamburge-menu-open-icon.png"
              alt="Open Mobile Menu"
            />
          </div>
            )}
            
            
          </div>
          {/* <div className="mob-menu-area z-2 w-screen h-screen absolute left-500 right-0 top-22 pt-8 pb-16 px-8 bg-(--dark-blue) transition-all"> */}
          <div
            className={`mob-menu-area z-2 w-screen h-screen fixed top-22 pt-8 pb-16 px-8 bg-(--dark-blue) transition-all ${
              isMenuOpen ? "left-0" : "-left-full"
            }`}
          >
            <div className="flex flex-col gap-4">
              <Link
                to={`/trading-platform`}
                className="text-white text-base font-light"
                onClick={closeMenu}
              >
                Our Places
              </Link>
              <Link to={`/market`} className="text-white text-base font-light" onClick={closeMenu}>
                Markets
              </Link>
              <Link
                to={`/about-us`}
                className="text-white text-base font-light"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link
                to={`/contact-us`}
                className="text-white text-base font-light"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
            <div className="flex flex-row flex-wrap gap-2 mt-16">
              <Button variant="ghost" asChild className="text-base">
                <Link
                  to="/sign-in"
                  className="text-white text-base bg-(--yellow-text)"
                  onClick={closeMenu}
                >
                  Login
                </Link>
              </Button>
              <Button
                asChild
                className="text-(--dark-green) text-base bg-white hover:bg-blue-100"
              >
                <Link to="/sign-up" className="text-base" onClick={closeMenu}>
                  Register
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
