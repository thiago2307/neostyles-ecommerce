import ProductCard from "./ProductCard";

export default function ProductsGrid({ products }) {
  if (!products || products.length === 0) {
    return <p>No hay productos</p>;
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}