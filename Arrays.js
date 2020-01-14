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
