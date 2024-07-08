// src/components/body/Body.jsx
import React from "react";
import Hero from "./hero/Hero.jsx";
import Products from "./products/Products";
import About from "./about/About";
import "./body.css";

const Body = () => {
    return (
        <>
            <Hero />
            <About />
            <Products />
        </>
    );
};

export default Body;
