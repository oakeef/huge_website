import React, { useState } from "react";
import "./OtherProjects.css";
import XcommitteePic from "../../images/xcommittee.jpg";

import ReactSimplyCarousel from "react-simply-carousel";
import Episode from "../../Components/Episode/Episode";
import podIcon from "../../images/podIcon.webp";
import discordIcon from "../../images/discordIcon.png";
import youtubeIcon from "../../images/youtubeIcon.png";

export default function OtherProjects(props) {
    const { setSelectedEpisode, lastOfUsEpisodes, hugeBBCEpisodes } = props;
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [activeSlideIndexB, setActiveSlideIndexB] = useState(0);
    return (
        //TODO: replace XCOM image with OTHER PROJECTS IMAGE
        <div className="outerContainer">
            <img
                className="projectHeader"
                src={XcommitteePic}
                alt="xcombanner"
            />
            <div className="otherProjectsContainer">
                <div className="otherProjectsIntroContainer">
                    <div className="projectDescription">
                        <h2 className="otherProjectsHeader">
                            Charity Live Streams
                        </h2>
                        <p>
                            Over the years we have done several 12 and 24 hour
                            charity live streams in support of the IWK
                            Children's Hospital and Extra Life. These live
                            streams have raised thousands of dollars to help
                            sick kids. You can find archives of streams on the{" "}
                            <span className="linkBold">
                                <a
                                    href="https://www.youtube.com/@HoppedUpGamingEast/featured"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    HUGE Youtube Channel.
                                </a>
                            </span>
                        </p>

                        <p>
                            In our most recent charity stream, Ben plays Balan
                            Wonderworld for 12 hours while Matthew reads
                            out-loud the novelization of the game. Afterwards,
                            Evan plays Sonic Adventure for 12 more hours of
                            charity fundraising! It's a hoot!
                        </p>
                        <div className="beerGogglesListenOnContainer">
                            <h3 className="listenOnIconAndTitle">
                                <img
                                    className="podIcon"
                                    src={podIcon}
                                    alt="podcatcher icon"
                                />
                                Subscribe On:
                            </h3>
                            <div className="listenOnIconChannel">
                                <img
                                    className="youtubeIcon"
                                    src={youtubeIcon}
                                    alt="youtube triangle icon"
                                />
                                <span className="listenOnChannel">
                                    <a
                                        href="https://www.youtube.com/@HoppedUpGamingEast/featured"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Youtube
                                    </a>
                                </span>
                            </div>
                        </div>

                        <div className="listenOnDiscord">
                            <img
                                className="logo"
                                src={discordIcon}
                                alt="discord logo"
                            />
                            <a
                                href="https://bit.ly/hoppedupdiscord"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="listenOnDiscordText">
                                    Discord Server
                                </p>
                            </a>
                        </div>
                    </div>

                    <iframe
                        className="embedVideo"
                        title="YouTubeEmbed HUGE Charity Stream"
                        src="https://www.youtube.com/embed/videoseries?list=PLXnsyGNMKFBjV_M-TUJACo0eWwBeHynGm"
                    ></iframe>
                </div>
                <div className="otherProjectsSection">
                    <div className="otherProjectsDescription">
                        <h2 className="otherProjectsHeader otherProjectsTLOUHeader">
                            The Last of Us Play The Last of Us
                        </h2>
                        <p>
                            TLOUPTLOU was hatched from the fact that Evan had
                            purchased TLOU in 2014 but had never even taken the
                            shrink wrap off the game. With the second game
                            quickly approaching and Tim revealing that he had
                            not played it either the show was born! With Ben as
                            our sherpa we played through The Last of Us all
                            those years after it's initial release to see if it
                            was as good as everyone had said.
                        </p>
                    </div>

                    {lastOfUsEpisodes.length > 0 && (
                        <div className="TheLastOfUsEpContainer">
                            <ReactSimplyCarousel
                                className="TheLastOfUsEps"
                                activeSlideIndex={activeSlideIndex}
                                onRequestChange={setActiveSlideIndex}
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
                                {lastOfUsEpisodes.map((episode, i) => {
                                    return (
                                        <Episode
                                            key={i}
                                            episode={episode}
                                            setSelectedEpisode={
                                                setSelectedEpisode
                                            }
                                        />
                                    );
                                })}
                            </ReactSimplyCarousel>
                        </div>
                    )}
                </div>
                <div className="otherProjectsSection">
                    <div className="otherProjectsDescription">
                        <h2 className="otherProjectsHeader">
                            HUGE Boys Book Club
                        </h2>

                        <p>
                            HUGE BBC started from us finding out that Tim had
                            never played Dead Space, a game that is very much up
                            his alley. So we all replayed it together and talked
                            about it on the podcast. From there we decided to
                            play Dead Space 2 and make it into a more structure
                            book club type thing where we would slice the game
                            into "chapters" then play a chapter each week and
                            meet up to talk about it. We branched out to do an
                            additional BBC series for XCOM.
                        </p>
                    </div>

                    {hugeBBCEpisodes.length > 0 && (
                        <div className="BBCEpsContainer">
                            <ReactSimplyCarousel
                                className="BBCEps"
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
                                {hugeBBCEpisodes.map((episode, i) => {
                                    return (
                                        <Episode
                                            key={i}
                                            episode={episode}
                                            setSelectedEpisode={
                                                setSelectedEpisode
                                            }
                                        />
                                    );
                                })}
                            </ReactSimplyCarousel>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
