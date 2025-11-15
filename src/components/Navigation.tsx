import { NavLink } from "./NavLink";
import { Menu, X, Camera } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/20">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 group">
            <Camera className="text-primary transition-all group-hover:scale-110 group-hover:rotate-6" size={32} />
            <span className="text-2xl font-title font-bold tracking-tight">
              Crossroads
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink
              to="/"
              className="px-5 py-2.5 text-sm font-medium rounded-full transition-all hover:bg-primary/10"
              activeClassName="bg-gradient-to-r from-primary via-primary-orange to-secondary-magenta text-background font-semibold shadow-lg"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="px-5 py-2.5 text-sm font-medium rounded-full transition-all hover:bg-secondary/10"
              activeClassName="bg-gradient-to-r from-primary via-primary-orange to-secondary-magenta text-background font-semibold shadow-lg"
            >
              About
            </NavLink>
            <NavLink
              to="/viewfinder"
              className="px-5 py-2.5 text-sm font-medium rounded-full transition-all hover:bg-secondary-magenta/10"
              activeClassName="bg-gradient-to-r from-primary via-primary-orange to-secondary-magenta text-background font-semibold shadow-lg"
            >
              Viewfinder
            </NavLink>
          </div>

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
            <NavLink
              to="/viewfinder"
              onClick={() => setIsOpen(false)}
              className="block px-5 py-3 text-base font-medium rounded-xl transition-all hover:bg-secondary-magenta/10"
              activeClassName="bg-gradient-to-r from-primary via-primary-orange to-secondary-magenta text-background font-semibold"
            >
              Viewfinder
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
