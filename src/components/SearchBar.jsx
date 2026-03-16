function SearchBar({ search, setSearch }) {
  return (
    <section className="card search-section">
      <h2 className="section-title">Búsqueda de productos</h2>
      <input
        type="text"
        placeholder="Buscar categoría o producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
    </section>
  )
}

export default SearchBar