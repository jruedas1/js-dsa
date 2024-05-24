function selectionSort(arr){
    for (let j = 0; j < arr.length; j++) {
        let currentLowest = arr[j];
        let indexOfCurrentLowest = j;
        for (let i = j; i < arr.length; i++){
            if (currentLowest > arr[i+1]) {
                currentLowest = arr[i+1];
                indexOfCurrentLowest = i+1;
            }
        }
        if (indexOfCurrentLowest !== j) {
            [arr[j], arr[indexOfCurrentLowest]] = [arr[indexOfCurrentLowest], arr[j]];
        }
    }
    return arr;
}

const arr1 = [15, 93, 24, 8, 36, 14, 54];
console.log(selectionSort(arr1));

function selectionSortInstructorSolution(arr){
    for (let i = 0; i < arr.length; i++){
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[lowest]) lowest = j;
        }
        if(i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
    return arr;
}

console.log(selectionSortInstructorSolution(arr1));