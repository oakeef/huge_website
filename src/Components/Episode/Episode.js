import React from "react";
import "./Episode.css";

export default function Episode(props) {
    const { episode } = props;

    return (
        <div className="episodeContainer">
            <div>
                <img
                    className="episodeImg"
                    src={episode.image}
                    alt="episode cover"
                />
                <span className="episodeDate">{episode.date}</span>
                <button className="episodePlayButton">▶</button>
            </div>
            <div className="episodeInfo">
                <span className="episodeCategory"> 🎧 Category</span>

                <span className="episodeTitle">{episode.title}</span>
            </div>
        </div>
    );
}
