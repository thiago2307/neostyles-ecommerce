import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart, total } =
    useContext(CartContext);

  // ⚠️ CAMBIÁ ESTE NÚMERO POR TU WHATSAPP
  const phoneNumber = "5493518556478";

  const message = cart
  .map(
    (item) =>
      `• ${item.name}
   Talle: ${item.talle}
   Color: ${item.color}
   Cantidad: ${item.qty}
   Subtotal: $${item.price * item.qty}`
  )
  .join("%0A%0A");

  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hola!%20Quiero%20comprar:%0A${message}%0A%0ATotal:%20$${total}`;

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Tu carrito está vacío 🛒</h2>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Tu carrito</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div>
            <strong>{item.name}</strong>
            <p>Cantidad: {item.qty}</p>
          </div>

          <div>
            <p>${item.price * item.qty}</p>
            <button
              className="btn-remove"
              onClick={() => removeFromCart(item.id)}
            >
              ❌
            </button>
          </div>
        </div>
      ))}

      <div className="cart-total">
        <strong>Total:</strong>
        <strong>${total}</strong>
      </div>

      <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-whatsapp-checkout"
>
  Finalizar compra en WhatsApp
</a>

      <button className="btn-clear" onClick={clearCart}>
        Vaciar carrito
      </button>
    </div>
  );
}