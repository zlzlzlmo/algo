function smallestDifference(arrayOne, arrayTwo) {
  // 먼저 두개의 배열을 올림차순을 한다
  // 그리고 각각 배열의 첫번째 원소부터 비교를한다
  // 비교를햇을때 왼쪽 배열의 원소가 더 작으면 왼쪽 배열의 인덱스를 올린다
  // 오른쪽 배열의 원소가 더 작으면 두번째 배열의 인덱스를 올린다
  // 계속 돌다가 두 숫자가 만약 완전 같은게 나오면 그것은 0이므로 무조건 정답이다. -> 바로 리턴
  // 루프를 돌면서 smallest 를 갱신한다 (차값이 더 작은게 나오면 갱신)

  // 모든 루프가 끝나면 리턴
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let indexOne = 0;
  let indexTwo = 0;

  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];

  while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    const firstNum = arrayOne[indexOne];
    const secondNum = arrayTwo[indexTwo];

    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      indexOne += 1;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      indexTwo += 1;
    } else return [firstNum, secondNum];

    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }

  return smallestPair;
}
