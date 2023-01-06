import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import ListenOn from "../../Components/ListenOn/ListenOn";
import LatestEpisodes from "../../Components/LatestEpisodes/LatestEpisodes";
import HostsSection from "../../Components/HostsSection/HostsSection";
import Patreon from "../../Components/Patreon/Patreon";
import axios from "axios";
import {
    convertUnicode,
    stringChoppy,
    convertDate,
    episodeCategory,
} from "../../Helpers/Helpers";

var XMLParser = require("react-xml-parser");

export default function Home(props) {
    const { setSelectedEpisode } = props;

    const [podcastEpisodes, setPodcastEpisodes] = useState([]);

    let latestEpisodes = [];

    for (let i = 0; i <= 5; i++) {
        latestEpisodes.push(podcastEpisodes[i]);
    }

    useEffect(() => {
        axios
            .get("https://feeds.libsyn.com/447303/rss", {
                "Content-Type": "application/xml; charset=utf-8",
            })
            .then((response) => {
                let episodes = [];
                let xml = new XMLParser().parseFromString(response.data);

                xml.children[0].children.forEach((episode, index) => {
                    if (index >= 22) {
                        let parsedEpisode = {
                            title: convertUnicode(episode.children[0].value),
                            subtitle: stringChoppy(episode.children[12].value),
                            category: episodeCategory(
                                episode.children[0].value
                            ),
                            image: episode.children[5].attributes.href,
                            date: convertDate(episode.children[2].value),
                            link: stringChoppy(
                                episode.children[8].attributes.url
                            ),
                        };
                        episodes.push(parsedEpisode);
                    }
                });
                setPodcastEpisodes(episodes);
            });
    }, []);

    return (
        <>
            {podcastEpisodes.length > 0 && (
                <Hero
                    //TODO: figure out how to add/update featured ep
                    episode={podcastEpisodes[13]}
                    setSelectedEpisode={setSelectedEpisode}
                />
            )}
            <ListenOn
                offsetValue={"-200px"}
                googleLink={
                    "https://podcasts.google.com/feed/aHR0cHM6Ly9ob3BwZWR1cGVhc3QuaGlwY2FzdC5jb20vcnNzL2hvcHBlZHVwZ2FtaW5nZWFzdC54bWw"
                }
                appleLink={
                    "https://podcasts.apple.com/us/podcast/hopped-up-gaming-east/id797058638"
                }
                spotifyLink={
                    "https://open.spotify.com/show/2dTRwdB4bHYsCI2CN9OV2m"
                }
            />
            {podcastEpisodes.length > 0 && (
                <LatestEpisodes
                    latestEpisodes={latestEpisodes}
                    setSelectedEpisode={setSelectedEpisode}
                />
            )}
            <HostsSection />
            <Patreon />
        </>
    );
}
