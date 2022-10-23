function nonConstructibleChange(coins) {
  // 오름차순 정렬
  // 순회를 할때마다 코인의 합을 누적한다
  // 누적된 코인의 합 + 1 보다 현재 순회중인 코인보다 작으면 그 값은 만들어 낼 수 없으므로 리턴
  coins.sort((a, b) => a - b);

  let currentChangeCreated = 0;

  for (const coin of coins) {
    if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
    currentChangeCreated += coin;
  }
  return currentChangeCreated + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));

// 1 1 2 3 5 7 22
// 1 2 4 7 12 19 -> 20
