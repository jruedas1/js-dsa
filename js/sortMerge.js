// Merge sort helper function

// Merge two sorted arrays
// Set two pointers, i and j
// Start them at 0 and iterate while there are still
// elements left in either array
// Compare the first elements, insert the lowest
// value into a third array
// Move the pointer up from the value that was just inserted
// repeat

// // First version
// function mergeHelper(arr1, arr2){
//     const mergedArr = [];
//     let i = 0, j = 0;
//     while (i < arr1.length || j < arr2.length){
//         console.log(arr1[i], arr2[j]);
//         if (arr1[i] <= arr2[j]) {
//             console.log(`pushing ${arr1[i]}`);
//             mergedArr.push(arr1[i]);
//             i++;
//         } else {
//             console.log(`pushing ${arr2[j]}`);
//             mergedArr.push(arr2[j]);
//             j++;
//         }
//     }
//     return mergedArr;
// }

// Now we want to improve the efficiency
// By detecting when one array is done and
// directly iterating through the remaining array
// without comparisons
// function mergeHelper(arr1, arr2){
//     const mergedArr = [];
//     let i = 0, j = 0;
//     while (i < arr1.length && j < arr2.length){
//         if (arr1[i] <= arr2[j]) {
//             mergedArr.push(arr1[i]);
//             i++;
//         } else {
//             mergedArr.push(arr2[j]);
//             j++;
//         }
//         if (i >= arr1.length){
//             for (let k = j; k < arr2.length; k++){
//                 mergedArr.push(arr2[k]);
//             }
//         }
//         if (j >= arr2.length){
//             for (let m = i; m < arr1.length; m++){
//                 mergedArr.push(arr1[m]);
//             }
//         }
//     }
//     return mergedArr;
// }

// const arr1 = [1, 3, 5, 7, 9];
// const arr2 = [2, 4, 6, 8, 10];
// const arr3 = [8, 10, 12, 14, 16, 18, 20];

// console.log(mergeHelper(arr1, arr3));

// The instructor solution shows that since we are
// using a while loop, i and j have function scope
// therefore, you don't need to do the conditional inside
// the while loop to finish iterating over the
// remaining array
// The logic can be simplified to use two while loops
// afterwards, knowing only one will run
function mergeHelper(arr1, arr2){
    const mergedArr = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] <= arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }

        if (j >= arr2.length){
            for (let m = i; m < arr1.length; m++){
                mergedArr.push(arr1[m]);
            }
        }
    }
    while (i < arr1.length){
        mergedArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length){
        mergedArr.push(arr2[j]);
        j++;
    }
    return mergedArr;
}

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];
const arr3 = [8, 10, 12, 14, 16, 18, 20];

// console.log(mergeHelper(arr1, arr3));

// Note this worked well in testing but when used
// in an actual merge sort seemed to malfunction,
// over-concatenating too many copies of itself
// the merge() solution below did work correctly



//Sorting Exercise - merge helper
//
// Given two sorted arrays, write a function called merge which accepts two SORTED arrays and returns a new array with both of the values from each array sorted.
//
// This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
//
// As before, the function should default to sorting numbers in ascending order. If you pass in a comparator function as a third argument, this comparator is what will be used. (Note that the input arrays will always be sorted according to the comparator!)
//
// Also, do not use the built in .sort method! We're going to use this helper to implement a sort, so the helper itself shouldn't depend on a sort.
//

function merge(arr1, arr2, comp = (a, b) => a - b){
    const mergedArr = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length){
        if (comp(arr1[i], arr2[j]) <= 0) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
        if (i >= arr1.length){
            for (let k = j; k < arr2.length; k++){
                mergedArr.push(arr2[k]);
            }
        }
        if (j >= arr2.length){
            for (let m = i; m < arr1.length; m++){
                mergedArr.push(arr1[m]);
            }
        }
    }
    return mergedArr;
}

