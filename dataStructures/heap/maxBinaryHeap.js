class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      const current = this.values[idx];

      if (current > parent) {
        this.swap(parentIdx, idx);
        idx = parentIdx;
      }
    }
  }

  swap(firstIdx, secondIdx) {
    const first = this.values[firstIdx];
    const second = this.values[secondIdx];

    this.values[firstIdx] = second;
    this.values[secondIdx] = first;
  }

  extractMax() {
    const max = this.values[0];
    const popped = this.values.pop();
    this.values[0] = popped;

    this.sinkDown();
    return max;
  }

  sinkDown() {
    let currentIdx = 0;
    while (true) {
      let leftChildIdx = 2 * currentIdx + 1;
      let rightChildIdx = 2 * currentIdx + 2;
      const currentElement = this.values[currentIdx];
      const leftChildElement = this.values[leftChildIdx];
      const rightChildElement = this.values[rightChildIdx];
      let swapIdx = null;

      if (leftChildIdx < this.values.length) {
        if (leftChildElement > currentElement) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < this.values.length) {
        if (
          (!swapIdx && rightChildElement > currentElement) ||
          (swapIdx && rightChildElement > leftChildElement)
        ) {
          swapIdx = rightChildIdx;
        }
      }

      if (!swapIdx) break;
      this.swap(currentIdx, swapIdx);
      currentIdx = swapIdx;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(2);
heap.insert(10);
heap.insert(15);
heap.insert(24);
heap.insert(41);
heap.insert(222);
heap.insert(1412321);
heap.extractMax();
heap.extractMax();
heap.extractMax();

console.log(heap.values);
