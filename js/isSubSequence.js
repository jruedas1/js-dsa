//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
//
// Examples:
//
//     isSubsequence('hello', 'hello world'); // true
//     isSubsequence('sing', 'sting'); // true
//     isSubsequence('abc', 'abracadabra'); // true
//     isSubsequence('abc', 'acb'); // false (order matters)
//
// Your solution MUST have AT LEAST the following complexities:
//
// Time Complexity - O(N + M)
//
// Space Complexity - O(1)

// To find this we are going to have to find the first occurrence of the first letter of the first string in the second string.
// Once we find that, we move the pointers forward one. If the second letter of the second string matches the second letter of the first string, we move both pointers forward. Otherwise, we only move the second pointer forward
// If we get to the end of the first string and find a match, we return true
// Otherwise, if we get to the end of the first string and find no match, we return false


function isSubSequence(str1, str2){
    if (str1 === str2) return true;
    if (str1.length > str2.length) return false;

    let i = 0;
    let j = 0;

    while (i <= str1.length){
        console.log(str1[i], str2[j]);
        if (str1[i] === str2[j]){
            if (i === str1.length -1) return true;
            i++;
            j++;
        } else {
            if (i === str2.length -1) return false;
            j++;
        }
    }
    return false;
}

// instructor's solution

function steelesIsSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

function isSubSequenceRecursive(str1, str2) {
        if(str1.length === 0) return true
        if(str2.length === 0) return false
        if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
        return isSubsequence(str1, str2.slice(1))
}
