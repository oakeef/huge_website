import React from "react";
import "./Featured.css";
import { Link } from "react-router-dom";

export default function Featured(props) {
    const { episode, setSelectedEpisode } = props;
    console.log(episode);
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
                    <span className="featuredTitle">{episode.title}</span>
                    <span className="featuredSubTitle">{episode.subtitle}</span>
                </div>
            </div>
            <div className="featuredButtons">
                <button
                    onClick={() => setSelectedEpisode(episode)}
                    className="featureListenNow"
                >
                    {" "}
                    ▶ LISTEN NOW{" "}
                </button>

                <Link to="/Episodes">
                    <button className="featuredBrowse">BROWSE ALL</button>
                </Link>
            </div>
        </div>
    );
}
