import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/Admin/admin-sidebar";

const AdminPanelPage = () => {
  return (
      <main className="lg:mt-12 overflow-hidden">

        <div className="admin-panels-section px-5 lg:px-4 mx-auto pt-10 pb-10 md:pt-13 md:pb-13 lg:pt-15 lg:pb-15 max-w-7xl">

          <SidebarProvider className="mx-auto max-w-[1130px] relative rounded-[12px] overflow-hidden">
            <AdminSidebar />
            <div className="admin-panel-content grow w-full bg-[#3B4C66] p-2 md:py-8">
              <SidebarTrigger className="block mb-1 md:hidden" />
              <Outlet />
            </div>
          </SidebarProvider>
        </div>
      </main>
  );
};

export default AdminPanelPage;

