import React from "react";
import "./NavBar.css";

export default function NavBar() {
    return (
        <div className="navContainer">
            <ul className="navLinks">
                <li className="navLink">Home</li>
                <li className="navLink">About</li>
                <li className="navLink">Projects</li>
            </ul>
            <button> DONATE</button>
        </div>
    );
}
