"use client"
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
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  console.log('Current pathname:', pathname);
  // Type the menu items
  const menuItemsData: MenuItem[] = [...menuItems];
  
  // Log all menu items for debugging
  console.log('Menu items:', menuItemsData.map(item => ({
    label: item.label,
    href: item.href,
    isActive: pathname === item.href || 
             (item.href !== '/dashboard' && pathname.startsWith(item.href))
  })));
  return (
    <Sidebar collapsible="icon" className="bg-white text-black group">
      <SidebarHeader className="h-16 bg-white flex items-center justify-center">
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
                <h1 className="text-lg font-medium capitalize text-black ml-2 group-data-[collapsible=icon]:hidden transition-all duration-200">
                  Subeb Portal
                </h1>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="flex flex-col flex-1 bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-black/70 text-xs font-medium px-4 py-3 group-data-[collapsible=icon]:hidden">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItemsData.map((item: MenuItem) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.href}
                      className={`w-full justify-start text-base py-3 px-4 transition-colors duration-200 ${
                        pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
                          ? 'bg-[var(--base-color)] text-white' 
                          : 'text-black/80 hover:bg-[var(--base-color)]/10 hover:text-[var(--base-color)]'
                      }`}
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
      <SidebarFooter className="p-4 border-t border-white/10 bg-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link 
                href="/login" 
                className="text-black/80 hover:bg-white/10 hover:text-black text-base py-3 px-4"
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
