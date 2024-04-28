// Write a function called minSubArrayLen which accepts two parameters
// - an array of positive integers and a positive integer.
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
// this needs to return 2 because 4 and 3 is 7
// we start out by finding the first length of a sequence that amounts to more than 7
// to do this, we loop over from the beginning, finding the sum, until the sum is greater than 7

// this first version should return the length of the initial
// run of numbers that has a sum >= the num
// in this case, 4

function minSubArrayLenInit(arr, num){
    let initSum = 0;
    let i = 0;
    while (initSum < num){
        initSum += arr[i];
        i++;
    }
    return i;
}

// from here, we're going to want to slide forward starting at a length 1 less than initSum, finding a tempSum, if we find a tempSum in 3 that is >= num, then we make our minSum 3, and we reduce the window to 2 going forward

// This one has to start from 1, not from num, because it can't drag it from the end

// Also we can't be looping a second time like this, we have to calculate the sum by subtracting from the start and adding from the end, all the way through the array, just once, no loop within loop

//

const array1 = [2,3,1,2,4,3];
const array2 = [1,4,16,22,5,7,8,9,10];
const num1 = 7;
const num2 = 39;
const array7 = [1,4,16,22,5,7,8,9,10];
const num7 = 95;
// so for array 1 - We have i = 4. This is our initial value for min len
// now we want to narrow the window to one less than i.
// In this case that window length is three. So we start a loop at 1
// we continue until the end of the array, because you never know if the last
// item will be more than the num just on its own. You have to go all the way
// to the end to calculate that possibility.
// Of course if you ever find a number that is greater than the num on its own, then minLen is 1 and you end the program right there
// Now, we know the sum of the first four - 2, 3, 1, 2 = 8. And we have that as initSum
// To calculate the next sliding window sum, we calculate it as initSum - arr[0] + arr[4] - so if we start j at 0 it is initSum - arr[j] + arr[j+minLen]
// in this case we subtract 2 from initSum, which makes 6, and we add ... nothing. We want to add just 3, 1, and 2 and see if it's greater than 7. It's not, so we keep minLen at 4
// Going forward, though, we need to successively subtract at the front and add at the end of the window, which is minLen -1 in length
// So on the second loop we need to take our tempSum, which is 6, and we need to subtract 3 and add 4, so we should get 7 (1 + 2 + 4). That's what we get. So minLen is reduced to 3. So far so good. Now minLen is 3
// This means we now need to start testing sequences exclusively of 2. Which means ... here where j is 2 we just want to subtract 1.

// Now all I have to do is handle the situation at the end of an array where the minLen is greater than the number of elements left in the array

// In this case the length of the array is 6. We get to j === 4 with a length of 2, at that point we want something like a variable called remainingLength. RemainingLength is arr.len - j. If that is less than minLen, we want to do the subtract from beginning process, not the subtract from beginning and add from end process

function minSubArrayLen(arr, num){
    let initSum = 0;
    let i = 0;
    while (initSum < num){
        initSum += arr[i];
        i++;
    }
    console.log(`initSum is ${initSum}`)
    if (isNaN(initSum)) return 0;
    let minLen = i;
    if (minLen === 1) return minLen;
    let tempSum = 0;
    let minLenWentDown;
    for (let j = 0; j < arr.length; j++){
        if (j === 0) {
            tempSum = initSum - arr[j];
           } else if (minLenWentDown || arr.length - j < minLen) {
            tempSum = tempSum - arr[j];
           }
        else {
            tempSum = tempSum - arr[j] + arr[j + minLen - 1];
        }
        if (tempSum >= num) {
            minLen--;
            minLenWentDown = true;
        } else {
            minLenWentDown = false;
        }
    }
    return minLen;
}

console.log(minSubArrayLen(array7, num7));