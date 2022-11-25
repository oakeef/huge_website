import React from "react";
import "./Host.css";
import placeholderImg from "../../images/placeholder.jpeg";

export default function Host() {
    return (
        <div className="hostContainer">
            <img className="hostImg" src={placeholderImg} alt="hostHeadshot" />
            <h4 className="hostName">Name Here</h4>
            <span className="hostBio">
                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </span>
        </div>
    );
}
