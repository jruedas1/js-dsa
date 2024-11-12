// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0) - 96);

// function hash(key, arrLen){
//     let total = 0;
//     for (let char of key){
//         let val = char.charCodeAt(0) - 96;
//         total += val;
//     }
//     return total % arrLen;
// }

// console.log(hash("pink", 10));
// console.log(hash("pink", 10));
// console.log(hash("orange", 10));
// console.log(hash("purple", 10));
// console.log(hash("burnt siena", 10));

// Problems: not constant time -- linear with key length
// tendency to cluster, could be more distributed

function hash(key, arrLen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let val = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + val) % arrLen;
    }
    return total;
}

// The prime number multiplication reduces collisions
// by increasing spread

// console.log(hash("pink", 10));
// console.log(hash("orange", 10));
// console.log(hash("purple", 10));
// console.log(hash("burnt siena", 10));

// pink and orange still hash to 0 ... a collision
// how do we handle collisions?

// we can use SEPARATE CHAINING
// this means at each index in the array we store
// values using a more sophisticated data structure
// e.gl either an array or a linked list
// this allows us to store multiple key-value pairs
// at the same index

// we can use LINEAR PROBING
// here, when we find a collision,
// we search through the array to find the next empty slot

class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let val = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + val) % this.keyMap.length;
        }
        return total;
    }

    // Set pseudocode
    // accepts a key and a value
    // Hashes the key
    // Stores the key value pair
    // in the hash table array via separate chaining.
    // separate chaining:
    // say we hash darkblue and we get 4
    // we go to index of 4 and check is there anything here
    // if not, we store it there
    // but we store it in an array
    // [["darkblue"]]
    // so if we then get salmon also hash to 4
    // next time through we just push it onto the array at 4
    // [["darkblue", "hexCode"], ["salmon", "hexCode]]

    set(key, value){
        const keyHash = this._hash(key);
        if (!this.keyMap[keyHash]){
            this.keyMap[keyHash] = [];
        }
        this.keyMap[keyHash].push([key, value]);
    }

    // looking at instructor solution, he calls the hash
    // "index", which is a good way of stating what the hash
    // actually does in this scenario
    // Also, many of the students are pointing out in the Q&A
    // that this doesn't check for duplicates

    // get
    // Accepts a key
    // hashes the key
    // retrieves the key-value pair
    // if the key isn't there, return undefined

    // Note: his pseudocode said to return the key-value pair
    // but in his solution he returns just the value

    // get(key){
    //     const keyHash = this._hash(key);
    //     // if the location at the hash is empty, return undefined
    //     if (!this.keyMap[keyHash]) return undefined;
    //     // search through the nested data structure for the key
    //     const keyValPair = this.keyMap[keyHash].filter(sepChainEl => sepChainEl[0] === key);
    //     // if the filter function returns an empty array,
    //     // it means the key, when hashed, gave a location that
    //     // already has key-val pairs stored, but that key is
    //     // not in the nested structure
    //     if (keyValPair.length === 0) return undefined;
    //     return keyValPair;
    // }

    get(key){
        const keyHash = this._hash(key);
        // if the location at the hash is empty, return undefined
        if (!this.keyMap[keyHash]) return undefined;
        // search through the nested data structure for the key
        const keyValPair = this.keyMap[keyHash].filter(sepChainEl => sepChainEl[0] === key);
        // if the filter function returns an empty array,
        // it means the key, when hashed, gave a location that
        // already has key-val pairs stored, but that key is
        // not in the nested structure
        if (keyValPair.length === 0) return undefined;
        return keyValPair[0][1];
    }

    // Also we could use .find instead. In this case the last two lines would be
    // if (!keyValPair) return undefined
    // return keyValPair[1]
    // or, simply
    // return !keyValPair ? keyValPair : keyValPair[1]
    // or, conversely
    // return keyValPair ? keyValPair[1] : keyValPair

    // keys
    // loops through the table and returns an array of keys in the table
    // values
    // loops through the table and returns an array of the values in the table

    // keys(){
    //     return this.keyMap.reduce((acc, curr) => {
    //         if (curr) acc = acc.concat(curr.map(arr => arr[0]));
    //         return acc;
    //     }, []);
    // }

    // or, better yet

    // keys(){
    //     return this.keyMap.flatMap(arr => arr ? arr.map(arr=>arr[0]) :[] );
    // }

    keys(){
        return this.keyMap.flatMap(arr => arr ? arr.map(arr=>arr[0]) :[] );
    }


    // Better solution from a student
    // But I'm not quite sure how it works
    // keys() {
    //     return this.keyMap.flat().map(([key]) => key);
    // }


    // values(){
    //     return this.keyMap.reduce((acc, curr) => {
    //         if (curr) acc = acc.concat(curr.map(arr => arr[1]));
    //         return acc;
    //     }, []);
    // }

    // values(){
    //     return this.keyMap.flatMap(arr => arr ? arr.map(arr=>arr[1]) :[] );
    // }

    // if you want to reduce it to unique items:

    values(){
        return [...new Set(this.keyMap.flatMap(arr => arr ? arr.map(arr=>arr[1]) :[] ))];
    }


}

const table = new HashTable();
table.set("pink", 'bubbleHoney');
table.set("purple", "astarte");
table.set('mauve', "ratchetAndClank");
table.set("insipid", "dramatic");
console.log(table);
console.log(table.get("pink"));
console.log(table.get("red"));
console.log(table.get("orange"));
table.set("orange", "fiddlesticks");
console.log(table.get("burnt siena"));
// console.log(table.keyMap);
console.log(table.get("orange"));
console.log(table.get("mauve"));
table.set("green", "fiddlesticks");

console.log(table.keys());
console.log(table.values());

// const test = [[0, 1], [2, 3]]
// console.log(test.map(arr => arr[0]));
// const test2 = [[[0, 1], [2, 3]], [[4,5], [6, 7]], undefined];
// console.log(
//     test2.reduce((acc, curr) => {
//         if (curr) acc = acc.concat(curr.map(arr => arr[0]));
//         return acc;
//     }, []));

// console.log(test2.flatMap(arr => arr ? arr.map(arr=>arr[0]) :[] ));

// this is fine if there are no undefined values


