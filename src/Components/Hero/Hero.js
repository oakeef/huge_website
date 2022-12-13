import React from "react";
import "./Hero.css";
import hugeLogo from "../../images/hugeLogo.png";
import Featured from "../Featured/Featured";

export default function Hero(props) {
    const { episode } = props;

    return (
        <div className="heroContainer">
            <div className="heroText">
                <h2 className="heroMainText">Hopped-Up Gaming: East </h2>
                <p className="heroSubText">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Featured episode={episode} />
            </div>

            <img className="heroImage" src={hugeLogo} alt="HUGE Logo" />
        </div>
    );
}
