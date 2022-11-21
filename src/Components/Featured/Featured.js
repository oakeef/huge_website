import React from "react";
import "./Featured.css";
import hugeLogo from "../../images/hugeLogo.png";

export default function Featured() {
    return (
        <div className="featuredContainer">
            <div>
                <span className="featuredbanner"> FEATURED PODCAST</span>
            </div>
            <div className="featuredEpInfo">
                <div>
                    <img
                        className="featuredImg"
                        src={hugeLogo}
                        alt="HUGE logo"
                    />
                </div>
                <div className="featuredEpAndTitle">
                    <span className="featuredEpNo">SEASON 2 EPISODE 6</span>
                    <span className="featuredTitle">title</span>
                </div>
            </div>
            <div className="featuredButtons">
                <button> ▶ </button>
                <span> LISTEN NOW</span>
                <button>BROWSE ALL</button>
            </div>
        </div>
    );
}
