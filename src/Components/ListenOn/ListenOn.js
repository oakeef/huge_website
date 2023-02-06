import React from "react";
import "./ListenOn.css";
import ListenLink from "../ListenLink/ListenLink";
import { Link } from "react-router-dom";
import podIcon from "../../images/podIcon.webp";
import appleLogo from "../../images/appleLogo.png";
import spotifyLogo from "../../images/spotifyLogo.png";
import googleLogo from "../../images/googleLogo.webp";
import discordIcon from "../../images/discordIcon.png";

export default function ListenOn(props) {
    const { appleLink, offsetValue, googleLink, spotifyLink } = props;
    let listenOnData = [
        {
            name: "apple podcasts",
            link: appleLink,
            logo: appleLogo,
        },
        {
            name: "google podcasts",
            link: googleLink,
            logo: googleLogo,
        },
        {
            name: "Spotify",
            link: spotifyLink,
            logo: spotifyLogo,
        },
    ];

    const listenLinks = listenOnData.map((item, i) => {
        return <ListenLink key={i} listenLink={item} />;
    });

    return (
        <div className="listenOnContainer" style={{ marginTop: offsetValue }}>
            <div className="listenOnAudioContainer">
                <h3 className="listenOnIconAndTitle">
                    <img
                        className="podIcon"
                        src={podIcon}
                        alt="podcatcher icon"
                    />
                    Subscribe:
                </h3>

                {listenLinks}
            </div>
            <Link to="/About">
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
