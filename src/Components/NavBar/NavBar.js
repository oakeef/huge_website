import React from "react";
import "./NavBar.css";
import hamburger from "../../images/hamburger.png";
import exit from "../../images/exit.png";
import { Link } from "react-router-dom";
import patreon from "../../images/Patreon.png";

function hamburgerClick() {
    var hamburgerLinks = document.getElementById("hamburgerLinks");
    var hamburgericon = document.getElementById("hamburgericon");

    hamburgerLinks.classList.toggle("hidden");

    if (hamburgericon.src === hamburger) {
        hamburgericon.src = exit;
    } else {
        hamburgericon.src = hamburger;
    }
}

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
                <button
                    onClick={hamburgerClick}
                    className="navbarHamburgerButton"
                >
                    <img
                        src={hamburger}
                        className="navbarHamburgerIcon"
                        id="hamburgericon"
                        alt="hamburger icon"
                    />
                </button>
                <div id="hamburgerLinks" className="navHamburgerLinks">
                    <Link
                        className="hamBurgerLink"
                        onClick={hamburgerClick}
                        to="/"
                    >
                        Home
                    </Link>

                    <Link
                        className="hamBurgerLink"
                        onClick={hamburgerClick}
                        to="/About"
                    >
                        About
                    </Link>

                    <Link
                        className="hamBurgerLink"
                        onClick={hamburgerClick}
                        to="/Episodes"
                    >
                        Episodes
                    </Link>

                    <Link
                        className="hamBurgerLink"
                        onClick={hamburgerClick}
                        to="/Projects"
                    >
                        Projects
                    </Link>

                    <Link
                        className="hamBurgerLink"
                        onClick={hamburgerClick}
                        to="/Contact"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}
