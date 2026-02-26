import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Producto no encontrado</p>;

  const whatsappMessage = `
Hola! 👋
Quiero comprar esta remera:

🧢 Producto: ${product.name}
💲 Precio: $${product.price}
📏 Talle: ${product.talle}
🎨 Color: ${product.color}

📸 Foto:
${window.location.origin}${product.image}
`;

  const whatsappLink = `https://wa.me/5493518556478?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="container product-detail">
      <img
        src={product.image}
        alt={product.name}
        className="detail-img"
      />

      <div className="detail-info">
        <h2>{product.name}</h2>
        <p className="price">${product.price}</p>
        <p>Talle: {product.talle}</p>
        <p>Color: {product.color}</p>
        <p>Stock: {product.stock}</p>

        🔥 BOTÓN WHATSAPP 🔥
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          Comprar por WhatsApp
        </a>
      </div>
    </div>
  );
}