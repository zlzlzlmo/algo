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

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((v) => {
      this.removeEdge(v, vertex);
    });

    delete this.adjacencyList[vertex];
  }

  dfsR(start) {
    const result = [];
    const visited = {};

    recursive.call(this, start);

    function recursive(start) {
      visited[start] = true;
      result.push(start);

      this.adjacencyList[start].forEach((v) => {
        if (!visited[v]) {
          recursive.call(this, v);
        }
      });
    }

    return result;
  }

  bfs(start) {
    const queue = [start];
    const visited = {
      [start]: true,
    };
    const result = [];

    while (queue.length) {
      const shiftted = queue.shift();

      result.push(shiftted);

      this.adjacencyList[shiftted].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    return result;
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.bfs("A"));
