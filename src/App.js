import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import HostsSection from "./Components/HostsSection/HostsSection";
import LatestEpisodes from "./Components/LatestEpisodes/LatestEpisodes";
import ListenOn from "./Components/ListenOn/ListenOn";
import Patreon from "./Components/Patreon/Patreon";

export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <ListenOn />
            <LatestEpisodes />
            <HostsSection />
            <Patreon />
        </>
    );
}
