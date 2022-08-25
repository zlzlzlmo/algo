function findClosestValueInBst(tree, target) {
  // 재귀 사용하여 dfs
  // 현재 노드와 target을 뺐을때 절댓값이 가장 작았을때의 노드 밸류를 리턴해야하므로
  // closest를 기존값과 새롭게 연산된 절대값중에 최솟값을 구하여 재할당
  // 기존 closest와 현재 연산된 절대값을 비교하여 tree value를 result에 할당
  let closest = Math.abs(target - tree.value);
  let result;

  traverse(tree);

  function traverse(tree) {
    if (!tree) return;
    result = Math.abs(target - tree.value) <= closest ? tree.value : result;
    closest = Math.min(Math.abs(target - tree.value), closest);

    if (target > tree.value) {
      traverse(tree.right);
    } else {
      traverse(tree.left);
    }
  }

  return result;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
