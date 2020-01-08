// variables for testing
let testStringA = 'cbcddc'
let testStringB = 'ddccbc'


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

// console.log(isUnique(testStringA));
// console.log(isUnique(testStringB));

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
