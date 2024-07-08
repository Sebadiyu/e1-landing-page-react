import React from "react";
import "./products.css";
import { products } from "./products.js";
import ProductCard from "./ProductCard.jsx";

const Products = () => {
    return (
        <section id="products" className="products">
            <h2>Productos</h2>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Products;
