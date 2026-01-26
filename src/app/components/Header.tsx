import { Link } from "react-router-dom";
import { UserIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export function Header() {
  return (
    <header className="border-b border-[#E5E7EB]">
      <div className="mx-auto max-w-[1200px] px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Always visually on the right */}
          <Link to="/" className="flex flex-col items-start" dir="ltr">
            <img 
              src="/logo.png" 
              alt="الصندوق الثقافي - Cultural Development Fund" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#111827] hover:text-[#374151] bg-transparent">
                  المزيد
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[300px]">
                    <div className="row-span-3">
                      <h4 className="text-sm font-medium">More Options</h4>
                      <p className="text-sm text-muted-foreground">
                        Additional services and resources.
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#111827] hover:text-[#374151] bg-transparent">
                  الخدمات التطويرية
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="row-span-3">
                      <h4 className="text-sm font-medium">Development Services</h4>
                      <p className="text-sm text-muted-foreground">
                        Professional development and training programs.
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#111827] hover:text-[#374151] bg-transparent">
                  الخدمات المالية
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="row-span-3">
                      <h4 className="text-sm font-medium">Financial Services</h4>
                      <p className="text-sm text-muted-foreground">
                        Financial support and funding options.
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <button className="text-[#111827] hover:text-[#374151] text-sm font-medium">
              English
            </button>

            {/* Login Button */}
            <button className="flex items-center space-x-2 text-[#111827] hover:text-[#374151] text-sm font-medium">
              <UserIcon className="w-4 h-4" />
              <span>تسجيل الدخول</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
