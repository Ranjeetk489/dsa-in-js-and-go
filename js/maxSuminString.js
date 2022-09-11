//Program to find out the largest sum of word by utf value in given string
function high(x) {
    let [highest, sum] = [0, 0];
    let resString;
    x.split(' ').forEach(item => {
        for (let i = 0; i < item.length; i++) {
            sum += item.charCodeAt(i) - 96
        }
        if (sum > highest) {
            highest = sum
            resString = item;
        }
        sum = 0;
    })
    return resString
}