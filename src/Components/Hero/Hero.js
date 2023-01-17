import React from "react";
import "./Hero.css";
import hugeCrewImg from "../../images/HUGEPodCrew.jpg";
import Featured from "../Featured/Featured";
import ListenOn from "../ListenOn/ListenOn";

export default function Hero(props) {
    const { episode, setSelectedEpisode } = props;

    return (
        <div className="heroContainer">
            <div className="heroText">
                <img
                    className="heroImageMediaQ"
                    src={hugeCrewImg}
                    alt="HUGE Logo"
                />
                <h2 className="heroMainText">Hopped-Up Gaming: East </h2>

                <Featured
                    episode={episode}
                    setSelectedEpisode={setSelectedEpisode}
                />
                <ListenOn
                    offsetValue={"10px"}
                    googleLink={
                        "https://podcasts.google.com/feed/aHR0cHM6Ly9ob3BwZWR1cGVhc3QuaGlwY2FzdC5jb20vcnNzL2hvcHBlZHVwZ2FtaW5nZWFzdC54bWw"
                    }
                    appleLink={
                        "https://podcasts.apple.com/us/podcast/hopped-up-gaming-east/id797058638"
                    }
                    spotifyLink={
                        "https://open.spotify.com/show/2dTRwdB4bHYsCI2CN9OV2m"
                    }
                />
            </div>

            <img className="heroImage" src={hugeCrewImg} alt="HUGE Logo" />
        </div>
    );
}
