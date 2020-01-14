//////////////////////////////////////////////////////////////////
// Checks if all characters in a string are unique
function isUnique(string) {
    if (string.length > 128) return false; // if using ASCII which only has 128 characters
    let checked = {};
    for (let i = 0; i < string.length; i++) {
        let val = string[i];
        if (checked[val]) return false;
        checked[val] = true;
    };
    return true;
};
// console.log(isUnique('cbcddc'));
// console.log(isUnique('ddccbc'));

/////////////////////////////////////////////////////////////////
function isPermutation(strA, strB) {
    if (strA.length !== strB.length) return false;
    let aChars = {};
    let bChars = {};
    for (let i = 0; i < strA.length; i++) {
        let val = strA[i];
        (aChars[val]) ? aChars[val]++ : aChars[val] = 1;
    }
    for (let i = 0; i < strB.length; i++) {
        let val = strB[i];
        (bChars[val]) ? bChars[val]++ : bChars[val] = 1;
    }
    for (const key in aChars) {
        if (aChars[key] !== bChars[key]) return false;
    }
    return true;
}
// console.log(isPermutation(testStringB, testStringA))

/////////////////////////////////////////////////////////////////
function isPalindrome(string) {
    if (string.length === 1) return true;
    if (string.length === 2) return string[0] === string[1];
    if (string[0] === string.slice(-1)) {
        return isPalindrome(string.slice(1, -1))
    }
    return false;
}
// console.log("Is cat a palindrome?", isPalindrome('cat'));
// console.log("Is abba a palindrome", isPalindrome('abba'));

/////////////////////////////////////////////////////////////////
// In a given string, replace all spaces with "%20"
function urlify(str) {
    return str.replace(/\s\b/g, "%20");
}

// console.log(urlify('I am your father.'));
// console.log(urlify(""));
// console.log(urlify("Happy"));

//////////////////////////////////////////////////////////////////////
// Is a given string a permutation of a palindrome? From 1.4 of Cracking the Coding Interview
function palPerm(string) {
    if (string.length < 1) return false;
    let counts = {};
    for (let i = 0; i < string.length; i++) {
        let val = string[i];
        (counts[val]) ? counts[val]++ : counts[val] = 1;
    }

    let evenOdd = new Object();
    evenOdd.even = 0;
    evenOdd.o = 0;
    for (key in counts) {
        (counts[key] % 2 === 0) ? (evenOdd.even++) : (evenOdd.o++);
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

///////////////////////////////////////////////////////////
// From cracking the code: if given 2 strings, check to see if there is only one difference between them (insertion, deletion, replacement)
function oneAway(str1, str2) {
    const lengthDiff = Math.abs(str1.length - str2.length);
    if (lengthDiff > 1) return false;
    let longString = (str1.length > str2.length) ? str1 : str2;
    let shortString = (str1.length > str2.length) ? str2 : str1;
    let longIndex = 0;
    let shortIndex = 0;
    let foundDiff = false;
    while (longIndex < longString.length && shortIndex < shortString.length) {
        if (longString[longIndex] !== shortString[shortIndex]) {
            if (foundDiff) return false;
            foundDiff = true;

            if (longString.length === shortString.length) shortIndex++;
        } else {
            shortIndex++;
        }
        longIndex++;
    }
    return true;
}

console.log("pale, ple - expect true", oneAway("pale", "ple")); // true
console.log("pales, pale - expect true", oneAway("pales", "pale")); //true
console.log("pale, bale - expect true", oneAway("pale", "bale")); //true
console.log("pale, bake - expect false", oneAway("pale", "bake")); //false
console.log("paleeee, pale - expect false", oneAway("paleeee", "pale")); //false