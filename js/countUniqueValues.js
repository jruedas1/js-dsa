function countUniqueValues(arr){
    if (arr.length === 0) return 0;
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        // if the numbers are the same, then the value is not unique
        // we have to move j up one and compare again
        if (arr[i] === arr[j]){
            j++;
        } else {
            // if the numbers are not the same, then we have
            // gone past the first unique value
            // therefore we move i up one
            // replace the value at i with the value at j
            i++;
            arr[i] = arr[j];
            j++;
        }
    }
    return i+1;
}

// should return 6
console.log(countUniqueValues([2, 2, 3, 3, 5, 5, 6, 6, 6, 7, 7, 9]));

console.log(countUniqueValues([]));

// colt steele's solution
function steelesCountUniqueValues(arr){
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}