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

// console.log(reversePure(str1));


//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise, it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// My first thought is to leverage the recursive function
// that I already wrote as a helper function
// and just use that to check if it's a palindrome
// function isPalindrome(str){
//     function reversePure(str){
//         if (str.length === 0) return '';
//         return str[str.length - 1] + reversePure(str.substring(0, str.length - 1));
//     }
//     return str === reversePure(str);
// }

// But we can do better than that
// What we want to do is reduce the string one
// char at a time from the beginning and the end
// and check the match every time,
// returning false if we ever get a mismatch,
// otherwise returning true
function isPalindrome(str){
    let itsAPalindrome = str[0] === str[str.length-1];
    if (str.length <= 1 || !itsAPalindrome) return itsAPalindrome;
    return isPalindrome(str.substring(1, str.length-1));
}

// console.log(isPalindrome('tacocat'));
// let str = 'tacocat';
// console.log(str[0], str[str.length - 1]);
// tacocat
//   true
//    returns acoca
//          true
                // returns coc
//                    true
//                 // returns o
//                            // should return true
// console.log(isPalindrome('amanaplanacanalpandemonium'));
// console.log(isPalindrome('amanaplanacanalpanama'));
// console.log(isPalindrome('awesome')); // false
// console.log(isPalindrome('foobar')); // false
// console.log(isPalindrome('racocar'))

// Write a recursive function called someRecursive
// which accepts an array and a callback.
// The function returns true if
// a single value in the array returns true
// when passed to the callback.
// Otherwise, it returns false.

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;
const arr = [2, 3, 6, 8, 10];
const arr2 = [2, 4, 6, 8, 10];

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], val => val > 10)); // false

function someRecursive(arr, callback){
    if (arr.length === 0) return false;
    if (callback(arr[arr.length - 1])) return true;
    return someRecursive(arr.slice(0, arr.length - 1), callback);
}

// console.log(someRecursive(arr, isOdd));
// console.log(someRecursive([4, 6, 8], val => val > 10)); // false
// console.log(someRecursive([4, 6, 8, 11, -3, -56], val => val > 10));


// Write a recursive function
// called flatten which accepts
// an array of arrays and returns
// a new array with all values flattened.

// Helper method recursion

// function collectOdds(arr){
//     const result = [];
//     function helper(helperInput){
//         if (helperInput.length === 0){
//             return false;
//         }
//         if (helperInput[0] % 2 !== 0){
//             result.push(helperInput[0]);
//         }
//         helper(helperInput.slice(1));
//     }
//     helper(arr);
//     return result;
// }

// pure recursion version
// function collectOddValues(arr){
//     let newArr = [];
//     if (arr.length === 0){
//         return newArr;
//     }
//     if (arr[0] % 2 !== 0) newArr.push(arr[0]);
//     newArr = newArr.concat(collectOddValues(arr.slice(1)));
//     return newArr;
// }

function flatten(arr){
    const flattened = [];
    function helper(helperInput){
        if (helperInput.length === 0) return false;
        if (Array.isArray(helperInput[0])){
          helper(helperInput[0]);
        } else {
            flattened.push(helperInput[0]);
        }
        return helper(helperInput.slice(1));
    }
    helper(arr);
    return flattened;
}

function flattenPure(arr){
    let flattened = [];
    if (arr.length === 0) return flattened;
    if (Array.isArray(arr[0])){
        flattened = flattened.concat(flattenPure(arr[0]));
    } else {
        flattened.push(arr[0]);
    }
    flattened = flattened.concat(flattenPure(arr.slice(1)));
    return flattened;
}

// For the pure version
// Think about this, if I have
// [1, 2, 3, [4, 5]]
// arr.length at start is not 0
// it pushes arr[0] into flattened
// and then it runs the thing again on the slice,
// which pushes 2 into its own array
// then it runs again, and this pushes 3 into its own array
// all those arrays are sitting there in their own layers of the call stack
// then it meets a subarray


