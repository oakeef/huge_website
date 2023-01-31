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
import { convertDate, convertLength, episodeCategory } from "./Helpers/Helpers";

const { XMLParser } = require("fast-xml-parser");

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

                const options = {
                    ignoreAttributes: false,
                };

                const parser = new XMLParser(options);
                let rssFeed = parser.parse(response.data);

                rssFeed.rss.channel.item.forEach((episode) => {
                    let parsedEpisode = {
                        title: convertLength(episode.title),
                        subtitle: episode[`itunes:subtitle`],
                        category: episodeCategory(episode.title),
                        link: episode.enclosure[`@_url`],
                        image: rssFeed.rss.channel.image.url,
                        date: convertDate(episode.pubDate),
                    };
                    episodes.push(parsedEpisode);
                    if (parsedEpisode.category === "Huge BBC") {
                        BBCEpisodes.push(parsedEpisode);
                    }
                    if (parsedEpisode.category.includes("The Last Of Us")) {
                        lastOfUsEpisodes.push(parsedEpisode);
                    }
                });

                setPodcastEpisodes(episodes);
                setHugeBBCEpisodes(BBCEpisodes.reverse());
                setLastOfUsEpisodes(lastOfUsEpisodes.reverse());
            });
    }, []);

    if (podcastEpisodes.length > 0) {
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
    return <p>loading</p>;
}
