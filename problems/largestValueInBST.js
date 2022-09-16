class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  const visited = [];

  //k 번째로 큰 value구하기
  // 오른쪽부터 탐색하는 중위 순회를 한다
  // 해당 순위에 해당하는 인덱스를 리턴
  function traverse(node) {
    if (node.right) traverse(node.right);
    visited.push(node.value);
    if (node.left) traverse(node.left);
  }

  traverse(tree);
  return visited[k - 1];
}
