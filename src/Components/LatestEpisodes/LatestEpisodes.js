import React from "react";
import "./LatestEpisodes.css";

export default function LatestEpisodes() {
    return (
        <div className="latestEpContainer">
            <div>
                <h2> Latest Episodes</h2>
                <span> BROWSE ALL {">"} </span>
            </div>
            <div className="latestEpButtonContainer">
                <button className="latestEpButton"> → </button>
                <button className="latestEpButton"> ← </button>
            </div>
        </div>
    );
}
