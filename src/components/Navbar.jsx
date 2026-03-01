import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* IZQUIERDA */}
        <div className="nav-left">
          <Link to="/" className="logo">NeoStyles</Link>
        </div>

        {/* CENTRO */}
        <div className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
          <Link to="/category/remeras" onClick={() => setOpen(false)}>Remeras</Link>
          <Link to="/category/musculosas" onClick={() => setOpen(false)}>Musculosas</Link>
          <Link to="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
        </div>

        {/* DERECHA */}
        <div className="nav-right">
          <Link to="/carrito" className="cart-icon">
            🛒
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </Link>

          <button className="menu-btn" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

      </div>
    </nav>
  );
}