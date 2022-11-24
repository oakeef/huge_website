import React from "react";
import Episode from "../Episode/Episode";
import "./LatestEpisodes.css";

export default function LatestEpisodes() {
    return (
        <div className="latestEpContainer">
            <div>
                <h2> Latest Episodes</h2>
                <span className="browseAll"> BROWSE ALL {">"} </span>
            </div>
            <div className="latestEpButtonContainer">
                <button className="latestEpButton"> → </button>
                <button className="latestEpButton"> ← </button>
            </div>
            <Episode />
        </div>
    );
}
