import { Link } from "react-router-dom";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-md">
      {/* Top bar */}
      <div className="border-b border-border bg-primary">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919570405891" className="flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Phone className="h-3 w-3" /> +91-9570405891
            </a>
            <a href="mailto:info@controlaccelerate.com" className="hidden sm:flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Mail className="h-3 w-3" /> info@controlaccelerate.com
            </a>
          </div>
          <span className="text-primary-foreground/80 text-xs">ISO 9001:2015 Certified</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-lg">CA</div>
          <div>
            <div className="font-heading text-lg font-bold text-foreground leading-tight">Control & Accelerate</div>
            <div className="text-xs text-muted-foreground leading-tight">India</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider">About</a>
          <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider">Products</a>
          <a href="#clients" className="text-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider">Clients</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider">Contact</a>
          <Link to="/products/pull-cord-switch" className="bg-primary text-primary-foreground px-4 py-2 rounded font-semibold text-sm uppercase tracking-wider hover:bg-safety-yellow-hover transition-colors">
            Get a Quote
          </Link>
        </nav>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border px-4 py-4 space-y-3">
          <a href="#about" onClick={() => setMobileOpen(false)} className="block text-foreground hover:text-primary py-2 font-medium uppercase tracking-wider text-sm">About</a>
          <a href="#products" onClick={() => setMobileOpen(false)} className="block text-foreground hover:text-primary py-2 font-medium uppercase tracking-wider text-sm">Products</a>
          <a href="#clients" onClick={() => setMobileOpen(false)} className="block text-foreground hover:text-primary py-2 font-medium uppercase tracking-wider text-sm">Clients</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="block text-foreground hover:text-primary py-2 font-medium uppercase tracking-wider text-sm">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
