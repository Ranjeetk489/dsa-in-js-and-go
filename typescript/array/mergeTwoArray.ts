type twoSortedArray = {
    arr1: number[],
    arr2: number[]
}

function mergeArray(arr1:Array<number>, arr2: Array<number>) {
    var new_array = [];
    var i = 0,
        j = 0,
        index = 0;
    while (new_array.length != (arr1.length + arr2.length)) {
        if (arr1[i] < arr2[j]) {
            new_array.push(arr1[i]);
            i++;
        } else {
            new_array.push(arr2[j]);
            j++;
        }
    }
    return new_array;
}

console.log(mergeArray([1,3,5,7],[2,4,6,8]))
