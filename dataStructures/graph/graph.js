class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return;
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex, vertex2) {
    if (!this.adjacencyList[vertex] || !this.adjacencyList[vertex2]) return;
    this.adjacencyList[vertex].push(vertex2);
    this.adjacencyList[vertex2].push(vertex);
  }
}

const graph = new Graph();

graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Dallas", "Aspen");
console.log(graph.adjacencyList);
