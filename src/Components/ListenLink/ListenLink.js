import React from "react";
import "./ListenLink.css";

export default function ListenLink(props) {
    return (
        <span className="listenOnChannel">
            <a
                href={props.listenLink.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="logo"
                    src={props.listenLink.logo}
                    alt="apple logo"
                />
            </a>
            <a
                href="https://podcasts.apple.com/us/podcast/hopped-up-gaming-east/id797058638"
                target="_blank"
                rel="noopener noreferrer"
            >
                <p>{props.listenLink.name}</p>
            </a>
        </span>
    );
}
