import React from "react";
import Episode from "../Episode/Episode";
import "./LatestEpisodes.css";

export default function LatestEpisodes() {
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
            <div className="episodesContainer">
                <Episode />
                <Episode />
                <Episode />
            </div>
        </>
    );
}
