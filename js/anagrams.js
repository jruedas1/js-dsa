function validAnagram(str1, str2){
    if (str1.length !== str2.length) return false;

    function charCountObject(string){
        return string.split('')
            .reduce((obj, char) => {
                obj[char] = ++obj[char] || 1
                return obj;
            },{});
    }
    const charCountOne = charCountObject(str1);
    const charCountTwo = charCountObject(str2);

    for (const key in charCountTwo){
        if (charCountOne[key] !== charCountTwo[key]){
         return false;
        }
    }

    return true;
}

// console.log(validAnagram('texttwist', 'twisttext'));

// Colt Steele's solution
function steelesValidAnagram(first, second){
    if (first.length !== second.length){
        return false;
    }

    const lookup = {}

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++){
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}