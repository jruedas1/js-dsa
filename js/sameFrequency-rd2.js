// Write a function called same, which accepts two arrays
// The function should return true if every value in the array
// has its corresponding value squared in the second array
// The frequency of values must be the same

// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false
// same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

// naive solution
// function same(arr1, arr2){
//     let matches = 0;
//     for (let i = 0; i < arr1.length; i++){
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr2[j] === arr1[i] ** 2){
//                 matches++
//                 arr2.splice(j, 1);
//                 break;
//             }
//         }
//     }
//     return arr2.length === 0 && matches === arr1.length;
// }

// frequency distribution solution
// function same(arr1, arr2){
//     const freqArr1 = {}
//     const freqArr2 = {}
//     for (let num1 of arr1) {
//         freqArr1[num1] ? freqArr1[num1]++ : freqArr1[num1] = 1;
//     }
//     for (let num2 of arr2) {
//         freqArr2[num2] ? freqArr2[num2]++ : freqArr2[num2] = 1;
//     }
//     for (let freq1 in freqArr1){
//         if (freqArr1[freq1] !== freqArr2[freq1 ** 2]) return false;
//     }
//     return true;
// }

// instructor naive solution
// function same(arr1, arr2){
//     if (arr1.length !== arr2.length) return false;
//     for (let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1) return false;
//         arr2.splice(correctIndex, 1);
//     }
//     return true;
// }

// instructor frequency distribution solution
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const freqCounter1 = {};
    const freqCounter2 = {};
    for (let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }
    for (let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }
    for (let key in freqCounter1){
        if (!(key ** 2) in freqCounter2) return false;
        if (freqCounter2[key ** 2] !== freqCounter1[key]) return false;
    }
    return true;
}



console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
