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
    let prevNode = this.head;

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
}

const linkedList = new SingleLinkedList();
linkedList.push(3);
linkedList.push(5);
linkedList.push(15);
linkedList.pop();
linkedList.pop();
linkedList.pop();

console.log(linkedList);
