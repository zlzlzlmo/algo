class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array = []) {
    // 순회 돌때마다 해당 노드의 name을 result array에 push
    // 해당 노드가 children을 가지고 있으면 하나씩 shift를 하고 length가 0이될떄까지 루프를 돈다
    // 루프를 돌면서 shift된 node들을 재귀로 다시 반복하여 push를 진행한다.
    const node = this;

    traverse(node);
    function traverse(node) {
      array.push(node.name);

      const children = node.children;

      if (children.length > 0) {
        while (children.length) {
          const node = children.shift();
          traverse(node);
        }
      }
    }

    return array;
  }
}
