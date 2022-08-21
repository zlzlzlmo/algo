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

  dequeue() {
    const max = this.values[0];
    const popped = this.values.pop();

    this.values[0] = popped;
    let currentIdx = 0;

    while (true) {
      let leftChildIdx = 2 * currentIdx + 1;
      let rightChildIdx = 2 * currentIdx + 2;

      let currentNode = this.values[currentIdx];
      let leftNode = this.values[leftChildIdx];
      let rightNode = this.values[rightChildIdx];

      let swapIdx = null;

      if (leftChildIdx < this.values.length) {
        if (leftNode.priority > currentNode.priority) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < this.values.length) {
        if (
          (!swapIdx && rightNode.priority > currentNode.priority) ||
          (swapIdx && rightNode.priority > leftNode.priority)
        ) {
          swapIdx = rightChildIdx;
        }
      }

      if (!swapIdx) break;
      this.swap(currentIdx, swapIdx);
      currentIdx = swapIdx;
    }

    return max;
  }
}

const ER = new PriorityQueue();
ER.enqueue("감기", 1);
ER.enqueue("코로나", 5);
ER.enqueue("암", 100);
ER.enqueue("독감", 3);
ER.enqueue("심장마비", 20000);
ER.enqueue("맹장 터짐", 7);
ER.dequeue();
ER.dequeue();
ER.dequeue();
ER.dequeue();
console.log(ER.values);
