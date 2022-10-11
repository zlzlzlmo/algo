function longestPalindromicSubstring(string) {
  // pointer 2개
  // 짝수 홀
  let currentLongest = [0, 1];
  for (let i = 0; i < string.length; i += 1) {
    const odd = getLogestPalidrome(string, i - 1, i + 1);
    const event = getLogestPalidrome(string, i - 1, i);
  }
}

function getLogestPalidrome(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {}
}
