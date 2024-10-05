// Frequency Counter - sameFrequency
//
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
//
//     Your solution MUST have the following complexities:
//
//     Time: O(N)
//
// Sample Input:
//
//     sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// my solution at first
// function sameFrequency(num1, num2){
//     if (num1.toString().length !== num1.toString().length) return false;
//     const num1Freq = num1.toString().split('').reduce((accObj, stringNum)=>{
//         accObj[stringNum] ? accObj[stringNum]++ : accObj[stringNum] = 1;
//         return accObj;
//     }, {});
//     const num2Freq = {}
//     for (let stringNum of num2.toString()){
//         num2Freq[stringNum] = ++num2Freq[stringNum] || 1;
//     }
//     for (let num1Count in num1Freq){
//         if (!num2Freq[num1Count]) return false;
//         if (num2Freq[num1Count] !== num1Freq[num1Count]) return false;
//     }
//     return true;
// }

// After consulting with ChatGPT to find a way to do it in 2 loops instead of 3
// function sameFrequency(num1, num2){
//     const num1Arr = num1.toString().split('');
//     const num2Arr = num2.toString().split('');
//     if (num1Arr.length !== num2Arr.length) return false;
//     const freqCounter = {}
//     for (let i = 0; i < num1Arr.length; i++){
//         freqCounter[num1Arr[i]] = (freqCounter[num1Arr[i]] || 0) + 1;
//         freqCounter[num2Arr[i]] = (freqCounter[num2Arr[i]] || 0) - 1;
//     }
//     return parseInt(Object.values(freqCounter).join('')) === 0;
// }

// However, the "clever" way I evaluate in the end
// in an effort to get around the final loop is also O(n) so
// for clarity and effectiveness it is best to do an actual loop

function sameFrequency(num1, num2){
    const num1Arr = num1.toString().split('');
    const num2Arr = num2.toString().split('');
    if (num1Arr.length !== num2Arr.length) return false;
    const freqCounter = {}
    for (let i = 0; i < num1Arr.length; i++){
        freqCounter[num1Arr[i]] = (freqCounter[num1Arr[i]] || 0) + 1;
        freqCounter[num2Arr[i]] = (freqCounter[num2Arr[i]] || 0) - 1;
    }
    for (let freq in freqCounter){
        if (freqCounter[freq] !== 0) return false;
    }
    return true;
}

// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(34,14));
// console.log(sameFrequency(22,222));

// Frequency Counter / Multiple Pointers - areThereDuplicates
//
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
//
// Examples:
//
//     areThereDuplicates(1, 2, 3) // false
//     areThereDuplicates(1, 2, 2) // true
//     areThereDuplicates('a', 'b', 'c', 'a') // true
//
// Restrictions:
//
// Time - O(n)
//
// Space - O(n)
//
// Bonus:
//
// Time - O(n log n)
//
// Space - O(1)

// Here is the O(n) time complexity and
// O(n) space complexity solution
// function areThereDuplicates(...arr){
//     const freqDist = {}
//     for (let el of arr){
//         freqDist[el] = (freqDist[el] || 0) + 1;
//     }
//     for (let freq in freqDist){
//         if (freqDist[freq] !== 1) return true;
//     }
//     return false;
// }

// function areThereDuplicates(...arr){
//     if (typeof arr[0] === 'number'){
//         arr.sort((a, b) => a - b);
//     } else if (typeof arr[0] === 'string'){
//         arr.sort((a, b) => a.localeCompare(b));
//     } else {
//         return "This program can only test numbers and strings."
//     }
//
//     for (let i = 0, j = 1; j < arr.length; j++, i++){
//         if (arr[i] === arr[j]) return true;
//     }
//     return false;
// }

// instructor's one-liner solution
function areThereDuplicates(...args){
    return new Set(args).size !== args.length;
}

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

//Multiple Pointers - averagePair
//
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
//
// Bonus Constraints:
//
// Time: O(N)
//
// Space: O(1)
//
// Sample Input:
//
//     averagePair([1,2,3],2.5) // true
//     averagePair([1,3,3,5,6,7,10,12,19],8) // true
//     averagePair([-1,0,3,4,5,6], 4.1) // false
//     averagePair([],4) // false

function averagePair(arr, num){
    if (arr.length === 0) return false;
    let i = 0, j = arr.length - 1;
    while (i < j) {
        let average = (arr[j] + arr [i]) / 2;
        if (average === num) return true;
        else if (average < num) i++;
        else j--;
    }
    return false;
}

// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));


// Multiple pointers -- isSubSequence
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

function isSubsequence(str1, str2){
    let i = 0, j = 0;
    while (i < str1.length){
        if (str1[i] === str2[j]){
            if (i === str1.length - 1) return true;
            i++;
            j++;
        } else {
            if (!str2[j]) return false;
            j++;
        }
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));

// check if the first two are the same
// yes - then advance both
// no - then advance the second

//   i
// abc
// acb
//    j


//  i
// sing
// sting
//   k

//   i
// abc
// abracadabra
//   k


