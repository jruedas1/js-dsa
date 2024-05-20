// Bubble sort

// Instructor pseudocode
// Start looping with i from end of array towards beginning
// start inner loop with j from beginning until i-1
// if arr[j] > arr[j+1] swap the values
// return sorted array

// my thoughts: that outer loop doesn't seem necessary,
// but you would need a count of where the last
// sorted item is, or how many times you've sorted,
// which I suppose amounts to the same

function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    // note, the return is not strictly
    // necessary as the array is mutated
    return arr;
}

function bubbleSort(arr){
    let right = arr.length - 1;
    while (right > 0){
        for (let j = 0; j < right; j++){
            if (arr[j+1] < arr[j]) swap(arr, j, j+1);
        }
        right--;
    }
    return arr;
}

// console.log(bubbleSort([36,4,23,8,-6,123,12]));

// optimize bubble sort to account for
// when array is nearly sorted

function bubbleSortOptimized(arr){
    let right = arr.length - 1;
    let didSwap;
    while (right > 0){
        didSwap = false;
        for (let j = 0; j < right; j++){
            if (arr[j+1] < arr[j]){
                swap(arr, j, j+1);
                didSwap = true;
            }
        }
        right--;
        if (!didSwap) break;
    }
    return arr;
}

// console.log(bubbleSortOptimized([0, 3, 5, 4, 7, 12, 14]));


// Bubble Sort Problem with comparator
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
// Examples
//
//     bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
//     bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
//     bubbleSort([1, 2, 3]); // [1, 2, 3]
//     bubbleSort([]);
//
//     var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
//     bubbleSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
//
//     var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
//
//     function strComp(a, b) {
//       if (a < b) { return -1;}
//       else if (a > b) { return 1;}
//       return 0;
//     }
//
//     bubbleSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
//
//     var moarKittyData = [{
//       name: "LilBub",
//       age: 7
//     }, {
//       name: "Garfield",
//       age: 40
//     }, {
//       name: "Heathcliff",
//       age: 45
//     }, {
//       name: "Blue",
//       age: 1
//     }, {
//       name: "Grumpy",
//       age: 6
//     }];
//
//     function oldestToYoungest(a, b) {
//       return b.age - a.age;
//     }
//
//     bubbleSort(moarKittyData, oldestToYoungest); // sorted by age in descending order