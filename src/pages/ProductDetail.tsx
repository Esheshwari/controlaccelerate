import { useParams, Link } from "react-router-dom";
import { ChevronRight, Factory, Pickaxe, Flame, Zap, Truck, FlaskConical } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, getProductDetails } from "@/data/products";
import productImg from "@/assets/product-generic.jpg";
import { Button } from "@/components/ui/button";

const appIcons: Record<string, React.ElementType> = {
  "Mining Industry": Pickaxe,
  "Cement Plants": Factory,
  "Steel Plants": Flame,
  "Power Plants": Zap,
  "Bulk Material Handling": Truck,
  "Chemical Industries": FlaskConical,
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const details = getProductDetails(product.id);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <nav className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <a href="/#products" className="hover:text-primary transition-colors">Products</a>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground font-medium">{product.name}</span>
        </div>
      </nav>

      {/* Product Header */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-muted rounded-lg overflow-hidden shadow-lg">
              <img src={productImg} alt={product.name} className="w-full aspect-square object-cover" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{product.category}</span>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                {product.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8">{details.description}</p>
              <Button variant="hero" size="lg" asChild>
                <a href="#quote">Request a Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {details.features.map(f => (
              <div key={f} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border">
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <ChevronRight className="h-3 w-3 text-primary-foreground" />
                </div>
                <span className="text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">Technical Specifications</h2>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <thead>
                <tr className="gradient-industrial">
                  <th className="text-left px-6 py-3 font-heading text-sm uppercase tracking-wider text-primary">Parameter</th>
                  <th className="text-left px-6 py-3 font-heading text-sm uppercase tracking-wider text-primary">Specification</th>
                </tr>
              </thead>
              <tbody>
                {details.specs.map((s, i) => (
                  <tr key={s.parameter} className={i % 2 === 0 ? "bg-card" : "bg-muted"}>
                    <td className="px-6 py-3 text-sm font-medium text-foreground">{s.parameter}</td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">{s.specification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">Applications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {details.applications.map(app => {
              const Icon = appIcons[app] || Factory;
              return (
                <div key={app} className="bg-card rounded-lg p-5 text-center border border-border hover:border-primary transition-colors group">
                  <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <span className="text-sm font-medium text-foreground">{app}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section id="quote" className="py-16 gradient-industrial text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
            Interested in {product.name}?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Contact us for pricing, customization options, and bulk order inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+919570405891">Call Now: +91-9570405891</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="mailto:info@controlaccelerate.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
