import React from "react";
import HugeProject from "../../Components/HugeProject/HugeProject";
import "./Projects.css";

export default function Projects() {
    let projectsData = [
        {
            title: "XCOMMITEE",
            description:
                "An interesting take on playing the strategy game XCOM. We have one save file and pass it around for 1 hour turns and meet up at the end of each round and talk about what happened. Basically playing XCOM by Commitee. Season 1 covers the events of XCOM Enemy Unkown and Enemy Within Expansion. Season 2 covers the events of XCOM 2, Alien Hunters and War of the Chosen Expansion. You can find both Seasons on Apple Podcasts, Google Podcasts or anywhere Podcasts are found.",
            link: "n/a",
        },
        {
            title: "Beer Goggles",
            description:
                "A fun little experiment where one of the HUGE members picks a game they remember loving from their childhood and grabbing another HUGE member as a co-pilot to play through the game in it’s entiretly and see if they still love it or if it was just nostalgia. Hence the name Beer Googles.",
            link: "https://www.youtube.com/hoppedupgamingeast",
        },
        {
            title: "HUGE A-Synchronous Speedrunning",
            description:
                "HUGE ASS was spawned from the covid-19 pandemic. The HUGE Crew wanted to make something together but also remote, so we decided to do some asynchronous speed running. Each player spends 30 mins playing a particular game and records it. We then sync up the footage and do some fun commentary over top and see who was faster. Eventually, finding out who the HUGEst ASS truely is.",
            link: "https://www.youtube.com/hoppedupgamingeast",
        },
        {
            title: "Live Steams",
            description:
                " We have done a few 12 and 24 hour charity livestreams in support of the IWK Health Centre and Child’s Play Charity.",
            link: "https://www.youtube.com/hoppedupgamingeast",
        },
    ];

    const projects = projectsData.map((item, i) => {
        return <HugeProject index={i} hugeProject={item} />;
    });
    return (
        <div className="projectsContainer">
            <h2 className="projectsHeader">HUGE Projects</h2>
            <div className="hugeProjectsContainer">{projects}</div>
        </div>
    );
}
