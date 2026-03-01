import Overlay from "./Overlay";

export default function SortModal({ onClose }) {
  return (
    <Overlay onClose={onClose}>
      <div className="sort-modal">
        <div className="modal-header">
          <h3>Ordenar por</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <label><input type="radio" name="sort" /> Precio: menor a mayor</label>
        <label><input type="radio" name="sort" /> Precio: mayor a menor</label>
        <label><input type="radio" name="sort" /> A - Z</label>
        <label><input type="radio" name="sort" /> Z - A</label>
        <label><input type="radio" name="sort" /> Más nuevo</label>
        <label><input type="radio" name="sort" /> Más vendido</label>
      </div>
    </Overlay>
  );
}