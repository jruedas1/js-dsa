// Store the first element as the smallest value you've seen so far
// Compare this item to the next item in the array
// until you find a smaller number
// If a smaller number is found, designate that smaller number
// to be the new 'minimum' and continue until the end of the array
// if the minimum is not the value (index) you began with, swap
// the two values
// Repeat this with the next element until the array is sorted

// Initial solution
// function selectionSort(arr){
//     for (let i = 0; i < arr.length; i++){
//         let indexOfMin = i;
//         for (let j = i; j < arr.length; j++){
//             if (arr[j] < arr[indexOfMin]) [arr[j], arr[indexOfMin]] = [arr[indexOfMin], arr[j]];
//         }
//     }
//     return arr;
// }

// The initial solution works but it swaps
// every single time a new minimum is found
// thus, numerous unnecessary swaps.
// It should swap only once per outer loop iteration,
// after the inner loop has found the new minimum
// the purpose of the inner loop is to find the new minimum
// the swap takes place in the outer loop

// function selectionSort(arr){
//     for (let i = 0; i < arr.length; i++){
//         let indexOfMin = i;
//         for (let j = i; j < arr.length; j++){
//             if (arr[j] < arr[indexOfMin]) indexOfMin = j;
//         }
//         [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
//     }
//     return arr;
// }

// Again, this works, but after watching the instructor video
// further change is helpful
// First of all, on each iteration of the outer loop
// You don't want to compare the min to itself,
// as this is unnecessary, it's already in the correct position
// you want to start by comparing it to the next element in the array
// so the correct start for j is not j = i, it's j = i + 1

// function selectionSort(arr){
//     for (let i = 0; i < arr.length; i++){
//         let indexOfMin = i;
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[j] < arr[indexOfMin]) indexOfMin = j;
//         }
//         [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
//     }
//     return arr;
// }

// Again, this works, but there is one more optimization
// In the case in which the first couple of elements
// in the array are already in sort order,
// the algorithm will still swap it with itself
// and, at the end, when looking at the last elements
// in the array, they are necessarily already in order,
// but it will still swap the last element with itself
// to avoid these unnecessary swaps you can add a condition

// function selectionSort(arr){
//     for (let i = 0; i < arr.length; i++){
//         let indexOfMin = i;
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[j] < arr[indexOfMin]) indexOfMin = j;
//         }
//         if (i !== indexOfMin) [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
//     }
//     return arr;
// }


// const arr1 = [18, 23, 4, 15, 8, 5, 7];
// const arr2 = [12, 14, 256, 18, 3, 12, 14, 256];
// const arr3 = [4, 3, 2, 1];
// const arr4 = [4, 4, 3, 3, 2, 2, 1, 1];
//
// console.log(selectionSort(arr1));
// console.log(selectionSort(arr2));
// console.log(selectionSort(arr3));
// console.log(selectionSort(arr4));

// Selection Sort
//
// Here's some guidance for how selection sort should work:
//
//     Assign the first element to be the smallest value (this is called the minimum). It does not matter right now if this actually the smallest value in the array.
//     Compare this item to the next item in the array until you find a smaller number.
//     If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
//     If the "minimum" is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
//     Repeat this with the next element until the array is sorted.
//
// This algorithm has a O(n^2) time complexity. You can read more about them here: https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms
//

function selectionSort(arr, comparator=(a, b) => a - b){
    for (let i = 0; i < arr.length; i++){
        let indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++){
            if (comparator(arr[j], arr[indexOfMin]) < 0) indexOfMin = j;
        }
        if (i !== indexOfMin) [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
    }
    return arr;
}

// Examples
//
console.log(selectionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(selectionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(selectionSort([1, 2, 3])); // [1, 2, 3]
//     selectionSort([]);
//
    const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(selectionSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
//
    const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
//
    function strComp(a, b) {
      if (a < b) { return -1;}
      else if (a > b) { return 1;}
      return 0;
    }
//
console.log(selectionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
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
//     selectionSort(moarKittyData, oldestToYoungest); // sorted by age in descending order

