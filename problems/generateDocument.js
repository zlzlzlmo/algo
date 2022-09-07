function generateDocument(characters, document) {
  const charactersMap = {};
  // characters 를 순회하면서  객체에 해당 문자열을 key로 넣고 계속해서 카운트 1을 증가
  // 두번째 순회에서는 그 해당 키에 접근하여 마이너스 1씩
  // 만약 해당 키가 undefined이면 false를 리턴

  for (const ch of characters) {
    if (!charactersMap[ch]) charactersMap[ch] = 0;
    charactersMap[ch] += 1;
  }

  for (const ch of document) {
    if (!charactersMap[ch] || charactersMap[ch] === 0) return false;
    charactersMap[ch] -= 1;
  }
  return true;
}
