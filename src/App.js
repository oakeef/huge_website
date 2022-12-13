import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Xcommittee from "./Pages/Xcommittee/Xcommittee";
import BeerGoggles from "./Pages/BeerGoggles/BeerGoggles";
import HugeAss from "./Pages/HugeAss/HugeAss";
import Footer from "./Components/Footer/Footer";
import Episodes from "./Pages/Episodes/Episodes";
import Playback from "./Components/Playback/Playback";

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
                    <Route path="Episodes" element={<Episodes />} />
                    <Route path="Xcommittee" element={<Xcommittee />} />
                    <Route path="BeerGoggles" element={<BeerGoggles />} />
                    <Route path="BeerGoggles" element={<BeerGoggles />} />
                    <Route path="HugeAss" element={<HugeAss />} />
                </Routes>
                <Footer />
                <Playback />
            </BrowserRouter>
        </>
    );
}
