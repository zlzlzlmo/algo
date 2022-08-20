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

  bfs() {
    if (!this.root) return;
    const queue = [this.root];
    const visited = [];

    while (queue.length > 0) {
      const deque = queue.shift();
      visited.push(deque.val);

      if (deque.left) queue.push(deque.left);
      if (deque.right) queue.push(deque.right);
    }

    return visited;
  }

  dfsPreOrder() {
    const rootNode = this.root;
    if (!rootNode) return;
    const visited = [];

    traverse(rootNode);

    function traverse(node) {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    return visited;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(15);
tree.insert(6);
tree.insert(3);
tree.insert(20);
tree.insert(8);
console.log(tree.dfsPreOrder());
