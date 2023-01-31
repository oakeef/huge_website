import React from "react";
import "./NavBar.css";
import hamburger from "../../images/hamburger.png";
import exit from "../../images/exit.png";
import { Link } from "react-router-dom";
import patreon from "../../images/Patreon.png";
import hugeLogo from "../../images/hugeLogo.png";

const links = ["Home", "About", "Episodes", "Projects", "Contact"];

function hamburgerClick() {
    var hamburgerLinks = document.getElementById("hamburgerLinks");
    var hamburgericon = document.getElementById("hamburgericon");

    hamburgerLinks.classList.toggle("hidden");

    hamburger.src === hamburger
        ? (hamburgericon.src = exit)
        : (hamburgericon.src = hamburger);
}

function menuHide() {
    var hamburgerLinks = document.getElementById("hamburgerLinks");

    hamburgerLinks.classList.toggle("hidden");
}

export default function NavBar() {
    return (
        <div className="navContainer">
            <div className="navMainContainer">
                <ul className="navLinks">
                    {links.map((link, i) => {
                        return (
                            <li className="navLinkOuter">
                                <Link
                                    className="navLink"
                                    to={link === "Home" ? "/" : "/" + link}
                                    key={i}
                                >
                                    {link}
                                </Link>
                            </li>
                        );
                    })}
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
                <Link to="/">
                    <img
                        onClick={menuHide}
                        src={hugeLogo}
                        className="navbarHamburgerLogo"
                        alt="Hopped Up Gaming:East Logo"
                    />
                </Link>
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
                    {links.map((link, i) => {
                        return (
                            <Link
                                className="hamburgerLink"
                                onClick={hamburgerClick}
                                to={link === "Home" ? "/" : "/" + link}
                                key={i}
                            >
                                <span className="hamburgerLinkText">
                                    {link}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
