// function getDigit(num, place){
//     const stringNum = num.toString();
//     if (place > stringNum.length) return 0;
//     return parseInt(stringNum[stringNum.length - place]);
// }
//
// console.log(getDigit(987, 3)); // 9
// console.log(getDigit(2, 3)) // 0
// console.log(getDigit(2, 2)) // 0
// console.log(getDigit(2478, 1)) // 8
// console.log(getDigit(2488, 4)) // 2

// This is correct, however in the class
// they want the thing zero-indexed,
// so the first spot is the zero-spot,
// not the "1"st spot

function getDigit(num, place){
    const stringNum = num.toString();
    if (place >= stringNum.length) return 0;
    return parseInt(stringNum[stringNum.length - place - 1]);
}

// console.log(getDigit(8987, 0)); // 7
// console.log(getDigit(8987, 1)); // 8
// console.log(getDigit(8987, 2)); // 9
// console.log(getDigit(8987, 3)); // 8
// console.log(getDigit(8987, 4)); // 0

// The alternative approach to getDigit
// is of interest as being mathematical
// and therefore less intuitive to me
// Essentially you will want to divide by
// the power and round down

function getDigitWithMath(num, place){
    return Math.floor(Math.abs(num / 10 ** place) % 10);
}

// console.log(getDigitWithMath(2462, 3));

// Next, digitCount
// Returns the number of digits in a number

// So say it's 78
// You can set a number to equal power
// When you divide by that power of 10
// and the answer is less than one,
// you stop and return the power

function digitCount(num){
   let count = 0;
   while(num / 10 ** count >= 1) {
       // console.log(count, num / 10 ** count);
       count++;
   }
   return count;
}

// console.log(digitCount(1000));

// Note that the test software in the course
// did not accept the exponentiation operator
// and instead required use of Math.pow

// function digitCount(num) {
//    let count = 0;
//    while (num / Math.pow(10, count) >= 1) {
//        count++;
//    }
//    return count;
// }

// The instructor-favored, and simpler solution
// is with logs. The log(10) of something is
// to what power of 10 do you have to put something
// to get the target number
// so the log(10) of any number in the hundreds is
// 2.something
// so you floor the log of the abs and add one

function digitCountWithLogs(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}

// You can also do it with string length

// Version 1 -- this breaks with negatives
// and decimals
// However, I think we are working only with
// integers, so we'll stick to that.
// In case of a decimal, we would have to
// detect the decimal point and account for it
// by subtracting one

// function digitCountWithStrings(num){
//     return num.toString().length;
// }

function digitCountWithStrings(num){
    return Math.abs(num).toString().length;
}

// console.log(digitCountWithStrings(-2343));

function mostDigits(nums){
    let maxDigs = 0;
    for (let num of nums){
        if (digitCount(num) > maxDigs) maxDigs = digitCount(num);
    }
    return maxDigs;
}

const testArr = [12, 122, 1234, 1334, 18, 99145]; // 5

// console.log(mostDigits(testArr));

