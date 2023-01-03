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

function convertDate(date) {
    let dateArray = date.split(" ");
    let end = "";
    let day = "";
    let digitOne = Number(dateArray[1][0]);
    let digitTwo = Number(dateArray[1][1]);

    digitOne === 0 ? (day = digitTwo) : (day = Number(dateArray[1]));

    if (day === 1 || day === 21) {
        end = "st";
    } else if (day === 2 || day === 22) {
        end = "nd";
    } else if (day === 3 || day === 23) {
        end = "rd";
    } else end = "th";

    return `${dateArray[2]} ` + `${day + end}, ` + dateArray[3];
}

function episodeCategory(title) {
    let category = "";
    let titleArray = title.split(" ");

    if (titleArray[1] === "BBC") {
        category = "Huge BBC";
    } else if (titleArray[1] === "Last") {
        category = "The Last Of Us Play The Last Of Us";
    } else if (titleArray[0] === "TLOU") {
        category = "The Last Of Us Part II";
    } else category = "HUGE Podcast";
    return category;
}

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
            <ListenOn />
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
