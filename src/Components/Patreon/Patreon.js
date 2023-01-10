import React from "react";
import "./Patreon.css";
import patreon from "../../images/Patreon.png";

export default function Patreon(props) {
    const { patreonimage, patreonText, patreonTitle } = props;
    return (
        <div className="patreonContainer">
            <img
                className="patreonImg"
                src={patreonimage}
                alt="patreon logo and name"
            />
            <div className="patreonTextContainer">
                <h1 className="patreonHeading">{patreonTitle}</h1>
                <span className="patreonText">{patreonText}</span>

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
