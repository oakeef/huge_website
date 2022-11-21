import React from "react";
import "./NavBar.css";
import patreon from "../../images/Patreon.png";

export default function NavBar() {
    return (
        <div className="navContainer">
            <ul className="navLinks">
                <li className="navLink">HOME </li>
                <li className="navLink">ABOUT </li>
                <li className="navLink">PROJECTS </li>
            </ul>
            <button>
                <img className="logo" src={patreon} alt="logo" />
                <span>DONATE</span>
            </button>
        </div>
    );
}
