function maxSubarraySum(arr, num) {
  let result = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i += 1) {
    result += arr[i];
  }

  if (!result) return null;

  for (let i = num; i < arr.length; i += 1) {
    tempSum = tempSum - arr[i - num] + arr[i];
    result = Math.max(result, tempSum);
  }
  return result;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
