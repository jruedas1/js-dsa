// Pivot Helper

/* Pivot Pseudocode
* It will have to accept three arguments:
* an array, a start index and an end index
* These will default to 0 and arr.length - 1
* Grab the pivot from the start of the array
* (can also be the end, the middle, or random)
* Store current pivot index in a variable
* (this will keep track of where the pivot should end up)
* Loop through the array from the start to the end
* If the pivot is greater than the current element,
* increment the pivot index variable
* and then swap the current element with the element at the pivot index
* Swap the starting element (i.e. the pivot)
* with the pivot index
* Return the pivot index
* */

// First effort with debugging logs
// function pivot(arr, start = 0, end = arr.length - 1){
//     const pivotEl = arr[start];
//     console.log(`starting pivot element is ${pivotEl}`);
//     let pivotIndex = start;
//     console.log(`starting pivot index is ${pivotIndex}`);
//     for (let i = start + 1; i < end; i++){
//         console.log(`comparing ${pivotEl} and ${arr[pivotIndex]}`);
//         if (pivotEl > arr[i]){
//             console.log(`${pivotEl} > ${arr[i]}` );
//             pivotIndex++;
//             [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//         }
//     }
//     [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
//     console.log(arr);
//     return pivotIndex;
// }

// Same with no debug logs
// Keeps an array log at the end to ensure it's working correctly
function pivot(arr, start = 0, end = arr.length - 1){
    const pivotEl = arr[start];
    let pivotIndex = start;
    for (let i = start + 1; i <= end; i++){
        if (pivotEl > arr[i]){
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    console.log(`Array at end of pivot: ${arr}`);
    return pivotIndex;
}



// Example array
const testArr = [24, 48, 2, 35, 8, 12, 67];
console.log(pivot(testArr));

// Quicksort pseudocode
// Call the pivot helper on the array
// When the helper returns to you the
// updated pivot index, recursively
// call the pivot helper on the subarray to the left of that
// index, and the subarray to the right of that index
// base case occurs when you consider a subarray
// with less than two elements

// I think the problem is with the pivotIndex never getting redefined. pivot returns a pivotIndex, which should be the
// new pivot index when the next quicksort is called

// My utterly unsuccessful attempt -- this is like the 20th version
// it works on the first half of the array
// But fails to sort the second half. It just leaves the second half unsorted
// function quickSort(arr){
//     let pivotIndex = pivot(arr, 0, arr.length - 1);
//     if (pivotIndex === 0 || pivotIndex >= arr.length ) return pivotIndex;
//     pivot(arr, pivot(arr) + 1);
//     pivot(arr, 0, pivot(arr));
//     quickSort(arr);
//     return arr;
// }
// const testArr = [24, 48, 2, 35, 8, 12, 67];
// console.log(pivot(testArr));
// console.log(pivot(testArr, pivot(testArr) + 1, testArr.length - 1))
// console.log(quickSort(testArr));
const testArr2 = [34, 289, 12, 56, 24, 89, 6, 78, 567, 2];
// console.log(quickSort(testArr2));

// Let's see
// We want to call pivot in such a way that it, in turn, must call pivot, and pivot must call pivot, recursively until pivot is called on a subarray of length less than 2
// So calling pivot on [24, 48, 2, 35, 8, 12, 67];
// Returns 3 and leaves the array as[12,2,8,24,48,35,67]
// console.log(pivot(testArr));

// Instructor solution
// I KNEW IT you have to pass left and right (or start and end)
// values to quickSort which then get called through to pivot
// I did this in some early versions of my own attempts
// But the insight I failed to discern is that since
// You calculate the pivotIndex at the start of the
// quickSort,
// CALLING QUICKSORT ***IS*** CALLING PIVOT
// for the base case, I've never seen this approach
// where instead of the base case returning something
// to end the recursion,
// the whole recursion is wrapped in an if statement,
// so it stops running if the condition isn't met
// The fact the base case is a comparison of end and start
// had definitely occurred to me, but not a
// straightforward comparison

function quickSort(arr, left = 0, right = arr.length - 1){
    if (left < right){
        const pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

// console.log(quickSort(testArr));
console.log(quickSort(testArr2));

// Here's the version of pivot with a comparator
function pivotWithComp(arr, comparator=(a,b)=>a-b, start=0, end=arr.length - 1){
    const pivotEl = arr[start];
    let pivotIndex = start;
    for (let i = start + 1; i <= end; i++){
        if (comparator(arr[i], pivotEl) < 0)   {
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    return pivotIndex;
}

// and the quick sort with a comparator
function quickSortWithComp(arr, comparator=(a,b)=>a-b, left=0, right=arr.length-1) {
    if (left < right){
        const pivotIndex = pivotWithComp(arr, comparator, left, right);
        quickSortWithComp(arr, comparator, left, pivotIndex - 1);
        quickSortWithComp(arr, comparator, pivotIndex + 1, right);
    }
    return arr;
}




