import React from "react";
import "./HugeProject.css";
import { Link } from "react-router-dom";
import sonic2 from "../../images/sonic2.jpeg";

export default function HugeProject(props) {
    return (
        <Link to={props.hugeProject.link}>
            <div className="hugeProjectContainer">
                <button className="hugeProjectsSeeMore">learn more</button>
                <img
                    className="hugeProjectImg"
                    src={sonic2}
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
