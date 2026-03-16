function SearchBar({ search, setSearch }) {
  return (
    <div className="card">
      <h2>Búsqueda de productos</h2>

      <input
        type="text"
        placeholder="Buscar categoría o producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;