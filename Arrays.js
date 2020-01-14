//All these functions are practice for working with arrays.
//////////////////////////////////////////////////////////////////
// Checks if all characters in a string are unique
function isUnique(string) {
    if (string.length > 128) return false; // if using ASCII which only has 128 characters
    let checked = {};
    for (let i = 0; i < string.length; i ++) {
        let val = string[i];
        if(checked[val]) return false;
        checked[val] = true;
    };
    return true;
};
// console.log(isUnique('cbcddc'));
// console.log(isUnique('ddccbc'));

/////////////////////////////////////////////////////////////////
function isPermutation(strA, strB) {
    if(strA.length !== strB.length) return false;
    let aChars = {};
    let bChars = {};
    for (let i = 0; i < strA.length; i ++) {
        let val = strA[i];
        (aChars[val]) ? aChars[val] ++ : aChars[val] = 1;
    }
    for (let i = 0; i < strB.length; i ++) {
        let val = strB[i];
        (bChars[val]) ? bChars[val] ++ : bChars[val] = 1;
    }
    for (const key in aChars) {
        if (aChars[key] !== bChars[key]) return false;
    }
    return true;
}
// console.log(isPermutation(testStringB, testStringA))

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

/////////////////////////////////////////////////////////////////
function isPalindrome(string) {
    if(string.length === 1) return true;
    if(string.length === 2) return string[0] === string[1];
    if(string[0] === string.slice(-1)) {
        return isPalindrome(string.slice(1, -1))
    }
    return false;
}
// console.log("Is cat a palindrome?", isPalindrome('cat'));
// console.log("Is abba a palindrome", isPalindrome('abba'));
/////////////////////////////////////////////////////////////////
// In a given string, replace all spaces with "%20"
function urlify(str){
    return str.replace(/\s\b/g, "%20");
}

// console.log(urlify('I am your father.'));
// console.log(urlify(""));
// console.log(urlify("Happy"));

//////////////////////////////////////////////////////////////////////
// Is a given string a permutation of a palindrome? From 1.4 of Cracking the Coding Interview
function palPerm(string) {
    if(string.length < 1 ) return false;
    let counts = {};
    for (let i = 0; i < string.length; i++){
        let val = string[i];
        (counts[val]) ? counts[val]++ : counts[val] = 1;
    }

    let evenOdd = new Object();
    evenOdd.even = 0;
    evenOdd.o = 0;
    for(key in counts){
        (counts[key] % 2 === 0) ? (evenOdd.even++ ) : (evenOdd.o ++ );
    }
    console.log(evenOdd);
    return (evenOdd.o > 1) ? false : true;
}

// console.log("empty string, expect false:", palPerm("")); // false
// console.log("a, expect true:", palPerm("a")); // true
// console.log("abcd, expect false:", palPerm("abcd")); // false
// console.log("baba, expect true:", palPerm("baba")); // true
// console.log("bbaaa, expect true:", palPerm("bbaaa")); // true
// console.log("asdff, expect false:", palPerm("asdff")); // false
// console.log("123r123, expect true:", palPerm("123r123")); //true

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

console.log("Input: nums = [3, 1, 6, 0], expect 2:", dominantIndex([3, 1, 6, 0]))
console.log("Input: nums = [1, 2, 3, 4], expect -1:", dominantIndex([1, 2, 3, 4]))

