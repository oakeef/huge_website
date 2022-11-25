import React from "react";
import "./Episode.css";
import sonic2 from "../../images/sonic2.jpeg";

export default function Episode() {
    return (
        <div className="episodeContainer">
            <div>
                <img className="episodeImg" src={sonic2} alt="episode cover" />
                <span className="episodeDate">March 19, 2021</span>
                <button className="episodePlayButton">▶</button>
            </div>
            <div className="episodeInfo">
                <span className="episodeCategory"> 🎧 Category</span>

                <span className="episodeTitle">
                    The Title of The Episode Goes Here What If Its Very Long
                    Though Dogs
                </span>
            </div>
        </div>
    );
}
