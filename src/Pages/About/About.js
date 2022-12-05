import React from "react";
import "./About.css";

import hugeLogo from "../../images/hugeLogo.png";

export default function About() {
    let podCastData = [
        {
            name: "Spotify",
            link: "https://open.spotify.com/show/2dTRwdB4bHYsCI2CN9OV2m",
        },
        { name: "Libsyn", link: "https://sites.libsyn.com/447303/" },
        {
            name: "Apple Podcasts",
            link: "https://podcasts.apple.com/us/podcast/hopped-up-gaming-east/id797058638",
        },
        {
            name: "Google Podcasts",
            link: "https://podcasts.google.com/feed/aHR0cHM6Ly9ob3BwZWR1cGVhc3QuaGlwY2FzdC5jb20vcnNzL2hvcHBlZHVwZ2FtaW5nZWFzdC54bWw",
        },
        {
            name: "PlayerFM",
            link: "https://player.fm/series/hopped-up-gaming-east",
        },
        {
            name: "Stitcher",
            link: "https://www.stitcher.com/podcast/hoppedup-gaming-east",
        },
    ];

    const podCastLinks = podCastData.map((item) => {
        return (
            <li className="aboutPodCastLinks">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                </a>
            </li>
        );
    });

    return (
        //TODO: REPLACE IMAGE
        <div className="aboutContainer">
            <div className="aboutTextContainer">
                <img
                    className="aboutImage"
                    src={hugeLogo}
                    alt="Hopped Up Gaming: East Logo"
                />
                <article className="aboutText">
                    <p>
                        <span className="aboutTextStart">
                            Hopped-Up Gaming: East
                        </span>
                        is a beer and gaming podcast originating from Halifax
                        Nova Scotia. It started as a bunch of guys that wanted
                        to sit around, drink a few beers and talk about video
                        games but has since evolved into a more full featured
                        podcast with expertly crafted beer critique. Not really.
                        But it’s a lot of fun.
                    </p>
                    <p>
                        Over the last 8 years HUGE (fun acronym right?) has
                        grown and shifted to cover more than just video games.
                        Listen to any episode today and you’ll likely hear about
                        board games, card games, movies, pop culture and of
                        course we still talk about craft beer and video games.
                    </p>
                </article>
            </div>

            <div className="aboutWhereToListenContainer">
                <h2 className="aboutWhereToListenHeader"> Where to Listen </h2>
                <ul className="aboutPodLinksUL"> {podCastLinks} </ul>
            </div>
        </div>
    );
}
