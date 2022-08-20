class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
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
    this.tail = newNode;
    this.length += 1;
  }

  pop() {
    if (!this.head) return;

    let currentNode = this.head;
    let prevNode = currentNode;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = prevNode;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  shift() {
    if (!this.head) return;

    this.head = this.head.next;
    this.length -= 1;

    if (this.length === 0) {
      this.tail = null;
    }
  }

  unShift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  get(idx) {
    if (!this.head || idx > this.length - 1 || idx < 0) return;
    if (idx === 0) return this.head;

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode.next) {
      currentIndex += 1;
      currentNode = currentNode.next;
      if (idx === currentIndex) {
        break;
      }
    }

    return currentNode;
  }

  update(idx, val) {
    const node = this.get(idx);
    if (!node) return;

    node.val = val;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return;

    if (idx === this.length) {
      this.push(val);
      return;
    }

    if (idx === 0) {
      this.unShift(val);
      return;
    }

    const newNode = new Node(val);

    const prevNode = this.get(idx - 1);
    const nextNode = this.get(idx);

    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length += 1;
  }

  remove(idx) {
    if (!this.head || idx < 0 || idx >= this.length) return;

    if (idx === 0) {
      this.head = this.head.next;
      this.length -= 1;
      return;
    }

    if (idx === this.length - 1) {
      this.pop();
      return;
    }

    const prevNode = this.get(idx - 1);
    const nextNode = this.get(idx + 1);

    prevNode.next = nextNode;
    this.length -= 1;
  }

  reverse() {
    const currentHead = this.head;
    this.head = this.tail;
    this.tail = currentHead;

    let current = this.head;

    while (current.next) {
      // current.next =
    }
  }

  reverse() {
    const node = this.head;
    this.head = this.tail;
    this.tail = node;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    return arr;
  }
}

const linkedList = new SingleLinkedList();
linkedList.push(3);
linkedList.push(5);
linkedList.unShift(15);
linkedList.unShift(35);
console.log(linkedList.print());
