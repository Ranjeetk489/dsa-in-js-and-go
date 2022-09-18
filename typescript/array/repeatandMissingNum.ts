

//nlogn complexity and o(1) space
function missingAndRepeating(arr: Array<number>){
    let sortedArr = arr.sort();
    let repeatedItem;
    let missingItem;
    for(let i=0; i< sortedArr.length; i++) {
        if(sortedArr[i] === sortedArr[i-1]) {
            repeatedItem = sortedArr[i]
        }
        if(!arr.includes(i+1)) {missingItem = i+1}
    }
    return [repeatedItem, missingItem]
}

console.log(missingAndRepeating([2,2,1,3,4]))

//optimal approach
//O(n) and O(1)
function optimalRepeatedAndMissingNum(arr:Array<number>): Array<number> {
    let arrLen = arr.length;
    let S = (arrLen * (arrLen +1))/2;
    let P = (arrLen* (arrLen+1)* (2*arrLen + 1))/6;
    let missingNum = 0;
    let repeatNum =0;
    for(let i = 0; i< arrLen; i++ ){
        S -= arr[i];
        P -= (arr[i] * arr[i])
    }
    missingNum = (S + P/S)/2;
    repeatNum = missingNum - S;
    return [missingNum, repeatNum]
}