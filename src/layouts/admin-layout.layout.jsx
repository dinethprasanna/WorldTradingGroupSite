import { Outlet } from "react-router";
import Footer from "@/components/Footer";
import Navigation from "@/components/Header";

function AdminLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default AdminLayout;
