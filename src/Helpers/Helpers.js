export function convertLength(myString) {
    if (myString.length > 60) {
        return myString.slice(0, 58) + "...";
    } else return myString;
}

export function convertDate(date) {
    let dateArray = date.split(" ");
    let end = "";
    let day = "";
    let digitOne = Number(dateArray[1][0]);
    let digitTwo = Number(dateArray[1][1]);

    digitOne === 0 ? (day = digitTwo) : (day = Number(dateArray[1]));

    if (day === 1 || day === 21) {
        end = "st";
    } else if (day === 2 || day === 22) {
        end = "nd";
    } else if (day === 3 || day === 23) {
        end = "rd";
    } else end = "th";

    return `${dateArray[2]}  ${day + end}  ${dateArray[3]}`;
}

export function episodeCategory(title) {
    let category = "";
    let titleArray = title.split(" ");

    if (titleArray[1] === "BBC") {
        category = "Huge BBC";
    } else if (titleArray[1] === "Last") {
        category = "The Last Of Us Play The Last Of Us";
    } else if (titleArray[0] === "TLOU") {
        category = "The Last Of Us Part II";
    } else category = "HUGE Podcast";
    return category;
}
