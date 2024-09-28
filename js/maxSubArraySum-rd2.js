// Write a function called maxSubarraySum
// which accepts an array of integers and a number called n.
// The function should calculate the maximum sum
// of n consecutive elements in the array.

// naive version
// function maxSubArraySum(arr, n){
//     if (arr.length === 0) return null;
//     let maxSum = 0;
//     for (let i = 0; i <= arr.length - n; i++){
//         let sum = 0;
//         for (let j = i; j < i + n; j++){
//             sum += arr[j];
//         }
//         if (sum > maxSum) maxSum = sum;
//     }
//     return maxSum;
// }

// sliding window version
function maxSubArraySum(arr, n){
    if (arr.length === 0) return null;
    let temp = 0;
    for (let i = 0; i < n; i++){
        temp += arr[i];
    }
    let max = temp;
    for (let j = 1; j <= arr.length - n; j++){
        temp = temp - arr[j-1] + arr[j+n-1];
        if (temp > max) max = temp;
    }
    return max;
}

const arr1 = [4, 2, 1, 6];
const arr2 = [1, 2, 5, 2, 8, 1, 5];
console.log(maxSubArraySum(arr2, 4));
console.log(maxSubArraySum(arr2, 2));
console.log(maxSubArraySum(arr1, 1));

function maxSubArraySumInstructorSolution(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
