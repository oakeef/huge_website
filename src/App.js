import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="Home" index element={<Home />} />
                    <Route path="About" element={<About />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
