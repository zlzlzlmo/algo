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
}

const tree = new BinarySearchTree();
tree.insert(3);
tree.insert(3);
tree.insert(3);
tree.insert(3);

console.log(tree);
