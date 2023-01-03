import React from "react";
import "./Playback.css";

export default function Playback(props) {
    const { podcastEpisodes } = props;
    console.log(podcastEpisodes);
    return (
        <div className="playbackContainer">
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
                <button className="playbackClose">X</button>
            </div>
        </div>
    );
}
