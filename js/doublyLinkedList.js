class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Push pseudocode
    // Create a new node with the value passed in
    // If the head property is null set the head
    // and tail to be the newly created node
    // if not, set the next property on the tail to be the new node
    // Set the prev property on the new node to be the old tail
    // Set the tail property to be the new node
    // Update the length of the linked list

    push(val){
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // pop pseudocode
    // if there is no head, return undefined
    // store the current tail in a variable to return it
    // if the length is 1, set the head and tail to null
    // update the tail to be the previous node
    // set the new tail's next to null
    // decrement the length
    // return the old tail
    // Before returning the old tail node, sever its connection
    // to the list by pointing its prev to null
    // This last may seem questionable, as in this case
    // one is not really returning the popped off node,
    // but the instructor points out that you need to sever
    // the connection bidirectionally

    pop(){
        if (this.length === 0) return undefined;
        const currTail = this.tail;
        if (this.length === 1){
            this.tail = null;
            this.head = null;
        } else {
            const prevToTail = this.tail.prev;
            prevToTail.next = null;
            this.tail = prevToTail;
            currTail.prev = null;
        }
        this.length--;
        return currTail;
    }
    // the else could be abbreviated a bit

    // shift = removing from the beginning
    shift(){
        if (this.length === 0) return undefined;
        const currHead = this.head;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            currHead.prev = null;
        }
        this.length--;
        return currHead;
    }
}