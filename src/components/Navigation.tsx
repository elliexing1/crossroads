import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const homeLinks = [
    { title: "App Preview", href: "/#app-preview" },
    // { title: "FAQ", href: "/#faq" },
    { title: "Waitlist", href: "/#waitlist-section" },
  ];

  const aboutLinks = [
    { title: "Our Mission", href: "/about#our-mission" },
    { title: "Our Purpose", href: "/about#our-purpose" },
    { title: "Meet The Team", href: "/about#meet-the-team" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show logo in navbar after scrolling past hero section (approx 280px)
      setShowLogo(window.scrollY > 280);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLinkClick = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
    setActiveDropdown(null);
  };

  const NavItem = ({ title, path, links, id }: { title: string, path: string, links: {title: string, href: string}[], id: string }) => (
    <div 
      className="relative group"
      onMouseEnter={() => setActiveDropdown(id)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button 
        onClick={() => handleLinkClick(path)}
        className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all flex items-center gap-1
          ${activeDropdown === id ? 'bg-primary/10 text-primary' : 'hover:bg-primary/10 hover:text-primary text-foreground'}
        `}
      >
        {title} <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === id ? 'rotate-180' : ''}`} />
      </button>
      
      {/* Dropdown Content */}
      <div className={`absolute top-full left-0 pt-2 w-[250px] transition-all duration-200 origin-top-left
        ${activeDropdown === id ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
      `}>
        <div className="p-2 bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block select-none rounded-md p-3 text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary text-muted-foreground"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo Section */}
          <RouterNavLink to="/" className="flex items-center gap-3 group min-w-[50px]">
            <AnimatePresence>
              {showLogo && (
                <motion.img 
                  layoutId="crossroads-logo"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 60 }}
                  src="/src/assets/logo.png" 
                  alt="Crossroads Logo" 
                  className="h-10 w-auto object-contain transition-all group-hover:scale-110 origin-left"
                  onError={(e) => {
                    // Fallback if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="font-grotesk font-bold text-xl tracking-tighter">CROSSROADS</span>';
                  }}
                />
              )}
            </AnimatePresence>
          </RouterNavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavItem title="Home" path="/" links={homeLinks} id="home" />
            <NavItem title="About" path="/about" links={aboutLinks} id="about" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-full transition-all text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Content */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-3 border-t border-border/20 pt-6">
            <RouterNavLink
              to="/"
              className={({ isActive }) => `block px-5 py-3 text-base font-medium rounded-xl transition-all ${
                isActive 
                  ? 'bg-gradient-to-r from-primary via-primary-orange to-secondary-magenta text-background font-semibold' 
                  : 'hover:bg-primary/10 text-foreground'
              }`}
            >
              Home
            </RouterNavLink>
            
            {/* Mobile Sublinks for Home */}
            <div className="pl-8 space-y-2 mb-4">
              {homeLinks.map(link => (
                 <a key={link.href} href={link.href} className="block text-sm text-muted-foreground hover:text-primary py-1">{link.title}</a>
              ))}
            </div>

            <RouterNavLink
              to="/about"
              className={({ isActive }) => `block px-5 py-3 text-base font-medium rounded-xl transition-all ${
                isActive 
                  ? 'bg-gradient-to-r from-primary via-primary-orange to-secondary-magenta text-background font-semibold' 
                  : 'hover:bg-primary/10 text-foreground'
              }`}
            >
              About
            </RouterNavLink>

             {/* Mobile Sublinks for About */}
            <div className="pl-8 space-y-2">
              {aboutLinks.map(link => (
                 <a key={link.href} href={link.href} className="block text-sm text-muted-foreground hover:text-primary py-1">{link.title}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;