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
                    <li className="footerLink"> Projects</li>
                    <li className="footerLink">Patreon</li>
                    <li className="footerLink">YouTube</li>
                </ul>

                <ul className="footerLinks">
                    <li className="footerLinksHeader">Contact</li>
                    <li className="footerLink">Email</li>
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
