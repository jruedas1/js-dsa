// Linear Search Exercise
//
// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.
//
// Don't use indexOf to implement this function!
//
// Examples:
//
//     linearSearch([10, 15, 20, 25, 30], 15) // 1
//     linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
//     linearSearch([100], 100) // 0
//     linearSearch([1,2,3,4,5], 6) // -1
//     linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
//     linearSearch([100], 200) // -1

function linearSearch(arr, num){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === num) return i;
    }
    return -1;
}

// console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
// console.log(linearSearch([100], 100)); // 0
// console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
// console.log(linearSearch([100], 200)); // -1

// Binary Search Exercise
//
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
//
// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
//
// Examples:
//
//     binarySearch([1,2,3,4,5],2) // 1
//     binarySearch([1,2,3,4,5],3) // 2
//     binarySearch([1,2,3,4,5],5) // 4
//     binarySearch([1,2,3,4,5],6) // -1
//     binarySearch([
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//       40, 44, 64, 79, 84, 86, 95, 96, 98, 99
//     ], 10) // 2
//     binarySearch([
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//       40, 44, 64, 79, 84, 86, 95, 96, 98, 99
//     ], 95) // 16
//     binarySearch([
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//       40, 44, 64, 79, 84, 86, 95, 96, 98, 99
//     ], 100) // -1

// initial implementation
// function binarySearch(sortedArr, val){
//     let left = 0;
//     let right = sortedArr.length - 1;
//     if (sortedArr[right] < val) return -1;
//     if (sortedArr[left] > val) return -1;
//     while (left < right){
//         let middle = Math.floor(left + (right-left) / 2);
//         if (sortedArr[left] === val) return left;
//         if (sortedArr[right] === val) return right;
//         if (sortedArr[middle] === val) return middle;
//         if (sortedArr[middle] > val) right = middle + 1;
//         if (sortedArr[middle] < val) left = middle - 1;
//     }
//     return -1;
// }

// This gave the correct outputs but has some issues.
// Firstly this:
    // if (sortedArr[middle] > val) right = middle + 1;
    // if (sortedArr[middle] < val) left = middle - 1;
// Here, the middle is greater than the value. That means you
// can discard the middle itself, along with everything ABOVE it.
// You are then looking for the part BELOW the middle as the val is SMALLER than the middle. So you move the right to one BELOW the middle
// Same with the other. If the middle is less than the value, you want to look at the upper (right) part of the range, and you discount middle, so you set left to one above middle, not one below middle


function binarySearch(sortedArr, val){
    let left = 0;
    let right = sortedArr.length - 1;
    if (sortedArr[right] < val) return -1;
    if (sortedArr[left] > val) return -1;
    while (left < right){
        let middle = Math.floor(left + (right-left) / 2);
        console.log(`Start of loop: left: ${left}, middle: ${middle}, right: ${right}`);
        // if (sortedArr[left] === val) return left;
        // if (sortedArr[right] === val) return right;
        if (sortedArr[middle] === val) return middle;
        if (sortedArr[middle] > val) right = middle - 1;
        if (sortedArr[middle] < val) left = middle + 1;
    }
    return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(binarySearch([
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//     40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10)); // 2
// console.log(binarySearch([
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//     40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95)); // 16
// console.log(binarySearch([
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//     40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100)); // -1

// This is better, but there is an issue with the
// loop condition.
// The two end-conditions that I set thinking that
// they were optimizations ended up being necessary:
//   if (sortedArr[left] === val) return left;
//   if (sortedArr[right] === val) return right;
// without these, the algorithm doesn't work
// this can be fixed by changing the loop
// condition to while(left <= right)
// The question is, why?
// Let's try this on one of the ones that breaks
 binarySearch([1, 2, 3, 4, 5], 2); // 1
// This one yields -1 if I take away the extra checks
// When we start, we have
// [1, 2, 3, 4, 5]
//  S     M     E
// OK I can see one apparent error immediately:
// I change the middle before checking it