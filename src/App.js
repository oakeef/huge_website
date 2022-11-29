import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="About" element={<About />} />
                    <Route path="Projects" element={<Projects />} />
                    <Route path="Contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
