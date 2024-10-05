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

// Sliding Window - maxSubarraySum
//
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
//
// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
//
//     maxSubarraySum([100,200,300,400], 2) // 700
//     maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
//     maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
//     maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
//     maxSubarraySum([2,3], 3) // null
//
// Constraints:
//
// Time Complexity - O(N)
//
// Space Complexity - O(1)

function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
    let maxSum = 0;
    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    if (num === arr.length) return maxSum;
    let tempSum = maxSum;
    for (let k = num;  k < arr.length; k++){
        tempSum = tempSum - arr[k-num] + arr[k];
        if (tempSum > maxSum) maxSum = tempSum;
    }
    return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([2,3], 3)); // null
console.log(maxSubarraySum([1, 2, 3, 4], 4)) // 10
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); //5


// Sliding Window - minSubArrayLen
//
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
//
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:
//
//     minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
//     minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
//     minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
//     minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
//     minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
//     minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
//     minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
//
// Time Complexity - O(n)
//
// Space Complexity - O(1)

// Sliding Window - findLongestSubstring
//
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
//
//     findLongestSubstring('') // 0
//     findLongestSubstring('rithmschool') // 7
//     findLongestSubstring('thisisawesome') // 6
//     findLongestSubstring('thecatinthehat') // 7
//     findLongestSubstring('bbbbbb') // 1
//     findLongestSubstring('longestsubstring') // 8
//     findLongestSubstring('thisishowwedoit') // 6
//
// Time Complexity - O(n)