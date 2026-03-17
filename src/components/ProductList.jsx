import products from "../data/products";

function ProductList({ search, category }) {

    const filteredProducts = products.filter(product => {

        const matchSearch =
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase());

        const matchCategory =
            category === "" || product.category === category;

        return matchSearch && matchCategory;
    });

    return (
        <div className="card">
            <h2>Productos</h2>

            <div className="grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="category-card">
                        <h3>{product.name}</h3>
                        <p>Categoría: {product.category}</p>
                        <p>Precio: ${product.price}</p>
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <p>No se encontraron productos</p>
            )}
        </div>
    );
}

export default ProductList;