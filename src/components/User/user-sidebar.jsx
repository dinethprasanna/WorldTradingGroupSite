import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { SidebarHeader, useSidebar } from "@/components/ui/sidebar"
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  UserRound,
  BadgeDollarSign,
  ShoppingBag,
  ScrollText,
  ArrowLeft,
  ArrowLeftToLine 
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarFooter 
} from "@/components/ui/sidebar";
import { Link } from "react-router";

// Menu items.
const userPanelNavItems = [
  {
    title: "Dashboard",
    url: "/user",
    isDropdown: false,
    icon: LayoutDashboard 
  },
  {
    title: "Profile",
    icon: UserRound,
    isDropdown: true,
    items: [
      {
        title: "Account Settings",
        url: "/user/account-settings",
      },
      {
        title: "Personal Information",
        url: "/user/personal-information",
      },
      {
        title: "Verified Documents",
        url: "/user/verified-documents",
      },
    ],
  },
  {
    title: "My Funds",
    icon: BadgeDollarSign ,
    isDropdown: true,
    items: [
      {
        title: "Deposit",
        url: "/user/deposit",
      },
      {
        title: "Withdraw",
        url: "/user/withdraw",
      },
    ],
  },
  {
    title: "Market",
    icon: ShoppingBag,
    isDropdown: true,
    items: [
      {
        title: "Watchlist",
        url: "/user/watchlist",
      },
      {
        title: "Instruments",
        url: "/user/instruments",
      },
    ],
  },
  {
    title: "Inquiry",
    url: "/user/inquiry",
    isDropdown: false,
    icon: ScrollText 
  },
];

export function UserSidebar() {
  const location = useLocation();

  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar variant="sidebar" collapsible="inset">
        <button onClick={toggleSidebar} className="inline-flex absolute top-2 right-2 md:hidden w-8 h-8 text-white bg-(--light-green) font-medium rounded-[8px] text-sm p-[4px] text-center items-center me-2 ml-auto mr-3 mt-3">
            <ArrowLeft  />
        </button>

        <SidebarHeader className="bg-[#030F1D] md:py-4 mb-6 lg:mb-8">
            <div className="sidebar- mt-4 md:mt-4">
                <div className="logo-text flex flex-row items-center gap-2">
                    <img src="/SiteAssests/FX_logo-small.png" alt="FX-logo" width="32px" height="auto" />
                    <p className="text-white text-base">World Trading Group</p>
                </div>
                <div className="user-info mt-3">
                  <p className="u-name text-sm text-(--dark-white)" id="user_name">Dave Gutta</p>
                  <p className="u-email text-sm text-(--dark-white)" id="user_email">dave34@example.com</p>
                </div>
            </div>
        </SidebarHeader>

        <SidebarContent className="gap-0 px-2">

          {userPanelNavItems.map((item) => 
            item.isDropdown ? (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen
                className="group/collapsible mb-2"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild isActive={location.pathname === subItem.url}>
                            <Link to={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ) : (
              <SidebarMenuItem key={item.title} className="mb-2">
                <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                  <Link to={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          )}

        </SidebarContent>
        <SidebarFooter>
          <SidebarContent>
            <SidebarMenuItem key="logout" className="mb-2">
                <SidebarMenuButton asChild>
                  <Link to={`/`} className="text-(--yellow-text)">
                    <ArrowLeftToLine />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
          </SidebarContent>              
        </SidebarFooter>
    </Sidebar>
  );
}
