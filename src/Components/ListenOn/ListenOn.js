import React from "react";
import podIcon from "../../images/podIcon.webp";
import appleLogo from "../../images/appleLogo.png";
import spotifyLogo from "../../images/spotifyLogo.png";
import googleLogo from "../../images/googleLogo.webp";

export default function ListenOn() {
    return (
        <h3>
            <img className="podIcon" src={podIcon} alt="podcatcher icon" />
            Subscribe On:
            <span>
                <img className="logo" src={appleLogo} alt="apple logo" />
                APPLE PODCASTS
            </span>
            <span>
                <img className="logo" src={googleLogo} alt="spotify logo" />
                GOOGLE PODCASTS
            </span>
            <span>
                <img className="logo" src={spotifyLogo} alt="spotify logo" />
                SPOTIFY
            </span>
        </h3>
    );
}