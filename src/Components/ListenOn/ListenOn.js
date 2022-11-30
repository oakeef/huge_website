import React from "react";
import "./ListenOn.css";
import podIcon from "../../images/podIcon.webp";
import appleLogo from "../../images/appleLogo.png";
import spotifyLogo from "../../images/spotifyLogo.png";
import googleLogo from "../../images/googleLogo.webp";
import discordIcon from "../../images/discordIcon.png";

export default function ListenOn() {
    return (
        <div className="listenOnContainer">
            <div className="ListenOnAudioContainer">
                <h3 className="listenOnIconAndTitle">
                    <img
                        className="podIcon"
                        src={podIcon}
                        alt="podcatcher icon"
                    />
                    Subscribe On:
                </h3>

                <span className="listenOnChannel">
                    <a
                        href="https://podcasts.apple.com/us/podcast/hopped-up-gaming-east/id797058638"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="logo"
                            src={appleLogo}
                            alt="apple logo"
                        />
                    </a>
                    <a
                        href="https://podcasts.apple.com/us/podcast/hopped-up-gaming-east/id797058638"
                        rel="noopener noreferrer"
                    >
                        <p>apple podcasts</p>
                    </a>
                </span>

                <span className="listenOnChannel">
                    <a
                        href="https://podcasts.google.com/feed/aHR0cHM6Ly9ob3BwZWR1cGVhc3QuaGlwY2FzdC5jb20vcnNzL2hvcHBlZHVwZ2FtaW5nZWFzdC54bWw"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="logo"
                            src={googleLogo}
                            alt="spotify logo"
                        />
                    </a>

                    <a
                        href="https://podcasts.google.com/feed/aHR0cHM6Ly9ob3BwZWR1cGVhc3QuaGlwY2FzdC5jb20vcnNzL2hvcHBlZHVwZ2FtaW5nZWFzdC54bWw"
                        rel="noopener noreferrer"
                    >
                        <p>google podcasts</p>
                    </a>
                </span>

                <span className="listenOnChannel">
                    <a
                        href="https://open.spotify.com/show/2dTRwdB4bHYsCI2CN9OV2m"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="logo"
                            src={spotifyLogo}
                            alt="spotify logo"
                        />
                    </a>
                    <a
                        href="https://open.spotify.com/show/2dTRwdB4bHYsCI2CN9OV2m"
                        rel="noopener noreferrer"
                    >
                        <p>spotify</p>
                    </a>
                </span>
            </div>
            <span className="ListenOnbrowseAll"> BROWSE ALL {">"} </span>

            <div className="listenOnDiscord">
                <img className="logo" src={discordIcon} alt="discord logo" />
                <a href="bit.ly/hoppedupdiscord" rel="noopener noreferrer">
                    <p className="ListenOnDiscordText">Discord Server</p>
                </a>
            </div>
        </div>
    );
}
