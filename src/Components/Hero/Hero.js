import React from "react";
import "./Hero.css";
import hugeLogo from "../../images/hugeLogo.png";
import hugeCrewImg from "../../images/HUGEPodCrew.jpg";
import Featured from "../Featured/Featured";

export default function Hero(props) {
    const { episode, setSelectedEpisode } = props;

    return (
        <div className="heroContainer">
            <div className="heroText">
                <h2 className="heroMainText">Hopped-Up Gaming: East </h2>
                <p className="heroSubText">
                    Hi there! We're a bunch of fellas (Dylan, Ben, Evan, Matt,
                    and Tim) who get together every week to talk about our
                    hobbies, movies, the games we're playing, and basically
                    whatever else we've done that week. Oh yeah, we also drink
                    and rate beer that we don't properly know how to evaluate.
                </p>
                <Featured
                    episode={episode}
                    setSelectedEpisode={setSelectedEpisode}
                />
            </div>

            <img className="heroImage" src={hugeCrewImg} alt="HUGE Logo" />
            {/* <img className="heroImage" src={hugeLogo} alt="HUGE Logo" /> */}
        </div>
    );
}
