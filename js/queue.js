class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
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

    // dequeue(){
    //     if (this.size === 0) return null;
    //     const currFirst = this.first;
    //     if (this.first === this.last){
    //         this.first = null;
    //         this.last = null;
    //     } else {
    //         this.first = this.first.next;
    //     }
    //     this.size--;
    //     return currFirst;
    // }

    // this can be made brief -- in the first edge case
    // if you set this.last to null
    // then in the main logic if that is the case,
    // then this.first.next is null, so when you do
    // this.first = this.first.next, you are setting
    // this.first to null

    dequeue(){
        if (this.size === 0) return null;
        const currFirst = this.first;
        if (this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return currFirst;
    }
}



const q = new Queue();
q.enqueue(5);


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
//     var s = new Stack()
//     s.push(10).push(20).push(30)
//     s.pop() // 30
//     s.pop() // 20
//     s.pop() // 10
//     s.pop() // null
//     s.push(30).push(40).push(50)
//     s.pop() // 50
//     s.push(60)
//     s.pop() // 60

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