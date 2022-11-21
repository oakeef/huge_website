import React from "react";
import "./Hero.css";
import podIcon from "../../images/podIcon.webp";
import hugeLogo from "../../images/hugeLogo.png";
import appleLogo from "../../images/appleLogo.png";
import spotifyLogo from "../../images/spotifyLogo.png";

export default function Hero() {
    return (
        <div>
            <div className="heroContainer">
                <h2>PlaceHolder</h2>
                <p></p>
                <img className="heroImage" src={hugeLogo} alt="HUGE Logo" />
            </div>
            <h3>
                <img className="podIcon" src={podIcon} alt="podcatcher icon" />{" "}
                Subscribe On:
                <span>
                    <img className="logo" src={appleLogo} alt="apple logo" />
                    APPLE PODCASTS
                </span>
                <span>GOOGLE PODCASTS</span>
                <span>
                    {" "}
                    <img
                        className="logo"
                        src={spotifyLogo}
                        alt="spotify logo"
                    />{" "}
                    SPOTIFY
                </span>
            </h3>
        </div>
    );
}
