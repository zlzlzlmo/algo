class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch() {
    // this로 현재 Node queue에 넣기
    // dequeue하고 visit 처리한다
    // 자식들 있으면 queue 넣기
    // 반복
    const queue = [this];
    const visited = [];

    while (queue.length > 0) {
      const dequeue = queue.shift();
      visited.push(dequeue.name);
      if (dequeue.children.length > 0) queue.push(...dequeue.children);
    }

    return visited;
  }
}
