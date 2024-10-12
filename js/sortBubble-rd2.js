// Start looping with a variable called i
// from the end of the array towards the beginning
// Start an inner loop with a variable called j
// from the beginning until i - 1
// if arr[j] is greater than arr[j+1], swap those two values
// Return the sorted array

// initial solution
// function bubbleSort(arr){
//     for (let i = arr.length - 1; i >= 0; i--){
//         for (let j = 0; j <= i; j++){
//             console.log(arr[j], arr[j+1]);
//             if (arr[j+1] < arr[j]){
//                 const temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// note however, that if we console log the compared numbers
// on each iteration of the inner loop, at the end of it
// we are always comparing the last number to `undefined`
// to avoid this unnecessary iteration we can alter
// the loop control conditional to j<i rather than j<=i
// this still returns the correct sorted array

// function bubbleSort(arr){
//     for (let i = arr.length - 1; i >= 0; i--){
//         console.log(`Array is: ${arr}`);
//         console.log("Starting an inner loop ----------");
//         for (let j = 0; j < i; j++){
//             console.log(`Comparing ${arr[j]} to ${arr[j+1]}`);
//             if (arr[j+1] < arr[j]){
//                 const temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// Another little issue, if you look at the outputs in
// the second solution, you will note that there is a
// last inner loop in which no comparisons are made
// to eliminate this, we can change the outer loop
// conditional to i > 0 rather than i >=0

// function bubbleSort(arr){
//     for (let i = arr.length - 1; i > 0; i--){
//         for (let j = 0; j < i; j++){
//             if (arr[j+1] < arr[j]){
//                 const temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 swaps++;
//             }
//         }
//     }
//     return arr;
// }

// The instructor notes that for arrays that are
// nearly sorted, the outer loop iterates unnecessarily
// even after the array is fully sorted
// To avoid this, we can check to see if any swaps occurred
// if only one swap occurred during an outer loop iteration,
// then our array is sorted and we can end the outer iteration

function bubbleSort(arr){
    for (let i = arr.length - 1; i > 0; i--){
        let swaps = 0;
        for (let j = 0; j < i; j++){
            if (arr[j+1] < arr[j]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swaps++;
            }
        }
        if (swaps <= 1) break;
    }
    return arr;
}


const arr = [23, 43, 12, 16, 8, 48, 6];
console.log(bubbleSort(arr));

const arr2 = [8, 2, 14, 18, 24, 26, 67, 89];
console.log(bubbleSort(arr2));