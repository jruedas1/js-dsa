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
}

const bst = new BinarySearchTree();
bst.insert(12);
bst.insert(14);
bst.insert(7);
console.log(bst);
console.log(bst.insert(12));
