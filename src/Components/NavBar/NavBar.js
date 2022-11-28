import React from "react";
import "./NavBar.css";
import patreon from "../../images/Patreon.png";
import search from "../../images/search.png";

export default function NavBar() {
    return (
        <div className="navContainer">
            <ul className="navLinks">
                <li className="navLink">HOME</li>
                <li className="navLink">ABOUT </li>
                <li className="navLink">PROJECTS </li>
                <li className="navLink">CONTACT </li>
            </ul>
            <button className="patreonDonate">
                <img
                    className="NavPatreonlogo"
                    src={patreon}
                    alt="Patreon P icon"
                />
                <span>DONATE</span>
            </button>
            <button className="searchButton">
                <img className="searchicon" src={search} alt="search icon" />
            </button>
        </div>
    );
}
