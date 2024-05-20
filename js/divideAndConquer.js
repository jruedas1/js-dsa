// Divide and Conquer - countZeroes
//
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
//
//     countZeroes([1,1,1,1,0,0]) // 2
//     countZeroes([1,0,0,0,0]) // 4
//     countZeroes([0,0,0]) // 3
//     countZeroes([1,1,1,1]) // 0
//
// Time Complexity - O(log n)

// The most efficient way to solve this is
// to find the index of the first zero

// What I came up with first time
// function countZeroes(arr){
//   let left = 0;
//   let right = arr.length - 1;
//   if (arr[0] === 0) return arr.length;
//   if (arr[arr.length-1] === 1) return 0;
//   let mid = 0;
//   while (left <= right){
//       mid = Math.floor(left + (right - left) / 2);
//       if (arr[mid] === 0) right = mid;
//       if (arr[mid] === 1) left = mid + 1;
//       if (arr[mid] === 1 && arr[mid + 1] === 0) {
//           let index = mid + 1;
//           return arr.length - index;
//       }
//   }
//   return undefined;
// }

// console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
// console.log(countZeroes([1, 0, 0, 0, 0])); // 4
// console.log(countZeroes([0, 0, 0])); // 3
// console.log(countZeroes([1, 1, 1, 1])); // 0

// ok let's see
// imagine we have
// [1, 1, 1, 1, 0, 0]
// we start left at index 0 and right at index length-1
// our initial mid is 2
// so we have
// [1, 1, 1, 1, 0, 0]
//  L     M        R
// mid is 1, not 0
// so we want to move left up to mid + 1
// [1, 1, 1, 1, 0, 0]
//           LM    R
// now left is at 3, mid is at 3, right is at 5
//

// Note: it did not occur to me
// at first that it was the left, not the mid
// that should be returned

// Better solution
//
function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(`start of loop:`);
        console.log(`mid: ${mid}, left: ${left}, right: ${right}`);
        if (arr[mid] === 1) {
            left = mid + 1; // Move right pointer to ensure we don't miss the transition point
        } else {
            right = mid - 1; // Move left pointer closer to the transition point
        }
        console.log(`end of loop:`);
        console.log(`mid: ${mid}, left: ${left}, right: ${right}`);
    }

    // At this point, left will be the index where the transition from 1s to 0s occurs
    // We subtract left from the total length of the array to get the number of zeros
    return arr.length - left;
}

// console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
// console.log(countZeroes([1, 0, 0, 0, 0])); // 4
// console.log(countZeroes([0, 0, 0])); // 3
// console.log(countZeroes([1, 1, 1, 1])); // 0

// Let's examine how it works with an example

// countZeroes([1, 1, 1, 1, 0, 0]); // 2
// first iteration
// [1, 1, 1, 1, 0, 0]
//  L     M        R
// Now, mid === 1 so we move left up to 3
// mid becomes 4
// [1, 1, 1, 1, 0, 0]
//           L  M  R
// Now mid is 0, so we move right down to 3
// [1, 1, 1, 1, 0, 0]
//          LMR
// Now left === right, so we have another iteration
// mid === 1, so left moves up
// left is now 4, while mid and right are 3
// [1, 1, 1, 1, 0, 0]
//           MR L
// Left has moved into the 0 position and serves
// as the index to calculate the number of zeroes

// now try an edge case -- no zeroes
// countZeroes([1, 1, 1, 1]); // 0
// we start with this:
// [1, 1, 1, 1]
//  L  M     R
// mid is 1, so we move left up to 2
// [1, 1, 1, 1]
//        LM R
// mid is still 1, so we move left up to 3
// [1, 1, 1, 1]
//          LMR
// mid is still 1, so we move left up to 4
// [1, 1, 1, 1]
//           MR L
// Now the loop ends because l > r
// l ends at 4, so we get a 0 count

// Divide and Conquer - sortedFrequency
//
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
//
//     sortedFrequency([1,1,2,2,2,2,3],2) // 4
//     sortedFrequency([1,1,2,2,2,2,3],3) // 1
//     sortedFrequency([1,1,2,2,2,2,3],1) // 2
//     sortedFrequency([1,1,2,2,2,2,3],4) // -1
//
// Time Complexity - O(log n)

function sortedFrequency(arr, num){
  if (num < arr[0] || num > arr[arr.length - 1]) return -1;
  let left = 0;
  let right = arr.length - 1;
  let firstIndexOfNum;
  let secondIndexOfNum;
  while (left <= right){
      let mid = Math.floor(left + (right - left) / 2);
      if (arr[mid] >= num){
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  firstIndexOfNum = left;

  if (arr[arr.length - 1] === num){
      return arr.length - firstIndexOfNum;
  } else {
      left = 0;
      right = arr.length - 1;
      while (left <= right){
          let mid = Math.floor(left + (right - left) / 2);
          if (arr[mid] >= num + 1){
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      }
      secondIndexOfNum = left;
  }
  return secondIndexOfNum - firstIndexOfNum;
}

// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
