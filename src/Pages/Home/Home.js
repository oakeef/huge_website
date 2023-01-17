import React from "react";
import Hero from "../../Components/Hero/Hero";
// import ListenOn from "../../Components/ListenOn/ListenOn";
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
            {/* <ListenOn
                offsetValue={"0px"}
                googleLink={
                    "https://podcasts.google.com/feed/aHR0cHM6Ly9ob3BwZWR1cGVhc3QuaGlwY2FzdC5jb20vcnNzL2hvcHBlZHVwZ2FtaW5nZWFzdC54bWw"
                }
                appleLink={
                    "https://podcasts.apple.com/us/podcast/hopped-up-gaming-east/id797058638"
                }
                spotifyLink={
                    "https://open.spotify.com/show/2dTRwdB4bHYsCI2CN9OV2m"
                }
            /> */}
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
