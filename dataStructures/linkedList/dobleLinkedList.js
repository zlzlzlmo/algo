class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length += 1;
  }

  pop() {
    if (!this.head) return;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return;
    }

    const popped = this.tail;

    this.tail = popped.prev;
    this.tail.next = null;
    popped.prev = null;
    this.length -= 1;
  }

  shift() {
    if (!this.head) return;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;

      return;
    }

    const shifted = this.head;

    this.head = shifted.next;
    this.head.prev = null;
    shifted.next = null;
    this.length -= 1;
  }

  unShift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return;
    }
    const currentHead = this.head;
    currentHead.prev = newNode;
    newNode.next = currentHead;
    this.head = newNode;
    this.length += 1;
  }

  get(idx) {
    if (idx < 0 || idx > this.length - 1) return;

    let current, currentIdx;

    if (idx < this.length / 2) {
      current = this.head;
      currentIdx = 0;
      while (currentIdx !== idx) {
        current = current.next;
        currentIdx += 1;
      }
    } else {
      current = this.tail;
      currentIdx = this.length - 1;

      while (currentIdx !== idx) {
        current = current.prev;
        currentIdx -= 1;
      }
    }

    return current;
  }

  set(idx, val) {
    if (this.length === 0) return;
    const founded = this.get(idx);
    if (!founded) return;

    founded.val = val;
  }

  print() {
    if (this.length === 0) return;
    let current = this.head;
    const result = [current.val];

    while (current.next) {
      current = current.next;
      result.push(current.val);
    }

    return result;
  }
}

const list = new DoublyLinkedList();
list.unShift(1);
list.unShift(15);
list.unShift(35);

console.log(list.set(2, 1000));
console.log(list.print());
