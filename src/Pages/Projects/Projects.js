import React from "react";
import HugeProject from "../../Components/HugeProject/HugeProject";
import XcommitteePic from "../../images/xcommittee.jpg";
import BeerGoggles from "../../images/BeerGoggles.png";
import hugeassPic from "../../images/hugeass.jpg";

import "./Projects.css";

export default function Projects() {
    let projectsData = [
        {
            title: "X-COMMITTEE",
            description:
                "An interesting take on playing the strategy game XCOM. We have one save file and pass it around for 1 hour turns and meet up at the end of each round to talk about what happened. Basically playing XCOM by committee. Season 1 covers the events of XCOM Enemy Unkown and Enemy Within Expansion. Season 2 covers the events of XCOM 2, Alien Hunters and War of the Chosen Expansion.",
            link: "/Xcommittee",
            photo: XcommitteePic,
        },
        {
            title: "Beer Goggles",
            description:
                "A fun little experiment where one of the HUGE members picks a game they remember loving from their childhood and plays through it in its entirety with another HUGE member as a co-pilot. They see if they still love the game after replaying it or if it was just nostalgia; hence the name Beer Googles.",
            link: "/BeerGoggles",
            photo: BeerGoggles,
        },
        {
            title: "HUGE A-Synchronous Speedrunning",
            description:
                "HUGE ASS was spawned from the covid-19 pandemic. The HUGE Crew wanted to make something together but also remote, so we decided to do some asynchronous speed running. Each player spends 30 mins playing a particular game and records it. We then sync up the footage and do some fun commentary over top and see who was faster. Eventually, finding out who the HUGEst ASS truely is.",
            link: "/HugeAss",
            photo: hugeassPic,
        },
        {
            title: "Other Projects",
            description:
                "Other HUGE Projects including The Last of Us Play The Last Of Us, HUGE Boys Book Club as well as few 12 and 24 hour charity livestreams in support of the IWK Children's Hospital and Extra Life.",
            link: "/OtherProjects",
            photo: XcommitteePic,
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
