function minimumWaitingTime(queries) {
  // length가 1이면 0을 리턴
  // 처음에 내림차순 정렬 후 마지막꺼는 pop을 해준다
  // 그리고 축적합을 만드는데, 총 length와 idx를 뺀걸 곱해서 축적합을 만든다.
  if (queries.length === 1) return 0;
  queries.sort((a, b) => a - b).pop();
  return queries.reduce(
    (acc, query, idx) => acc + query * (queries.length - idx),
    0
  );
}
