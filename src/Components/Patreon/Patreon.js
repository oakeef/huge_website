import React from "react";
import "./Patreon.css";
import patreonImg from "../../images/PatreonLogoName.png";
import patreon from "../../images/Patreon.png";

export default function Patreon() {
    return (
        <div className="patreonContainer">
            <img
                className="patreonImg"
                src={patreonImg}
                alt="patreon logo and name"
            />
            <div className="patreonTextContainer">
                <h1 className="patreonHeading">Support the Show on Patreon</h1>
                <span className="patreonText">
                    If you want to support the show, enjoy an extra warm feeling
                    inside when you listen, knowing you’ve helped to keep the
                    project going.
                </span>

                <a
                    href="https://www.patreon.com/hoppedupeast"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="patreonButton">
                        <img className="logo" src={patreon} alt="logo" />
                        <span>DONATE</span>
                    </button>
                </a>
            </div>
        </div>
    );
}
