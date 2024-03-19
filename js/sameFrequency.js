//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
//
// Your solution MUST have the following complexities:
//
// Time: O(N)
//
// Sample Input:
//
//     sameFrequency(182,281) // true
//     sameFrequency(34,14) // false
//     sameFrequency(3589578, 5879385) // true
//     sameFrequency(22,222) // false

function numericFrequencyCounter(num){
    return num.toString().split('')
        .reduce((obj, num) => {
            obj[num] ? obj[num]++ : obj[num] = 1;
            return obj;
        }, {});
}

function sameFrequency(num1, num2){
    if (num1.toString().length !== num2.toString().length) return false;
    const num1frequencies = numericFrequencyCounter(num1);
    const num2frequencies = numericFrequencyCounter(num2);

    for (const key in num1frequencies) {
        if (num1frequencies[key] !== num2frequencies[key]){
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(3334422255, 3232324545));