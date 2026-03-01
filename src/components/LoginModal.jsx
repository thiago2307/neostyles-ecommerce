import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function LoginModal({ onClose }) {
  const { login } = useContext(UserContext);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  return (
    <div className="modal">
      <div className="modal-box">
        <h3>Ingresar</h3>
        <input placeholder="Nombre" onChange={e => setName(e.target.value)} />
        <input placeholder="Email o número" onChange={e => setContact(e.target.value)} />
        <button className="btn" onClick={() => { login({ name, contact }); onClose(); }}>
          Entrar
        </button>
      </div>
    </div>
  );
}