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
console.log(rotateMatrix(matrix2)); // expected result [[2,4], [1, 3]]

