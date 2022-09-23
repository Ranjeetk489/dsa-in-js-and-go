const countWords = (word) => {
    const obj = {};
    const wordArr = word.split(/[\s,]+/);
    wordArr.map(i => {
        if (obj.hasOwnProperty(i)) {
            obj[i] = obj[i] + 1;
        }
        else {
            obj[i] = 1;
        }
    })
    console.log(obj);
};

countWords("one,two,three fours")