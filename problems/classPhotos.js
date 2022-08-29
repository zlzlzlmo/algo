function classPhotos(redShirtHeights, blueShirtHeights) {
  // redShirtHeights오ㅘ blueShirtHeights 내림차순
  // 레드가 더 큰지
  // redShirtHeights 배열 순회하면서 값 출력
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  let isRedTaller = redShirtHeights[0] > blueShirtHeights[0];

  let posibillty = redShirtHeights.every((red, index) => {
    return isRedTaller
      ? red > blueShirtHeights[index]
      : red < blueShirtHeights[index];
  });
  return posibillty;
}
