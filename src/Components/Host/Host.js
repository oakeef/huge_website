import React from "react";
import "./Host.css";

export default function Host(props) {
    return (
        <div className="hostContainer">
            <img
                className="hostImg"
                src={props.hugeHost.img}
                alt="hostHeadshot"
            />
            <h4 className="hostName">{props.hugeHost.name}</h4>
            <span className="hostBio">{props.hugeHost.bio}</span>
        </div>
    );
}
