import products from "../data/products";

function ProductList({ search }) {

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

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
    </div>
  );
}

export default ProductList;