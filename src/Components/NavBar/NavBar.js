import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

import patreon from "../../images/Patreon.png";
import search from "../../images/search.png";

export default function NavBar() {
    return (
        <div className="navContainer">
            <ul className="navLinks">
                <li className="navLinkOuter">
                    <Link className="navLink" to="/">
                        Home
                    </Link>
                </li>
                <li className="navLinkOuter">
                    <Link className="navLink" to="/About">
                        About
                    </Link>
                </li>
                <li className="navLinkOuter">
                    <Link className="navLink" to="/Episodes">
                        Episodes
                    </Link>
                </li>
                <li className="navLinkOuter">
                    <Link className="navLink" to="/Projects">
                        Projects
                    </Link>
                </li>

                <li className="navLinkOuter">
                    <Link className="navLink" to="/Contact">
                        Contact
                    </Link>
                </li>
            </ul>
            <a
                href="https://www.patreon.com/hoppedupeast"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="patreonDonate">
                    <img
                        className="navPatreonLogo"
                        src={patreon}
                        alt="Patreon P icon"
                    />
                    <span>DONATE</span>
                </button>
            </a>
            <button className="searchButton">
                <img className="searchIcon" src={search} alt="search icon" />
            </button>
        </div>
    );
}
