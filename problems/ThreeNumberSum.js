function threeNumberSum(array, targetSum) {
  // 3가지의 요소가 합해서 targetSum이 되어야한다.
  // 그러면 legnth - 2 까지 i의 순회가 필요하다. ( 총 3개의 엘리먼트를 비교해야하기 떄문에 굳이 끝까지 갈 필요가 없다)
  // 내림 차순 정렬을 한다
  // 현재 기준이 되는 변수 + left + right 가 targetSum 이 되면 배열에 push한다
  // 만약 현재 값이; targetSum보다ㅣ 더 크면은.. right 가 -1이 되어야하고
  // tragetSum보다 더 작으면 left 가 +=1 이 되어야한다.
  // 루프가 끝ㄴ나면 결과 리턴

  array.sort((a, b) => a - b);

  const result = [];
  for (let i = 0; i < array.length - 2; i += 1) {
    const currentForValue = array[i];
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let leftValue = array[left];
      let rightValue = array[right];
      let currentSum = currentForValue + leftValue + rightValue;

      if (currentSum === targetSum) {
        result.push([currentForValue, leftValue, rightValue]);
        left += 1;
        right -= 1;
      } else if (currentSum < targetSum) {
        left += 1;
      } else if (currentSum > targetSum) {
        right -= 1;
      }
    }
  }
  return result;
}
