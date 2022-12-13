import React, { useState } from "react";
import Episode from "../Episode/Episode";
import { Link } from "react-router-dom";
import ReactSimplyCarousel from "react-simply-carousel";
import "./LatestEpisodes.css";

export default function LatestEpisodes(props) {
    const { episodes } = props;

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    let latestEpisodes = [];

    for (let i = 0; i <= 5; i++) {
        latestEpisodes.push(<Episode key={i} episode={episodes[i]} />);
    }

    return (
        <>
            <div className="latestEpContainer glider">
                <div>
                    <h2 className="latestEpHeader"> Latest Episodes</h2>
                    <span className="browseAll">
                        {" "}
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
                {latestEpisodes}
            </ReactSimplyCarousel>
        </>
    );
}
