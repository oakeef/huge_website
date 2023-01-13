import axios from "axios";
import {
    convertDate,
    convertUnicode,
    stringChoppy,
    episodeCategory,
} from "./Helpers";

var XMLParser = require("react-xml-parser");

export const getAllEpisodes = async () => {
    const { response } = await axios.get(
        "https://feeds.libsyn.com/447303/rss",
        {
            "Content-Type": "application/xml; charset=utf-8",
        }
    );
    let episodes = [];
    let BBCEpisodes = [];
    let lastOfUsEpisodes = [];
    let xml = new XMLParser().parseFromString(response.data);
    xml.children[0].children.forEach((episode, index) => {
        if (index >= 22) {
            let parsedEpisode = {
                title: convertUnicode(episode.children[0].value),
                subtitle: stringChoppy(episode.children[12].value),
                category: episodeCategory(episode.children[0].value),
                image: episode.children[5].attributes.href,
                date: convertDate(episode.children[2].value),
                link: stringChoppy(episode.children[8].attributes.url),
            };
            episodes.push(parsedEpisode);
            if (parsedEpisode.category === "Huge BBC") {
                BBCEpisodes.push(parsedEpisode);
            }
            if (parsedEpisode.category.includes("The Last Of Us")) {
                lastOfUsEpisodes.push(parsedEpisode);
            }
        }
    });
    return episodes;
    // setHugeBBCEpisodes(BBCEpisodes.reverse());
    // setLastOfUsEpisodes(lastOfUsEpisodes.reverse());
};
