const specialArray = (nums) => {
    const len = nums.length;
    const count = new Uint8Array(len + 1);
    
    for (const num of nums) {

    
        console.log(count)

    
        ++count[num > len ? len : num];
    }
    for (let i = len, sum = 0; i >= 0; --i) {
        sum += count[i];
        if (sum === i) return i;
    }
    return -1;
};

console.log(specialArray([0, 3, 5]))