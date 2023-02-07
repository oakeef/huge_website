import React, { useEffect, useState } from "react";
import "./Xcommittee.css";
import axios from "axios";
import Episode from "../../Components/Episode/Episode";
import ListenOn from "../../Components/ListenOn/ListenOn";
import XcommitteePic from "../../images/xcommittee.jpg";
import xcomImage from "../../images/xcomImage.jpeg";
import ReactSimplyCarousel from "react-simply-carousel";
import { convertDate, convertLength } from "../../Helpers/Helpers";

const { XMLParser } = require("fast-xml-parser");

export default function Xcommittee(props) {
    const { setSelectedEpisode } = props;
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [activeSlideIndexB, setActiveSlideIndexB] = useState(0);
    const [xcomOneEps, setXcomOneEps] = useState([]);
    const [xcomTwoEps, setXcomTwoEps] = useState([]);

    useEffect(() => {
        axios
            .get("https://feeds.libsyn.com/448188/rss", {
                "Content-Type": "application/xml; charset=utf-8",
            })
            .then((response) => {
                let episodes = [];

                const parser = new XMLParser();
                let rssFeed = parser.parse(response.data);

                rssFeed.rss.channel.item.forEach((episode) => {
                    let parsedEpisode = {
                        title: convertLength(episode.title),
                        subtitle: episode[`itunes:subtitle`],
                        category: "X-COMMITTEE",
                        image: xcomImage,
                        date: convertDate(episode.pubDate),
                        link: episode.link,
                    };
                    episodes.push(parsedEpisode);
                });

                const xcomOne = [];
                const xcomTwo = [];

                episodes.forEach((episode) => {
                    if (episode.date.includes("2015")) {
                        xcomOne.push(episode);
                    } else xcomTwo.push(episode);
                });

                setXcomOneEps(xcomOne.reverse());
                setXcomTwoEps(xcomTwo.reverse());
            });
    }, []);

    return (
        <div className="outerContainer">
            <img
                className="projectHeader"
                src={XcommitteePic}
                alt="xcombanner"
            />
            <div className="xcomContainer">
                <div className="xcomIntroContainer">
                    <div className="xcomProjectDescription">
                        <p>
                            An interesting take on playing the strategy game
                            XCOM. We have one save file and pass it around for 1
                            hour turns and meet up at the end of each round to
                            talk about what happened. Basically playing XCOM by
                            committee.
                        </p>
                        <p>
                            Season 1 covers the events of XCOM Enemy Unkown and
                            Enemy Within Expansion. Season 2 covers the events
                            of XCOM 2, Alien Hunters and War of the Chosen
                            Expansion. You can find both seasons on Apple
                            Podcasts, Google Podcasts or anywhere Podcasts are
                            found.
                        </p>

                        <ListenOn
                            offsetValue={"-5px"}
                            googleLink={
                                "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5saWJzeW4uY29tLzQ0ODE4OC9yc3M"
                            }
                            appleLink={
                                "https://podcasts.apple.com/us/podcast/x-committee/id979571952"
                            }
                            spotifyLink={
                                "https://open.spotify.com/show/1z0C7QHykxMdrCQNxqqKCw"
                            }
                        />
                    </div>

                    <iframe
                        className="embedVideo"
                        title="YouTubeEmbed"
                        src="https://www.youtube.com/embed/41g1NHMjw3M"
                    ></iframe>
                </div>

                <h3 className="xcomSeasonHeader">Season One</h3>

                {xcomOneEps.length > 0 && (
                    <div className="xcomCarouselContainer">
                        <ReactSimplyCarousel
                            className="xcomEpisodesContainer"
                            activeSlideIndex={activeSlideIndex}
                            onRequestChange={setActiveSlideIndex}
                            itemsToShow={3}
                            itemsToScroll={1}
                            infinite={false}
                            speed={60}
                            responsiveProps={[
                                {
                                    minWidth: 780,
                                    maxWidth: 1199,
                                    itemsToShow: 2,
                                },
                                { maxWidth: 779, itemsToShow: 1 },
                            ]}
                            backwardBtnProps={{
                                className: "carouselButton",
                                children: "←",
                            }}
                            forwardBtnProps={{
                                className: "carouselButton",
                                children: "→",
                            }}
                            dotsNav={{
                                show: true,
                                itemBtnProps: {
                                    style: {
                                        height: 16,
                                        width: 16,
                                        borderRadius: "50%",
                                        border: 0,
                                        background: "silver",
                                    },
                                },
                                activeItemBtnProps: {
                                    style: {
                                        height: 16,
                                        width: 16,
                                        borderRadius: "50%",
                                        border: 0,
                                        background: "#05acac",
                                    },
                                },
                            }}
                        >
                            {xcomOneEps.map((episode, i) => {
                                return (
                                    <Episode
                                        key={i}
                                        episode={episode}
                                        setSelectedEpisode={setSelectedEpisode}
                                    />
                                );
                            })}
                        </ReactSimplyCarousel>
                    </div>
                )}

                <h3 className="xcomSeasonHeader">Season Two</h3>

                {xcomTwoEps.length > 0 && (
                    <div className="xcomCarouselContainer">
                        <ReactSimplyCarousel
                            className="xcomEpisodesContainerTwo"
                            activeSlideIndex={activeSlideIndexB}
                            onRequestChange={setActiveSlideIndexB}
                            itemsToShow={3}
                            draggable={true}
                            itemsToScroll={1}
                            infinite={false}
                            speed={60}
                            responsiveProps={[
                                {
                                    minWidth: 780,
                                    maxWidth: 1199,
                                    itemsToShow: 2,
                                },
                                { maxWidth: 779, itemsToShow: 1 },
                            ]}
                            backwardBtnProps={{
                                className: "carouselButton",
                                children: "←",
                            }}
                            forwardBtnProps={{
                                className: "carouselButton",
                                children: "→",
                            }}
                            dotsNav={{
                                show: true,
                                itemBtnProps: {
                                    style: {
                                        height: 16,
                                        width: 16,
                                        borderRadius: "50%",
                                        border: 0,
                                        background: "silver",
                                    },
                                },
                                activeItemBtnProps: {
                                    style: {
                                        height: 16,
                                        width: 16,
                                        borderRadius: "50%",
                                        border: 0,
                                        background: "#05acac",
                                    },
                                },
                            }}
                        >
                            {xcomTwoEps.map((episode, i) => {
                                return (
                                    <Episode
                                        key={i}
                                        episode={episode}
                                        setSelectedEpisode={setSelectedEpisode}
                                    />
                                );
                            })}
                        </ReactSimplyCarousel>
                    </div>
                )}
            </div>
        </div>
    );
}