// Examples
//
//     var arr1 = [1,3,4,5];
//     var arr2 = [2,4,6,8];
// console.log(merge(arr1, arr2)); // [1,2,3,4,4,5,6,8]
//
//     arr1 // [1,3,4,5];
//     arr2 // [2,4,6,8];
//
//     var arr3 = [-2,-1,0,4,5,6];
//     var arr4 = [-3,-2,-1,2,3,5,7,8];
//
// console.log(merge(arr3, arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
//
//     var arr5 = [3,4,5]
//     var arr6 = [1,2]
//
//     merge(arr5,arr6) // [1,2,3,4,5]
//
//     const names = ["Bob", "Ethel", "Christine"]
//     const otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]
//
//     function stringLengthComparator(str1, str2) {
//       return str1.length - str2.length;
//     }
//
// console.log(merge(names, otherNames, stringLengthComparator)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]

// function mergeSort(arr){
//     // let's write a slicer first
//     const accArr = [];
//     const midPoint = Math.floor(arr.length/2);
//     accArr.push(arr.slice(0, midPoint));
//     accArr.push(arr.slice(midPoint, arr.length));
//     console.log(...accArr)
// }

const arr6 = [12, 15, 3, 8, 8, 0, 245, 34, 10];
// mergeSort(arr6);

// console.log(arr6.slice(0, 3))

// OK this is rough because I am not sure what to recurse over
// I know I have to split the array,
// then take the split arrays and split them,
// then keep splitting each resulting array until
// what you are dealing with has only one or zero elements
// or until what you are splitting has only one or two elements

// First solution
// Not super slick but does give the correct result
function slicer(arr){
   arr = [arr.slice(0, Math.floor(arr.length/2)), arr.slice(Math.floor((arr.length/2)))];
   for (let subArr of arr){
       if (subArr.length > 1) {
           arr = arr.concat(slicer(subArr));
       }
   }
   return arr.filter(arr => arr.length < 2);
}

// console.log(slicer(arr6));

// Now I just have to use the merge helper to
// put it back together again in order

// function mergeSort(arr){
//     const sliced = slicer(arr);
//     while (sliced.length > 1){
//         const last = sliced[sliced.length - 1];
//         const penultimate = sliced[sliced.length - 2];
//         const sorted = merge(last, penultimate);
//         sliced.pop();
//         sliced.pop();
//         sliced.push(sorted);
//     }
//     return sliced[0];
// }
// const jumbled = [2, 5, 3, 87, 45, 12, 0, 14];
// console.log(mergeSort(jumbled));

// Can't say it's elegant, but it works!
// And no AI or Internet searches :)

// Here's a recursive version
// The challenge was feeding it the correct input
// It needs the sliced array of arrays, but if you do that
// at the top of the function, it will constantly operate
// on the full array and never on a subset of itself
// Hence the use of the helper function to bypass that

// function mergeSort(arr){
//    const arrOfArrs = slicer(arr);
//    function helper(helperInput){
//        if (helperInput.length <= 1) return helperInput[0];
//        const last = helperInput[helperInput.length - 1];
//        const penultimate = helperInput[helperInput.length - 2];
//        const sorted = merge(last, penultimate);
//        return helper([...helperInput.slice(0, -2), sorted]);
//    }
//    return helper(arrOfArrs);
// }
// const jumbled = [2, 5, 3, 87, 45, 12, 0, 14];
// console.log(mergeSort(jumbled));

// While I've been able to write passable
// recursive versions of the slicer and the merge part of the mergeSort,
// the compact instructor solution that does it all at once is
// pretty mind-boggling and unexpected. Here it is

function instructorMergeSort(arr){
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2);
    const left = instructorMergeSort(arr.slice(0, mid));
    const right = instructorMergeSort(arr.slice(mid));
    return merge(left, right);
}

// We'll try to work through this call stack
// using a small array

