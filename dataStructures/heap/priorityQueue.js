class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIdx = this.values.length - 1;

    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);

      const currentNode = this.values[currentIdx];
      const parentNode = this.values[parentIdx];

      if (currentNode.priority > parentNode.priority) {
        this.swap(parentIdx, currentIdx);
      }

      currentIdx = parentIdx;
    }
  }

  swap(firstIdx, secondIdx) {
    const currentNode = this.values[secondIdx];
    const parentNode = this.values[firstIdx];

    this.values[firstIdx] = currentNode;
    this.values[secondIdx] = parentNode;
  }
}

const ER = new PriorityQueue();
ER.enqueue("감기", 1);
ER.enqueue("코로나", 5);
ER.enqueue("암", 100);
ER.enqueue("독감", 3);
ER.enqueue("심장마비", 20000);
// ER.enqueue("맹장 터짐", 7);
// ER.enqueue("독감", 3);

console.log(ER.values);
