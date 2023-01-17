import React from "react";
import Hero from "../../Components/Hero/Hero";
import LatestEpisodes from "../../Components/LatestEpisodes/LatestEpisodes";
import HostsSection from "../../Components/HostsSection/HostsSection";
import Patreon from "../../Components/Patreon/Patreon";

export default function Home(props) {
    const { setSelectedEpisode, podcastEpisodes } = props;

    let latestEpisodes = [];

    for (let i = 0; i <= 5; i++) {
        latestEpisodes.push(podcastEpisodes[i]);
    }

    return (
        <>
            {podcastEpisodes.length > 0 && (
                <Hero
                    //TODO: figure out how to add/update featured ep
                    episode={podcastEpisodes[13]}
                    setSelectedEpisode={setSelectedEpisode}
                />
            )}

            {podcastEpisodes.length > 0 && (
                <LatestEpisodes
                    latestEpisodes={latestEpisodes}
                    setSelectedEpisode={setSelectedEpisode}
                />
            )}
            <HostsSection />
            <Patreon
                patreonTitle="Support the Show on Patreon"
                patreonText="If you want to support the show, enjoy an extra warm feeling
                    inside when you listen, knowing you’ve helped to keep the
                    project going."
            />
        </>
    );
}
