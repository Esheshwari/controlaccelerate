import { Link } from "react-router-dom";
import { Shield, Award, Clock, Wrench, CheckCircle, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, clients } from "@/data/products";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-plant.jpg";
import { useState } from "react";

const whyChoose = [
  { icon: Award, title: "ISO 9001:2015 Certified" },
  { icon: Shield, title: "Strict Quality Inspection" },
  { icon: Clock, title: "Fast Delivery Across India" },
  { icon: Wrench, title: "Custom Manufacturing" },
  { icon: CheckCircle, title: "Competitive Pricing" },
  { icon: Factory, title: "Experienced Team" },
];

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", product: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", product: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Industrial conveyor system" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-industrial-darker/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground text-shadow-hero mb-6 animate-fade-in-up">
            Industrial Safety &<br />
            <span className="text-primary">Conveyor Protection</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8" style={{ animationDelay: "0.2s" }}>
            ISO 9001:2015 Certified Manufacturer of Conveyor Safety Switches & Industrial Heating Systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#products">View Products</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                About <span className="text-primary">Control & Accelerate India</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Professional manufacturer of industrial safety and control products specializing in Pull Cord Switches, Belt Sway Switches, Zero Speed Switches, and Industrial Drum Heaters. Committed to quality, durability, and timely delivery.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With years of experience in the industrial safety sector, we provide reliable solutions trusted by major corporations across India. Our ISO 9001:2015 certification ensures every product meets the highest quality standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "500+", label: "Products Delivered" },
                  { num: "100+", label: "Clients Served" },
                  { num: "15+", label: "Years Experience" },
                  { num: "30+", label: "Product Range" },
                ].map(s => (
                  <div key={s.label} className="bg-muted rounded-lg p-4 text-center">
                    <div className="font-heading text-2xl font-bold text-primary">{s.num}</div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={aboutImg} alt="Industrial plant" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Products</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of industrial safety switches, conveyor protection devices, and heating systems.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 gradient-industrial">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground text-center mb-12">
            Why Choose <span className="text-primary">Control & Accelerate India?</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {whyChoose.map(item => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 mx-auto rounded-full bg-industrial-medium flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <p className="text-sm font-medium text-secondary-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Esteemed <span className="text-primary">Clients</span>
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            {clients.map(client => (
              <div
                key={client}
                className="bg-muted rounded-lg p-6 flex items-center justify-center text-center group hover:bg-primary transition-colors duration-300 cursor-default"
              >
                <span className="font-heading text-sm font-semibold text-muted-foreground group-hover:text-primary-foreground transition-colors uppercase tracking-wider">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Get a <span className="text-primary">Quote</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Fill in the form below and we'll get back to you within 24 hours.
          </p>
          <form onSubmit={handleSubmit} className="bg-card rounded-lg shadow-lg p-8 space-y-5 border border-border">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={formData.name}
                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                maxLength={255}
                value={formData.email}
                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="tel"
                placeholder="Phone Number"
                maxLength={15}
                value={formData.phone}
                onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                className="w-full px-4 py-3 rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <select
                value={formData.product}
                onChange={e => setFormData(p => ({ ...p, product: e.target.value }))}
                className="w-full px-4 py-3 rounded-md bg-muted border border-border text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <option value="">Product Interested In</option>
                {products.map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              maxLength={1000}
              value={formData.message}
              onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none"
            />
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Submit Enquiry
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
