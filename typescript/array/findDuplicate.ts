// !Find the duplicate in an array of N+1 integers

// Example 1: 

// Input: arr=[1,3,4,2,2]

// Output: 2

// Explanation: Since 2 is the duplicate number the answer will be 2.

// Example 2:

// Input: [3,1,3,4,2]

// Output:3

// Explanation: Since 3 is the duplicate number the answer will be 3.
const findDuplicate = (arr: number[]): number => {
    let result = arr.sort();
    let num = -1;
    for(let i=0; i< arr.length; i++) {
        if(result[i] === result[i+1]) {
            num= result[i];
            break;
        }
    }
    return num;
}
// console.log(findDuplicate([1,2,3,5,4]))

const findDuplicateCyclic  = (arr:number[]):number => {
    let fast=2;
    let slow=1;
    while(arr[fast] !== arr[slow]) {
        fast= fast + 2;
        slow +=1
        if(fast>arr.length) fast=1;
        if(fast == arr.length) fast = 0;
        if(slow === arr.length) slow= 0;
    }
    fast = 0;
    while(arr[fast] !== arr[slow]) {
        fast+=1;
        slow+=1;
        if(fast == arr.length) fast = 0;
        if(slow === arr.length) slow= 0;
    }
    return arr[fast];
}

console.log(findDuplicateCyclic([1,2,3,5,4]))