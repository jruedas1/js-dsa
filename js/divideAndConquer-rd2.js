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
//     while (left <= right){
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
    while (left <= right){
        if (arr[middle] === num) return middle;
        if (arr[middle] < num) left = middle + 1;
        if (arr[middle] > num) right = middle - 1;
        middle = Math.floor((right + left)/2);
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5],2)) // 1
console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1

console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)); // 16
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

// Another issue is that the pseudocode given stated to continue the loop while left is less than right. Trying this leads to failures in several cases. Adjusting it to while left <= right fixed the problem. Here is what ChatGPT had to say about that:

// The difference between the loop conditions `while (left < right)` and `while (left <= right)` in a binary search implementation has to do with **whether the middle element is checked when `left` and `right` are equal**.
//
// ### `while (left < right)`
// - This loop continues as long as `left` is strictly less than `right`.
// - The problem is that when `left` equals `right`, the middle element (i.e., the element where `left` and `right` meet) is not checked.
// - In this case, the algorithm can miss the target if it happens to be at that final position where `left == right`.
// - The loop exits before checking the last element, potentially leading to an incorrect result, especially if the target is in the last remaining position.
//
// ### `while (left <= right)`
// - This loop continues as long as `left` is less than or equal to `right`.
// - When `left` equals `right`, it still enters the loop and checks the middle element (which, at that point, is the same as `left` or `right`).
// - This ensures that even when there's only one element left in the search range, it will be checked.
// - When the loop terminates, it guarantees that the target is either found or is definitely not in the array.
//
// ### Example Scenario:
// Consider a sorted array `arr = [1, 2, 3, 4, 5]` and you're searching for `num = 5`.
//
// - With `while (left < right)`:
//   - Initially, `left = 0` and `right = 4`, `middle = 2` (checking `arr[2]` which is 3).
//   - `5` is greater than `3`, so `left = middle + 1 = 3`.
//   - Now `left = 3` and `right = 4`, `middle = 3` (checking `arr[3]` which is 4).
//   - `5` is greater than `4`, so `left = middle + 1 = 4`.
//   - Now `left = 4` and `right = 4`, but since the loop condition is `left < right`, it exits the loop **without checking the last element** (`arr[4] = 5`), leading to a failure.
//
// - With `while (left <= right)`:
//   - The process is the same up until `left = 4` and `right = 4`.
//   - Now, with the condition `left <= right`, it enters the loop and checks `arr[4]`, which is `5`, and returns the correct index.
//
// ### Key Difference:
// Using `while (left <= right)` ensures that **every element in the search range is checked**, including the last one, preventing the algorithm from exiting too early.