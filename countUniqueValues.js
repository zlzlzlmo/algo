const countUniqueValues = (arr) => {
  // 처음부터 순회를 한다
  // 다음 인덱스의 숫자가 자기랑 같으면 result 를 안늘린다
  // 다음 인덱스가 다르면 result를 늘린다
  // 현재 왓치중인 변수, 현재 인덱스

  let result = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let currentValue = arr[i];
    let nextValue = arr[i + 1];

    if (currentValue !== nextValue) {
      result += 1;
      currentValue = nextValue;
    }
  }

  return result;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
