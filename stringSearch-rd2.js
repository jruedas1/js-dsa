// Naive String Search

// Pseudocode
// Loop over the longer string
// loop over the shorter string
// if the characters don't match, break out of the inner loop
// if you complete the inner loop and find a match,
// --- increment the count of matches
// return the count

function naiveStringSearch(str1, str2){
    let count = 0;
    for (let i = 0; i < str1.length; i++){
        for (let j = 0; j < str2.length; j++){
            if (str1[i+j] !== str2[j]) break;
            if (j === str2.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveStringSearch('wowomgzomg', 'omg')); // 2