function binarySearch(array, target) {
  // 중각 인덱스를 구한다 (Math.floor(array.length / 2))
  let firstIndex = 0;
  let lastIndex = array.length - 1;

  // 타겟하고 중간 인덱스값하고 비교한다
  // 만약 타겟이 더 작으면?
  // 라스트 인덱스를 middleIndex - 1로 설정하고
  // 다시 미들인덱스를 구하고 미들값과 값을 비교한다
  // 타겟으 더 크면 middleIndex + 1로 설정한다
  // lastIndex 가 firstIndex 보다 클때까지 ㅂㄴ복

  while (firstIndex <= lastIndex) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    if (array[middleIndex] === target) return middleIndex;
    if (array[middleIndex] < target) firstIndex = middleIndex + 1;
    else lastIndex = middleIndex - 1;
  }

  return -1;
}
