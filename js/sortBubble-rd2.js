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

// function bubbleSort(arr){
//     for (let i = arr.length - 1; i > 0; i--){
//         let swaps = 0;
//         for (let j = 0; j < i; j++){
//             if (arr[j+1] < arr[j]){
//                 const temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 swaps++;
//             }
//         }
//         if (swaps <= 1) break;
//     }
//     return arr;
// }


// const arr = [23, 43, 12, 16, 8, 48, 6];
// console.log(bubbleSort(arr));
//
// const arr2 = [8, 2, 14, 18, 24, 26, 67, 89];
// console.log(bubbleSort(arr2));

// Later in the course, instructor suggests an extra
// bubble sort exercise

// Bubble Sort
//
// ATTEMPT THIS IS YOU ARE UP FOR IT! Implement a function called bubbleSort. Given an array, bubbleSort will sort the values in the array. The function takes 2 parameters: an array and an optional comparator function.
//
//     function bubbleSort(arr, comparator) {
//       if (typeof comparator !== 'function') {
//         // provide a default
//       }
//     }
//
// The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.
//
// The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.
//
// Bubble sort is an O(n^2) algorithm. You can read more about it here: https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms
//

function bubbleSort(arr, comparator=(a, b) => a - b){
    for (let i = arr.length - 1; i > 0; i--){
        let swaps = 0;
        for (let j = 0; j < i; j++){
           if (comparator(arr[j], arr[j+1])>0){
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

// Examples
//
console.log(bubbleSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(bubbleSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(bubbleSort([1, 2, 3])); // [1, 2, 3]
//     bubbleSort([]);
//
    const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(bubbleSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
//
    const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
//
    function strComp(a, b) {
      if (a < b) { return -1;}
      else if (a > b) { return 1;}
      return 0;
    }
//
console.log(bubbleSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
//
    var moarKittyData = [{
      name: "LilBub",
      age: 7
    }, {
      name: "Garfield",
      age: 40
    }, {
      name: "Heathcliff",
      age: 45
    }, {
      name: "Blue",
      age: 1
    }, {
      name: "Grumpy",
      age: 6
    }];
//
    function oldestToYoungest(a, b) {
      return b.age - a.age;
    }
//
console.log(bubbleSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order


