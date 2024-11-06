class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let compNode = this.root;
            while (true){
                if (newNode.value === compNode.value) return undefined;
                if (newNode.value > compNode.value){
                    if (compNode.right){
                        compNode = compNode.right;
                    } else {
                        compNode.right = newNode;
                        break;
                    }
                } else {
                    if (compNode.left){
                        compNode = compNode.left;
                    } else {
                        compNode.left = newNode;
                        break;
                    }
                }
            }
        }
        return this;
    }
    // insert pseudocode
    // iterative or recursive
    // create a new node
    // Starting at the root
        // check if there is a root
        // if not the root now becomes that new node
        // if there is a root, check if the value of the
        // new node is greater than or less than the value
        // of the root
        // if it is greater
            // check to see if there is a node to the right
                // if there is, move to that node
                // and repeat these steps
                // if there is not, add that node as the
                // right property
        // if it is less
            // check to see if there is a node to the left
                // if there is, move to that node
                // and repeat these steps
                // if there is not, add that node as
                // the left property
    // Note that we added a check for equality that just
    // ignores equal values and returns undefined
    // instructor mentions that another approach would
    // be adding a frequency counter to each node

    // find pseudocode
    // again, can be recursive or iterative
    // starting at the root--
    // check if there is a root, if not -
    // we're done searching
    // if there is a root, check if the value is the
    // value we are looking for
    // if we found it, we're done!
    // if not, check to see if the value is
    // greater or less than the value of the root
    // if it is greater
        // check to see if there is a right node
        // if there is, move to that node
        // and repeat these steps
        // if there is not, we're done searching
    // if it is less
        // Check to see if there is a node to the left
        // if there is, move to that node
        // and repeat these steps
        // if there is not, we're done searching

    // Instructor insists on returning undefined
    // in case of failure
    // so I've put undefined
    // however, null would be better since nodes are objects
    find(val){
        if (!this.root) return undefined;
        let compNode = this.root;
        while(true){
            if (compNode.value === val) return compNode;
            if (compNode.value > val) {
                if (compNode.left){
                    compNode = compNode.left;
                } else {
                    return undefined;
                }
            } else {
                if (compNode.right){
                    compNode = compNode.right;
                } else {
                    return undefined;
                }
            }
        }
    }
    // instead of find(), the instructor, with his
    // maddening inconsistency and lack of planning,
    // rewrites it as a contains() method returning
    // true or false
    contains(value){
        if (!this.root) return false;
        let current = this.root;
        let found = false;
        while (current && !found){
            if (value < current.value){
                current = current.left;
            } else if (value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

const bst = new BinarySearchTree();
bst.insert(12);
bst.insert(14);
bst.insert(7);
console.log(bst);
console.log(bst.insert(12));
