import React, { useState } from "react";
import cs from "classnames";
import "./Playback.css";

export default function Playback(props) {
    const { podcastEpisode } = props;
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
        player.pause();
    };
    const player = document.querySelector(".playbackControl");

    return (
        <div
            className={cs("playbackContainer", {
                hidden: isActive === false,
            })}
        >
            <div className="playbackInnerContainer">
                <div className="playbackEpInfo">
                    <span className="playbackEpTitle">
                        The Title of the Episode Goes Here
                    </span>
                    <span className="playbackEpCategory">Category Here</span>
                </div>

                <audio
                    className="playbackControl"
                    controls
                    src="https://traffic.libsyn.com/secure/ba2a93ab-b653-4327-b3b5-30e460927380/HUGE_468_-_Like_A_Dill_Pickle_Ice_Tea.mp3?dest-id=37494"
                ></audio>
                <button onClick={ToggleClass} className="playbackClose">
                    X
                </button>
            </div>
        </div>
    );
}
