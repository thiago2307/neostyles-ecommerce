import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const NOW = Date.now();

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const isNew = useMemo(() => {
    if (!product.createdAt) return false;

    const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;
    return NOW - product.createdAt < ONE_WEEK;
  }, [product.createdAt]);

  return (
    <div className="product-card">
      <div
        className="card-click"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-img"
        />

        {isNew && <span className="badge-new">NUEVO</span>}

        <h3>{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <p>Stock: {product.stock}</p>
      </div>

      <button
        className="btn-add"
        disabled={product.stock === 0}
        onClick={() => addToCart(product)}
      >
        {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  );
}