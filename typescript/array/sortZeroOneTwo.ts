
//sub-optimal approach
function sortArray(arr: Array<number>): Array<number> {
    const itemsCount=[0,0,0];
    for(let i=0; i<arr.length;i++) {
        if(arr[i] == 0) itemsCount[0]++;
        else if(arr[i] === 1) itemsCount[1]++;
        else itemsCount[2]++
    }
    return [...Array(itemsCount[0]).fill(0), ...Array(itemsCount[1]).fill(1),...Array(itemsCount[2]).fill(2)]
}   

// console.log(sortArray([1,2,0,2,1,0,2,1,2]))

//optimal approach
// 1,2,2,1,2,1,2,0
function sortArrayOptimal(arr:Array<number>):Array<number> {
    let last= arr.length-1;
    let low = 0
    let mid=0
    while(mid<=last){
        if(arr[mid] == 0) {
            [arr[low],arr[mid]] = [arr[mid], arr[low]];
            console.log("hi")
            low++;
            mid++;
        }
        else if(arr[mid] == 1) {
            
            mid++;
        }
        else {
            [arr[mid],arr[last]] = [arr[last], arr[mid]];
            last -= 1; 
        }
    }
    return arr;
}

console.log(sortArrayOptimal([1,2,2,1,2,1,2,0]))