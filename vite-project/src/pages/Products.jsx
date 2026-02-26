import { useState } from "react";
import SortModal from "../components/SortModal";
import FilterDrawer from "../components/FilterDrawer";
import ProductsGrid from "../components/ProductsGrid";
import "../styles/shop.css";

export default function Products() {
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
      <h1 className="page-title">Productos</h1>

      <div className="sort-filter-bar">
        <button onClick={() => setShowSort(true)}>Ordenar</button>
        <button onClick={() => setShowFilter(true)}>Filtrar</button>
      </div>

      <ProductsGrid />

      {showSort && <SortModal onClose={() => setShowSort(false)} />}
      {showFilter && <FilterDrawer onClose={() => setShowFilter(false)} />}
    </div>
  );
}