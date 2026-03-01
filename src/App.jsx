import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Contacto from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import AdminLogin from "./pages/AdminLogin";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* 🔥 DETALLE DE PRODUCTO */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* ADMIN */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/5493518556478"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        💬
      </a>
    </>
  );
}

export default App;