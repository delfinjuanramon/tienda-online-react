function CategoryList({ categories, search }) {
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="card">
      <h2 className="section-title">Categorías</h2>

      <div className="category-grid">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <article key={category.id} className="category-card">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </article>
          ))
        ) : (
          <p>No se encontraron categorías.</p>
        )}
      </div>
    </section>
  )
}

export default CategoryList