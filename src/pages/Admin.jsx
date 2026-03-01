import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "", price: "", stock: "", category: "", image: "", talle: "", color: ""
  });

  const fetchProducts = async () => {
    const snap = await getDocs(collection(db, "products"));
    setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => { fetchProducts(); }, []);

  const addProduct = async () => {
    await addDoc(collection(db, "products"), {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
      createdAt: Date.now()
    });
    fetchProducts();
  };

  const remove = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  return (
    <div className="cart">
      <h2>Admin NeoStyles</h2>

      {Object.keys(form).map(k => (
        <input key={k} placeholder={k} onChange={e => setForm({ ...form, [k]: e.target.value })} />
      ))}

      <button className="btn-add" onClick={addProduct}>Agregar</button>

      <hr />

      {products.map(p => (
        <div key={p.id} className="cart-item">
          <span>{p.name}</span>
          <button onClick={() => remove(p.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}