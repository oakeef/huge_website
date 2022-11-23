import React from "react";
import "./ListenOn.css";
import podIcon from "../../images/podIcon.webp";
import appleLogo from "../../images/appleLogo.png";
import spotifyLogo from "../../images/spotifyLogo.png";
import googleLogo from "../../images/googleLogo.webp";

export default function ListenOn() {
    return (
        <div className="listenOnContainer">
            <h3 className="listenOnIconAndTitle">
                <img className="podIcon" src={podIcon} alt="podcatcher icon" />
                Subscribe On:
            </h3>

            <span className="listenOnChannel">
                <img className="logo" src={appleLogo} alt="apple logo" />
                APPLE PODCASTS
            </span>
            <span className="listenOnChannel">
                <img className="logo" src={googleLogo} alt="spotify logo" />
                GOOGLE PODCASTS
            </span>
            <span className="listenOnChannel">
                <img className="logo" src={spotifyLogo} alt="spotify logo" />
                SPOTIFY
            </span>
        </div>
    );
}
