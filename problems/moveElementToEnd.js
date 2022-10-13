function moveElementToEnd(array, toMove) {
  const firstArray = [];
  const secondArray = [];

  array.forEach((element) => {
    if (element === toMove) secondArray.push(element);
    else firstArray.push(element);
  });

  // 2 1 2 2 2 3 4 2
  // 1 2 2 2 2 3 4 2
  // 타겟이2 이면 맨뒤로 보내면된다..
  return [...firstArray, ...secondArray];
}
