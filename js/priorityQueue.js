class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

// pseudocode
// write a min binary heap
// lower number means higher priority
// each node has a val and a priority
// use the priority to build the heap
// enqueue method accepts a value and priority,
// makes a new node,
// and puts it in the right spot based on its priority
// dequeue method removes root element,
// returns root element, and rearranges using priority

// maxBinaryHeap insert pseudocode
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
// insert(value){
//     this.values.push(value);
//     let index = this.values.length - 1;
//     let parentIndex = Math.floor((index - 1) / 2);
//     while(this.values[parentIndex] < this.values[index]){
//         const temp = this.values[index];
//         this.values[index] = this.values[parentIndex];
//         this.values[parentIndex] = temp;
//         index = parentIndex;
//         parentIndex = Math.floor((index - 1) / 2);
//     }
//     return this;
// }

// maxBinaryHeap remove pseudocode and code
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
// extractMax(){
//     const oldRoot = this.values[0];
//     this.values[0] = this.values.pop();
//     let parentIndex = 0;
//     let leftChild = (parentIndex * 2) + 1;
//     let rightChild = (parentIndex * 2) + 2;
//     while (this.values[leftChild] > this.values[parentIndex] || this.values[rightChild] > this.values[parentIndex]) {
//         const parentValue = this.values[parentIndex];
//         const leftChildValue = this.values[leftChild];
//         const rightChildValue = this.values[rightChild];
//         if (   leftChildValue > parentValue
//             && rightChildValue > parentValue)
//         {
//             if (leftChildValue > rightChildValue){
//                 this.values[parentIndex] = leftChildValue;
//                 this.values[leftChild] = parentValue;
//                 parentIndex = leftChild;
//             } else {
//                 this.values[parentIndex] = rightChildValue;
//                 this.values[rightChild] = parentValue;
//                 parentIndex = rightChild;
//             }
//         } else if (leftChildValue > parentValue) {
//             this.values[parentIndex] = leftChildValue;
//             this.values[leftChild] = parentValue;
//             parentIndex = leftChild;
//         } else {
//             this.values[parentIndex] = rightChildValue;
//             this.values[rightChild] = parentValue;
//             parentIndex = rightChild;
//         }
//         leftChild = (parentIndex * 2) + 1;
//         rightChild = (parentIndex * 2) + 2;
//     }
//     return oldRoot;
// }

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority){
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        let index = this.values.length - 1;
        let parentIndex = index === 0 ? 0 : Math.floor((index - 1) / 2);
        while (this.values[parentIndex].priority > this.values[index].priority){
            const temp = this.values[index];
            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = temp;
            index = parentIndex;
            parentIndex = index === 0 ? 0 : Math.floor((index - 1) / 2);
        }
        return this;
    }

    dequeue(){
        // console.log("Running dequeue on -------------------------");
        // console.log(this);
        const oldRoot = this.values[0];
        this.values[0] = this.values.pop();
        let parentIndex = 0;
        let leftChildIndex = (parentIndex * 2) + 1;
        let rightChildIndex = (parentIndex * 2) + 2;
        while ((leftChildIndex < this.values.length || rightChildIndex < this.values.length)
            && ((leftChildIndex < this.values.length && this.values[leftChildIndex] && this.values[parentIndex].priority > this.values[leftChildIndex].priority) || (rightChildIndex < this.values.length && this.values[rightChildIndex] && this.values[parentIndex] > this.values[rightChildIndex].priority))
            ) {
            // console.log(("looping"))
            let parentNode = this.values[parentIndex];
            let parentPriority = parentNode.priority;
            let leftChildNode = this.values[leftChildIndex];
            let leftChildPriority = leftChildNode ? leftChildNode.priority : undefined;
            let rightChildNode = this.values[rightChildIndex];
            let rightChildPriority = rightChildNode ? rightChildNode.priority : undefined;
            // console.log(parentPriority, leftChildPriority, rightChildPriority);
            // while(){
            // if both children have higher priority than the parent
            if ((leftChildPriority && leftChildPriority < parentPriority) && (rightChildPriority && rightChildPriority < parentPriority)){
                // we check if one child has higher priority than the other
                if (leftChildPriority < rightChildPriority){
                     // if left is higher priority than right
                    // we swap the parent for its left child
                    this.values[parentIndex] = leftChildNode;
                    this.values[leftChildIndex] = parentNode;
                    parentIndex = leftChildIndex;
                } else {
                    this.values[parentIndex] = leftChildNode;
                    this.values[rightChildIndex] = parentNode;
                    parentIndex = rightChildIndex;
                }
            } else if (leftChildPriority && leftChildPriority < parentPriority){
                this.values[parentIndex] = leftChildNode;
                this.values[leftChildIndex] = parentNode;
                parentIndex = leftChildIndex;
            } else {
                if (rightChildPriority){
                    this.values[parentIndex] = leftChildNode;
                    this.values[rightChildIndex] = parentNode;
                    parentIndex = rightChildIndex;
                }
            }
            leftChildIndex = (parentIndex * 2) + 1;
            rightChildIndex = (parentIndex * 2) + 2;

        }
        // console.log(this);
        return oldRoot;
    }

    // :) I know this isn't how you're **supposed** to solve it and far
    // from the most efficient, but I'm just happy because I solved it my way
    // and without an y help :)
}

const pq = new PriorityQueue();
const task1 = {task: "fix car AC", priority: 3}
const task2 = {task: "clean bathroom", priority: 1}
const task3 = {task: "rest", priority: 2}
const task4 = {task: "learn DSA", priority: 2}
const task5 = {task: "organize bookshelves", priority: 5}
// console.log(pq.enqueue(task1.task, task1.priority));
// console.log(pq.enqueue(task2.task, task2.priority));
// console.log(pq.enqueue(task3.task, task3.priority));
// console.log(pq.enqueue(task4.task, task4.priority));
// console.log(pq.enqueue(task5.task, task5.priority));
pq.enqueue(task1.task, task1.priority);
pq.enqueue(task2.task, task2.priority);
pq.enqueue(task3.task, task3.priority);
pq.enqueue(task4.task, task4.priority);
pq.enqueue(task5.task, task5.priority);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());

