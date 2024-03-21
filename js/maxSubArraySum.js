//Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
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

function maxSubArraySum(arr, num){
    if (arr.length < num) return null;
    let maxSum = 0;
    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    let tempSum = maxSum;
    for (let j = 1; j < arr.length - num + 1; j++){
        tempSum = tempSum - arr[j-1] + arr[j + num - 1];
        if (tempSum > maxSum) maxSum = tempSum;
    }
    return maxSum;
}

// console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
// here, when j is 1, arr[j] is -2. We  need to subtract 3 arr[0] (arr[j-1]==arr[0] and add arr[2] 7 (arr[j]+2-1== 1+2-1. Since we start with 1, 1-3+7=5. We keep 5.

console.log(maxSubArraySum([3,-2,7,-4,1,-1,4,-2,1],2));