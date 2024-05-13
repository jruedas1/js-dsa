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

// console.log(revPure('awesome')); // 'emosewa'

// Write a recursive function called isPalindrome
// which returns true if the string passed to it
// is a palindrome (reads the same forward and backward).
// Otherwise, it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// console.log(isPalindrome('tacocat')); // true
// console.log(isPalindrome('amanaplanacanalpanama')); // true
// console.log(isPalindrome('amanaplanacanalpandemonium')); // false

// First attempt:
// function isPalindrome(str){
//    let itsAPalindrome = false;
//    if (str.length <= 1) return itsAPalindrome;
//    if (str[0] === str[str.length-1]) itsAPalindrome = true;
//    isPalindrome(str.substring(1, str.length-1));
//    return itsAPalindrome;
// }

// Thoughts. It should reduce the string passed from the beginning AND the end each time
// it should compare the two and return true if they are the same
// otherwise it should return false and end the recursion
// it should stop when there is zero or one left, as then there
// is no comparison to carry out

// Refactor:
function isPalindrome(str){
    let itsAPalindrome = str[0] === str[str.length-1];
    if (str.length <= 1 || !itsAPalindrome) return itsAPalindrome;
    isPalindrome(str.substring(1, str.length-1));
    return itsAPalindrome;
}

// Write a recursive function called someRecursive
// which accepts an array and a callback.
// The function returns true if
// a single value in the array returns true
// when passed to the callback.
// Otherwise, it returns false.

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], val => val > 10)); // false

function someRecursive(arr, callback){
    if (arr.length === 0) return false;
    if (callback(arr.pop())) return true;
    return someRecursive(arr, callback);
}

// Write a recursive function
// called flatten which accepts
// an array of arrays and returns
// a new array with all values flattened.

function flatten(arr){
    const accArr = [];
    function helper(helperInput){
        if (helperInput.length === 0){
            return false;
        }
        if (Array.isArray(helperInput[0])) {
            helper(helperInput[0]);
        } else {
            accArr.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return(accArr);
}

// console.log(flatten([1, 2, 3, 4, 5]));
// console.log(Array.isArray(1))
// console.log(flatten([1, 2, 3, [4, 5]]));  // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter
// of each string in the array.

function capitalizeFirst (arr) {
    const capitalized = [];
    function helper(helperInput){
        if (helperInput.length === 0){
            return false;
        }
        capitalized.push(helperInput[0].charAt(0).toUpperCase() + helperInput[0].slice(1));
        helper(helperInput.slice(1));
    }
    helper(arr);
    return capitalized;
}

// console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

// let str = 'car';
// console.log(str.charAt(0).toUpperCase() + str.slice(1));

// nestedEvenSum
//
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers
// in an object which may contain nested objects.

function nestedEvenSum (obj) {
   let sum = 0;

    for (const key in obj){
        if (typeof obj[key] === 'number' && obj[key] % 2 ===0){
            sum += obj[key];
        }
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        }
    }

   return sum;
}


const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

for (let key in obj1){
    // console.log(key)
    // console.log(obj1[key]);
}

const obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

// capitalizeWords
//
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array
// containing each word capitalized.

function capitalizeWords (arr) {
    const upperCased = [];
    function helper(helperInput){
        if (helperInput.length === 0){
            return false;
        }
        upperCased.push(helperInput[0].toUpperCase());
        helper(helperInput.slice(1));
    }
    helper(arr);
    return upperCased;
}

// let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']