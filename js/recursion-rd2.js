// Functions to explore call stack

function takeShower(){
    return "Showering!";
}

function eatBreakfast(){
    const meal = cookFood();
    return `Eating ${meal}`;
}

function cookFood(){
    const items = ["Yogurt", "Smoothie", "Cinnamon Toast"];
    return items[Math.floor(Math.random() * items.length)];
}

function getUp(){
    takeShower();
    eatBreakfast();
    console.log("Ok ready to go to work.");
}

// getUp();

// Our first recursive function

function countDown(num){
    if (num < 0){
        console.log("All done!")
        return false;
    }
    console.log(num);
    num--;
    countDown(num);
}

// countDown(10);

// Our second recursive function

function sumRange(num){
    if (num === 1) return num;
    // instructor says return 1 but this to me is more intuitive
    return num + sumRange(num - 1);
}

// console.log(sumRange(5));

// How this works
// We call sumRange(5)
// stack - level5 It returns 5 + sumRange(4)
// stack - level4                  4 + sumRange(3)
// stack - level3                         3 + sumRange(2)
// stack - level2                                 2 + sumRange(1)
// stack - top level                                         1
// At this point, the function returns with no recursive call
// the value 1 gets sent to level 2, which adds it to 2 (it's 3 now)
// the value 3 gets sent to level 3, which adds it to 3 (it's 6 now)
// the value 6 gets sent to level 4, which adds it to 4 (it's 10 now)
// the value 10 gets sent to level 5, which adds it to 5 (it's 15 now)
// the value 15 gets returned from level 5

// Factorial - iterative
function iterativeFactorial(num){
    let factorial = 1;
    for (let i = num; i > 0; i--){
        factorial *= i;
    }
    return factorial;
}

// console.log(iterativeFactorial(5));

function recursiveFactorial(num){
    if (num === 1) return num;
    return num * recursiveFactorial(num - 1);
}

// console.log(recursiveFactorial(5));


// Helper method recursion

function collectOdds(arr){
    const result = [];

    function helper(helperInput){
        if (helperInput.length === 0){
            return false;
        }

        if (helperInput[0] % 2 !== 0){
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

// console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8]));

// pure recursion version

function collectOddValues(arr){
    let newArr = [];

    if (arr.length === 0){
        return newArr;
    }

    if (arr[0] % 2 !== 0) newArr.push(arr[0]);

    newArr = newArr.concat(collectOddValues(arr.slice(1)));

    return newArr;
}

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8]));

// power

// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

// function power(base, exponent){
//     if (exponent === 1) return base;
//     return base * power(base, exponent - 1);
// }

// e.g. 2 ^ 4 = 2 * 2 * 2 * 2

// console.log(power(2, 4));

// The problem with this: it does not account for power of 0
// A base to the power of 0 is 1
// Therefore it has to be

function power(base, exponent){
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

// console.log(power(2, 4));
// console.log(power(2, 0));

// factorial
//
// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(num){
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

// console.log(factorial(4));

// productOfArray
//
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr){
    if (arr.length === 0) return 1;
    return  arr.pop() * productOfArray(arr);
}

// console.log(productOfArray([1, 2, 3, 4]));

// Note: when I first did this several months ago,
// I used a helper function
// function productOfArray(arr){
//     let result = 1;
//     function helper(helperInput){
//         if (helperInput.length === 0){
//             return false;
//         }
//         result *= helperInput[0];
//         helper(helperInput.slice(1));
//     }
//     helper(arr);
//     return result;
// }
// this time it seemed more intuitive to use arr.pop()
// since it modifies the array and returns the value
// thereby creating the smaller subset of the problem to operate on

// recursiveRange
//
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num){
    if (num === 0) return 0;
    return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(10));

// fib
//
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// this gives the correct answer based on
// the instructor's definition of the fibonacci
// sequence as starting 1, 1, 2, 3, 5, 8
// function fib(num){
//     if (num === 0) return 0;
//     if (num === 1) return 1;
//     return fib(num - 2) + fib(num - 1);
// }

// To get the sequence correctly,
// where the sequence is 0, 1, 1, 2, 3, 5, 8
// you have to add
// the fib of 2

// function fib(num){
//     if (num === 1) return 0;
//     if (num === 2) return 1;
//     return fib(num - 2) + fib(num - 1);
// }

// After searching on the internet, I also
// see that you can make it a bit more succinct

function fib(num){
    if (num <= 2) return num - 1;
    return fib(num - 2) + fib(num - 1);
}

// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(10));
// console.log(fib(11));
// console.log(fib(28));
// console.log(fib(35));

// reverse
//
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str){
    let revStr = '';
    function helper(helperInput){
        if (helperInput.length === 0) return false;
        revStr += helperInput[helperInput.length - 1];
        helper(helperInput.substring(0, helperInput.length - 1));
    }
    helper(str);
    return revStr;
}

let str1 = 'riddimman';
// console.log(reverse(str1));

function reversePure(str){
    if (str.length === 0) return '';
    return str[str.length - 1] + reversePure(str.substring(0, str.length - 1));
}

console.log(reversePure(str1));
