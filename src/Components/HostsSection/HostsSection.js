import React from "react";
import "./HostsSection.css";
import Host from "../Host/Host.js";
import ben from "../../images/ben.jpeg";
import evan from "../../images/evan.jpeg";
import matthew from "../../images/matthew.jpeg";
import tim from "../../images/tim.jpeg";

export default function HostsSection() {
    //TODO: add Dylans picture and write up
    let hugeHosts = [
        {
            img: ben,
            name: "Ben",
            bio: "Ben grew up on Playstation and is our resident hot sauce expert. A scholar and a gentleman, Ben loves a good puzzle and is a trivia master.",
        },
        {
            img: evan,
            name: "Evan",
            bio: "Evan is the shit disturber, he likes to stir the pot and get people going. He loves Dark Souls and contrary to popular belief, he doesn't actually like Sonic that much.",
        },
        {
            img: matthew,
            name: "Matthew",
            bio: "Matthew is our A/V expert. He makes sure every episode sounds good. He is our resident board game and card game master. His comedic timing is impeccable.",
        },
        {
            img: tim,
            name: "Tim",
            bio: "Tim is our resident Nintendo lover. He likes retro games and is probably the nicest guy in the world. But get a game where you can deceive and Tim will get you.",
        },
        {
            img: tim,
            name: "Dylan",
            bio: "Dylan's write up will go here!",
        },
    ];

    console.log(hugeHosts);

    const hosts = hugeHosts.map((item, i) => {
        return <Host key={i} hugeHost={item} />;
    });
    return (
        <div className="hostsSectionContainer">
            <h2 className="hostsSectionBanner">Meet the HUGE Crew</h2>
            <div className="hostsContainer">{hosts}</div>
        </div>
    );
}
