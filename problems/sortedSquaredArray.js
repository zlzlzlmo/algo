function nodeDepths(root) {
  return sumDepths(root, 0);
}

function sumDepths(node, level) {
  if (!node) return 0;
  return (
    level + sumDepths(node.left, level + 1) + sumDepths(node.legt, level + 1)
  );
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
