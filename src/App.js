import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import LatestEpisodes from "./Components/LatestEpisodes/LatestEpisodes";
import ListenOn from "./Components/ListenOn/ListenOn";

export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <ListenOn />
            <LatestEpisodes />
        </>
    );
}
