function formatDuration(seconds) {
    let [min, sec, hour] = [0, seconds, 0];
    let [hourFormat, minuteFormat, secondFormat] = [undefined,undefined, undefined];
    hour = Math.trunc(sec / 3600);

    min = Math.trunc((sec - (3600 * hour)) / 60);

    sec = Math.trunc(sec - (3600 * hour) - (min * 60));

    sec ? sec >1? secondFormat =  `${sec} seconds` :  secondFormat =  `${sec} seconds`;
    
    // if (min > 0 && hour > 0 && seconds > 0) {
    //     hour > 1 ? hourFormat = `${hour} hours` : ""
    //     min > 1 ? minuteFormat = `${min} minutes` : ""
    //     sec > 1 ? secondFormat = `${sec} seconds` : ""
    // }
    // else if (min > 0 && hour > 0) {
    //     min > 1 ? minuteFormat = `${min} minutes` : ""
    //     sec > 1 ? secondFormat = `${sec} seconds` : ""
    // }
    // else if (seconds > 0) {
    //     min > 1 ? minuteFormat = `${min} minutes` : ""
    //     sec > 1 ? secondFormat = `${sec} seconds` : ""
    // }
    return  `${hour}:${min}:${sec}`
}
