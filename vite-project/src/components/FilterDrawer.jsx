import Overlay from "./Overlay";

export default function FilterDrawer({ onClose }) {
  return (
    <Overlay onClose={onClose}>
      <div className="filter-drawer">
        <div className="modal-header">
          <h3>Filtrar</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="filter-section">
          <h4>Color</h4>
          <p>⚪ Negro</p>
          <p>⚪ Blanco</p>
        </div>

        <div className="filter-section">
          <h4>Talle</h4>
          <p>⚪ S ⚪ M ⚪ L ⚪ XL</p>
        </div>

        <div className="filter-section">
          <h4>Precio</h4>
          <input placeholder="Desde" />
          <input placeholder="Hasta" />
        </div>

        <button className="apply-btn">Aplicar</button>
      </div>
    </Overlay>
  );
}