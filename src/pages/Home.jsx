import ProductsGrid from "../components/ProductsGrid";
import { products } from "../data/products";

export default function Home() {
  return (
    <div className="container">
      <h2>Novedades</h2>
      <ProductsGrid products={products} />
    </div>
  );
}