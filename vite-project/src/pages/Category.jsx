import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Category() {
  const { category } = useParams();

  // 🔥 FILTRADO DIRECTO (NO useState)
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="container">
      <h2>{category.toUpperCase()}</h2>

      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <p>No hay productos en esta categoría</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}