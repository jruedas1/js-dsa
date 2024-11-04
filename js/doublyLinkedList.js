class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }

    output(){
        console.log('-----------------------');
        console.log(`val: ${this.val}`);
        console.log(`prev: ${this.prev? this.prev.val : 'null'}`);
        console.log(`next: ${this.next? this.next.val : 'null'}`);
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
            currHead.next = null;
        }
        this.length--;
        return currHead;
    }
    // shift pseudocode
    // if length is 0, return undefined
    // Store the current head property in a variable
    // if the length is one, set head and tail to be null
    // update the head to be the next of the old head
    // set the new head's prev property to null
    // set the old head's next to null to sever the links
    // decrement the length
    // return the old head


    unshift(val){
        const newNode = new Node(val);
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            const currHead = this.head;
            this.head = newNode;
            this.head.next = currHead;
            currHead.prev = newNode;
        }
        this.length++;
        return this;
    }
    // unshift pseudocode
    // create a new node with the value passed to the function
    // if length is 0, set head and tail to new node
    // otherwise
    // set prev property on head to new node
    // set next property on new node to head
    // update head to be new node
    // increment the length
    // return the list

    // so, based on this and the instructor solution, my else
    // clause can be improved as follows:
    // this.head.prev = newNode;
    // newNode.next = this.head;
    // this.head = newNode;

    // get(pos){
    //     if (pos < 0 || pos >= this.length) return null;
    //     if (pos === 0) return this.head;
    //     let node = this.head;
    //     for (let i = 1; i < this.length; i++){
    //         node = node.next;
    //         if (i === pos) return node;
    //     }
    // }

    // Here the instructor proposes an optimization,
    // where the loop starts from the end and goes backwards
    // IF the target position is closer to the end than to
    // the beginning
    // thinking it through -- the distance from the start IS pos
    // the distance from the end, if length is 10 and pos is 9
    // it's length - pos
    // so if pos is bigger than the end-distance, then start from the end
    // otherwise start from the beginning

    get(pos){
        if (pos < 0 || pos >= this.length) return null;
        if (pos === 0) return this.head;
        if (pos === this.length - 1) return this.tail;
        if (pos < this.length - pos){
            let node = this.head;
            for (let i = 1; i < this.length; i++){
                node = node.next;
                if (i === pos) return node;
            }
        } else {
            let node = this.tail;
            for (let i = this.length - 2; i >= 0; i--){
                node = node.prev;
                if (i === pos) return node;
            }
        }
    }

    // The instructor's code is maybe nicer --
    // for the forwards count
    // let count = 0
    // let current = this.head;
    // while (count != index){
    // current = current.next;
    // count++ }
    // return current;
    // his condition is (index <= this.length / 2)
    // his backwards count is
    // let count = this.length - 1;
    // let current = this.tail;
    // while (count != index) {
    // current = current.prev;
    // count--;}
    // return current;

    set(pos, val){
        if (pos < 0 || pos >= this.length) return false;
        const node = this.get(pos);
        node.val = val;
        return true;
    }

    // pseudocode
    // Create a variable which is the result of the get method
    // at the index passed to the function
    // if the get method returns a valid node,
    // set the value of that node to be the value passed to the function
    // return true
    // otherwise return false
    // However, using this method where you gather in the this.get first
    // then use an if on it to branch the logic
    // introduces curly braces and is longer and less clear
    // so in this case I like my solution better

    // remove(pos){
    //     if (pos < 0 || pos >= this.length) return undefined;
    //     const node = this.get(pos);
    //     node.next.prev = node.prev;
    //     node.prev.next = node.next;
    //     this.length--;
    //     return node;
    // }

    // here the uses shift and pop for
    // the end and beginning. Indeed, this first version fails at 0
    // and it also fails at length - 1

    remove(pos){
        if (pos < 0 || pos >= this.length) return undefined;
        if (pos === 0) return this.shift();
        if (pos === this.length - 1) return this.pop();
        const node = this.get(pos);
        node.next.prev = node.prev;
        node.prev.next = node.next;
        this.length--;
        return node;
    }

    // He also advocates setting the next and prev values
    // on the returned nodes to null, but
    // I don't see the purpose of this


    // insert(pos, val){
    //     if (pos < 0 || pos >= this.length) return false;
    //     const newNode = new Node(val);
    //     const targetNode = this.get(pos);
    //     const prev = targetNode.prev;
    //     targetNode.prev = newNode;
    //     newNode.next = targetNode;
    //     newNode.prev = prev;
    //     prev.next = newNode;
    //     this.length++;
    //     return true;
    // }

    // colt's pseudocode
    // if the index is less than zero or >= list length return false
    // if index is 0, use unshift
    // if index is length, push
    // use get method to access index - 1
    // set next and prev properties to link everything together
    // increment the length
    // return true
    // so, a modification to allow a push to the length is needed

    // insert(pos, val){
    //     if (pos < 0 || pos > this.length) return false;
    //     const newNode = new Node(val);
    //     if (pos === 0) this.unshift(val);
    //     if (pos === this.length) this.push(val);
    //     const targetNode = this.get(pos);
    //     const prev = targetNode.prev;
    //     targetNode.prev = newNode;
    //     newNode.next = targetNode;
    //     newNode.prev = prev;
    //     prev.next = newNode;
    //     this.length++;
    //     return true;
    // }

    // He uses pos - 1
    // but this still requires references to three nodes
    // so it's different but not simpler
    // const beforeNode = this.get(pos - 1);
    // const afterNode = beforeNode.next;
    // beforeNode.next = newNode;
    // newNode.prev = beforeNode;
    // newNode.next = afterNode;
    // afterNode.prev = newNode;

    // it's the same length but the variable naming
    // is perhaps clearer

    // Here he also coerces the unshift and push
    // return values to boolean, so as to match the rest of the function

    insert(pos, val){
        if (pos < 0 || pos > this.length) return false;
        const newNode = new Node(val);
        if (pos === 0) return !!this.unshift(val);
        if (pos === this.length) return !!this.push(val);
        const targetNode = this.get(pos);
        const prev = targetNode.prev;
        targetNode.prev = newNode;
        newNode.next = targetNode;
        newNode.prev = prev;
        prev.next = newNode;
        this.length++;
        return true;
    }

    reverse(){
        let curr = this.tail;
        while(curr){
            let prev = curr.prev;
            curr.prev = curr.next;
            curr.next = prev;
            curr = curr.next;
        }
        const temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        return this;
    }

    // Let's say we have 5 10 15 20
    // First start from the tail
    // 20 - prev is 15 and next is null
    // what we want is for prev to be null and next to be 15
    // then we need to move on to 15
    // 15 has a prev of 10 and a next of 20
    // we want 15's prev to be 20 and its next to be 10

    output(){
        let node = this.head;
        let count = 0;
        while(count < this.length){
            console.log(`node ${count}`);
            console.log(`val: ${node.val}`);
            console.log(`prev: ${node.prev? node.prev.val : 'null'}`);
            console.log(`next: ${node.next? node.next.val : 'null'}`);
            console.log("---------------------");
            node = node.next;
            count++;
        }

    }
}

const dll1 = new DoublyLinkedList();
dll1.push(5).push(10).push(15).push(20).push(25).push(30).push(35);
// dll1.unshift(0);
// dll1.toString();
// console.log(dll1.length);
// dll1.get(2).output();
// console.log(dll1.get(4));
// dll1.reverse().output();
// dll1.output();
// console.log(dll1.length);
// dll1.remove(0);
// dll1.remove(dll1.length-1);
// dll1.output();