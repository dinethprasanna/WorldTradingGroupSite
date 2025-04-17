import { Outlet } from "react-router";
import Footer from "@/components/Footer";
import Navigation from "@/components/Header";


function UserLayout() {
  return (
    <>
      <Navigation />      
      <Outlet />
      <Footer />
    </>
  );
}

export default UserLayout;
