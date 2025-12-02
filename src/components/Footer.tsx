import { Mail, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/10 bg-background/98 backdrop-blur-xl mt-32">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div className="space-y-5">
              <img 
              src="/src/assets/logo.png" 
              alt="Crossroads Logo" 
              className="h-10 w-auto transition-all group-hover:scale-110"
              />
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Connecting filmmakers with their audience through authentic storytelling and creative community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-subtitle text-lg font-semibold mb-5">Quick Links</h3>
            <nav className="space-y-3">
              <Link
                to="/"
                className="block text-muted-foreground hover:text-primary transition-all hover:translate-x-1"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-muted-foreground hover:text-primary transition-all hover:translate-x-1"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-subtitle text-lg font-semibold mb-5">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:hello@crossroads.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all hover:translate-x-1"
              >
                <Mail className="h-5 w-5" />
                hello@crossroads.com
              </a>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} CrossRoads. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground font-highlight uppercase tracking-widest opacity-60">
                Built for creators
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
