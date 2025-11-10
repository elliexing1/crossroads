import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-serif font-bold tracking-tight">
            Viewfinder
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className="text-sm font-medium transition-colors hover:text-accent"
              activeClassName="text-accent"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-sm font-medium transition-colors hover:text-accent"
              activeClassName="text-accent"
            >
              About
            </NavLink>
            <NavLink
              to="/viewfinder"
              className="text-sm font-medium transition-colors hover:text-accent"
              activeClassName="text-accent"
            >
              Viewfinder
            </NavLink>
            <NavLink
              to="/connect"
              className="text-sm font-medium transition-colors hover:text-accent"
              activeClassName="text-accent"
            >
              Connect
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium transition-colors hover:text-accent"
              activeClassName="text-accent"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium transition-colors hover:text-accent"
              activeClassName="text-accent"
            >
              About
            </NavLink>
            <NavLink
              to="/viewfinder"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium transition-colors hover:text-accent"
              activeClassName="text-accent"
            >
              Viewfinder
            </NavLink>
            <NavLink
              to="/connect"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium transition-colors hover:text-accent"
              activeClassName="text-accent"
            >
              Connect
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
