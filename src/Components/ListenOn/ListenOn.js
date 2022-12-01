import React from "react";
import "./ListenOn.css";
import ListenLink from "../ListenLink/ListenLink";
import { Link } from "react-router-dom";
import podIcon from "../../images/podIcon.webp";
import appleLogo from "../../images/appleLogo.png";
import spotifyLogo from "../../images/spotifyLogo.png";
import googleLogo from "../../images/googleLogo.webp";
import discordIcon from "../../images/discordIcon.png";

export default function ListenOn() {
    let listenOnData = [
        {
            name: "apple podcasts",
            link: "https://podcasts.apple.com/us/podcast/hopped-up-gaming-east/id797058638",
            logo: appleLogo,
        },
        {
            name: "google podcasts",
            link: "https://podcasts.google.com/feed/aHR0cHM6Ly9ob3BwZWR1cGVhc3QuaGlwY2FzdC5jb20vcnNzL2hvcHBlZHVwZ2FtaW5nZWFzdC54bWw",
            logo: googleLogo,
        },
        {
            name: "Spotify",
            link: "https://open.spotify.com/show/2dTRwdB4bHYsCI2CN9OV2m",
            logo: spotifyLogo,
        },
    ];

    const listenLinks = listenOnData.map((item, i) => {
        return <ListenLink key={i} listenLink={item} />;
    });

    return (
        <div className="listenOnContainer">
            <div className="listenOnAudioContainer">
                <h3 className="listenOnIconAndTitle">
                    <img
                        className="podIcon"
                        src={podIcon}
                        alt="podcatcher icon"
                    />
                    Subscribe On:
                </h3>

                {listenLinks}
            </div>
            <Link className="navLink" to="/About">
                <span className="listenOnBrowseAll"> BROWSE ALL {">"} </span>
            </Link>

            <div className="listenOnDiscord">
                <img className="logo" src={discordIcon} alt="discord logo" />
                <a
                    href="https://bit.ly/hoppedupdiscord"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="listenOnDiscordText">Discord Server</p>
                </a>
            </div>
        </div>
    );
}
