
function spiralMatrix(A) {
    // if(A.length === 1) return A;
    let t = 0, b = A.length - 1, l = 0; r = A[0].length - 1, res = [];
    let dir = 0
    console.log("j")
    while (t <= b && l <= r) {
        if (dir === 0) {
            for (let i = l; i <= r; i++) {
                res.push(A[t][i])
            }
            t++;
            dir++;
        }
        else if (dir === 1) {
            for (let i = t; i <= b; i++) {
                res.push(A[i][r])
            }
            r--;
            dir++
        }
        else if (dir === 2) {
            for (let i = r; i >= l; i--) {
                res.push(A[b][i])
            }
            b--;
            dir++
        }
        else if (dir === 3) {
            for (let i = b; i >= t; i--) {
                res.push(A[i][l])
            }
            l++;
            dir = 0
        }
    }
    console.log(res)
    return res
}


/* At first you're taking first element from 2d array and pushing to result array
after that you're looping over the rest of the array and pushing the last element of each array to result array 
In next step you're reversing the array and again and pushing it to reverse array and then chopping first element of array which has become last because of reversing
you keep repeating these steps and reach the result
 */
var spiralOrder = function (matrix) {
    const res = []
    while (matrix.length) {
        //takes out first row of the matrix
        const first = matrix.shift()
        //pushes the first row into the result array
        res.push(...first)
        for (const m of matrix) {
            //takes out the last element of each row and pushes it into the result array
            let val = m.pop()
            //if the row is empty, it will be undefined, so we need to check for that
            // console.log(m)
            // console.log(val)
            
                res.push(val)
                //takes out the first element of each row and pushes it into the result array
            //we need to reverse the array because we want to take out the first element of each row, but the first element of each row is the last element of the array
            m.reverse()
        }
        //reverses the matrix so that we can take out the first row of the matrix
        matrix.reverse()
        console.log(matrix)
    }
    // console.log(res)
    return res
};

spiralOrder([
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
])