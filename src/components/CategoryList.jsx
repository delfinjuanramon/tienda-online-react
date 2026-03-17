function CategoryList({ categories, onSelectCategory }) {
    return (
        <div className="card">
            <h2>Categorías</h2>

            <div className="grid">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="category-card"
                        style={{ cursor: "pointer" }}
                        onClick={() => onSelectCategory(cat.name)}
                    >
                        <h3>{cat.name}</h3>
                        <p>{cat.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryList;