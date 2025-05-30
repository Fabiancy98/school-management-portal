import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import * as React from 'react';
import { LogOut } from "lucide-react";
import Link from "next/link";
import { menuItems } from "@/data/items";
import Image from "next/image";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  visible: string[];
}

const AppSideBar = () => {
  // Type the menu items
  const menuItemsData: MenuItem[] = [...menuItems];
  return (
    <Sidebar collapsible="icon" className="bg-[#1f1f64] text-white group">
      <SidebarHeader className="h-16 bg-[#1f1f64] flex items-center justify-center">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-transparent">
              <Link href="/" className="flex items-center justify-center h-16 w-full">
                <div className="w-10 h-10 group-data-[collapsible=icon]:w-12 group-data-[collapsible=icon]:h-12 transition-all duration-200 flex items-center justify-center">
                  <Image
                    src="/subeb.png"
                    alt="Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain transition-all duration-200"
                  />
                </div>
                <h1 className="text-lg font-medium capitalize text-white ml-2 group-data-[collapsible=icon]:hidden transition-all duration-200">
                  Subeb Portal
                </h1>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="flex flex-col flex-1 bg-[#1f1f64]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/70 text-xs font-medium px-4 py-3 group-data-[collapsible=icon]:hidden">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItemsData.map((item: MenuItem) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.href}
                      className="w-full justify-start text-white/80 hover:bg-white/10 hover:text-white text-base py-3 px-4"
                    >
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                        {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, {
                          className: 'w-5 h-5',
                          strokeWidth: 1.5
                        } as React.HTMLAttributes<SVGElement>)}
                      </span>
                      <span className="ml-3 group-data-[collapsible=icon]:hidden">
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-white/10 bg-[#1f1f64]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link 
                href="/login" 
                className="text-white/80 hover:bg-white/10 hover:text-white text-base py-3 px-4"
              >
                <LogOut size={20} strokeWidth={1.5} className="w-5 h-5" />
                <span className="ml-3 group-data-[collapsible=icon]:hidden">
                  Logout
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSideBar;
