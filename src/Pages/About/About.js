import React from "react";
import "./About.css";
import cheers from "../../images/Cheers.jpg";

import hugeLogo from "../../images/hugeLogo.png";

export default function About() {
    return (
        <div className="aboutContainer">
            <h2 className="aboutHeader">About</h2>
            <div className="aboutTextContainer">
                <img
                    className="aboutImage"
                    src={hugeLogo}
                    alt="Hopped Up Gaming: East Logo"
                />
                <article className="aboutText">
                    <p>
                        <span className="aboutTextStart">
                            Hopped-Up Gaming: East&nbsp;
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
                    <p> </p>
                    <p className="linkBold ">
                        <a
                            href="https://link.chtbl.com/Huge-podcast"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Click here for all the places you can listen
                        </a>
                    </p>
                </article>
            </div>

            <div className="aboutWhereToListenContainer">
                <img
                    className="aboutLowerImage"
                    src={cheers}
                    alt="HUGE crew cheers-ing budlight cans"
                />
            </div>
        </div>
    );
}
