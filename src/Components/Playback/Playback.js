import React, { useEffect } from "react";
import "./Playback.css";

export default function Playback(props) {
    const { selectedEpisode, setSelectedEpisode } = props;

    useEffect(() => {
        const player = document.querySelector(".playbackControl");
        player.play();
    }, []);

    return (
        <div className="playbackContainer">
            <div className="playbackInnerContainer">
                <div className="playbackEpInfo">
                    <span className="playbackEpTitle">
                        {selectedEpisode.title}
                    </span>
                    <span className="playbackEpCategory">
                        {selectedEpisode.category}
                    </span>
                </div>

                <audio
                    className="playbackControl"
                    controls
                    src={selectedEpisode.link}
                ></audio>
                <button
                    onClick={() => setSelectedEpisode(null)}
                    className="playbackClose"
                >
                    X
                </button>
            </div>
        </div>
    );
}
