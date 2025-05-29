import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LogOut,
  Settings,
  User,
  MessageCircleMore,
  Bell,
  Search,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between p-4">
      {/* SEARCH BAR - Only visible on larger screens */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Search
          size={20}
          strokeWidth={0.75}
          className="h-[1.4rem] w-[1.4rem] text-gray-500"
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none text-sm"
        />
      </div>

      {/* Spacer to push icons to the right */}
      <div className="flex-1 md:hidden" />

      {/* ICONS AND USER - Always aligned to the right */}
      <div className="flex items-center gap-4">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <MessageCircleMore
            size={20}
            strokeWidth={0.75}
            className="h-[1.4rem] w-[1.4rem]"
          />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Bell
            size={20}
            strokeWidth={0.75}
            className="h-[1.4rem] w-[1.4rem]"
          />
          {/* <Announcement */}
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">John Doe</span>
                <span className="text-[10px] text-gray-500 text-right">
                  Teacher
                </span>
              </div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {" "}
              <User className="h-[1.2rem] w-[1.2rem] mr-2" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
