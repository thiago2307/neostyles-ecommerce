import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const { login } = useContext(UserContext);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  return (
    <div>
      <input placeholder="Nombre"
        onChange={(e) => setName(e.target.value)} />
      <input placeholder="Gmail o número"
        onChange={(e) => setContact(e.target.value)} />
      <button onClick={() => login({ name, contact })}>
        Entrar
      </button>
    </div>
  );
}
