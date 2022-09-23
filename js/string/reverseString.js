function reverseString(str) {
    return str.split(' ').reverse().join(" ");
}



function reverseString2(str) {
    let res = ""
    let start = str.length;

    for (let i = str.length; i >= 0; i--) {
        if (str.charAt(i) == " ") {
            console.log(res)
            if (start == str.length) {
                res += str.substring(i + 1, start)
                start = i-2;
            }
                res += " " + str.substring(i+1, start) + " ";
        }

    }
    console.log(res)
}
