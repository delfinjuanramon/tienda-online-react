import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import categories from "../data/categories";

function Home() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    const handleSelectCategory = (selectedCategory) => {
        setCategory(selectedCategory);
        setSearch("");
    };

    return (
        <>
            <div className="card">
                <h2>Bienvenido a la tienda en línea</h2>
                <p>
                    Primera fase de desarrollo del sistema. Sprint 2 enfocado en exploración del catálogo.
                </p>
            </div>

            <SearchBar search={search} setSearch={setSearch} />

            <ProductList search={search} category={category} />

            <CategoryList
                categories={categories}
                onSelectCategory={handleSelectCategory}
            />
        </>
    );
}

export default Home;