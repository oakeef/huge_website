import React from "react";
import "./NavBar.css";
import hamburger from "../../images/hamburger.png";
import { Link } from "react-router-dom";

import patreon from "../../images/Patreon.png";

export default function NavBar() {
    return (
        <div className="navContainer">
            <div className="navMainContainer">
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
            </div>

            <div className="navHamburger">
                <button className="navbarHamburgerButton">
                    <img
                        src={hamburger}
                        className="navbarHamburgerIcon"
                        alt="hamburger icon"
                    />
                </button>
                <div className="navHamburgerLinks">
                    <Link className="navLink" to="/">
                        Home
                    </Link>
                    <Link className="navLink" to="/About">
                        About
                    </Link>

                    <Link className="navLink" to="/Episodes">
                        Episodes
                    </Link>
                    <Link className="navLink" to="/Projects">
                        Projects
                    </Link>
                    <Link className="navLink" to="/Contact">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}
