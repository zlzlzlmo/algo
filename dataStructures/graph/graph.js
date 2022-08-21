class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return;
    this.adjacencyList[vertex] = [];
  }
}

const graph = new Graph();

graph.addVertex("TEST");
graph.addVertex("TEST1");
graph.addVertex("TEST");
console.log(graph.adjacencyList);
