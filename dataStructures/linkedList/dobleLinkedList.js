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
    this.length -= 1;
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
list.push(1);
list.push(10);
list.push(15);
list.shift();
list.shift();
list.shift();
list.shift();

console.log(list.print());
