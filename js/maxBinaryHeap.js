class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    // insert pseudocode
    // Push the value into the values property on the heap
    // Bubble the value up to its correct spot
        // Create a variable called index
        // which is the length of the values property - 1
        // Create a variable called parentIndex
        // which is the floor of (index-1)/2
        // Keep looping as long as the values element
        // at the parentIndex is less than the values
        // element at the child index
            // Swap the value of the values element
            // at the parentIndex with the value of the element
            // at the child index
            // Set the index to be the parentIndex
            // and start over
        insert(value){
            this.values.push(value);
            let index = this.values.length - 1;
            let parentIndex = Math.floor((index - 1) / 2);
            while(this.values[parentIndex] < this.values[index]){
                const temp = this.values[index];
                this.values[index] = this.values[parentIndex];
                this.values[parentIndex] = temp;
                index = parentIndex;
                parentIndex = Math.floor((index - 1) / 2);
            }
            return this;
        }
}

const binaryHeap = new MaxBinaryHeap()
console.log(binaryHeap.insert(1));
console.log(binaryHeap.values[0]); // 1

console.log(binaryHeap.insert(2));
console.log(binaryHeap.values[0]); // 2

console.log(binaryHeap.values); // [2, 1]

console.log(binaryHeap.insert(3));
console.log(binaryHeap.values[0]); // 3

console.log(binaryHeap.values); // [3, 1, 2]

console.log(binaryHeap.insert(4));
console.log(binaryHeap.values[0]); // 4

console.log(binaryHeap.values); // [4, 3, 2, 1]

console.log(binaryHeap.insert(5));
console.log(binaryHeap.values[0]); // 5

console.log(binaryHeap.values); // [5, 4, 2, 1, 3]

console.log(binaryHeap.insert(6));
console.log(binaryHeap.values[0]); // 6

console.log(binaryHeap.values); // [6, 4, 5, 1, 3, 2]