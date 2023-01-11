import React from "react";
import "./OtherProjects.css";
import XcommitteePic from "../../images/xcommittee.jpg";
import podIcon from "../../images/podIcon.webp";
import discordIcon from "../../images/discordIcon.png";
import youtubeIcon from "../../images/youtubeIcon.png";

export default function OtherProjects(props) {
    const { setSelectedEpisode } = props;
    return (
        <div className="outerContainer">
            <img
                className="projectHeader"
                src={XcommitteePic}
                alt="xcombanner"
            />
            <div className="otherProjectsContainer">
                <div className="otherProjectsIntroContainer">
                    <div className="projectDescription">
                        <h2> Charity Streams</h2>
                        <p>
                            Over the years we have done several 12 and 24 hour
                            charity streams in support of the IWK Children's
                            Hospital and Extra Life. These streams have raised
                            thousands of dollars to help sick kids. You can find
                            archives of streams on the{" "}
                            <span className="linkBold">
                                <a
                                    href="https://www.youtube.com/@HoppedUpGamingEast/featured"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    HUGE Youtube Channel.
                                </a>
                            </span>
                        </p>

                        <p>
                            In our most recent charity stream, Ben plays Balan
                            Wonderworld for 12 hours while Matthew reads
                            out-loud the novelization of the game. Afterwards,
                            Evan plays Sonic Adventure for 12 more hours of
                            charity fundraising! It's a hoot!
                        </p>
                        <div className="beerGogglesListenOnContainer">
                            <h3 className="listenOnIconAndTitle">
                                <img
                                    className="podIcon"
                                    src={podIcon}
                                    alt="podcatcher icon"
                                />
                                Subscribe On:
                            </h3>
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

                    <iframe
                        width="450"
                        height="315"
                        title="YouTubeEmbed HUGE Charity Stream"
                        src="https://www.youtube.com/embed/videoseries?list=PLXnsyGNMKFBjV_M-TUJACo0eWwBeHynGm"
                    ></iframe>
                </div>
                <h2> The Last of Us Play The Last of Us</h2>
                <h2>HUGE Boys Book Club</h2>
            </div>
        </div>
    );
}
