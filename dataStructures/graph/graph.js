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

  removeEdge(vertex, vertex2) {
    if (
      !this.adjacencyList[vertex] ||
      !this.adjacencyList[vertex].includes(vertex2)
    )
      return;

    const idx1 = this.adjacencyList[vertex].findIndex((v) => v === vertex2);
    const idx2 = this.adjacencyList[vertex2].findIndex((v) => v === vertex);

    this.adjacencyList[vertex].splice(idx1, 1);
    this.adjacencyList[vertex2].splice(idx2, 1);
  }
}

const graph = new Graph();

graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Dallas", "Aspen");
graph.removeEdge("Dallas", "Aspen");
console.log(graph.adjacencyList);
