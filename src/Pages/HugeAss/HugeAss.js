import React from "react";
import "./HugeAss.css";
import Patreon from "../../Components/Patreon/Patreon";
import hugeassPic from "../../images/hugeass.jpg";
import discordIcon from "../../images/discordIcon.png";
import youtubeIcon from "../../images/youtubeIcon.png";

export default function HugeAss() {
    return (
        <div className="outerContainer">
            <img
                className="projectHeader"
                src={hugeassPic}
                alt="beerGoggles logo"
            />
            <div className="hugeAssContainer">
                <div className="hugeAssIntroContainer">
                    <div className="projectDescription">
                        <div className="hugeAssWriteUp">
                            <p>
                                HUGE ASS was spawned from the covid-19 pandemic.
                                The HUGE Crew wanted to make something together
                                but also remote, so we decided to do some
                                asynchronous speed running. Each player spends
                                30 mins playing a particular game and records
                                it. We then sync up the footage and do some fun
                                commentary over top and see who was faster.
                                Eventually, finding out who the HUGEst ASS
                                truely is.
                            </p>

                            <p>
                                You can check out Season One on the HUGE Youtube
                                Channel. Season Two is availble by{" "}
                                <span className="linkBold">
                                    <a
                                        href="https://www.patreon.com/hoppedupeast"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        subscribing to Patreon.
                                    </a>
                                </span>
                            </p>
                        </div>
                        <div className="projectsListenOnContainer">
                            <h3 className="listenOnIconAndTitle">Subscribe:</h3>
                            <div className="listenOnIconChannel">
                                <img
                                    className="youtubeIcon"
                                    src={youtubeIcon}
                                    alt="youtube triangle icon"
                                />
                                <span className="listenOnChannel">
                                    <a
                                        href="https://www.youtube.com/@HoppedUpGamingEast/featured"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Youtube
                                    </a>
                                </span>
                            </div>
                        </div>

                        <div className="listenOnDiscord">
                            <img
                                className="logo"
                                src={discordIcon}
                                alt="discord logo"
                            />
                            <a
                                href="https://bit.ly/hoppedupdiscord"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="listenOnDiscordText">
                                    Discord Server
                                </p>
                            </a>
                        </div>
                    </div>
                    <div>
                        <iframe
                            className="embedVideo"
                            title="YouTubeEmbed HUGE ASS Playlist"
                            src="https://www.youtube.com/embed/videoseries?list=PLXnsyGNMKFBgo8lYTARS244KlTaO1wTXb"
                        ></iframe>
                        <figcaption className="hugeAssfigCapt">
                            Season One Playlist
                        </figcaption>
                    </div>
                </div>
                <Patreon
                    patreonTitle="Season Two Early Access on Patreon"
                    patreonText="For early access to HUGE ASS Season 2, click the link below to check out our support options. It's super appreciated and allows up to keep doing what we love!"
                />
            </div>
        </div>
    );
}
