import { Link } from "react-router-dom";
import productImg from "@/assets/product-generic.jpg";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
}

const ProductCard = ({ id, name, category }: ProductCardProps) => {
  return (
    <Link
      to={`/products/${id}`}
      className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
    >
      <div className="aspect-square bg-muted overflow-hidden">
        <img
          src={productImg}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">{category}</span>
        <h3 className="font-heading text-lg font-semibold mt-1 text-card-foreground group-hover:text-primary transition-colors">{name}</h3>
        <span className="inline-block mt-3 text-sm font-semibold uppercase tracking-wider text-primary group-hover:underline">
          View Details →
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
