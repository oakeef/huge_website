import React from "react";
import "./Episodes.css";
import Episode from "../../Components/Episode/Episode";

export default function Episodes(props) {
    const { podcastEpisodes, setSelectedEpisode } = props;
    return (
        <div className="allEpsContainer">
            <h1 className="allEpsHeader">All Episodes </h1>
            <div className="allEpsGrid">
                {podcastEpisodes.map((episode, i) => (
                    <div>
                        <Episode
                            key={i}
                            episode={episode}
                            setSelectedEpisode={setSelectedEpisode}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
