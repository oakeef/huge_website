import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Xcommittee from "./Pages/Xcommittee/Xcommittee";
import BeerGoggles from "./Pages/BeerGoggles/BeerGoggles";
import HugeAss from "./Pages/HugeAss/HugeAss";
import OtherProjects from "./Pages/OtherProjects/OtherProjects";
import Footer from "./Components/Footer/Footer";
import Episodes from "./Pages/Episodes/Episodes";
import Playback from "./Components/Playback/Playback";
import axios from "axios";

var XMLParser = require("react-xml-parser");

function convertUnicode(myString) {
    let convertedString = myString.replaceAll("%20", " ");
    if (convertedString.length > 55) {
        return convertedString.slice(0, 54) + "...";
    } else return convertedString;
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

    return `${dateArray[2]}  ${day + end}, ${dateArray[3]}`;
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

export default function App() {
    const [selectedEpisode, setSelectedEpisode] = useState(null);
    const [podcastEpisodes, setPodcastEpisodes] = useState([]);
    const [hugeBBCEpisodes, setHugeBBCEpisodes] = useState([]);
    const [lastOfUsEpisodes, setLastOfUsEpisodes] = useState([]);

    useEffect(() => {
        axios
            .get("https://feeds.libsyn.com/447303/rss", {
                "Content-Type": "application/xml; charset=utf-8",
            })
            .then((response) => {
                let episodes = [];
                let BBCEpisodes = [];
                let lastOfUsEpisodes = [];

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
                        if (parsedEpisode.category === "Huge BBC") {
                            BBCEpisodes.push(parsedEpisode);
                        }
                        if (
                            parsedEpisode.category ===
                                "The Last Of Us Play The Last Of Us" ||
                            parsedEpisode.category === "The Last Of Us Part II"
                        ) {
                            lastOfUsEpisodes.push(parsedEpisode);
                        }
                    }
                });
                setPodcastEpisodes(episodes);
                setHugeBBCEpisodes(BBCEpisodes.reverse());
                setLastOfUsEpisodes(lastOfUsEpisodes.reverse());
            });
    }, []);

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        index
                        element={
                            <Home
                                setSelectedEpisode={setSelectedEpisode}
                                podcastEpisodes={podcastEpisodes}
                            />
                        }
                    />
                    <Route path="About" element={<About />} />
                    <Route path="Projects" element={<Projects />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route
                        path="Episodes"
                        element={
                            <Episodes
                                podcastEpisodes={podcastEpisodes}
                                setSelectedEpisode={setSelectedEpisode}
                            />
                        }
                    />
                    <Route
                        path="Xcommittee"
                        element={
                            <Xcommittee
                                setSelectedEpisode={setSelectedEpisode}
                            />
                        }
                    />
                    <Route path="BeerGoggles" element={<BeerGoggles />} />
                    <Route path="BeerGoggles" element={<BeerGoggles />} />
                    <Route path="HugeAss" element={<HugeAss />} />
                    <Route
                        path="OtherProjects"
                        element={
                            <OtherProjects
                                hugeBBCEpisodes={hugeBBCEpisodes}
                                lastOfUsEpisodes={lastOfUsEpisodes}
                                setSelectedEpisode={setSelectedEpisode}
                            />
                        }
                    />
                </Routes>
                <Footer />
                {selectedEpisode && (
                    <Playback
                        selectedEpisode={selectedEpisode}
                        setSelectedEpisode={setSelectedEpisode}
                    />
                )}
            </BrowserRouter>
        </>
    );
}
