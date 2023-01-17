import React from "react";
import "./ListenLink.css";

export default function ListenLink(props) {
    const { listenLink } = props;
    return (
        <span className="listenOnChannel">
            <a href={listenLink.link} target="_blank" rel="noopener noreferrer">
                <img className="logo" src={listenLink.logo} alt="apple logo" />
            </a>
            <a href={listenLink.link} target="_blank" rel="noopener noreferrer">
                <p>{listenLink.name}</p>
            </a>
        </span>
    );
}
