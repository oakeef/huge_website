import React from "react";
import "./Episode.css";

export default function Episode(props) {
    const { episode, setSelectedEpisode } = props;

    return (
        <div className="episodeContainer">
            <div>
                <img
                    className="episodeImg"
                    src={episode.image}
                    alt="episode cover"
                />
                <span className="episodeDate">{episode.date}</span>
                <button
                    className="episodePlayButton"
                    onClick={() => setSelectedEpisode(episode)}
                >
                    <i className="material-icons episodePlayIcon">play_arrow</i>
                </button>
            </div>
            <div className="episodeInfo">
                <span className="episodeCategory"> 🎧 {episode.category}</span>

                <span className="episodeTitle">{episode.title}</span>
            </div>
        </div>
    );
}
