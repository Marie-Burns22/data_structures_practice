//All these functions are practice for working with arrays.
////////////////////////////////////////////////////////////////////
// Capitalize first letter of each string in an array. 
// Recursion method
function capitalize(array) {
    let capitalizedArray = [];
    if (array.length === 0) {
        return capitalizedArray;
    } else {
        let word = array[0];
        // console.log("word:", word)
        let first = word.slice(0, 1).toUpperCase();
        // console.log("first", first)
        let capitalizedWord = first + word.slice(1);
        // console.log("capWord", capitalizedWord)
        capitalizedArray.push(capitalizedWord);
    }
    capitalizedArray = capitalizedArray.concat(capitalize(array.slice(1)));
    return capitalizedArray;
}

// console.log("Test empty array", capitalize([]));  // undefined
// console.log("Test single element", capitalize(['a']));  // ['A']
// console.log("Test array with 3 words", capitalize(['javascript', 'apple', 'bat']));  // ['Javascript', 'Apple', 'Bat']

///////////////////////////////
// From Leetcode
// In a given integer array nums, there is always exactly one largest element.
// Find whether the largest element in the array is at least twice as much as every other number in the array.
// If it is, return the index of the largest element, otherwise return -1.

function dominantIndex(nums) {
    const largest = Math.max(...nums);
    const half = Math.floor(largest/2);
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > half && nums[i] !== largest) return -1;
    }
    return nums.findIndex(e => e === largest);
}

// console.log("Input: nums = [3, 1, 6, 0], expect 2:", dominantIndex([3, 1, 6, 0]))
// console.log("Input: nums = [1, 2, 3, 4], expect -1:", dominantIndex([1, 2, 3, 4]))
//////////////////////////////////////////////////////////////////////////////

const matrix3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrix2 = [[1,2], [3, 4]];

function rotateMatrix(matrix) {
    let rotatedMatrix = [];
    while(matrix[0].length >= 1) {
        let newArray = [];
        matrix.forEach(array => {
            // console.log("array:", array)
            let num = array.pop();
            // console.log("num:", num);
            newArray.push(num);
            // console.log("newArray:", newArray)
        })
        rotatedMatrix.push(newArray);
        // console.log("rotatedMatrix:", rotatedMatrix)
    }
    return rotatedMatrix
}

// console.log("Test 3x3, expect [[3, 6, 9], [2, 5, 8], [1, 4, 7]]:", rotateMatrix(matrix3));
// console.log(rotateMatrix(matrix2)); // expected result [[2,4], [1, 3]]

///////////////////////////////////////////////////////
// 1.8 Cracking the code. In a matrix of M x N, if there is an element that is equal to zero, set all the elements in its row and column to zero.

function zeroMatrix(matrix) {
    let columns = {};
    for (let i = 0; i < matrix.length; i ++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) {
                matrix[i].push(true);
                if (!columns[j]) columns[j] = true;
            }
        }
    }
    matrix.forEach(array => {
        let lastIdx = array.length-1;
        if (array[lastIdx] === true) {
            console.log(array)
            array.pop();
            array.forEach((num, index) => {
                console.log(num)
                array[index] = 0
                console.log(num)
                console.log(array)
            });
        }
        matrix
    })

    for(const key in columns) {
        matrix.map(array => {
            array[key] = 0;
        })
    }
    return matrix;
}

// console.log("Test 3 x 2:", zeroMatrix([[1, 2, 3], [0, 1, 2]])) // [[0, 2, 3], [0, 0, 0]] 
// console.log("Test 3 x 4:", zeroMatrix([[1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 0, 4]])) // [[1, 0, 1], [2, 0, 2], [3, 0, 3], [0, 0, 0]]

///////////////////////////////////////////////////////////
// recursive solution for rotateMatrix
function rotateMatrixRecursive(matrix) {
    let rotatedMatrix = [];
    if(matrix[0].length === 0) {
        return rotatedMatrix;
    }
    let newArray = [];
    matrix.forEach(array => newArray.push(array.pop()))
    rotatedMatrix.push(newArray);
    rotatedMatrix = rotatedMatrix.concat(rotateMatrixRecursive(matrix));
    return rotatedMatrix;
}


// console.log("Test 3x3, expect [[3, 6, 9], [2, 5, 8], [1, 4, 7]]:", rotateMatrixRecursive(matrix3));
// console.log(rotateMatrixRecursive(matrix2)); // expected result [[2,4], [1, 3]]

//////////////////////////
// from Leetcode. In put is an array of digits that represent a number. Add one to that number.
function plusOne(array){
    let lastIndex = array.length -1
    let last = array[lastIndex];
    if(last !== 9){
        array[lastIndex] = last + 1
    } else {
        let carryOne = true
        let counter = lastIndex
        while(carryOne){
            if (counter === 0) {
                array[0] = 0;
                array.unshift(1);
                return array;
            }
            let indexBefore = counter - 1
            array[counter] = 0;
            let digitBefore = array[indexBefore];
            if (digitBefore === 9) {
                digitBefore = 0; 
                array[indexBefore] = digitBefore;
                counter--;
            } else {
                digitBefore++;
                array[indexBefore] = digitBefore;
                carryOne = false;
            }
        }
    }
    return array
}


// console.log(plusOne([9]));// [1, 0]
// console.log(plusOne([1, 2, 9])); // [1,3,0]
// console.log(plusOne([1, 9, 9, 9])); // [2,0,0,0]
// console.log(plusOne([9, 9, 9])); // [1, 0, 0, 0]
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
// console.log(plusOne([9,9]))
//////////////////////////////
// Matching socks problem. Different color represented by digits, sock drawer represented by array. How many complete pairs?

function sockPairs(n, array){
    let counts = {};
    let pairCount = 0
    array.forEach(digit => {
        (counts[digit]) ? counts[digit]++ : counts[digit] = 1;
    })

    for(const key in counts){
        let pairs = Math.floor(counts[key] / 2)
        pairCount = pairCount + pairs;
    }
    return pairCount
}
// console.log("Test sockpairs", sockPairs(7, [1, 2, 1, 2, 1, 3, 2])) // 2


/////////////////////////////////////////////////////////

//function accepts an array and a target average value. Return true if there is a pair of integers that have an average equal to the target value.
//The input array is sorted

function averagePair(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    if(start === end) return false;

    while(end > start) {
        let avg = (arr[start] + arr[end]) / 2;
        if(avg === target) {
            return true;
        } else if (avg > target) {
            end --;
        } else {
            start ++;
        }
    }
    return false;
}

// console.log(averagePair([1 , 2 , 3, 4, 5, 6], 5)) // true
// console.log(averagePair([1 , 2 , 3, 4, 5, 6], 11)) // false