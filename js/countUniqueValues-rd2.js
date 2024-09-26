// Multiple Pointers - countUniqueValues
//
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
//
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
//
// Time Complexity - O(n)
//
// Space Complexity - O(n)
//
// Bonus
//
// You must do this with constant or O(1) space and O(n) time.


// This is 0(1) space and 0(n) time:
function countUniqueValues(arr){
    if (arr.length === 0) return 0;
    let i = 0, j = 1;
    while (j <= arr.length){
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
            j++;
        } else {
            j++;
        }
    }
    return i;
}

// This is 0(N) space complexity
function countUniqueValuesONSpace(arr){
    if (arr.length === 0) return 0;
    let i = 0, j = 1;
    const uniques = [];
    uniques.push(arr[i]);
    while (j < arr.length){
        if (arr[i] !== arr[j]){
            uniques.push(arr[j]);
            i++;
            j++;
        } else {
            i++;
            j++;
        }
    }
    return uniques.length;
}

console.log(countUniqueValues([1,1,1,1,1,2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([-2,-1,-1,0,1]))
//                          i
//countUniqueValues([-2,-1,-1,0,1])
//                            j

console.log(countUniqueValuesONSpace([1,1,1,1,1,2]))
console.log(countUniqueValuesONSpace([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValuesONSpace([-2,-1,-1,0,1]))

function countUniqueValuesInstructorSolution(arr){
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 0; j < arr.length; j++){
        if (arr[i] === arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
}