function runLengthEncoding(string) {
  // 문자열 하나씩 순회
  // 카운트를 계속 하나씩 늘리고
  // 9가되면 result에 concat을 하고
  // 카운트를 초기화
  let count = 0;
  let result = "";
  for (let i = 0; i < string.length; i += 1) {
    count += 1;
    if (count === 9 || string[i] !== string[i + 1]) {
      result += `${count}${string[i]}`;
      count = 0;
    }
  }

  return result;
}
