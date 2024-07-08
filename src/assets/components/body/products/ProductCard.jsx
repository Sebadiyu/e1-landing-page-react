import React from "react";
import "./productCard.css";
import Button from "../Button.jsx";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img
                src={`./img/${product.img}`}
                alt={product.name}
                className="product-img"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <Button />
        </div>
    );
};

export default ProductCard;
