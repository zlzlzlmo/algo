class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;

    while (true) {
      if (val === currentNode.val) return this;
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    if (this.root.val === val) return true;
    let current = this.root;
    while (current) {
      if (current.val === val) return true;

      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(3);
tree.insert(10);
tree.insert(4);
tree.insert(12);
tree.insert(110);
tree.insert(150);
tree.insert(19);

console.log(tree.find(150));
