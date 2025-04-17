import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router";
import { UserSidebar } from "@/components/User/user-sidebar";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const UserPanelPage = () => {
  return (
      <main className="lg:mt-12 overflow-hidden">

        <div className="user-panels-section px-5 lg:px-4 mx-auto pt-10 pb-10 md:pt-13 md:pb-13 lg:pt-15 lg:pb-15 max-w-7xl">

          <SidebarProvider className="mx-auto max-w-[1130px] relative rounded-[12px] overflow-hidden">
            <UserSidebar />
            <div className="user-panel-content grow w-full bg-[#3B4C66] p-2 pt-4 md:pt-6 px-2 md:px-3 lg:px-6 ">
              <SidebarTrigger className="block mb-1 md:hidden" />              
              <Outlet />
            </div>
          </SidebarProvider>
        </div>
      </main>
  );
};

export default UserPanelPage;