// console.log(flatten([1, 2, 3, 4, 5]));
// console.log(Array.isArray(1))
// console.log(Array.isArray([2]))
// console.log(flatten([1, 2, 3, [4, 5]]));  // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
// console.log([1, 2, 3, [4, 5]].slice(0, -1))

// console.log(flattenPure([1, 2, 3, [4, 5]]));
// console.log(flattenPure([1, [2, [3, 4], [[5]]]]));

// Here is my explanation for how it works, from my first round

// How this works:
// Assuming the array [1, 2, [3, 4]]
// callstack lvl 1
// The first thing it does is check if arr[0] (1) is an array
// it isn't, so it pushes it into accArr. accArr is now [1]
// it is then instructed to concatenate accArr with the result
// of running flattenPure on arr.slice(1), which is [2, [3, 4]]
    // now it runs flattenPure a second time (callstack lvl 2)
    // it checks if arr[0] (== 2) is an array
    // it isn't, so it pushes it into accArr, which is []
    // accArr here is [2]
    // now it wants to concatenate [2] with the result of running
    // flattenPure on arr.slice(1), which is here [3, 4]
        // callStack lvl 3
        // this is an array, so it runs flattenPure on it
        // accArr here remains [], pending the results of
        // concatenating flattenPure([3, 4]) with accArr []
            // callStack lvl 4
            // arr[0] is 3, so that gets pushed into accArr.
            // accArr is now [3]
            // it wants to concatenate [3] with the result of
            // running flattenPure on [4]
                // callStack lvl 5
                // accArr becomes [4]
                // now the algorithm slices once more, this gives
                    // callStack lvl 6
                    // an array of [] which gets passed to flattenPure
                    // here the recursion ends, because this
                    // returns [] and does not call flattenPure again
                // now [] gets returned up to level 5, where [4]
                // waits to concatenate, so [4] + [] == [4]
            // [4] gets returned to level 4, where [3] awaits
            // [3] + [4] == [3, 4]
        // [3, 4] gets returned to level 3, where [] awaits
        // this remains [3, 4]
    // [3, 4] gets returned to level 2, where [2] awaits
// we get [2, 3, 4] returned to level 1, where [1] waits
// we get [1, 2, 3, 4]

// capitalizeFirst
//
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr){
    let capArr = [];
    if (arr.length === 0) return capArr;
    capArr.push(arr[0].charAt(0).toLocaleUpperCase() + arr[0].substring(1));
    capArr = capArr.concat(capitalizeFirst(arr.slice(1)));
    return capArr;
}

const strArr = ["yo", "hey", "whoot"];
// console.log(capitalizeFirst(strArr));

// nestedEvenSum
//
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers
// in an object which may contain nested objects.

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

const obj3 = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
}

const obj4 = {
    a: 2,
    b: 3,
    c: 4,
    d: {a: 2}
}

function nestedEvenSum(obj){
    const values = Object.values(obj);
    let total = 0;
    if (values.length === 0) return total;
    if (typeof values[0] === 'object') total = nestedEvenSum(values[0]);
    if (!isNaN(parseInt(values[0])) && values[0] % 2 === 0) total += values[0];
    return total + nestedEvenSum(values.slice(1));
}

