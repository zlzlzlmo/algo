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
        this.values[parentIdx] = current;
        this.values[idx] = parent;
        idx = parentIdx;
      }
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

console.log(heap.values);
