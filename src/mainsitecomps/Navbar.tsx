import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "../components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "../components/mode-toggle";
import { LogoIcon } from "../components/Icons";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/Home",
    label: "Home",
  },
  {
    href: "/stats",
    label: "Stats",
  },
  {
    href: "/test",
    label: "Test",
  },
  {
    href: "/schedule",
    label: "Schedule",
  },
  {
    href: "/account",
    label: "Account",
  },

];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[3px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-gray-800">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a href="/" className="ml-2 font-bold text-3xl flex items-center">
              <LogoIcon />
              LearnSync
            </a>
          </NavigationMenuItem>

          {/* desktop */}
          <nav className="hidden md:flex gap-20">
            {routeList.map((route: RouteProps, i) => (
              <a
                href={route.href}
                key={i}
                className={`text-[20px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
export default Navbar;
