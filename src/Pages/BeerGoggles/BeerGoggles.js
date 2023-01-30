import React from "react";
import "./BeerGoggles.css";
import podIcon from "../../images/podIcon.webp";
import discordIcon from "../../images/discordIcon.png";
import youtubeIcon from "../../images/youtubeIcon.png";
import BeerGogglesImg from "../../images/BeerGogglesCrop.png";

export default function BeerGoggles() {
    return (
        <div className="outerContainer">
            <img
                className="projectHeader"
                src={BeerGogglesImg}
                alt="beerGoggles logo"
            />
            <div className="beerGooglesContainer">
                <div className="beerGooglesIntroContainer">
                    <div className="projectDescription">
                        <div className="beerGooglesWriteUp">
                            <p>
                                A fun little experiment where one of the HUGE
                                members picks a game they remember loving from
                                their childhood and plays through it in its
                                entirety with another HUGE member as a co-pilot.
                                They see if they still love the game after
                                replaying it or if it was just nostalgia; hence
                                the name Beer Googles.
                            </p>
                            <p className="bold">
                                Featured Episode: God of War (2005)
                            </p>
                            <p>
                                In the most recent episode, Ben and Tim set out
                                on an epic journey to relive the adventures of
                                Kratos throughout the entire God of War saga. In
                                true Beer Goggles fashion, they're starting from
                                the very beginning and will leave no door
                                unsmashed, chest unopened, or undead warrior
                                un-undead on their quest to determine if any of
                                these games hold up. You can check it out on the
                                HUGE YouTube Channel.
                            </p>
                        </div>

                        <div className="beerGogglesListenOnContainer">
                            <h3 className="listenOnIconAndTitle">
                                <img
                                    className="podIcon"
                                    src={podIcon}
                                    alt="podcatcher icon"
                                />
                                Subscribe On:
                            </h3>
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

                    <iframe
                        className="embedVideo"
                        title="YouTubeEmbed God of War"
                        src="https://www.youtube.com/embed/EkrQwbYW_jQ?list=PLXnsyGNMKFBggLnPn_vqFd872Pt3w1IhI"
                    ></iframe>
                </div>
                <h3 className="beerGogglesEpHeader">Episodes</h3>

                <div className="beerGogglesEpContainer">
                    <div className="beerGoogglesEp">
                        <iframe
                            className="embedVideo"
                            title="YouTubeEmbed Zombie Dinos"
                            src="https://www.youtube.com/embed/gFFmsXS7jfU"
                        ></iframe>
                        <figcaption className="beerGogglesFigTitle">
                            Zombie Dinos from Planet Zeltoid
                        </figcaption>
                        <figcaption className="beerGogglesFigCaption">
                            It's time for Ben and Evan to become Rocket
                            Scientists! Join them as they dig up the past and
                            examine Zombie Dinos from Planet Zeltoid for traces
                            of nostalgia! This one is short and sweet with one
                            episode only.
                        </figcaption>
                    </div>
                    <div className="beerGoogglesEp">
                        <iframe
                            className="embedVideo"
                            title="YouTubeEmbed Sonic 2"
                            src="https://www.youtube.com/embed/x6pPQqrJLec?list=PLXnsyGNMKFBjivISk342044m6m0ehFUwD"
                        ></iframe>
                        <figcaption className="beerGogglesFigTitle">
                            Sonic The Hedgehog 2
                        </figcaption>
                        <figcaption className="beerGogglesFigCaption">
                            Lace up your shoes and put on your Beer Goggles,
                            it's time for Evan and Tim to run through Sonic The
                            Hedgehog 2! There are two parts for you to enjoy.
                        </figcaption>
                    </div>
                    <div className="beerGoogglesEp">
                        <iframe
                            className="embedVideo"
                            title="YouTubeEmbed PacMan"
                            src="https://www.youtube.com/embed/sZXn9DzLLpQ?list=PLXnsyGNMKFBjg_tOr--Ot7bEkK43A4QYN"
                        ></iframe>
                        <figcaption className="beerGogglesFigTitle">
                            Pac-Man 2: The New Adventures
                        </figcaption>
                        <figcaption className="beerGogglesFigCaption">
                            Look! Look! It's a new episode of Beer Goggles! Come
                            join Matt and Ben as they sit down for a new
                            adventure with two parts!
                        </figcaption>
                    </div>

                    <div className="beerGoogglesEp">
                        <iframe
                            className="embedVideo"
                            title="YouTubeEmbed McDonald's Treasure Island"
                            src="https://www.youtube.com/embed/jTGtwkFTNrw?list=PLXnsyGNMKFBj3_ZoyKEt-FZOUtmTWqYAc"
                        ></iframe>
                        <figcaption className="beerGogglesFigTitle">
                            McDonald's Treasure Land Adventure
                        </figcaption>
                        <figcaption className="beerGogglesFigCaption">
                            It's time for Matt and Ben to go on a magical
                            adventure! Come join them as they explore a world of
                            incomprehensible wonders! There are four whole
                            videos in this playlist for your viewing pleasure!
                        </figcaption>
                    </div>

                    <div className="beerGoogglesEp">
                        <iframe
                            className="embedVideo"
                            title="YouTubeEmbed Contra 3"
                            src="https://www.youtube.com/embed/9qTJnt9uxpQ?list=PLXnsyGNMKFBj0FuF4ENLe1Ylqgp-qHa0q"
                        ></iframe>
                        <figcaption className="beerGogglesFigTitle">
                            Contra 3: The Alien Wars
                        </figcaption>
                        <figcaption className="beerGogglesFigCaption">
                            Ohhhhhhhh boy! I sure hope you like dying. Tim and
                            Ben are going to test the time limits of Beer
                            Goggles with this game! This one's got three parts.
                        </figcaption>
                    </div>

                    <div className="beerGoogglesEp">
                        <iframe
                            className="embedVideo"
                            title="YouTubeEmbed Pitfall"
                            src="https://www.youtube.com/embed/5IUIEmXXNBM?list=PLXnsyGNMKFBj0rge7WO3zIwm0zyI67pwt"
                        ></iframe>
                        <figcaption className="beerGogglesFigTitle">
                            Pitfall: The Mayan Adventure
                        </figcaption>
                        <figcaption className="beerGogglesFigCaption">
                            Come join Ben and Matt as they play though Pitfall:
                            The Mayan Adventure and try to come up with smart
                            things to say along the way! There are three
                            episodes in this playlist.
                        </figcaption>
                    </div>
                </div>
            </div>
        </div>
    );
}
