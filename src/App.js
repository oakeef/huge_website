import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import Playback from "./Components/Playback/Playback";
import axios from "axios";
import { convertDate, convertLength, episodeCategory } from "./Helpers/Helpers";
import episodeImage from ".//images/episodeImage.jpeg";

const { XMLParser } = require("fast-xml-parser");

const About = lazy(() => import("./Pages/About/About"));
const Episodes = lazy(() => import("./Pages/Episodes/Episodes"));
const Projects = lazy(() => import("./Pages/Projects/Projects"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Xcommittee = lazy(() => import("./Pages/Xcommittee/Xcommittee"));
const BeerGoggles = lazy(() => import("./Pages/BeerGoggles/BeerGoggles"));
const HugeAss = lazy(() => import("./Pages/HugeAss/HugeAss"));
const OtherProjects = lazy(() => import("./Pages/OtherProjects/OtherProjects"));

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
                        subtitle: convertLength(episode[`itunes:subtitle`]),
                        category: episodeCategory(episode.title),
                        link: episode.enclosure[`@_url`],
                        image: episodeImage,
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

                        <Route
                            path="About"
                            element={
                                <Suspense fallback={<LoadingSpinner />}>
                                    <About />
                                </Suspense>
                            }
                        />

                        <Route
                            path="Projects"
                            element={
                                <Suspense fallback={<LoadingSpinner />}>
                                    <Projects />
                                </Suspense>
                            }
                        />

                        <Route
                            path="Contact"
                            element={
                                <Suspense fallback={<LoadingSpinner />}>
                                    <Contact />
                                </Suspense>
                            }
                        />

                        <Route
                            path="Episodes"
                            element={
                                <Suspense fallback={<LoadingSpinner />}>
                                    <Episodes
                                        podcastEpisodes={podcastEpisodes}
                                        setSelectedEpisode={setSelectedEpisode}
                                    />
                                </Suspense>
                            }
                        />

                        <Route
                            path="Xcommittee"
                            element={
                                <Suspense fallback={<LoadingSpinner />}>
                                    <Xcommittee
                                        setSelectedEpisode={setSelectedEpisode}
                                    />
                                </Suspense>
                            }
                        />

                        <Route
                            path="BeerGoggles"
                            element={
                                <Suspense fallback={<LoadingSpinner />}>
                                    <BeerGoggles />{" "}
                                </Suspense>
                            }
                        />

                        <Route
                            path="BeerGoggles"
                            element={
                                <Suspense fallback={<LoadingSpinner />}>
                                    <BeerGoggles />
                                </Suspense>
                            }
                        />

                        <Route
                            path="HugeAss"
                            element={
                                <Suspense fallback={<LoadingSpinner />}>
                                    <HugeAss />
                                </Suspense>
                            }
                        />

                        <Route
                            path="OtherProjects"
                            element={
                                <Suspense fallback={<LoadingSpinner />}>
                                    <OtherProjects
                                        hugeBBCEpisodes={hugeBBCEpisodes}
                                        lastOfUsEpisodes={lastOfUsEpisodes}
                                        setSelectedEpisode={setSelectedEpisode}
                                    />
                                </Suspense>
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
    return <LoadingSpinner />;
}
