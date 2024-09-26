// Frequency Counter - validAnagram
//
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
//

function validAnagram(str1, str2){
    if (str1.length !== str2.length) return false;
    // const freq1 = {};
    const freq1 = str1.split('').reduce((obj, char) => {
        obj[char] = (obj[char] || 0) + 1;
        // obj[char] = ++obj[char] || 1;
        return obj;
    }, {});
    const freq2 = {};
    // for (const char of str1){
    //     freq1[char] = (freq1[char] || 0) + 1;
    // }
    for (const char of str2){
        freq2[char] = (freq2[char] || 0) + 1;
    }
    for (const objKey in freq1){
        if (freq2[objKey] !== freq1[objKey]) return false;
    }
    return true;
}


//     Examples:

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram("rat", "car"));  // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

// Note: You may assume the string contains only lowercase alphabets.
//
//     Time Complexity - O(n)