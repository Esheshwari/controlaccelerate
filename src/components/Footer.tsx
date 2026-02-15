import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { products } from "@/data/products";

const Footer = () => {
  return (
    <footer className="gradient-industrial text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded gradient-yellow flex items-center justify-center font-heading font-bold text-primary-foreground text-lg">CA</div>
              <div>
                <div className="font-heading text-lg font-bold leading-tight">Control & Accelerate</div>
                <div className="text-xs text-muted-foreground leading-tight">India</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              ISO 9001:2015 Certified manufacturer of industrial safety and control products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-primary transition-colors">Products</a></li>
              <li><a href="#clients" className="text-muted-foreground hover:text-primary transition-colors">Our Clients</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Top Products */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary">Products</h4>
            <ul className="space-y-2 text-sm">
              {products.slice(0, 6).map(p => (
                <li key={p.id}>
                  <Link to={`/products/${p.id}`} className="text-muted-foreground hover:text-primary transition-colors">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="tel:+919570405891" className="hover:text-primary transition-colors">+91-9570405891</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:info@controlaccelerate.com" className="hover:text-primary transition-colors">info@controlaccelerate.com</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-industrial-medium">
        <div className="container mx-auto px-4 py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Control & Accelerate India. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
