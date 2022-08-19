// Time Complexity -> O(n)
const same = (arr1, arr2) => {
  // 두개의 배열의 길이가 다르면 false
  // 각 객체에 키와 총 갯수를 설정함
  // 하나의 객체 for in 문을 돌려 각각 제곱과 갯수가 일치하는지 확인

  if (arr1.length !== arr2.length) return false;

  const frequencyObj1 = {};
  const frequencyObj2 = {};

  for (const val of arr1) {
    frequencyObj1[val] = (frequencyObj1[val] || 0) + 1;
  }

  for (const val of arr2) {
    frequencyObj2[val] = (frequencyObj2[val] || 0) + 1;
  }

  for (const key in frequencyObj1) {
    if (!(key ** 2 in frequencyObj2)) return false;

    if (frequencyObj1[key] !== frequencyObj2[key ** 2]) return false;
  }

  return true;
};

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
