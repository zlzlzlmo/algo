const sumZero = (arr) => {
  // left index하고 right 인덱스를 설정한다
  // while 문을 돌면서 하나씩 비교한다
  // 인덱스가 같아지는 시점까지 매치되는게 없으면 그냥 undefiend를 리턴
  // 두 숫자가 0이되면 그 숫자를 리턴

  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    const leftEle = arr[leftIndex];
    const rightEle = arr[rightIndex];

    if (leftEle + rightEle === 0) return [leftEle, rightEle];

    leftIndex += 1;
    rightIndex -= 1;
  }

  return undefined;
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
