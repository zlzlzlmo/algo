function arrayOfProducts(array) {
  // 모든것을 다 곱한 수를 채워넣는다.
  const result = new Array(array.length);
  const allMultiplied = array.reduce((acc, element) => acc * element, 1);

  for (let i = 0; i < array.length; i += 1) {
    const divided = allMultiplied / array[i];
    result[i] = divided || 0;
  }

  return result;
}
