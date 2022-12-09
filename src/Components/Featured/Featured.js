import React from "react";
import "./Featured.css";

export default function Featured(props) {
    const { episode } = props;
    return (
        <div className="featuredContainer">
            <div>
                <span className="featuredbanner"> FEATURED PODCAST</span>
            </div>
            <div className="featuredEpInfo">
                <div>
                    <img
                        className="featuredImg"
                        src={episode.image}
                        alt="HUGE logo"
                    />
                </div>
                <div className="featuredEpAndTitle">
                    <span className="featuredEpNo">{episode.subtitle}</span>
                    <span className="featuredTitle">{episode.title}</span>
                </div>
            </div>
            <div className="featuredButtons">
                <button className="featureListenNow"> ▶ LISTEN NOW </button>
                <button className="featuredBrowse">BROWSE ALL</button>
            </div>
        </div>
    );
}
