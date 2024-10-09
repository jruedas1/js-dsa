//Binary Search Exercise
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

// Initial solution with troubleshooting outputs
// function binarySearch(arr, num){
//     let left = 0;
//     let right = arr.length - 1;
//     let middle = Math.floor(right / 2);
//     console.log(`Start-- left: ${left}, middle: ${middle}, right: ${right} `);
//     while (left < right){
//         console.log(`Loop start: arr[middle] is ${arr[middle]}`);
//         if (arr[middle] === num) return middle;
//         if (arr[middle] < num) {
//             left = middle + 1;
//             console.log(`midNum less than num, moving left up`);
//         }
//         if (arr[middle] > num) {
//             right = middle - 1;
//             console.log(`midNum more than num, moving right down`)
//         }
//         console.log(`Calculated (${right} + ${left}) / 2`)
//         middle = Math.floor((right + left)/2);
//         console.log(`new middle is ${middle}`);
//         console.log(`arr[left] is ${arr[left]}, arr[middle] is ${arr[middle]}, and arr[right] is ${arr[right]}`);
//     }
//     return -1;
// }

function binarySearch(arr, num){
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor(right / 2);
    while (left < right){
        if (arr[middle] === num) return middle;
        if (arr[middle] < num) left = middle + 1;
        if (arr[middle] > num) right = middle - 1;
        middle = Math.floor((right + left)/2);
    }
    return -1;
}

console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)); // 2
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)); // -1

// Note that initially I tried left = middle and right = middle, which causes an infinite loop in some cases. Here's what ChatGPT had to say about it afterwards:
// The reason the binary search algorithm fails when you set `left = middle` or `right = middle` instead of adjusting them by `+1` or `-1` is that it causes an infinite loop. Here's why:
//
// In each iteration of binary search, the goal is to reduce the search space by eliminating half of the elements. When the middle element is compared to the target value, one of two cases happens:
//
// 1. **Target is greater than the middle element**: You know that the target must be in the right half, so you move the `left` pointer to the element **after** `middle`, i.e., `left = middle + 1`.
// 2. **Target is less than the middle element**: You know that the target must be in the left half, so you move the `right` pointer to the element **before** `middle`, i.e., `right = middle - 1`.
//
// ### What happens if you don't adjust by `+1` or `-1`?
//
// - If you set `left = middle` or `right = middle`, the `left` and `right` pointers may get stuck in the same place. For example, if `left = middle`, you don't actually eliminate the middle element from the search space when moving to the right. The same thing happens if you set `right = middle` when moving to the left. The pointers will never meet, causing the loop to continue indefinitely or terminate incorrectly.
//
// By adjusting the `left` and `right` pointers by `+1` or `-1`, you ensure that the middle element is excluded from the new search space, allowing the algorithm to eventually converge when `left` and `right` meet or cross each other.
//
// This adjustment is crucial to correctly narrowing down the search range and preventing infinite loops.