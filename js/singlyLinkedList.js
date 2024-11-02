// A node stores a value and
// a reference to the next node, called 'nedt'

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // Push pseudocode
    // This function should accept a value
    // Create a new node using that value
    // If there is no head property on the list,
    // set the head and the tail to be the new node
    // Otherwise, set the next property on the tail
    // to be the new node and set the tail property
    // on the list to be the newly created node
    // increment the length by one

    // Note that JS array push returns the new length of the array
    // I first wrote this method doing that
    // Later I noted that the "Wild West" SLL push exercise
    // actually returns the list itself, so this method
    // returns the new list

    // First version -- this passes the tests
    // (to be fair, the version that returned list length
    // also worked
    // push(val){
    //     const newNode = new Node(val);
    //     if (this.head === null) {
    //         this.head = newNode;
    //         this.tail = newNode;
    //         this.length++;
    //         return this;
    //     }
    //     this.tail.next = newNode;
    //     this.tail = newNode;
    //     this.length++;
    //     return this;
    // }

    // A little sleeker even than the
    // instructor version
    push(val){
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }

    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

    // Pop pseudocode
    // If there are no nodes in the list, return undefined
    // Loop through the list until you get to the tail
    // Set the next property of the penultimate node to be null
    // Set the tail to be the penultimate node
    // list length --
    // Return the value of the node removed
    // First version
    // The problem here is it will fail if
    // length is 1
    // In that case, it will pop off the one value
    // But then immediately replace it.
    // instead, initial value of prev has to be null
    // pop(){
    //     if (this.length === 0) return undefined;
    //     let current = this.head;
    //     let prev =  current;
    //     while(current.next){
    //         prev = current;
    //         current = current.next;
    //     }
    //     prev.next = null;
    //     this.tail = prev;
    //     this.length--;
    //     return current;
    // }

    // Second version with special case for length of 1
    // Also for clarity it is probably best to
    // define things as does the instructor,
    // where first we set the tail to prev,
    // then set the next on the tail to null
    // It amounts to the same but is clearer

    // pop(){
    //     if (this.length === 0) return undefined;
    //     if (this.length === 1) {
    //         const el = this.head;
    //         this.head = null;
    //         this.tail = null;
    //         this.length = 0;
    //         return el;
    //     }
    //     let current = this.head;
    //     let prev =  current;
    //     while(current.next){
    //         prev = current;
    //         current = current.next;
    //     }
    //     this.tail = prev;
    //     this.tail.next = null;
    //     this.length--;
    //     return current;
    // }

    // The somewhat more sleek version presented by the instructor
    // Instead of a whole condition regarding the length === 1
    // in which we store the only element, just so we can return it
    // then hard-set both head and tail to null,
    // then return the saved single element,
    // like this
    //if (this.length === 1) {
    //             const el = this.head;
    //             this.head = null;
    //             this.tail = null;
    //             this.length = 0;
    //             return el;
    //         }
    // we check at the very end whether
    // the length is 0, after removing the sole element
    // and if the length is 0, that means
    // there was only one element,
    // and then we hard-set head and tail to null
    pop(){
        if (this.length === 0) return undefined;
        let current = this.head;
        let prev =  current;
        while(current.next){
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // shift pseudocode
    // If there are no nodes, return undefined
    // Store the current head property in a variable
    // Set the head property to be the head's next property
    // Decrement the length by 1
    // Return the value of the node removed
    // first attempt
    // shift(){
    //     if (this.length === 0) return undefined;
    //     const currHead = this.head;
    //     this.head = this.head.next;
    //     this.length--;
    //     return currHead;
    // }
    // Note that this also fails when there is only one node
    // this is because our normal strategy always sets
    // the last element's next value to null
    // It does this because every new node has a next value set to null
    // when we push it, that is, add it to the end,
    // we say the current tail's next is now the new node --
    // so the new penultimate points to the new last --
    // and then we say the tail is the new node,
    // which means the penultimate points to it, and it points to null
    // when we shift we just say the head is now what used to be the head's next
    // normally this leaves the end alone -- the end is always the last node added,
    // which always points to null as its next
    // and it's always the tail -- the tail set when we pushed it in
    // no matter how much you shift, that tail once set with the last push
    // never changes
    // we just leave it alone
    // but when we eliminate the last element in the list,
    // that leaves the list's tail property set
    // we need to wipe that out manually -- the only circumstances we need that
    shift(){
        if (this.length === 0) return undefined;
        const currHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return currHead;
    }

    // unshift pseudocode
    // this function should accept a value
    // create a new node using the value
    // if there is no head (empty list),
    // set the new node to be both head and tail
    // otherwise the list's head is reassigned
    // to the newly added node
    // and this new node's next property is reset
    // from null to equaling the old head
    // the list is incremented by 1
    // and in the instructor version, the list is returned
    // though perhaps it should be the new length
    // unshift(val){
    //     const newNode = new Node(val);
    //     const currHead = this.head;
    //     if (this.length === 0) {
    //         this.head = newNode;
    //         this.tail = newNode;
    //     } else {
    //         this.head = newNode;
    //         this.head.next = currHead;
    //     }
    //     this.length++;
    //     return this;
    // }
    // Of course this can be better
    // As usual I get things backwards
    // we don't need to keep the old head in a variable
    // if we first take the new node's next, and
    // reset it from null to point to the current head
    // then we just take the list's head property and
    // set it to new node
    // and we don't need the else
    // hahaha actually we do need the else
    // following my own thoughts I did the else
    // while the instructor didn't
    // if you don't have that else you do a circular
    // add .next on the head, where it points to itself
    // repeatedly and infinitely
    unshift(val){
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // get() pseudocode
    // the function accepts a number ("index")
    // if the index is less than zero or greater
    // than the length of the list, return null
    // Loop through the list until you reach the index
    // and return the node at that specific index

    // get(position){
    //     if (position < 0 || position > this.length) return null;
    //     let node = this.head;
    //     for (let i = 0; i <= position; i++){
    //         if (i === position) return node;
    //         node = node.next;
    //     }
    // }

    // To avoid unnecessary looping, we can add some edge cases
    get(position){
        if (position < 0 || position > this.length) return null;
        if (position === 0) return this.head;
        if (position === this.length - 1) return this.tail;
        let node = this.head;
        for (let i = 0; i <= position; i++){
            if (i === position) return node;
            node = node.next;
        }
    }

    // set() pseudocode
    // The function should accept a value and an index or position
    // use the get function to find the correct node
    // if the node is not found, return false
    // if the node is found, set the value of that node
    // to be the value passed to the function, and return true

    // First attempt -- this seems to work, it failed
    // in the tests because the instructor has the parameters reversed
    // compared to me

    // set(value, position){
    //     const targetNode = this.get(position);
    //     if (!targetNode) return false;
    //     targetNode.val = value;
    //     return true;
    // }

    // I rewrote it like this to account for pushing onto the end
    // which shouldn't require using .get as .get loops uselessly
    // across the whole list in that case. Only use .get where
    // it's needed
    // for better performance even than that, there should
    // also be a case where you unshift if length > 1 && position === 0
    // That wouldn't work in the course test suite, which doesn't
    // come preloaded with unshift

    set(position, value){
        if (position > this.length || position < 0) return false;
        if (position === this.length) {
            this.push(value);
        } else if (position === this.length - 1){
            this.tail.val = value;
        } else if (position === 0) {
            this.head.val = value;
        } else {
            const targetNode = this.get(position);
            targetNode.val = value;
        }
        return true;
    }

    // Question, wouldn't this.push just be this.tail.next = new Node(value)?
    // the answer is yes ... but that's what push does anyway,
    // and this way you catch the case in which it's an empty linked list

    // insert pseudocode
    // if index to insert to is less than 0 or > length, return false
    // create the new node with the passed value
    // if index is 0, shift
    // if index is length, push
    // use get with index - 1 to get the prev
    // take prev and set its next property to the new node
    // Set the new node's next property to the prev's old next
    // Increment the length
    // Return true
    // Instructor notes that in the edge cases, shift and push don't return
    // true, so it would be nice to coerce the results to true

    insert(index, value){
        if (index < 0 || index > this.length) return false;
        if (index === 0){
            this.shift(value);
            return true;
        }
        if (index === this.length){
            this.push(value);
            return true;
        }
        const prev = this.get(index - 1);
        const aft = prev.next;
        const newNode = new Node(value);
        prev.next = newNode;
        newNode.next = aft;
        this.length++;
        return true;
    }

    // remove 1st attempt with no instructor pseudocode
    // remove(index){
    //     if (this.length < 1 || index < 0 || index > this.length - 1) return undefined;
    //     if (this.length === 1) {
    //         this.head = null;
    //         this.length = null;
    //     }
    //     const targetPrev = this.get(index - 1);
    //     const targetNode = targetPrev.next;
    //     targetPrev.next = targetPrev.next.next;
    //     this.length--;
    //     return targetNode;
    // }

    // Colt's pseudocode -- I did forget one scenario,
    // the case where index is length - 1
    // OK two scenarios
    // also if the index is 0, shift
    // He says to return the value of the removed node
    // but if you do that the test fails, you have to return the node

    // If the index is less than zero or greater than
    // the length, return undefined
    // If the index is the same as length - 1, pop
    // If the index is zero, shift
    // Otherwise, using the get method, access the node at the index -1
    // Set the next property of on that node to be the next of the next node
    // Decrement the length
    // Return the value of the node removed

    remove(index){
        if (this.length < 1 || index < 0 || index > this.length - 1) return undefined;
        if (this.length === 1) {
            const soleNode = this.head;
            this.head = null;
            this.length = null;
            return soleNode.val;
        }
        if (index === 0) this.shift();
        if (index === this.length - 1) this.pop();
        const targetPrev = this.get(index - 1);
        const targetNode = targetPrev.next;
        targetPrev.next = targetPrev.next.next;
        this.length--;
        return targetNode;
    }

    // reverse - version 1, no pseudocode used
    // reverse(){
    //     let start = 0;
    //     let end = this.length - 1;
    //     while (start < end){
    //         const startVal = this.get(start).val;
    //         const endVal = this.get(end).val;
    //         this.set(start, endVal);
    //         this.set(end, startVal);
    //         start++;
    //         end--;
    //     }
    //     return this;
    // }

    // As lovely and simple as this solution is -- and it works --
    // set uses get, and get loops through the list,
    // so this is a loop within a loop, or O(n**2)

    // Colt's pseudocode

    // Swap the head and the tail
    // Create a variable called next
    // Create a variable called previous
    // Create a variable called node or current and initialize
    // it to the head property
    // Loop through the list
    // Set next to be the next property on whatever currNode is
    // Set the prev to be the value of the node variable
    // Set the node variable to be the value of the next variable

    // So to work through this mentally
    // Say you have 5 -> 10 -> 15 -> 20 -> 25
    //             prev  curr  next
    // You need 10-> 5-> 15 -> 20 -> 25
    // So you say curr.next = prev
    //  10-> 5-> 15 -> 20 -> 25
    // curr prev next
    // Now you have to say prev = curr
    // curr = next
    // and next = next.next


    reverse(){
        let prev = null;
        let curr = this.head;
        let next;
        while(curr){
            console.log("START LOOP:");
            console.log(`Prev is ${JSON.stringify(prev)}`);
            console.log(`Curr is ${JSON.stringify(curr)}`);
            console.log(`Next is ${JSON.stringify(next)}`);
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            console.log("AFTER CHANGES:");
            console.log(`Prev is ${JSON.stringify(prev)}`);
            console.log(`Curr is ${JSON.stringify(curr)}`);
            console.log(`Next is ${JSON.stringify(next)}`);
        }
        const temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        return this;
    }

    // Let's break it down
    // Say you start with 5-> 10-> 15-> 20-> 25
    // You start with saying prev is null
    // curr is 5->
    // next is undefined
    // In the first loop you say
    // next is curr.next
    // so next is 10->
    // this way you've stored the next curr
    // then the crucial switch, curr.next = prev
    // curr is changed to point to what was before it
    // on the first loop, it's switched to point to null
    // so 5 -> null
    // then you move the prev and curr forward
    // prev = curr
    // so prev is 5->null
    // curr = next
    // curr = 10->15
    // Second loop
    // next is curr.next, so next is 15->
    // again, this stores what curr will be moved to
    // then you switch to point 10 to 5
    // 5 is stores as prev, so curr.next = prev does
    // 10-> 5 -> null
    // then prev = curr stores prev as 10 -> 5 -> null
    // then curr = next stores curr = 15->
    // 3rd loop
    // next moves up to 20 -> 25 -> null
    // curr is 15-> 20 -> 25 -> null
    // switch so curr points to prev, which is 10 -> 5 -> null
    // curr.next = prev, now 15 -> 10 -> 5 -> null
    // prev = curr, so prev is 15 -> 10 -> 5 -> null
    // curr = next, so curr is now 20 -> 25 -> null
    // 4th loop
    // next = curr.next: next is 25 -> null
    // curr.next = prev: curr.next is  25 -> null
    // prev = curr, prev is 20 -> 25 -> null
    // curr = next, curr is 25 -> null
    // 5th loop
    // next = curr.next: next is null
    // curr.next = prev: curr.next is 20 -> 25 -> null
    // prev = curr: prev is 25 -> null
    // curr = next: curr is null
    // the loop stops running


    //Implement the following on the SinglyLinkedList class
    //
    // rotate
    //
    // This function should rotate all the nodes in the list by some number passed in. For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be any integer.
    //
    // Time Complexity: O(N), where N is the length of the list.
    //
    // Space Complexity: O(1)

    // First solution
    // rotate(num){
    //     if (num > 0) {
    //         for (let i = 0; i < num; i++){
    //             const first = this.shift();
    //             this.push(first.val);
    //         }
    //     }
    //     if (num < 0) {
    //         for (let i = Math.abs(num); i > 0; i--){
    //             const last = this.pop();
    //             this.unshift(last.val);
    //         }
    //     }
    //     return this;
    // }
    // This passes the tests, however in the q & a,
    // a TA has pointed out that if you use sll.pop()
    // inside a loop, it becomes time complexity O(n*2)
    // because .pop uses a loop
    // So we have to use this.tail, not this.pop
    // rotate(num){
    //     if (num > 0) {
    //         for (let i = 0; i < num; i++){
    //             const first = this.shift();
    //             this.push(first.val);
    //         }
    //     }
    //     if (num < 0) {
    //         for (let i = Math.abs(num); i > 0; i--){
    //             const last = this.tail;
    //             this.unshift(last.val);
    //         }
    //     }
    //     return this;
    // }
    // This just accrues, because the last one doesn't get removed.
    // So, not good
    // The other issue is the unnecessary rotations
    // when the number is very long

    rotate(num){
        if (num > this.length) num = num % this.length;
        if (num < 0) num = num + this.length;
        if (num === 0) return this;
        for (let i = 0; i < num; i++){
            const first = this.shift();
            this.push(first.val);
        }
        return this;
    }
}

const sll = new SinglyLinkedList();
sll.push(5).push(10).push(15).push(20).push(25);
// console.log(sll);
console.log(sll.reverse());
sll.traverse();
// console.log(sll.get(2))
// console.log(sll);
// console.log(sll.get(0));
// sll.push(15);
// console.log(sll);
// sll.push(25);
// console.log(sll);
// sll.push(35);
// console.log(sll.head.next);
// console.log(sll.tail);
// sll.traverse();
// console.log(sll.pop());
// console.log(sll.shift());
// console.log(sll);
// console.log(sll.unshift(5));
// console.log(sll);
// console.log(sll.get(3));
// console.log(sll.get(0));
// console.log(sll.unshift(9));
// console.log(sll);
// console.log(sll.set("yooo", 4));
// console.log(sll);
// console.log(sll.set('ooooh zero', 0));
// console.log(sll);
// console.log(sll.set('hoka hey', 4));
// console.log(sll);
// console.log(sll.rotate(-1));

// Colt's tests for insert
// const singlyLinkedList = new SinglyLinkedList;
// singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
// console.log(singlyLinkedList);
// console.log(singlyLinkedList.remove(2));
// console.log(singlyLinkedList.get(2));
// console.log(singlyLinkedList.reverse());
// console.log(singlyLinkedList.head.next);
// console.log(singlyLinkedList.head.next.next);
// console.log(singlyLinkedList.insert(2, 12)); // true
// singlyLinkedList.insert(100,12); // false
// console.log(singlyLinkedList.length); // 5
// singlyLinkedList.head.val // 5
// singlyLinkedList.head.next.val // 10
// singlyLinkedList.head.next.next.val // 12
// singlyLinkedList.head.next.next.next.val // 15
// singlyLinkedList.head.next.next.next.next.val // 20
//
// singlyLinkedList.insert(5,25); // true
// singlyLinkedList.head.next.next.next.next.next.val //25
// singlyLinkedList.tail.val // 25

// Colt's tests for remove
//     const singlyLinkedList = new SinglyLinkedList;
//     singlyLinkedList.push(5).push(10).push(15).push(20);
// console.log(singlyLinkedList.remove(2).val); // 15
//     singlyLinkedList.remove(100); // undefined
// console.log(singlyLinkedList.length); // 3
// console.log(singlyLinkedList.head.val); // 5
// console.log(singlyLinkedList.head.next.val); // 10
// console.log(singlyLinkedList.head.next.next.val); // 20

// Clean version

class SinglyLinkedListClean {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this.length;
    }

    pop(){
        if (this.length === 0) return undefined;
        let current = this.head;
        let prev =  current;
        while(current.next){
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if (this.length === 0) return undefined;
        const currHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return currHead;
    }

    unshift(val){
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(position){
        if (position < 0 || position > this.length) return null;
        let node = this.head;
        for (let i = 0; i <= position; i++){
            if (i === position) return node;
            node = node.next;
        }
    }

    set(position, value){
        if (position > this.length || position < 0) return false;
        if (position === this.length) {
            this.push(value);
        } else if (position === this.length - 1){
            this.tail.val = value;
        } else if (position === 0) {
            this.head.val = value;
        } else {
            const targetNode = this.get(position);
            targetNode.val = value;
        }
        return true;
    }

    insert(index, value){
        if (index < 0 || index > this.length) return false;
        if (index === 0){
            this.shift(value);
            return true;
        }
        if (index === this.length){
            this.push(value);
            return true;
        }
        const prev = this.get(index - 1);
        const aft = prev.next;
        const newNode = new Node(value);
        prev.next = newNode;
        newNode.next = aft;
        this.length++;
        return true;
    }

    remove(index){
        if (this.length < 1 || index < 0 || index > this.length - 1) return undefined;
        if (this.length === 1) {
            const soleNode = this.head;
            this.head = null;
            this.length = null;
            return soleNode.val;
        }
        if (index === 0) this.shift();
        if (index === this.length - 1) this.pop();
        const targetPrev = this.get(index - 1);
        const targetNode = targetPrev.next;
        targetPrev.next = targetPrev.next.next;
        this.length--;
        return targetNode;
    }

}
