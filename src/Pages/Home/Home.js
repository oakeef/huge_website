import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import ListenOn from "../../Components/ListenOn/ListenOn";
import LatestEpisodes from "../../Components/LatestEpisodes/LatestEpisodes";
import HostsSection from "../../Components/HostsSection/HostsSection";
import Patreon from "../../Components/Patreon/Patreon";
import axios from "axios";

var XMLParser = require("react-xml-parser");

function convertUnicode(myString) {
    let convertedString = myString.replaceAll("%20", " ");
    return convertedString;
}

function stringChoppy(mystring) {
    let slicedString = mystring.slice(0, mystring.length - 2);

    return slicedString;
}

export default function Home() {
    const [podcastEpisodes, setPodcastEpisodes] = useState([]);

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
                        console.log(episode);
                        let parsedEpisode = {
                            title: convertUnicode(episode.children[0].value),
                            subtitle: stringChoppy(episode.children[12].value),
                            image: episode.children[5].attributes.href,
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
            {podcastEpisodes.length > 0 && <Hero episodes={podcastEpisodes} />}
            <ListenOn />
            <LatestEpisodes episodes={podcastEpisodes} />
            <HostsSection />
            <Patreon />
        </>
    );
}
