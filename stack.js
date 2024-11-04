class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // first version
    // push(val){
    //     const newNode = new Node(val);
    //     if (this.size === 0) {
    //         this.first = newNode;
    //         this.last = newNode;
    //     } else if (this.size === 1) {
    //         this.last = this.first;
    //         newNode.next = this.first;
    //         this.first = newNode;
    //     } else {
    //         newNode.next = this.first;
    //         this.first = newNode;
    //     }
    //     this.size++;
    //     return this.size;
    // }
    // this works but can definitely be simplified

    // Instructor's Stack push pseudocode
    // The function should accept a value
    // Create a new node with that value
    // If there are no nodes in the stack, set the first
    // and last property to be the newly created node
    // If there is at least one node, create a variable
    // that stores the current first property on the stack
    // Reset the first property to be the newly created node
    // Set the next property on the node to be the previously
    // created variable
    // increment the size of the stack by 1

    // So basically the whole thing with pointing
    // to last if the size is 1 is redundant
    // because in that case, last is also first
    // and we are always storing first and
    // having the new first point to the old first
    // so that will happen anyway even if length is 1

    push(val){
        const newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const oldFirst = this.first;
            this.first = newNode;
            this.first.next = oldFirst;
        }
        this.size++;
        return this.size;
    }

    // The instructor has a little flourish,
    // uses the preincrement operator
    // return ++this.size;

    // Initial version
    // pop(){
    //     if (this.size === 0) return null;
    //     const first = this.first;
    //     this.first = this.first.next;
    //     this.size--;
    //     return first;
    // }
    // We are missing something though
    // if the size is 1 we have to empty it
    // by setting both first and last to null
    pop(){
        if (this.size === 0) return null;
        const first = this.first;
        if (this.size === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return first;
    }

    // Instructor's pseudocode
    // If there are no nodes in the stack, return null
    // Create a variable to store the value of
    // the stack's first property
    // If there is only one node, set first and last
    // to be null
    // If there is more than one node,
    // set the first property to be the old first's next
    // decrease the size by 1
    // return the value of the old first node
    // (that is to say, the removed node)

    // The instructor abbreviates it somewhat with
    // const temp = this.first
    // if (this.first === this.last) this.last = null
    // this.first = this.first.next;
    // this.size--;
    // return temp.value

    // I would add, that bit where he returns temp.value
    // instead of the node removed is kind of inconsistent
}

const stack1 = new Stack();
stack1.push(5);
stack1.push(10);
stack1.push(15);
stack1.push(20);
stack1.push(25);
console.log(stack1);
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());

