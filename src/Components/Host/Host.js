import React from "react";
import "./Host.css";
import placeholderImg from "../../images/placeholder.jpeg";

export default function Host() {
    return (
        <div>
            <img className="hostImg" src={placeholderImg} alt="hostHeadshot" />
            <h4>Name Here</h4>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
            </span>
        </div>
    );
}
