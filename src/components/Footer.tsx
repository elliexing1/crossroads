import { Camera, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/20 bg-background/95 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Camera className="h-6 w-6 text-primary-yellow" />
              <span className="text-xl font-bold font-title">Crossroads</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Connecting filmmakers with their audience through authentic storytelling and creative community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-subtitle text-lg mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-sm text-muted-foreground hover:text-primary-yellow transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-sm text-muted-foreground hover:text-primary-yellow transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/viewfinder"
                className="block text-sm text-muted-foreground hover:text-primary-orange transition-colors"
              >
                Viewfinder
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-subtitle text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@crossroads.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-gold transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@crossroads.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Crossroads. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground font-highlight uppercase tracking-wider">
                Built for creators
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative spotlight beam */}
      <div className="spotlight-beam spotlight-beam-3" />
    </footer>
  );
};

export default Footer;
