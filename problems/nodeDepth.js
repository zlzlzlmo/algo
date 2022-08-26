function nodeDepths(root) {
  // left 혹은 right의 노드가 있으면 계속 파고들어 depth + 1을한다
  // 실행이 끝나면 result를 리턴한다
  let result = 0;
  traverse(root, 0);
  function traverse(node, currentDepth) {
    result += currentDepth;
    if (node.left) traverse(node.left, currentDepth + 1);
    if (node.right) traverse(node.right, currentDepth + 1);
  }
  return result;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
