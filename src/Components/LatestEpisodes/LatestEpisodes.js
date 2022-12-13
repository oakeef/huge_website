import React, { useState } from "react";
import Episode from "../Episode/Episode";
import { Link } from "react-router-dom";
import ReactSimplyCarousel from "react-simply-carousel";
import "./LatestEpisodes.css";

export default function LatestEpisodes(props) {
    const { latestEpisodes } = props;

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const hugeEps = latestEpisodes.map((episode, i) => {
        return <Episode index={i} episode={episode} />;
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
            </div>

            <ReactSimplyCarousel
                className="episodesContainer"
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={3}
                itemsToScroll={1}
                infinite={false}
                speed={60}
                backwardBtnProps={{
                    className: "latestEpButton",
                    children: "←",
                }}
                forwardBtnProps={{
                    className: "latestEpButton",
                    children: "→",
                }}
            >
                {hugeEps}
            </ReactSimplyCarousel>
        </>
    );
}
