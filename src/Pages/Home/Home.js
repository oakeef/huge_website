import React from "react";
import Hero from "../../Components/Hero/Hero";
import ListenOn from "../../Components/ListenOn/ListenOn";
import LatestEpisodes from "../../Components/LatestEpisodes/LatestEpisodes";
import HostsSection from "../../Components/HostsSection/HostsSection";
import Patreon from "../../Components/Patreon/Patreon";

export default function Home() {
    return (
        <>
            <Hero />
            <ListenOn />
            <LatestEpisodes />
            <HostsSection />
            <Patreon />
        </>
    );
}
