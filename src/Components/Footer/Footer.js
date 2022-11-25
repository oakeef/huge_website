import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerLinksContainer">
                <ul>
                    <li>Quick Links</li>
                    <li>Where to Listen</li>
                    <li>Episodes</li>
                    <li>Discord Server</li>
                </ul>

                <ul>
                    <li>Contact</li>
                    <li>Email</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <p>© 2022 HUGE Crew</p>
        </div>
    );
}
