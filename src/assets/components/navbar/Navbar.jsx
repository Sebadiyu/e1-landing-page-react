import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
                <span className="navbar-title">Electro Kitchen</span>
            </div>
            <ul>
                <li>
                    <a href="#hero">Inicio</a>
                </li>
                <li>
                    <a href="#products">Productos</a>
                </li>
                <li>
                    <a href="#footer">Contacto</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
