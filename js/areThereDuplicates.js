//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
//
// Examples:
//
//     areThereDuplicates(1, 2, 3) // false
//     areThereDuplicates(1, 2, 2) // true
//     areThereDuplicates('a', 'b', 'c', 'a') // true
//
// Restrictions:
//
// Time - O(n)
//
// Space - O(n)
//
// Bonus:
//
// Time - O(n log n)
//
// Space - O(1)

function areThereDuplicates(...arr){
    const freqCounter = arr.reduce((obj, el) => {
       obj[el] = ++obj[el] || 1;
       return obj;
    }, {});
    for (const key in freqCounter){
        if (freqCounter[key] > 1){
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates(2, 3, 4, 5, 6, 6));