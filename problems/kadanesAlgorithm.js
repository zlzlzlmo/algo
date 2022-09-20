function kadanesAlgorithm(array) {
  // array의 원소들을 순회하면서 하나씩 더한다
  // 계속 돌면서 최대값을 result에 넣어준다
  // sum이 0보다 작아지면 다시 0으로 초기화해준다

  let sum = -Infinity;
  let result = sum;
  for (let i = 0; i < array.length; i += 1) {
    if (sum < 0) sum = 0;
    sum += array[i];
    result = Math.max(result, sum);
  }

  return result;
}
