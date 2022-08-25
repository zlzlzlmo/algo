function sortedSquaredArray(array) {
  const result = [];
  for (const element of array) {
    result.push(element ** 2);
  }
  return result.sort((a, b) => a - b);
}
