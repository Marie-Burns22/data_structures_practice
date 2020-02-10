/////////////////////////
//From leet code diagonal traverse of a 2d array.
function diagonalTraverse(matrix) {
    if (matrix.length === 0) return [];
    if (matrix.length === 1) return matrix[0];
    let result = []
    let mLength = matrix.length
    let nLength = matrix[0].length
    let resultLength = mLength * nLength;
    let m = 0  //starting value
    let n = 0 //starting value
    let top = true; //starting value
    let goDown = false;
    let goUp = false;
    let bottom = false;
    result.push(matrix[m][n]);
    if (nLength === 1) {
        top = false;
        goDown = true;
    }

    while (result.length < resultLength) {
        if (result.length === resultLength) return result
        if (top) {
            n++;
            result.push(matrix[m][n])
            top = false;
            goDown = true;
        }

        if (goDown) {
            if (m < mLength - 1 && n > 0) {
                m++;
                n--;
                result.push(matrix[m][n])
                if (m === mLength - 1 && n === 0) {
                    goDown = false;
                    bottom = true;
                }
                if (result.length === resultLength) return result
            } else if (n < 1) {
                m++;
                result.push(matrix[m][n]);
                goDown = false;
                goUp = true;
            } else {
                n++;
                result.push(matrix[m][n]);
                if (result.length === resultLength) return result
                goDown = false;
                goUp = true;
            }
        }

        if (bottom) {
            n++;
            result.push(matrix[m][n]);
            if (result.length === resultLength) return result
            bottom = false;
            goUp = true;
        }

        if (goUp) {
            if (result.length === resultLength) return result
            if (m > 0 && n < nLength - 1) {
                m--;
                n++;
                result.push(matrix[m][n])
            } else if (n === nLength - 1 && m < mLength - 1) {
                m++;
                result.push(matrix[m][n])
                goUp = false;
                goDown = true;
            } else {
                n++;
                result.push(matrix[m][n]);
                goUp = false;
                goDown = true
            }
        }
    }
    return result;
}
// console.log(diagonalTraverse([]));
// console.log(diagonalTraverse([[2, 3]]));
// console.log(diagonalTraverse([[1, 2], [3, 4]]))
// console.log(diagonalTraverse([[2], [3]]))
// console.log(diagonalTraverse([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ])) // [1, 2, 4, 7, 5, 3, 6, 8, 9]
// console.log(diagonalTraverse([
//     [1, 1, 1, 1],
//     [2, 2, 2, 2],
//     [3, 3, 3, 3]
// ])) // [1, 1, 2, 3, 2, 1, 1, 2, 3, 3, 2, 3]  m= 3, n = 4
////////////////////////////////////////////////

// matrix spiral problem from leetcode

function spiralOrder(matrix) {
    let result = []
    let resultLength = matrix.length * matrix[0].length
    let currentRow = 0;
    let currentCol = 0;
    let goRight = true;
    let goDown = false;
    let goLeft = false;
    let goUp = false;
    let colLast = matrix[0].length - 1 ; 
    let colStart = 0;
    let bottomRow = matrix.length - 1;
    let topRow = 0; 
    
    while(result.length < resultLength) {
        
        if(goRight) {
            result.push(matrix[currentRow][currentCol])
            if( currentCol < colLast) {
                currentCol ++;
            } else {
                goRight = false;
                goDown = true;
                currentRow ++;
                topRow ++;
            }
            if (result.length  === resultLength) return result
        }

        if(goDown) {
            result.push(matrix[currentRow][currentCol])
            if( currentRow < bottomRow) {
                currentRow ++;
            } else {
                goDown = false;
                goLeft = true;
                currentCol --;
                colLast --;
            }
            if (result.length  === resultLength) return result
        }
        
        if(goLeft) {
            result.push(matrix[currentRow][currentCol])
            if (currentCol > colStart) {
                currentCol --;
            } else {
                goLeft = false;
                goUp = true;
                currentRow --;
                bottomRow --;
            }
            if (result.length  === resultLength) return result
        }
        
        if(goUp) {
            result.push(matrix[currentRow][currentCol])
            if ( currentRow < topRow) {
                currentRow --;
            } else {
                goUp = false;
                goRight = true;
                currentCol ++;
                colStart ++;
            }
            if (result.length  === resultLength) return result
        }
    }
    return result;
}

// console.log(spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ])) 
// [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(spiralOrder([
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3]
])) 
// [1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2]
