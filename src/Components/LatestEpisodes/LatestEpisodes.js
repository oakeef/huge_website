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
                <div>
                    <h2 className="latestEpHeader"> Latest Episodes</h2>
                    <span className="browseAll">
                        <Link to="/Episodes">BROWSE ALL {">"}</Link>
                    </span>
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
                            { minWidth: 780, maxWidth: 1199, itemsToShow: 2 },
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
                    >
                        {hugeEps}
                    </ReactSimplyCarousel>
                </div>
            </div>
        </>
    );
}
