function isMonotonic(array) {
  if (array.length <= 2) return true;
  // 주어진 배열이 monotic하게 증가 혹은 감소하는지 체크

  // 1번 인덱스와 0번 인덱스 값을 빼서 방향을 정한다
  // 양수이면 증가, 음수이면 감소

  // array를 순회하면서 n과 n-1 의 값을 빼서 그 숫자의 방향을 파악한다
  // 처음에 정한 방향과 새로 순회하면서 정해진 방향이 달라지면 false 리턴
  // 모든 순회가 끝나면 false에 걸리는게 없으므로 true를 리턴

  let direction = array[1] - array[0];

  for (let i = 2; i < array.length; i += 1) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }

    let newDirection = array[i] - array[i - 1];
    if (direction > 0 && newDirection < 0) return false;
    if (direction < 0 && newDirection > 0) return false;
  }

  return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
