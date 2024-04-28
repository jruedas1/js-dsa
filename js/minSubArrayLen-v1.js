//Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
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

// Let's say we are doing
//minSubArrayLen([2,3,1,2,4,3], 7)
// minSubArrayLen([2,3,2,1,4,3], 7)
// this needs to return 2 because 4 and 3 is 7
// we start out by finding the first length of a sequence that amounts to more than 7
// to do this, we loop over from the beginning, finding the sum, until the sum is greater than 7
// i should be at 3, and we set minLen at i+4
// if the sum at the very end of the first loop is less than num, we return 0
// so minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
// ok next, we need to find out if any sequence of minLen-1 numbers adds up to more than num
// to do this, we start a new loop with j at index 1. We have the end of the window at index j + minLen - 2 (-1 for the length vs index, -1 to not include the start index). So we have to  take away, for starters, arr[j-1]. We then have to see if currSum is still >= num. In this case, if we take away that initial 2, we get 6, which is less than 


function minSubArrayLen(arr, num){
    let minLen = 0;
    let initSum = 0;
    for (let i = 0; i < arr.length; i++){
        initSum += arr[i];
        if (initSum > num) {
         minLen = i+1;
         break;
        }
    }
    if (initSum < num) return 0;
    let currSum = initSum;



    return minLen;
}

// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3([4, 16, 22]
//(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray