function moveZeros(arr) {
    let count = 0;
    let tempArr = [];
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] !== 0) {
            tempArr.push(arr[i])
        }
        else count++;
    }
    console.log(tempArr);
    const newArr = [...tempArr, ...Array(count).fill(0)]
    return newArr
}

console.log(moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]))



