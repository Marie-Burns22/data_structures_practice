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

// console.log("pale, ple - expect true", oneAway("pale", "ple")); // true
// console.log("pales, pale - expect true", oneAway("pales", "pale")); //true
// console.log("pale, bale - expect true", oneAway("pale", "bale")); //true
// console.log("pale, bake - expect false", oneAway("pale", "bake")); //false
// console.log("paleeee, pale - expect false", oneAway("paleeee", "pale")); //false
///////////////////////////////////////////////////////////////
//1.6 String Compression page 91. Accept a string and return a string that is each character followed by the count of how many of that character are repeated consequetively


function compression(string) {
    const counts = {};
    let compressedArray = [];

    const addLetter = (letter) => {
        compressedArray.push(letter);
        compressedArray.push(counts[letter]);
        delete counts[letter];
    }

    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (i === 0) { 
            counts[letter] = 1;
            console.log("A", letter, counts)
        } else if (i === string.length -1) {
            let lastLetter = string[i - 1];
            (!counts[letter]) ? counts[letter] = 1 : counts[letter]++;
            if (letter !== lastLetter) addLetter(lastLetter);
            addLetter(letter);
            let compressedString = compressedArray.join("")
            return (string.length === compressedString.length) ? string : compressedString
        } else if (letter === string[i - 1]) {
            counts[letter]++ 
            console.log("C", letter, counts)
        } else {
            let lastLetter = string[i - 1]
            counts[letter] = 1;
            addLetter(lastLetter);
        }
    }
}

// console.log("Test aabcccccaaa, expect a2b1c5a3", compression("aabcccccaaa"));
// console.log("Test abccccca, expect abccccca because same length", compression("abccccca"));
// console.log("Test abcccca, expect a1b1c4a1", compression("abcccca"));
///////////////////////////////////////////

// Adding binary strings. Problem from leetcode

function addBinary(a, b){
    let result = "";
    let bLength = b.length
    let aLength = a.length
    let longest = Math.max(aLength, bLength);
    let carryOver = 0;
    let count = 0;
    let decrement = 1;

    while (count <= longest) {
        let sum;
        let aDig = a[aLength - decrement];
        let bDig = b[bLength - decrement];

        if (count === longest && carryOver === 0) return result
        if(!aDig && !bDig) {
            sum = carryOver
        } else if (!aDig) {
            sum = carryOver + parseInt(bDig)
        } else if (!bDig) {
            sum = carryOver + parseInt(aDig)
        } else {
            sum = carryOver + parseInt(aDig) + parseInt(bDig)
        }   
        
        if (sum === 0 || sum === 1){
            result = sum + result;
            carryOver = 0
        } else if (sum === 2) {
            result = "0" + result;
            carryOver = 1;
        } else {
            result = "1" + result;
            carryOver = 1
        }
        
        count++;
        decrement++
    }
    return result
}

// console.log(addBinary("110101", "111111"))
// console.log(addBinary("0", "0"))
///////////////////////////////

// From leetcode, return the index of the first occurance in haystack, or -1 if needle is not part of haystack. The inputs are each strings

function strStr(haystack, needle){
    if (!needle) return 0
    if (needle.length > haystack.length) return -1;
    let matchIndex = -1 ;
    let match = false;
    let needleIndex = 0;
    let haystackIndex = 0;
    while(needleIndex < needle.length) {
        if (haystackIndex >= haystack.length) return -1 ;
        if (needle[needleIndex] === haystack[haystackIndex]){
            if (match === false) matchIndex = haystackIndex;
            match = true;
            haystackIndex++;
            needleIndex++
        } else {
            needleIndex = 0;
            if (match === true) {
                haystackIndex = matchIndex + 1
                match = false
                matchIndex = -1;
            } else {
                haystackIndex++;
            }
        }
    }
    return matchIndex
};

// console.log(strStr("hello", 'll')) // should return 2
// console.log(strStr("hello", 'lo')) // should return 3
// console.log(strStr("aaaaa", 'bba')) // should return -1
// console.log(strStr("", 'bba')) // should return -1
// console.log(strStr("aaaaa", '')) // should return 0
// console.log(strStr("a", 'a')) // should return 0
// console.log(strStr("aaa", 'aaaa')) // should return -1
// console.log(strStr("mississippi", "issipi")) //-1
