import React from "react";
import AppSideBar from "@/components/AppSideBar";
import Navbar from "@/components/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className="h-screen w-full flex">
        {/* Sidebar */}
        <AppSideBar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar with trigger */}
          <div className="flex items-center h-16 border-b bg-white px-4">
            <SidebarTrigger className="mr-4" />
            <Navbar />
          </div>
          
          {/* Page content */}
          <main className="flex-1 overflow-y-auto bg-[#F7F8FA] p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
