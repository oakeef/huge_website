import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        // TODO: add a tag to Episodes when that is made
        <div className="footerContainer">
            <hr className="footerHR"></hr>
            <div className="footerLinksContainer">
                <ul className="footerLinks">
                    <li className="footerLinksHeader">Quick Links</li>
                    <Link to="/About">
                        <li className="footerLink">Where to Listen</li>
                    </Link>
                    <li className="footerLink">Episodes</li>
                    <a
                        href="https://bit.ly/hoppedupdiscord"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <li className="footerLink">Discord Server</li>
                    </a>
                </ul>

                <ul className="footerLinks">
                    <li className="footerLinksHeader">More</li>
                    <Link to="/Projects">
                        <li className="footerLink"> Projects</li>
                    </Link>
                    <a
                        href="https://www.patreon.com/hoppedupeast"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <li className="footerLink">Patreon</li>
                    </a>
                    <a
                        href="https://www.youtube.com/@HoppedUpGamingEast"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <li className="footerLink">YouTube</li>
                    </a>
                </ul>

                <ul className="footerLinks">
                    <li className="footerLinksHeader">Contact</li>
                    <a href="mailto:hugecrew@hoppedupeast.com">
                        <li className="footerLink">Email</li>
                    </a>
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
