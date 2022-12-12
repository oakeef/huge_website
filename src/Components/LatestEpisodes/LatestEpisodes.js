import React from "react";
import Episode from "../Episode/Episode";
import "./LatestEpisodes.css";

export default function LatestEpisodes(props) {
    const { episodes } = props;

    let latestEpisodes = [];

    for (let i = 0; i <= 5; i++) {
        latestEpisodes.push(<Episode key={i} episode={episodes[i]} />);
    }
    return (
        <>
            <div className="latestEpContainer">
                <div>
                    <h2 className="latestEpHeader"> Latest Episodes</h2>
                    <span className="browseAll"> BROWSE ALL {">"} </span>
                </div>
                <div className="latestEpButtonContainer">
                    <button className="latestEpButton"> ← </button>
                    <button className="latestEpButton"> → </button>
                </div>
            </div>
            <div className="episodesContainer">{latestEpisodes}</div>
        </>
    );
}
