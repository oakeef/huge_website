import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import patreon from "../../images/Patreon.png";
import search from "../../images/search.png";

export default function NavBar() {
    return (
        <div className="navContainer">
            <ul className="navLinks">
                <li className="navLink">
                    <Link to="/Home"> Home </Link>
                </li>
                <li className="navLink">
                    <Link to="/About"> About </Link>
                </li>
                <li className="navLink">
                    <Link to="/Projects"> Projects </Link>
                </li>
                <a href="mailto:hugecrew@hoppedupeast.com">
                    <li className="navLink">Contact </li>
                </a>
            </ul>
            <a href="https://www.patreon.com/hoppedupeast">
                <button className="patreonDonate">
                    <img
                        className="NavPatreonlogo"
                        src={patreon}
                        alt="Patreon P icon"
                    />
                    <span>DONATE</span>
                </button>
            </a>
            <button className="searchButton">
                <img className="searchicon" src={search} alt="search icon" />
            </button>
            <Outlet />
        </div>
    );
}
