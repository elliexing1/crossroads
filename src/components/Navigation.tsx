import { NavLink } from "./NavLink";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const homeLinks = [
    { title: "Join The Waitlist", href: "/#join-waitlist" },
    { title: "Our Platform", href: "/#our-platform" },
    { title: "Our Progress", href: "/#our-progress" },
    { title: "FAQ", href: "/#faq" },
  ];

  const aboutLinks = [
    { title: "Our Purpose", href: "/about#our-purpose" },
    { title: "Our Core Values", href: "/about#our-core-values" },
    { title: "Meet The Team", href: "/about#meet-the-team" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/20">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 group">
            <img 
              src="/src/assets/logo.png" 
              alt="Crossroads Logo" 
              className="h-10 w-auto transition-all group-hover:scale-110"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => navigate("/")}
                className="px-5 py-2.5 text-sm font-medium rounded-full transition-all hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary data-[state=open]:bg-primary/10">
                  Home
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-1 p-2 bg-card/95 backdrop-blur-xl border border-border/50">
                    {homeLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <a
                            href={link.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary",
                              "text-sm font-medium"
                            )}
                          >
                            {link.title}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => navigate("/about")}
                className="px-5 py-2.5 text-sm font-medium rounded-full transition-all hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary data-[state=open]:bg-primary/10">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-1 p-2 bg-card/95 backdrop-blur-xl border border-border/50">
                    {aboutLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <a
                            href={link.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary",
                              "text-sm font-medium"
                            )}
                          >
                            {link.title}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-full transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-3 border-t border-border/20 pt-6">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-5 py-3 text-base font-medium rounded-xl transition-all hover:bg-primary/10"
              activeClassName="bg-gradient-to-r from-primary via-primary-orange to-secondary-magenta text-background font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-5 py-3 text-base font-medium rounded-xl transition-all hover:bg-secondary/10"
              activeClassName="bg-gradient-to-r from-primary via-primary-orange to-secondary-magenta text-background font-semibold"
            >
              About
            </NavLink>
            {/* <NavLink
              to="/viewfinder"
              onClick={() => setIsOpen(false)}
              className="block px-5 py-3 text-base font-medium rounded-xl transition-all hover:bg-secondary-magenta/10"
              activeClassName="bg-gradient-to-r from-primary via-primary-orange to-secondary-magenta text-background font-semibold"
            >
              Viewfinder
            </NavLink> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
