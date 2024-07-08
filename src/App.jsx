import React from "react";
import Navbar from "./assets/components/navbar/Navbar";
import Body from "./assets/components/body/Body";
import Footer from "./assets/components/footer/Footer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
