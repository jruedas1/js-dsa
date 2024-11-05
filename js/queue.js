class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
        this.q1 = new Queue();
        this.q2 = new Queue();
    }
    push(val) {
        const bothEmpty = this.q1.size === 0 && this.q2.size === 0;
        const firstEmpty = this.q1.size === 0 && this.q2.size > 0;
        const secondEmpty = this.q1.size > 0 && this.q2.size === 0;
        if (bothEmpty || secondEmpty) this.q1.enqueue(val);
        if (firstEmpty) this.q2.enqueue(val);
        this.size++;
        return this;
    }
    // pop() {
    //     console.log("Before pop")
    //     console.log("q1")
    //     console.log(this.q1)
    //     console.log("q2")
    //     console.log(this.q2);
    //    if (this.q1.size > 0){
    //        while (this.q1.size > 1){
    //            this.q2.enqueue(this.q1.dequeue().value);
    //        }
    //    } else {
    //        while (this.q2.size > 1){
    //            this.q1.enqueue(this.q2.dequeue().value);
    //        }
    //    }
    //     console.log("After pop")
    //     console.log("q1")
    //     console.log(this.q1)
    //     console.log("q2")
    //     console.log(this.q2);
    //     console.log("grabbing last")
    //     const lastIn = this.q1.last;
    //     console.log(lastIn);
    //     this.q1.dequeue();
    //     const temp = this.q1;
    //     this.q1 = this.q2;
    //     this.q2 = temp;
    //     return lastIn ? lastIn.value : lastIn;
    // }
    pop() {
        if (this.q1.size > 0){
            while (this.q1.size > 1){
                this.q2.enqueue(this.q1.dequeue().value);
            }
        } else {
            while (this.q2.size > 1){
                this.q1.enqueue(this.q2.dequeue().value);
            }
        }
        const lastIn = this.q1.last;
        this.q1.dequeue();
        const temp = this.q1;
        this.q1 = this.q2;
        this.q2 = temp;
        return lastIn ? lastIn.value : lastIn;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value){
        const newNode = new Node(value);
        if (this.size === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    // enqueue pseudocode
    // This function accepts some value
    // Create a new node using that value
    // If there are no nodes in the queue,
    // set this node to be the queue's
    // first and last properties
    // otherwise, set the next property
    // on the current last to be that node,
    // then set the last property on the
    // queue to be that node

    // dequeue pseudocode
    // if there is no first, return null
    // Store the first property in a variable
    // See if the first is the same as the last
    // if so, set the first and the last to be null
    // otherwise, set the next property of the current first to be the new first
    // decrement the size
    // return the value of the dequeued node

    dequeue(){
        if (this.size === 0) return null;
        const currFirst = this.first;
        if (this.first === this.last){
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return currFirst;
    }

    // this can be made brief -- in the first edge case
    // if you set this.last to null
    // then in the main logic if that is the case,
    // then this.first.next is null, so when you do
    // this.first = this.first.next, you are setting
    // this.first to null
    //
    // dequeue(){
    //     if (this.size === 0) return null;
    //     const currFirst = this.first;
    //     if (this.first === this.last) this.last = null;
    //     this.first = this.first.next;
    //     this.size--;
    //     return currFirst;
    // }
}

// Colt's queue class -- my code for Stack
// doesn't work with is queue class
// class Queue {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     enqueue(data) {
//         const node = new Node(data);
//
//         if (!this.first) {
//             this.first = node;
//             this.last = node;
//         } else {
//             this.last.next = node;
//             this.last = node;
//         }
//
//         return ++this.size;
//     }
//
//     dequeue() {
//         if (!this.first) return null;
//
//         const temp = this.first;
//         if (this.first === this.last) {
//             this.last = null;
//         }
//         this.first = this.first.next;
//         this.size--;
//         return temp.value;
//     }
// }



// const q = new Queue();
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());


// Stack with 2 Queues
//
// Implement a stack using two queues:
//
// You should implement the following functions:
//
// - push (returns the stack)
//
// - pop (returns the value popped)
//
// Comment on your time complexity for all of these operations:
//
    const s = new Stack()
console.log(s.push(10).push(20).push(30));
    console.log(s.pop()); // 30
    console.log(s.pop()); // 20
    console.log(s.pop()); // 10
    console.log(s.pop()); // null
    s.push(30).push(40).push(50)
console.log(s.pop()); // 50
    s.push(60)
console.log(s.pop()); // 60

// class Stack {
//     constructor() {}
//     push(val) {}
//     pop() {}
// }
//
// // QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU
//
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
//
// class Queue {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     enqueue(data) {
//         var node = new Node(data);
//
//         if (!this.first) {
//             this.first = node;
//             this.last = node;
//         } else {
//             this.last.next = node;
//             this.last = node;
//         }
//
//         return ++this.size;
//     }
//
//     dequeue() {
//         if (!this.first) return null;
//
//         var temp = this.first;
//         if (this.first == this.last) {
//             this.last = null;
//         }
//         this.first = this.first.next;
//         this.size--;
//         return temp.value;
//     }
// }

// Phind suggestions
// Use two queues
// Push by adding to Q1
// To pop, move all elements but the last one
// from Q1 to Q2, then remove the last element from Q1
// and finally swap Q1 and Q2
// Unless, Q1 is empty. In this case move all elements
// From Q2 to Q1 and remove the last element from Q1

// So in enqueue you are adding to the front
// and taking out of the end
// To use this in stacking you have to take OUT of the front
// But, dequeue takes out of the back.
// So what you need to do is to take EVERYTHING out of the queue except the this.first. All this goes into a second queue,
// so you dequeue from one and enqueue into the other,
// then you return that last dequeue from the first queue,
// leaving it empty.
// There should always be an empty queue and that should be the one
// you fill up when ever a pop command comes