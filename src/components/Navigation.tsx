import { NavLink } from "./NavLink";
import { Menu, X, Camera } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-beige shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <Camera className="text-primary transition-transform group-hover:rotate-12" size={28} />
            <span className="text-2xl font-title font-bold tracking-tight text-foreground">
              Crossroads
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink
              to="/"
              className="px-4 py-2 text-sm font-medium rounded-full transition-all hover:bg-dusty-pink/30"
              activeClassName="bg-primary text-primary-foreground font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="px-4 py-2 text-sm font-medium rounded-full transition-all hover:bg-sage/30"
              activeClassName="bg-primary text-primary-foreground font-semibold"
            >
              About
            </NavLink>
            <NavLink
              to="/viewfinder"
              className="px-4 py-2 text-sm font-medium rounded-full transition-all hover:bg-sepia/30"
              activeClassName="bg-primary text-primary-foreground font-semibold"
            >
              Viewfinder
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t-2 border-beige pt-4">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm font-medium rounded-full transition-all hover:bg-dusty-pink/30"
              activeClassName="bg-primary text-primary-foreground font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm font-medium rounded-full transition-all hover:bg-sage/30"
              activeClassName="bg-primary text-primary-foreground font-semibold"
            >
              About
            </NavLink>
            <NavLink
              to="/viewfinder"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm font-medium rounded-full transition-all hover:bg-sepia/30"
              activeClassName="bg-primary text-primary-foreground font-semibold"
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
