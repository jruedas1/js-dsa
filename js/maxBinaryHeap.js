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

        // Removing from a heap
        // --Remove the root
        // --Replace with the most recently added item
        // --Adjust (sink down)
        // -- This process is known as down-heap
        // aka bubble-down, percolate-down, sift-down
        // aka trickle down, heapify-down, cascade-down,
        // aka extract-max or extract-min

        // Store the first element to return it
        // Swap the first and last elements
        // pop off the last (former first)
        // compare the swapped element to its children
        // take the larger of the two
        // if it's larger than the swapped el, swap

        // instructor pseudocode
        // removing, also called extractMax
        // swap the first value with the last value
        // pop so as to return it at the end
        // have the new root sink down to the correct spot
            // Your parent index starts at 0 (the root)
            // Find the index of the left child:
            // 2*index + 1 (make sure it's not out of bounds)
            // Find the index of the right child:
            // 2*index + 2 (make sure it's not out of bounds)
            // If the left or right child is greater than
            // the element, swap
            // if both are larger, swap with the largest child
            // the child index you swapped to becomes the new parent index
            // Keep looping and swapping until neither child is larger
            // than the element
    // Return the old root

        extractMax(){
            const oldRoot = this.values[0];
            this.values[0] = this.values.pop();
            let parentIndex = 0;
            let leftChild = (parentIndex * 2) + 1;
            let rightChild = (parentIndex * 2) + 2;
            while (this.values[leftChild] > this.values[parentIndex] || this.values[rightChild] > this.values[parentIndex]) {
                const parentValue = this.values[parentIndex];
                const leftChildValue = this.values[leftChild];
                const rightChildValue = this.values[rightChild];
                if (   leftChildValue > parentValue
                    && rightChildValue > parentValue)
                {
                    if (leftChildValue > rightChildValue){
                        this.values[parentIndex] = leftChildValue;
                        this.values[leftChild] = parentValue;
                        parentIndex = leftChild;
                    } else {
                        this.values[parentIndex] = rightChildValue;
                        this.values[rightChild] = parentValue;
                        parentIndex = rightChild;
                    }
                } else if (leftChildValue > parentValue) {
                    this.values[parentIndex] = leftChildValue;
                    this.values[leftChild] = parentValue;
                    parentIndex = leftChild;
                } else {
                    this.values[parentIndex] = rightChildValue;
                    this.values[rightChild] = parentValue;
                    parentIndex = rightChild;
                }
                leftChild = (parentIndex * 2) + 1;
                rightChild = (parentIndex * 2) + 2;
            }
            return oldRoot;
        }

        // Note: this works ONLY for arrays of positive numbers,
        // greater than 0
        // This is because rather than checking for index out of bounds
        // I am relying on the fact that in JS, retrieving an index
        // out of bounds does not cause an exception, it returns undefined
        // 3 > undefined --> true
        // However a more robust solution would have to account for
        // this possibility, as this will break for comparisons
        // to numbers <= 0.

        // In addition, there is the edge case of having only one
        // element in the heap
        // In this case, it pops and replaces the head
        // You have to say something like if (this.values.length === 1) {
        // this.values = [];
        // return this.values[0];
        // the instructor wraps the whole rest of it in if (length > 1)
        // which I think just adds an extra curly brace which gets excessive here
}

// const binaryHeap = new MaxBinaryHeap()
// console.log(binaryHeap.insert(1));
// console.log(binaryHeap.values[0]); // 1
//
// console.log(binaryHeap.insert(2));
// console.log(binaryHeap.values[0]); // 2
//
// console.log(binaryHeap.values); // [2, 1]
//
// console.log(binaryHeap.insert(3));
// console.log(binaryHeap.values[0]); // 3
//
// console.log(binaryHeap.values); // [3, 1, 2]
//
// console.log(binaryHeap.insert(4));
// console.log(binaryHeap.values[0]); // 4
//
// console.log(binaryHeap.values); // [4, 3, 2, 1]
//
// console.log(binaryHeap.insert(5));
// console.log(binaryHeap.values[0]); // 5
//
// console.log(binaryHeap.values); // [5, 4, 2, 1, 3]
//
// console.log(binaryHeap.insert(6));
// console.log(binaryHeap.values[0]); // 6
//
// console.log(binaryHeap.values); // [6, 4, 5, 1, 3, 2]

// extractMax() test values
// const binaryHeap = new MaxBinaryHeap()
//     binaryHeap.insert(1)
//     binaryHeap.insert(2)
//     binaryHeap.insert(3)
//     binaryHeap.insert(4)
//     binaryHeap.insert(5)
//     binaryHeap.insert(6)
// console.log(binaryHeap.values);
//     binaryHeap.extractMax()
// console.log(binaryHeap.values[0]); // 5
// //
// console.log(binaryHeap.values); // [5,4,2,1,3])
// //
//     binaryHeap.extractMax()
// console.log(binaryHeap.values); // [4,3,2,1])
// //
//     binaryHeap.extractMax()
// console.log(binaryHeap.values); // [3,1,2])

// console.log(Math.max(7, undefined)); // NaN
// console.log(isNaN(Math.max(undefined, 5))); // true
// const testArr = [0, 1, 2, 3, 4, 5];
// console.log(testArr.length);
// console.log(testArr[7])

// console.log(-2 > undefined);
