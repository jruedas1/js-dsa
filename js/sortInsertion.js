// Start by picking the second element in the array
// Now compare the second element with the one before
// and swap it if necessary
// Continue to the next element and if it is in the
// incorrect order, iterate through the sorted portion
// (i.e. the left side)
// to place the element in the correct place
// Repeat until the array is sorted

// Step 1 in building it out: make sure I have the
// right inner and outer loops
// function insertionSort(arr){
//     for (let i = 1; i < arr.length; i++){
//         for (let j = i - 1; j >= 0; j--){
//             console.log(`Comparing ${arr[i]} to ${arr[j]}`);
//         }
//     }
//     return arr;
// }

// Step 2, use debug outputs to figure out
// a working algorithm solution
// The fact that I needed that temporary "indexToCompare"
// variable was not immediately obvious at first
// function insertionSort(arr){
//     for (let i = 1; i < arr.length; i++){
//         let indexToCompare = i;
//         for (let j = i - 1; j >= 0; j--){
//             console.log(`Comparing ${arr[i]} to ${arr[j]}`);
//             if (arr[indexToCompare] < arr[j]) {
//                 console.log(`${arr[indexToCompare]} < ${arr[j]}, swapping`);
//                 console.log(`Before swap: ${arr}`);
//                 [arr[indexToCompare], arr[j]] = [arr[j], arr[indexToCompare]];
//                 console.log(`After swap: ${arr}`);
//                 indexToCompare = j;
//             }
//         }
//     }
//     return arr;
// }

// Second solution without debug outputs
function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){
        let indexToCompare = i;
        for (let j = i - 1; j >= 0; j--){
            if (arr[indexToCompare] < arr[j]) {
                [arr[indexToCompare], arr[j]] = [arr[j], arr[indexToCompare]];
                indexToCompare = j;
            }
        }
    }
    return arr;
}

const arr0 = [23, 48, 147, 34, 12, 18, 242, 87, 8];
const arr2 = [52, 46, 18, 24, 18, 5, 24, 52];
// console.log(insertionSort(arr0));
// console.log(insertionSort(arr2));

// Note that the instructor approaches it with
// an extra efficiency in the loop within loop version.
// Instead of holding steady on the index we are comparing,
// and moving it down after a match in order to avoid
// repeatedly comparing the wrong number -- you can hold
// the value you are comparing, and interrupt the loop
// once the value you are comparing is less than the
// value you are comparing it to. The value you are comparing
// also serves to hold the swap value

function insertionSortInstructorSolution(arr){
    for (let i = 0; i < arr.length; i++){
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

// However, this does not work with modern syntax -- it relies
// on var creating global scope. One student in the class bypassed
// this problem by using a while loop

function insertionSortStudentSolution(arr){
    for (let i = 1; i < arr.length; i++){
        const currentVal = arr[i];
        let j = i - 1;
        while (j >=0 && arr[j] > currentVal){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

// console.log(insertionSortInstructorSolution(arr2));

// One thing should be immediately self-evident
// Rather than looping over the sorted portion of the array
// one at a time with O(n) we could use divide and conquer
// to identify the correct insertion point
// this would move the time complexity from O(n*n) to O(n log(n))
// which is a slight but significant improvement

// So the thing to do is to develop a "find insertion point" algorithm
// It takes a sorted array and a number, and finds the index just before which
// the number should be inserted to maintain sort order

// function findInsertionPoint(arr, num){
//     let left = 0;
//     let right = arr.length - 1;
//     let middle = Math.floor((left + right) / 2);
//     while (left <= right){
//         if (arr[middle] === num) return middle;
//         if (arr[middle] < num) left = middle + 1;
//         if (arr[middle] > num) right = middle - 1;
//         middle = Math.floor((right + left)/2);
//     }
//     return middle;
// }

// This algorithm appears to return the point **after** which
// the number needs to be inserted

const arrSorted = [12, 14, 26, 37, 56, 67, 78, 89, 94, 101];
// console.log(findInsertionPoint(arrSorted, 96));

// Now we convert it to a findAndInsert algorithm
// this works, but in the context of insertionSort,
// this is **adding** the number to the array
// in insertionSort what we want to do is swap it in
function insertInSortedArray(start, end, arr, num){
    let middle = Math.floor((start + end) / 2);
    while (start <= end){
        if (arr[middle] === num) break;
        if (arr[middle] < num) start = middle + 1;
        if (arr[middle] > num) end = middle - 1;
        middle = Math.floor((end + start)/2);
    }
    arr.splice(middle + 1, 0, num);
    return arr;
}
const arrShort = [3];
// console.log(insertInSortedArray(0, arrShort.length - 1, arrShort, 67));

// Here's the revised insertion sort with binary search
// instead of linear search to find swapping point
function binaryInsertionSort(arr){
    for (let i = 1; i < arr.length; i++){
        let start = 0;
        let end = i - 1;
        let middle = Math.floor((end+start)/2);
        while (start <= end){
            if (arr[i] === arr[middle]) break;
            if (arr[i] < arr[middle]) end = middle - 1;
            if (arr[i] > arr[middle]) start = middle + 1;
            middle = Math.floor((end+start)/2);
        }
        const temp = arr[i];
        arr.splice(i, 1);
        arr.splice(middle + 1, 0, temp);
    }
    return arr;
}

// say the situation is [24, 34, 44, 54, 64, 74, 84, 94, 104, 26]
//                        0   1   2   3   4   5   6   7   8   9
// say we are doing 26 here
// start is 0, end is 8
// middle is 4
// 26 is less than 64, so put the end at 3
// and the middle at 1
// 26 is again less than 34, so put the end at 0, middle at 0
// 26 is greater than 24, so put start at 1, end is at 0, middle still 0
// loop breaks. In this case what we would want to do is, save 26 as temp var
// then delete that spot in the array and insert at new one

const arr1 = [23, 48, 147, 34, 12, 18, 242, 87, 8, 81];
// console.log(binaryInsertionSort(arr1));
// console.log(binaryInsertionSort(arr2));

// However, after looking up online and finding that
// others have indeed done this -- it's a binary insertion sort--
// it is still O(n^2) because of the cost of the splicing being O(n)
// therefore it is not in fact an O(n log n) algorithm.
// it does in some cases minimize the time spent on the search
// for the insertion point but doesn't change the big O of the
// insertion sort as a whole

// so you would have to find a way of doing it with just swap
// We'll leave that for another day
