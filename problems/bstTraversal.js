function inOrderTraverse(tree) {
  const result = [];

  traverse(tree);
  function traverse(node) {
    //중위순회
    if (node.left) traverse(node.left);
    result.push(node.value);
    if (node.right) traverse(node.right);
  }
  return result;
}

function preOrderTraverse(tree) {
  const result = [];
  traverse(tree);
  function traverse(node) {
    //전위순회
    result.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  return result;
}

function postOrderTraverse(tree) {
  const result = [];

  traverse(tree);
  function traverse(node) {
    //후위순회
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    result.push(node.value);
  }
  return result;
}