// console.log(nestedEvenSum(obj4));
// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(strArr){
    let capArr = [];
    if (strArr.length === 0) return capArr;
    capArr.push(strArr[0].toLocaleUpperCase());
    return capArr.concat(capitalizeWords(strArr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION'];

// stringifyNumbers
//
// Write a function called stringifyNumbers
// which takes in an object and finds
// all the values which are numbers
// and converts them to strings.
// Recursion would be a great way to solve this!
//
// The exercise intends for you to
// create a new object with
// the numbers converted to strings,
// and not modify the original.
// Keep the original object unchanged.


let obj5 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


// stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

const simpleObj = { num1: 3, string: "yo", num2: 5}

function stringifyNumbers(obj){
    const stringsObj = obj;
    for (const [key, val] of  Object.entries(stringsObj)){
        if (typeof val === 'object') stringifyNumbers(val);
        if (typeof val === 'number') stringsObj[key] = val.toString();
    }
    return stringsObj;
}

// console.log(stringifyNumbers(simpleObj));
// console.log(stringifyNumbers(obj5));

// collectStrings
//
// Write a function called collectStrings
// which accepts an object and returns
// an array of all the values in the object
// that have a typeof string

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const simpleObj2 = {a: 1, b: [], c: 'yo'}

function collectStrings(obj){
    const values = Object.values(obj);
    let stringsArr = [];
    if (values.length === 0) return stringsArr;
    if (typeof values[0] === 'object') stringsArr = stringsArr.concat(collectStrings(values[0]));
    if (typeof values[0] === 'string') stringsArr.push(values[0]);
    return stringsArr.concat(collectStrings(values.slice(1)));
}

// console.log(collectStrings(simpleObj2));
// console.log(collectStrings(obj));

// After all this, keep in mind the following interchange
// in the course questions section

// Section - 9: Flattening
// 0 upvotes
// Madhuvaran · Lecture 55
// · 10 months ago
//
// Hi,
//
//
// Flattening an array using recursion, But you have added solution with iterations. Can you please verify this Solution?
//
// function flatten(array, concatArray = []) {
//      if (array.length === 0) return concatArray;
//      const firstElement = array[0];
//      if (!Array.isArray(firstElement))return flatten(array.splice(1), concatArray.concat(firstElement));
//      return flatten(array.splice(1), flatten(firstElement, concatArray)); }
// 1 reply
// AS
// Akshay
// 1 upvote
// 10 months ago
//
// Hi Madhuvaran,
//
// The provided code is correct and implements a function for flattening an array. However, there are some minor issues and potential for improvement.
//
// The logic for handling non-array elements is duplicated. This can be refactored to improve maintainability. Also, the code repeatedly creates new copies of the concatArray inside the recursive calls. This can be inefficient for large arrays.
//
// Improved version:
//
//     function flatten(array, result = []) {
//       for (const element of array) {
//         if (Array.isArray(element)) {
//           flatten(element, result);
//         } else {
//           result.push(element);
//         }
//       }
//       return result;
//     }
//
// This version addresses the issues mentioned before:
//
// It iterates using of loop for cleaner and more concise code.
//
// It avoids unnecessary splice and replaces it with push for efficient manipulation.
//
// It handles both array and non-array elements with a single conditional statement.
//
// It uses a single result variable throughout the recursion to improve performance.
//
// Please feel free to ask if you have any questions.
//
// Kind regards,
// Akshay
//
// Join the course Discord chat community here. Find free tutorials and tips by Colt here.

// The thing to note here is that the technique
// demonstrated by the instructor himself --
// where at each level of the recursion, a small single-element
// array is created, and as the recursion ends and the
// function calls are popped off the stack,
// all the arrays are concatenated --
// is inefficient, and it is better to have a main logic
// that iterates and pushes into a single array,
// and a recursive call that uses iterative logic

// in addition, as I discovered myself in writing
// my solution to stringify numbers, that approach,
// as mentioned by Akshay here, creates a very
// readable code
// it is not necessary to assume, as I did for much
// of these exercises, that in writing a "recursive"
// solution, one should entirely avoid iteration

// finally note the emphasis on using push and pop
// where possible as opposed to splice or slice

// note also that slicing from the beginning (slice(1))
// is less efficient than slicing from the end (slice(-1))
// that is, popping, as it forces a reindex of the whole array

// Still, on the whole, if the point was to study recursion --
// rather than to create very efficient and readable algorithms --
// the more purely recursive solutions I explored were apropos
// but the solution that more closely follows Akshay's recommendations
// -- stringifyNumbers -- definitely is clearer, more efficient, and
// more readable by far