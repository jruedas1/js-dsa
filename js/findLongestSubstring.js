//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
//
//     findLongestSubstring('') // 0
//     findLongestSubstring('rithmschool') // 7
//     findLongestSubstring('thisisawesome') // 6
//     findLongestSubstring('thecatinthehat') // 7
//     findLongestSubstring('bbbbbb') // 1
//     findLongestSubstring('longestsubstring') // 8
//     findLongestSubstring('thisishowwedoit') // 6
//
// Time Complexity - O(n)

// function findLongestSubstring(str){
//     let start = 0;
//     let end = 0;
//     let currStr = '';
//     let uniqStrLen = 0;
//     if (str.length === 0)  return uniqStrLen;
//     while (end < str.length){
//         console.log(`Start of loop`);
//         console.log(`Window start: ${start} ; Window end: ${end}`)
//         console.log(`Char at start: ${str[start]}`)
//         console.log(`Char at end: ${str[end]}`)
//         console.log(`Current string: ${currStr}`)
//         console.log(`Current unique string length: ${uniqStrLen}`)
//         if (currStr.indexOf(str[end]) === -1){
//             currStr += str[end];
//             if (currStr.length > uniqStrLen) uniqStrLen = currStr.length;
//             end++;
//         } else {
//             currStr = str[end];
//             start = end;
//             if (currStr.length > uniqStrLen) uniqStrLen = currStr.length;
//             end++;
//         }
//         console.log(`End of loop`);
//     }
//     return uniqStrLen;
// }

// findLongestSubstring('thisisawesome');
// console.log(findLongestSubstring('rithmschool')); // 5
// console.log(findLongestSubstring('thisisawesome')); // 6
// console.log(findLongestSubstring('thecatinthehat')); // 7
// console.log(findLongestSubstring('bbbbbb')); // 1
// console.log(findLongestSubstring('longestsubstring')); // 8
// console.log(findLongestSubstring('thisishowwedoit')); // 6

// Explore a concrete example
// Here, at the start, start is 0 and end is 0
// we add the char at the end, which is r, to the currStr
// before we do that, we check to see if it's already in there
// if it's not, we add it to our current unique char string,
// and we count its length. If the length of the current string
// that is unique is longer than what we currently have for
// longest unique string, then we update it
// so, here at first we add r, then i , then t, then h, then m, then s, then c, then h, then o, but when we get o, o is already in there, so what we do is
// we empty currStr, we move the start-point up to where we are, and then we add o

// OK we've got an issue
// console.log(findLongestSubstring('thisisawesome')); // 6
// 'awesom'
// console.log(findLongestSubstring('thecatinthehat')); // 7
// 'thecatin -- actually 8
// these two, my algo is yielding 5, when it should be 6 and 7
// this one:
//console.log(findLongestSubstring('longestsubstring')); // 8
// is yielding 7, should be 8: 'ubstring'

// Let's follow what happens with `thisisawesome`
// The problem is, if I find that the char is already in the string,
// I am moving the start point up to the end point.
// I need to move the start point up to the char that is one after
// the previous occurrence of the repeated char.
// So in this case, when I get to the second "i" I move the start to the
// s that is after the first i. And I have to remove all the characters
// from the currStr that are up to that point.

// So there are two tasks --
// 1. identify the previous occurrence of the character, and its index
// 2. make the following char the new start point
// 3. slice off the part of the currStr that is up to the new start point

// Strategy: I will make an object in which each entry is a key value pair
// where the key is a char that has been encountered in the string,
// and the value is the last index it appeared at

// function findLongestSubstring(str){
//     let start = 0;
//     let end = 0;
//     let currStr = '';
//     let uniqStrLen = 0;
//     if (str.length === 0)  return uniqStrLen;
//     const indexTracker = {}
//     while (end < str.length){
//         console.log(`Start of loop`);
//         console.log(`Window start: ${start} ; Window end: ${end}`)
//         console.log(`Char at start: ${str[start]}`)
//         console.log(`Char at end: ${str[end]}`)
//         console.log(`Current string: ${currStr}`)
//         console.log(`Current unique string length: ${uniqStrLen}`)
//         console.log(indexTracker);
//
//         if (currStr.indexOf(str[end]) === -1){
//             indexTracker[str[end]] = end;
//             currStr += str[end];
//             if (currStr.length > uniqStrLen) uniqStrLen = currStr.length;
//             end++;
//         } else {
//             const previousOccurrence = indexTracker[str[end]];
//             indexTracker[str[end]] = end;
//             start = previousOccurrence + 1;
//             currStr = currStr.substring(start);
//             if (currStr.length > uniqStrLen) uniqStrLen = currStr.length;
//             end++;
//         }
//
//         console.log(`End of loop`);
//         console.log(`Window start: ${start} ; Window end: ${end}`)
//         console.log(`Char at start: ${str[start]}`)
//         console.log(`Char at end: ${str[end]}`)
//         console.log(`Current string: ${currStr}`)
//         console.log(`Current unique string length: ${uniqStrLen}`)
//         console.log(indexTracker);
//     }
//     return uniqStrLen;
// }

// console.log(findLongestSubstring('rithmschool')); // 7
// console.log(findLongestSubstring('thisisawesome')); // 6
// console.log(findLongestSubstring('thecatinthehat')); // 7
// console.log(findLongestSubstring('bbbbbb')); // 1
// console.log(findLongestSubstring('longestsubstring')); // 8 - ubstring
// console.log(findLongestSubstring('thisishowwedoit')); // 6 - wedoit

// I am getting 7-6-7-1-7-5

// It looks like the algo is failing when the longest substring is at the end
// of the string
// After troubleshooting,
// Change this:  currStr = str.substring(start, end+1);

function findLongestSubstring(str){
    let start = 0;
    let end = 0;
    let currStr = '';
    let uniqStrLen = 0;
    if (str.length === 0)  return uniqStrLen;
    const indexTracker = {}
    while (end < str.length){
        if (currStr.indexOf(str[end]) === -1){
            indexTracker[str[end]] = end;
            currStr += str[end];
            if (currStr.length > uniqStrLen) uniqStrLen = currStr.length;
            end++;
        } else {
            const previousOccurrence = indexTracker[str[end]];
            indexTracker[str[end]] = end;
            start = previousOccurrence + 1;
            currStr = str.substring(start, end+1);
            if (currStr.length > uniqStrLen) uniqStrLen = currStr.length;
            end++;
        }
    }
    return uniqStrLen;
}