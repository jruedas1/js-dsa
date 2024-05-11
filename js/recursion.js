function countDown(num) {
    if (num <=0) {
        console.log("All done!");
        return true;
    }
    console.log(num);
    num--;
    countDown(num);
}

// countDown(10);

function sumRange(num){
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

// function factorial(num){
//     if (num === 1) return 1;
//     return num * factorial(num -1);
// }

// console.log(factorial(5));

function collectOdds(arr){
    let result = [];

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

// console.log(collectOdds([2, 3, 5, 7, 10, 11, 15, 16]));

function productOfArray(arr){
    let result = 1;
    function helper(helperInput){
        if (helperInput.length === 0){
            return false;
        }
        result *= helperInput[0];
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}

// console.log(productOfArray([1, 2, 3]));
// console.log(productOfArray([1,2,3,10]));

// Instructor's solution:

function productOfArrayInstructorSolution(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

function collectOddsPureRecursive(arr){
    let newArr = [];
    if (arr.length === 0) return newArr;
    if (arr[0] % 2 !== 0) newArr.push(arr[0]);
    newArr = newArr.concat(collectOddsPureRecursive(arr.slice(1)));
    return newArr;
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

// console.log(power(2, 4));

// So let's say it runs, it should call itself, over and over again,
// each time with the exponent reduced by 1, until the exponent is 0
// each time, it should multiply the base by the return value

// Write a function factorial
// which accepts a number
// and returns the factorial of that number.
// A factorial is the product of an integer
// and all the integers below it;
// e.g., factorial four (4!)
// is equal to 24, because 4 * 3 * 2 * 1 equals 24.
// factorial zero (0!) is always 1.

function factorial(num){
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

// console.log(factorial(4));

// Write a function called recursiveRange
// which accepts a number and adds up all the numbers
// from 0 to the number passed to the function

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

// function recursiveRange(num){
//     if (num === 0) return 0;
//     return num + recursiveRange(num - 1);
// }

// console.log(recursiveRange(6));

// Write a recursive function called fib
// which accepts a number and returns the nth number
// in the Fibonacci sequence. Recall that the Fibonacci
// sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number
// thereafter is equal to the sum of the previous two numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
   if (num === 0) return 0;
   if (num === 1) return 1;
   return fib(num-1) + fib(num - 2);
}

// console.log(fib(28));

// Write a recursive function called reverse
// which accepts a string and returns a new string in reverse.

function reverse(str){
    let revStr = '';
    function helper(helperInput){
        if (helperInput.length === 0){
            return false;
        }
        revStr += helperInput[helperInput.length - 1];
        helperInput = helperInput.substring(0, helperInput.length - 1);
        helper(helperInput);
    }
    helper(str);
    return revStr;
}

// console.log("awesome".substring(0, "awesome".length - 1));

// console.log(reverse('awesome')); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function revPure(str){
    let revStr = str[str.length - 1];
    if (str.length === 0) return '';
    revStr += revPure(str.substring(0, str.length - 1));
    return revStr;
}

console.log(revPure('awesome')); // 'emosewa'