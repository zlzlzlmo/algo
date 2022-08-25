function twoNumberSum(array, targetSum) {
  const map = new Map();

  for (const value of array) {
    if (!map.has(value)) {
      map.set(value, true);
    }
  }

  const result = new Set();
  for (const value of array) {
    const caculated = targetSum - value;
    if (map.has(caculated) && value !== targetSum / 2) {
      result.add(value);
      result.add(caculated);
    }
  }

  return Array.from(result);
}
