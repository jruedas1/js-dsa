class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    // adding a vertex
    // write a method called addVertex
    // which accepts a name of a vertex
    // it should add a key to the
    // adjacency list with the name of the vertex
    // and the value should be an empty array

    addVertex(vertex){
        if (!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
        return this;
    }

    // adding an edge
    // This function should accept two vertices
    // The function should find in the adjacency
    // list the key of vertex 1 and push vertex 2
    // into the array
    // and the same thing for vertex2
    // Don't worry about handling errors or
    // invalid vertices
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        return this;
    }

    // Remove Edge
    // This function should accept two vertices
    // (two keys)
    // Reassign the key of vertex1 to be an array
    // that does not contain vertex1
    // Reassign the key of vertex2 to be an array
    // that does not contain vertex2
    // Don't worry about handling errors or
    // invalid vertices

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
        return this;
    }

    // removing a vertex
    // first effort, with no pseudocode
    // removeVertex(vertex){
    //     for (const key in this.adjacencyList){
    //         if (key !== vertex){
    //             this.adjacencyList[key] = this.adjacencyList[key].filter(v => v !== vertex);
    //         }
    //     }
    //     delete this.adjacencyList[vertex];
    // }

    // instructor pseudocode
    // the function should accept a vertex to remove
    // the function should loop as long as there are
    // any other vertices in the adjacency list for that vertex
    // inside the loop, call our remove Edge function with the
    // vertex we are removing and any values in the adjacency
    // list for that vertex
    // [my note: this seems unnecessary, as you are
    // looping over the array for the vertex we are going to remove anyway]
    // delete the key in the adjacency list for that vertex


    removeVertex(vertex){
        for (const key of this.adjacencyList[vertex]){
            this.adjacencyList[key] = this.adjacencyList[key].filter(v => v !== vertex);
        }
        delete this.adjacencyList[vertex];
    }
}

const g = new Graph();
console.log(g.addVertex("Tokyo"));
console.log(g.addVertex("Hong Kong"));
console.log(g.addVertex("Bangkok"));
g.addEdge("Tokyo", "Hong Kong");
g.addEdge("Bangkok", "Hong Kong");
console.log(g);
// g.removeEdge("Hong Kong", "Bangkok");
// console.log(g);
g.removeVertex("Hong Kong");
console.log(g);
