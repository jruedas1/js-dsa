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
    // for an O(n) time complexity solution you start with a
    // frequency distribution. This is O(n) space complexity
    // as well because it creates an object with as many
    // values as there are elements in the array
    const freq = {};
    for (let num of arr) {
        freq[num] = ++freq[num] || 1;
    }

    // if the targetDiff is 0 and there are more than one 0
    // in the array, then we can return true immediately
    // as we have found a pair where 0-0 === 0
    if (targetDiff === 0 && freq[0] > 1) return true;

    // Otherwise we loop over the array a second time
    // This makes it technically O(2n) but this simplifies to O(n)
    for (let num of arr) {
        // For each number we establish a target
        // Say the difference we have passed in is 7,
        // we are looking for numbers that are either
        // 7 more or 7 less than the number we are looking at
        let target1 = num + targetDiff;
        let target2 = num - targetDiff;

        // for any given number in the array, if we find
        // the difference we are looking for, we return true
        if (freq[target1] || freq[target2]) return true;
    }
    return false;
}

// console.log(findPair([0, 0], 0)) // true
// console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
// console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
// console.log(findPair([4, -2, 3, 10], -6)); // true
// console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
// console.log(findPair([-4, 4], -8)); // true

// Part 2
// n log n would be sorting it first, then using multiple pointers
// sort is n log n

function findPairNLogN(arr, targetDiff) {
    arr.sort((a, b) => a - b); // Sort the array
    // console.log(arr);
    let left = 0;
    let right = 1;

    while (left < arr.length && right < arr.length) {
        // console.log(`diff: ${arr[right]} - ${arr[left]}`)
        if (left !== right){
            const diff = arr[right] - arr[left];
            if (diff === Math.abs(targetDiff)) {
                return true;
            } else if (diff < Math.abs(targetDiff)) {
                left++;
            } else if (diff > targetDiff){
                right++;
            }
        } else { right++; }

    }

    return false;
}

// console.log(findPairNLogN([0, 0], 0)) // true
// console.log(findPairNLogN([6, 1, 4, 10, 2, 4], 2)); // true
// console.log(findPairNLogN([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
// console.log(findPairNLogN([4, -2, 3, 10], -6)); // true
// console.log(findPairNLogN([6, 1, 4, 10, 2, 4], 22)); // false
// console.log(findPairNLogN([-4, 4], -8)); // true

// This had to go through a number of iterations until able to
// generate correct results. Let's take it one step at a time

// At a base level it seemed logical to have the pointers
// start at the beginning and end of the sorted array,
// then move up and down depending on the difference between
// tested numbers. It looked like this:

function findPairNLogNv1(arr, targetDiff) {
    arr.sort((a, b) => a - b);
    console.log(arr);
    let left = 0;
    let right = arr.length - 1;

    while (left < right){
        const diff = arr[right] - arr[left];
        if (diff === targetDiff) {
            return true;
        } else if (diff < targetDiff){
            left++;
        } else {
            right --;
        }
    }
    return false;
}

// console.log(findPairNLogNv1([8, 6, 2, 4, 1, 0, 2, 5, 13], 1));
// This works for the above inputs:
// This gets sorted to
// [ 0, 1, 2, 2, 4, 5, 6, 8, 13 ]
// iteration 1: diff is 13, which is > targetDiff, so right moves to 8
// it. 2: diff is 8, right moves down to 6
// it. 3: diff is 6, right moves down to 5
// it. 4: diff is 5, right moves down to 4
// it. 5: diff is 4, right moves down to 2
// it. 6: diff is 2, right moves down to next 2
// it. 7: diff is 2, right moves down to 1
// it. 8, diff is 1, returns true
// But now let's try this one, it should be true as 6 - 4 is 2
// console.log(findPairNLogNv1([6, 1, 4, 10, 2, 4], 2)); // true
// first it sorts, yielding [ 1, 2, 4, 4, 6, 10 ]
// it. 1: diff is 9 so we move right down to 6
// it. 2, diff is 5 so we move right down to 4
// it. 3, diff is 4 so we move right down to next 4
// and we can immediately see the problem --
// we have skipped doing 6 - 4
// it. 4, diff is 4 so we move right down to 2
// it. 5, diff is 3 and again instead of moving left up to find 4-2,
// we have moved right down to try 2 - 1.
// Now right is at 2 and left is at 1. Diff is 1. Left moves up
// and we get a diff of 0 and on the next iteration the loop breaks
// and returns false.

// We may be tempted to include a bunch of sub-conditions in order
// to get left and right to move differently under different circumstances
// but one should see that whether to move right down or left up here is
// arbitrary. Therefore, the conditional test is actually meaningless and
// does not move the pointers to where the pair could be discovered.
// the reality is we need to start the pointers adjacent at the start.

function findPairNLogNv2(arr, targetDiff){
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = 1;

    while (left < arr.length && right < arr.length){
        const diff = arr[right] - arr[left];
            if (diff === targetDiff){
                return true;
            } else if (diff < targetDiff){
                right++;
            } else {
                left++;
            }
    }
    return false;
}

// console.log(findPairNLogNv2([6, 1, 4, 10, 2, 4], 2)); // true
// This will generate correct output for this input, but is still
// fatally flawed.
// this returns false when it should return true
// console.log(findPairNLogNv2([-4, 4], -8)); // true
// on it. 1, it does 4 - -4, which is 8 and is greater than the targetdiff
// so left moves up to the 1 position
// now both are pointing to 4
// diff gets calculated to 0, which is less than targetDiff
// so right moves up to out of bounds and the loop breaks, returning false

// we can solve this by looking at the absolute value of the targetdiff,
// not at the value of it. (this problem occurs when we include negative
// numbers)

function findPairNLogNv3(arr, targetDiff){
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = 1;

    while (left < arr.length && right < arr.length){
        const diff = arr[right] - arr[left];
        if (diff === Math.abs(targetDiff)){
            return true;
        } else if (diff < Math.abs(targetDiff)){
            right++;
        } else {
            left++;
        }
    }
    return false;
}

// this will now return the correct output for findPairNLogNv3([-4, 4], -8)

// but we still have a flaw

// console.log(findPairNLogNv3([0, 1, 5, 10, 2], 0)); // false
// here there is no pair with the difference zero
// but if you are looking for 0 and both pointers alight on same num,
// they will do 0-0 and conclude they've found a pair
// the sorted array is [ 0, 1, 2, 5, 10 ]
// it.1: left is 0, right is 1, diff is 1, so left moves up
// it. 2: left is 1, right is 1, diff is 0, so it returns true

// so we have to add an outer conditional that runs
// the checks only if left and right are not the same,
// otherwise moves right up

function findPairNLogNv4(arr, targetDiff){
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = 1;

    while (left < arr.length && right < arr.length){
        if (left !== right){
            const diff = arr[right] - arr[left];
            if (diff === Math.abs(targetDiff)){
                return true;
            } else if (diff < Math.abs(targetDiff)){
                right++;
            } else {
                left++;
            }
        } else right++;

    }
    return false;
}

console.log(findPairNLogNv4([0, 1, 5, 10, 2], 0)); // false