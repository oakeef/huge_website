import React from "react";
import "./HugeAss.css";

export default function HugeAss() {
    return (
        <div className="hugeAssContainer">
            <p>Huge Ass</p>
            <div className="projectDescription">
                <p>
                    HUGE ASS was spawned from the covid-19 pandemic. The HUGE
                    Crew wanted to make something together but also remote, so
                    we decided to do some asynchronous speed running. Each
                    player spends 30 mins playing a particular game and records
                    it. We then sync up the footage and do some fun commentary
                    over top and see who was faster. Eventually, finding out who
                    the HUGEst ASS truely is.
                </p>

                <p>
                    You can check out Season One on the HUGE Youtube Channel.
                    Season Two is availble by{" "}
                    <span>subscribing to Patreon.</span>
                </p>
                <iframe
                    width="450"
                    height="315"
                    title="YouTubeEmbed God of War"
                    src="https://www.youtube.com/embed/OBq-CJizT9w"
                ></iframe>
            </div>
            <h3>Season One</h3>
        </div>
    );
}
