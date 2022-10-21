// const calculateAverage = scores => {
//     let alice = 0, bob = 0, innings = 0;
//     for (let i = 0; i < scores.length; i++) {
//         if (scores[i] === "B") {
//             let [score, j] = getScore(i, scores);
//             console.log(score)
//             i = j - 1
//             bob += +score
//             innings++;
//         }
//         else if (scores[i] === "A") {
//             let [score, j] = getScore(i, scores);
//             console.log(score)
//             i = j - 1
//             alice += +score
//         }
        
//     }
//     console.log(innings)
//     let aliceAvg = Math.ceil(alice / innings);
//     let bobAvg = Math.ceil(bob / innings);
//     console.log(aliceAvg, bobAvg)
//     if (aliceAvg > bobAvg) {
//         return "Alice wins with an average of " + aliceAvg;
//     }
//     else (bobAvg > aliceAvg)
//         return "Bob wins with an average of " + bobAvg;
// }

// function getScore(i, scores) {
//     let score = ""
//     let j;
//     for (j = i + 1; j < scores.length; j++) {
//         if (!isNaN(Number(scores[j]))) score += scores[j]
//         else {
//             return [score, j]
//         }
//     }
//     return [score, j]
// }
const calculateAverage = s => {
    if (s === '') return 'No matches this season';
    var A = Array.from(s.matchAll(/(?<=A)\d+/g)).map(x => console.log(typeof x[0]))
    console.log(A)
    var B = Array.from(s.matchAll(/(?<=B)\d+/g)).map(x => +x[0]).reduce((a,b) => a+b, 0);
    
    A = Math.round(A / s.split('').filter(c => c === 'A').length);
    B = Math.round(B / s.split('').filter(c => c === 'B').length);
    if (A === B) return 'Well played, average scores are equal';
    if (A > B) return 'Alice wins with an average of ' + A;
    return 'Bob wins with an average of ' + B;
}

console.log(calculateAverage("B646A968B602A198B966A640B166A367B954A782B463A183B204A388B881A599B502A323B4"))