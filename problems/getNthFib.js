function getNthFib(n) {
  if (n === 1) return 0;

  const result = [0, 1];

  for (let i = 2; i < n; i += 1) {
    let num = result[i - 2] + result[i - 1];
    result.push(num);
  }

  return result.pop();
}