// assume arr = [75, 12, 28, 14];
// callstack level 1
// is arr.length <= 1? No
// mid is 2, left is mergeSort(arr.slice(0, mid))
// it wants a value for left
// so it calls itself on [75, 12]
    // callstack level 2
    // arr is [75, 12]. This is not length <= 1
    // it calculates mid at 1
    // it wants to set left to mergeSort([75])
    // so it calls mergeSort on [75]
        // callstack level 3
        // this arr is length <= 1, so it returns [75]
    // back to level 2
    // left has now been set to [75]
    // so it wants to set right = mergeSort([arr.slice(mid))
    // here at level 2, arr is [75, 12]
    // so it calls mergeSort([12])
        // back to level 3
        // arr is length <= 1, so it returns [12]
    // level 2 gets the value [12] back for right
    // level 2 now merges [75] and [12]
    // so it returns [12, 75] to level 1
// back on level 1, the function is waiting for a value for left
// finally it gets back [12, 75]
// now it moves on to set right to equal mergeSort([28, 14])
    // we are back on callstack level 2
    // this checks if arr is less than or equal to 1, it isn't
    // so it wants to set left = mergeSort([28])
    // it calls mergeSort on [28]
        // we are back on level 3
        // this returns [28]
    // level 2 has a value for left now
    // left is set to [28]
    // now it is able to move on to set right = mergeSort([14])
        // back on level 3, level 3 returns [14]
    // level 2 has a value for right now, it's [14]
    // level 2 is able to go to merge [28] and [14]
    // this yields [14, 28]
    // this returns [14, 28] to level 1
// level 1 now has a value for right, [14, 28] to match its value for left, [12, 75]
// so it is able to call merge on them and get [12, 14, 28, 75]
// and now it returns that as the return for the whole function


// Also for the "Wild West" exercise on merge sort,
// We are asked to implement a merge sort that takes a comparator
// Here is how it is phrased

// Merge Sort
//
// Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array. The functions take 2 parameters: an array and an optional comparator function.
//
// The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.
//
// The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.
//
// Here's some guidance for how merge sort should work:
//
//     Break up the array into halves until you can compare one value with another
//     Once you have smaller sorted arrays, merge those arrays with other sorted pairs until you are back at the full length of the array
//     Once the array has been merged back together, return the merged (and sorted!) array
//
// In order to implement this function, you'll also need to implement a merge function that takes in two sorted arrays and a comparator and returns a new sorted array. You implemented this function in the previous exercise, so copy and paste that code here.
//
// You can read more merge sort here: https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/intermediate-sorting-algorithms
//
// Examples
//
//     mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
//     mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
//     mergeSort([1, 2, 3]); // [1, 2, 3]
//     mergeSort([]);
//
//     var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
//     mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
//
//     var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
//
//     function strComp(a, b) {
//       if (a < b) { return -1;}
//       else if (a > b) { return 1;}
//       return 0;
//     }
//
//     mergeSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
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
//     mergeSort(moarKittyData, oldestToYoungest); // sorted by age in descending order

function mergeSort(arr, comp = (a, b) => a - b){
    function slicer(arr){
        arr = [arr.slice(0, Math.floor(arr.length/2)), arr.slice(Math.floor((arr.length/2)))];
        for (let subArr of arr){
            if (subArr.length > 1) {
                arr = arr.concat(slicer(subArr));
            }
        }
        return arr.filter(arr => arr.length < 2);
    }
    const arrOfArrs = slicer(arr);
    function helper(helperInput){
        if (helperInput.length <= 1) return helperInput[0];
        const last = helperInput[helperInput.length - 1];
        const penultimate = helperInput[helperInput.length - 2];
        const sorted = merge(last, penultimate, comp);
        return helper([...helperInput.slice(0, -2), sorted]);
    }
    return helper(arrOfArrs);
}

console.log(mergeSort([23, 14, 89, 12]));

// Let's try smoothing the slicer
function slicer2(arr){
    if (arr.length <= 1) return [arr];
    const mid = Math.floor(arr.length/2);
    const left = slicer2(arr.slice(0, mid));
    const right = slicer2(arr.slice(mid));
    return left.concat(right);
}

console.log(slicer2([23, 14, 89, 12]));

// Keep in mind that you are supposed to do it all at once
// but conceptually, for me, it helps to put the division
// and rearrangement separately so I understand them better