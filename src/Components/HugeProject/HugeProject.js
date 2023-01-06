import React from "react";
import "./HugeProject.css";
import { Link } from "react-router-dom";

export default function HugeProject(props) {
    return (
        <Link to={props.hugeProject.link}>
            <div className="hugeProjectContainer">
                <button className="hugeProjectsSeeMore">learn more</button>
                <img
                    className="hugeProjectImg"
                    src={props.hugeProject.photo}
                    alt="placeholder"
                />
                <span className="hugeProjectTitle">
                    {props.hugeProject.title}
                </span>
                <div className="hugeProjectDescriptionContainer">
                    <span className="hugeProjectDescription">
                        {props.hugeProject.description}
                    </span>
                </div>
            </div>{" "}
        </Link>
    );
}
