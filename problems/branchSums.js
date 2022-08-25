class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // 전위순회를 하면서 계속 더한다
  // left와 right값이 둘다 null이면 누적합을 push한다.
  const visited = [];
  const result = [];

  traverse(root, root.value);

  function traverse(node, valueNum) {
    visited.push(node.value);
    if (!node.left && !node.right) result.push(valueNum);
    if (node.left) traverse(node.left, valueNum + node.left.value);
    if (node.right) traverse(node.right, valueNum + node.right.value);
  }

  return result;
}
