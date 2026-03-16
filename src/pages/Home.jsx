import { useState } from "react";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import CategoryList from "../components/CategoryList";
import categories from "../data/categories";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="card">
        <h1>Bienvenido a la tienda en línea</h1>
        <p>
          Primera fase de desarrollo del sistema. Sprint 1 enfocado en acceso,
          navegación y exploración inicial del catálogo.
        </p>
      </div>

      <SearchBar search={search} setSearch={setSearch} />

      <ProductList search={search} />

      <CategoryList categories={categories} search={search} />
    </>
  );
}

export default Home;