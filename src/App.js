import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import HostsSection from "./Components/HostsSection/HostsSection";
import ListenOn from "./Components/ListenOn/ListenOn";

export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <ListenOn />
            <HostsSection />
        </>
    );
}
