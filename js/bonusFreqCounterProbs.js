// Frequency Counter - constructNote
//
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.
//
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
//
// Bonus Constraints:
//
// If M is the length of message and N is the length of letters:
//
// Time Complexity: O(M+N)
//
// Space Complexity: O(N)
//
// Examples:
//
// console.log(constructNote('aa', 'abc')); // false
// console.log(constructNote('abc', 'dcba')); // true
// console.log(constructNote('aabbcc', 'bcabcaddff')); // true

function constructNote(message, letters){
    function charCountObject(string){
        return string.split('')
            .reduce((obj, char) => {
                obj[char] = ++obj[char] || 1
                return obj;
            },{});
    }
    const messageCharFreqCount = charCountObject(message);
    const lettersFreqCount = charCountObject(letters);

    for (const messageChar in messageCharFreqCount){
        if (!lettersFreqCount[messageChar] || lettersFreqCount[messageChar] < messageCharFreqCount[messageChar]) return false;
    }

    return true;
}

// Frequency Counter - findAllDuplicates
//
// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.
//
//     findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
//     findAllDuplicates([4, 3, 2, 1, 0]) // []
//     findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
//
// Time Complexity - O(n)

function findAllDuplicates(arr){
    const freq = arr.reduce((accObj, num) => {
       accObj[num] = ++accObj[num] || 1;
       return accObj;
    }, {});
    const duplicates = [];
    for (const num in freq){
        if (freq[num] > 1) duplicates.push(parseInt(num));
    }
    return duplicates;
}

// console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
// console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
// console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1

// Frequency Counter / Multiple Pointer - findPair
//
// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.
//
//     findPair([6,1,4,10,2,4], 2) // true
//     findPair([8,6,2,4,1,0,2,5,13],1) // true
//     findPair([4,-2,3,10],-6) // true
//     findPair([6,1,4,10,2,4], 22) // false
//     findPair([], 0) // false
//     findPair([5,5], 0) // true
//     findPair([-4,4], -8) // true
//     findPair([-4,4], 8) // true
//     findPair([1,3,4,6],-2) // true
//     findPair([0,1,3,4,6],-2) // true
//
// Part 1 - solve this with the following requirements:
//
// Time Complexity Requirement - O(n)
//
// Space Complexity Requirement - O(n)
//
// Part 2 - solve this with the following requirements:
//
// Time Complexity Requirement - O(n log n)
//
// Space Complexity Requirement - O(1)

// Part 1

function findPair(arr, targetDiff) {
    const freq = {};
    for (let num of arr) {
        freq[num] = ++freq[num] || 1;
    }

    for (let num of arr) {
        let target1 = num + targetDiff;
        let target2 = num - targetDiff;

        if ((num !== 0 && (freq[target1] || freq[target2])) || (num === 0 && freq[num] > 1)) {
            return true;
        }
    }

    return false;
}

// console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
// console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
// console.log(findPair([4, -2, 3, 10], -6)); // true
// console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
// console.log(findPair([-4, 4], -8)); // true

// Part 2
// n log n would be sorting it first, then using multiple pointers
// sort is n log n

function findPairOLogNTCO1SC(arr, n) {
    arr.sort((a, b) => a - b); // Sort the array

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const diff = arr[right] - arr[left];
        if (diff === n) {
            return true;
        } else if (diff < n) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}