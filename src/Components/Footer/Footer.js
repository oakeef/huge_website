import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footerContainer">
            <hr className="footerHR"></hr>
            <div className="footerLinksContainer">
                <ul className="footerLinks">
                    <li className="footerLinksHeader">Quick Links</li>

                    <li className="footerLink">
                        <Link to="/About">Where to Listen</Link>
                    </li>

                    <li className="footerLink">
                        <Link to="/Episodes">Episodes </Link>
                    </li>

                    <li className="footerLink">
                        <a
                            href="https://bit.ly/hoppedupdiscord"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Discord Server
                        </a>
                    </li>
                </ul>

                <ul className="footerLinks">
                    <li className="footerLinksHeader">More</li>

                    <li className="footerLink">
                        <Link to="/Projects"> Projects</Link>
                    </li>

                    <li className="footerLink">
                        <a
                            href="https://www.patreon.com/hoppedupeast"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Patreon
                        </a>
                    </li>

                    <li className="footerLink">
                        <a
                            href="https://www.youtube.com/@HoppedUpGamingEast"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            YouTube
                        </a>
                    </li>
                </ul>

                <ul className="footerLinks">
                    <li className="footerLinksHeader">Contact</li>

                    <li className="footerLink">
                        <a href="mailto:hugecrew@hoppedupeast.com">Email</a>
                    </li>
                </ul>
            </div>
            <div>
                <hr className="footerHR"></hr>
                <p className="footerCopyright">
                    © {new Date().getFullYear()} Hopped-Up Gaming: East
                </p>
            </div>
        </div>
    );
}
