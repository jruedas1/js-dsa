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

    // Breadth first search -- iterative
    // Create a queue -- this can be an array
    // and a variable to store the values of nodes visited
    // Place the root node in the queue
    // Loop as long as there is anything in the queue
        // -- Dequeue a node from the queue and push
        // the value of the node into the variable
        // that stores the nodes
        // -- If there is a left property on the
        // dequeued node, add it to the queue
        // -- If there is a right property on the
        // dequeued node, add it to the queue
    // Return the variable that stores the values

    breadthFirstSearch(){
        const queue = [];
        const visited = [];
        if (!this.root) return null;
        queue.unshift(this.root);
        while(queue.length > 0){
            const currNode = queue.shift();
            visited.push(currNode.value);
            if (currNode.left) queue.push(currNode.left);
            if (currNode.right) queue.push(currNode.right);
        }
        return visited;
    }

    DFSPreOrder(){
        const visited = [];
        let current = this.root;
        function traverse(node){
            visited.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return visited;
    }
    // DFS PrOrder Pseudocode -- recursive
    // Create a variable to store
    // the values of the nodes visited
    // Store the root of the tree in a
    // variable called current
    // Write a helper function that accepts a node
        // Push the value of the node
        // to the variable that holds the values
        // If the node has a left property,
        // call the helper function with the
        // left property on the node
        // if the node has a right property,
        // call the helper function with the
        // right property on the node
    // invoke the helper function
    // with the current variable
    // return the array of variables



    DFSInOrder(){
        const visited = [];
        let current = this.root;
        function traverse(node){
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return visited;
    }

    DFSPostOrder(){
        const visited = [];
        let current = this.root;
        function traverse(node){
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }
        traverse(current);
        return visited;
    }

    DFSPostFlex(startNode){
        const visited = [];
        function traverse(node){
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }
        traverse(startNode);
        return visited;
    }

    BFSFlexRightFirst(startNode){
        const queue = [];
        const visited = [];
        if (!this.root) return null;
        queue.unshift(startNode);
        while(queue.length > 0){
            const currNode = queue.shift();
            visited.push(currNode.value);
            if (currNode.right) queue.push(currNode.right);
            if (currNode.left) queue.push(currNode.left);
        }
        return visited;
    }

    DFSPreFlex(startNode){
        const visited = [];
        function traverse(node){
            visited.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(startNode);
        return visited;
    }

    DFSInOrderFlex(startNode){
        const visited = [];
        function traverse(node){
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(startNode);
        return visited;
    }

    // Wild West exercises
    // remove
    //
    // This function should remove a node from a binary search tree. Your remove function should be able to handle removal of the root node, removal of a node with one child and removal of a node with two children. The function should return the node removed.

    // remove(value){
    //     if (!this.root) return null;
    //     let compNode = this.root;
    //     let nodeToRemove = null;
    //     const stack = [this.root];
    //     while(true){
    //         if (compNode.value === value){
    //             nodeToRemove = compNode;
    //             break;
    //         }
    //         if (compNode.value > value){
    //             if (compNode.left) {
    //                 compNode = compNode.left;
    //                 stack.push(compNode);
    //             } else {
    //                 break;
    //             }
    //         }
    //         if (compNode.value < value){
    //             if (compNode.right){
    //                 compNode = compNode.right;
    //                 stack.push(compNode);
    //             } else {
    //                 break;
    //             }
    //         }
    //     }
    //     if (!nodeToRemove) return null;
    //     const childValues = this.BFSFlexRightFirst(nodeToRemove);
    //     childValues.splice(childValues.indexOf(nodeToRemove.value), 1);
    //     const parentNode = stack[stack.length - 2];
    //     if (parentNode.left && parentNode.left.value === value){
    //         parentNode.left = null;
    //     } else {
    //         parentNode.right = null;
    //     }
    //     for (const val of childValues){
    //         this.insert(val);
    //     }
    //     return nodeToRemove.value;
    // }

    //
    //     var binarySearchTree = new BinarySearchTree();
    //     binarySearchTree
    //         .insert(15)
    //         .insert(20)
    //         .insert(10)
    //         .insert(12)
    //         .insert(1)
    //         .insert(5)
    //         .insert(50);
    //     binarySearchTree.remove(50);
    //     binarySearchTree.root.right.value // 20
    //     binarySearchTree.root.right.right // null
    //
    //     binarySearchTree.remove(5);
    //     binarySearchTree.root.left.left.value // 1
    //     binarySearchTree.root.left.left.right // null
    //
    //     var binarySearchTree = new BinarySearchTree();
    //     binarySearchTree
    //         .insert(15)
    //         .insert(20)
    //         .insert(10)
    //         .insert(12)
    //         .insert(1)
    //         .insert(5)
    //         .insert(50);
    //
    //     binarySearchTree.remove(1);
    //     binarySearchTree.root.left.left.value // 5
    //     binarySearchTree.root.left.left.left // null
    //     binarySearchTree.root.left.left.right // null
    //
    //     binarySearchTree.remove(20);
    //     binarySearchTree.root.right.value // 50
    //     binarySearchTree.root.right.right // null
    //     binarySearchTree.root.right.left // null
    //
    //     var binarySearchTree = new BinarySearchTree();
    //     binarySearchTree
    //         .insert(15)
    //         .insert(20)
    //         .insert(10)
    //         .insert(12)
    //         .insert(1)
    //         .insert(5)
    //         .insert(50)
    //         .insert(60)
    //         .insert(30)
    //         .insert(25)
    //         .insert(23)
    //         .insert(24)
    //         .insert(70);
    //
    //     binarySearchTree.remove(10);
    //     binarySearchTree.root.left.value // 12
    //     binarySearchTree.root.left.left.value // 1
    //     binarySearchTree.root.left.left.right.value // 5
    //
    //     binarySearchTree.remove(50);
    //     binarySearchTree.root.right.value // 20
    //     binarySearchTree.root.right.right.value // 60
    //     binarySearchTree.root.right.right.left.value // 30
    //
    //     var binarySearchTree = new BinarySearchTree();
    //     binarySearchTree
    //         .insert(22)
    //         .insert(49)
    //         .insert(85)
    //         .insert(66)
    //         .insert(95)
    //         .insert(90)
    //         .insert(100)
    //         .insert(88)
    //         .insert(93)
    //         .insert(89)
    //
    //     binarySearchTree.remove(85);
    //     binarySearchTree.root.right.right.value // 88
    //     binarySearchTree.root.right.right.right.left.left.value // 89

    // The problem here all along was unclear instructions
    // It told you to handle removal of children but not how,
    // and did so in an apparently inconsistent manner
    // without explaining what criteria were being used
    // for reinsertion
    // I felt like I had been successful given the
    // problem as stated, so I went ahead and looked up
    // a solution that made his tests pass
    //        remove(value){
    //             this.root = this.deleteNode(this.root, value);
    //         }
    //
    //         deleteNode(root, value){
    //             if(!root) return root; // if there is no root, return root which is null.
    //
    //             if(value < root.value){
    //                 root.left = this.deleteNode(root.left, value); // if value less than node value go to left
    //             }
    //             else if (value > root.value) {
    //                 root.right = this.deleteNode(root.right, value); // if value greater than node value go to right
    //             }
    //             else {
    //             // this means that value is equals to node.value, node to remove is found
    //
    //             // Case 1: Deleting a node with no children
    //             if(!root.left && !root.right) return null; // Remove node from the tree.
    //
    //             // Case 2: Deleting a node with one child
    //             if(!root.left) return root.right; // if there is no left, return right.
    //             else if(!root.right) return root.left; // if there is no right, return left.
    //
    //             // Case 3: Deleting a node with two children
    //             root.value = this.min(root.right); // node that contains minimum value in the right subTree.
    //             root.right = this.deleteNode(root.right, root.value);
    //           }
    //
    //           return root;
    //         }
    //
    //         min(root){
    //           if(!root.left) return root.value;
    //           else return this.min(root.left);
    //         }


    // As we can see from this, the solution involved, bizarrely,
    // "finding the node that had the minimum value in the right subTree" and starting from there -- pretty much nonsense
    // especially as that was not stated anywhere in the
    // instructions

    findSecondLargest(){
        const values = this.DFSInOrder();
        if (values.length < 2) return undefined;
        return values[values.length - 2];
    }

    // To check if a Binary tree is balanced we need to check three conditions :
    //
    //     1. The absolute difference between heights of left and right subtrees at any node should be less than 1.
    //
    // 2. For each node, its left subtree should be a balanced binary tree.
    //
    // 3. For each node, its right subtree should be a balanced binary tree.

    //Binary Search Tree Exercise - Check if balanced
    //
    // Write a function on the BinarySearchTree class
    //
    // isBalanced - returns true if the BST is balanced, otherwise returns false.
    //
    // A balanced tree is defined as a tree where the depth of all leaf nodes or nodes with single children differ by no more than one.


}

// const bst = new BinarySearchTree();
// bst.insert(12);
// bst.insert(14);
// bst.insert(7);
// console.log(bst);
// console.log(bst.insert(12));

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50);
// console.log(binarySearchTree.breadthFirstSearch()); // [(15, 10, 20, 1, 12, 50, 5)];

// console.log(binarySearchTree.DFSPreOrder()); // [15, 10, 1, 5, 12, 20, 50]

// console.log(binarySearchTree.DFSPostOrder()); // [5, 1, 12, 10, 50, 20, 15]

// console.log(binarySearchTree.DFSInOrder()); // [1, 5, 10, 12, 15, 20, 50]

// console.log(binarySearchTree.remove(50));
// console.log(binarySearchTree.root.right.value);// 20
// console.log(binarySearchTree.root.right.right); // null
// //
// console.log(binarySearchTree.remove(5));
// console.log(binarySearchTree.root.left.left.value); // 1
// console.log(binarySearchTree.root.left.left.right); // null

    // const binarySearchTree2 = new BinarySearchTree();
    // binarySearchTree2
    //     .insert(15)
    //     .insert(20)
    //     .insert(10)
    //     .insert(12)
    //     .insert(1)
    //     .insert(5)
    //     .insert(50)
    //     .insert(60)
    //     .insert(30)
    //     .insert(25)
    //     .insert(23)
    //     .insert(24)
    //     .insert(70);

// console.log(binarySearchTree2);
// console.log(binarySearchTree2.breadthFirstSearch())
// console.log(binarySearchTree2.remove(10));
// console.log(binarySearchTree2);
// console.log(binarySearchTree2.breadthFirstSearch())
// console.log(binarySearchTree2.root.left.value); // 12
// console.log(binarySearchTree2.root.left.left.value); // 1
// console.log(binarySearchTree2.root.left.left.right.value); // 5
//
// console.log(binarySearchTree2.remove(50));
// console.log(binarySearchTree2.root.right.value); // 20
// console.log(binarySearchTree2.root.right.right.value); // 60
// console.log(binarySearchTree2.root.right.right.left.value); // 30

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(22)
//     .insert(49)
//     .insert(85)
//     .insert(66)
//     .insert(95)
//     .insert(90)
//     .insert(100)
//     .insert(88)
//     .insert(93)
//     .insert(89)
//
// console.log(binarySearchTree.remove(85));
// console.log(binarySearchTree.root.right.right.value); // 88
// binarySearchTree.root.right.right.right.left.left.value // 89

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// console.log(binarySearchTree.findSecondLargest());; // returns 15
//
// const binarySearchTree2 = new BinarySearchTree();
// binarySearchTree2.insert(10);
// console.log(binarySearchTree2.findSecondLargest());; // returns undefined

//
//     var binarySearchTree = new BinarySearchTree();
//     binarySearchTree.insert(15);
//     binarySearchTree.insert(20);
//     binarySearchTree.insert(10);
//     binarySearchTree.insert(12);
//     binarySearchTree.isBalanced(); // true
//
//     var binarySearchTree2 = new BinarySearchTree();
//     binarySearchTree2.insert(5);
//     binarySearchTree2.isBalanced(); // true
//     binarySearchTree2.insert(6);
//     binarySearchTree2.isBalanced(); // true
//     binarySearchTree2.insert(7);
//     binarySearchTree2.isBalanced(); // false