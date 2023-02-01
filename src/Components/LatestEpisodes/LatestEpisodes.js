import React, { useState } from "react";
import Episode from "../Episode/Episode";
import { Link } from "react-router-dom";
import ReactSimplyCarousel from "react-simply-carousel";
import "./LatestEpisodes.css";

export default function LatestEpisodes(props) {
    const { latestEpisodes, setSelectedEpisode } = props;

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const hugeEps = latestEpisodes.map((episode, i) => {
        return (
            <Episode
                key={i}
                setSelectedEpisode={setSelectedEpisode}
                episode={episode}
            />
        );
    });

    return (
        <>
            <div className="latestEpContainer">
                <div className="latestEpHeadings">
                    <h2 className="latestEpHeader"> Latest Episodes</h2>
                    <Link to="/Episodes">
                        <span className="browseAll"> BROWSE ALL {">"} </span>
                    </Link>
                </div>
                <div className="latestEpisodesCarouselContainer">
                    <ReactSimplyCarousel
                        className="latestEpisodesCarousel"
                        activeSlideIndex={activeSlideIndex}
                        onRequestChange={setActiveSlideIndex}
                        itemsToShow={3}
                        itemsToScroll={1}
                        infinite={false}
                        speed={60}
                        responsiveProps={[
                            { minWidth: 780, maxWidth: 1199, itemsToShow: 2.5 },
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
                                    background: "black",
                                },
                            },
                        }}
                    >
                        {hugeEps}
                    </ReactSimplyCarousel>
                </div>
            </div>
        </>
    );
}
