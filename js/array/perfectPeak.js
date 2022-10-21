function perfectPeak(arr) {
    let max = arr[0];
    let min = arr[arr.length - 1];
    let maxIndex = 0;
    let minIndex = arr.length - 1;
    for (let i = 1; i < arr.length; i++) {
        // Here we are finding the max value and its index
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
        // Here we are finding the min value and its index
        if (arr[arr.length - 1 - i] < min) {
            min = arr[arr.length - 1 - i];
            minIndex = arr.length - 1 - i;
        }
        if (maxIndex === minIndex) return 1;
    }

    return 0;
}
const peakIndexInMountainArray = (A, low = 0, high = A.length - 1) => {
    if (!A.length)
        return -1

    const mid = ((low + high) / 2) | 0

    if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1])
        return mid

    if (A[mid] < A[mid - 1]){
        console.log(low)
        return peakIndexInMountainArray(A, low, mid)
    }

    if (A[mid] < A[mid + 1]) {
        return peakIndexInMountainArray(A, mid, high)
    }
}

console.log(perfectPeak([5, 1, 4, 3, 6, 8, 10, 12, 9]))
console.log(peakIndexInMountainArray([5, 1, 4, 3, 6, 8, 10, 12, 9]))