import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footerContainer">
            <hr className="footerHR"></hr>
            <div className="footerLinksContainer">
                <ul className="footerLinks">
                    <li className="footerLinksHeader">Quick Links</li>
                    <li className="footerLink">Where to Listen</li>
                    <li className="footerLink">Episodes</li>
                    <li className="footerLink">Discord Server</li>
                </ul>

                <ul className="footerLinks">
                    <li className="footerLinksHeader">More</li>
                    <li className="footerLink"> Projects</li>
                    <li className="footerLink">Patreon</li>
                    <li className="footerLink">Twitter</li>
                </ul>

                <ul className="footerLinks">
                    <li className="footerLinksHeader">Contact</li>
                    <li className="footerLink">Email</li>
                </ul>
            </div>
            <div>
                <hr className="footerHR"></hr>
                <p className="footerCopyright">
                    © {new Date().getFullYear()} HUGE Crew
                </p>
            </div>
        </div>
    );
}
