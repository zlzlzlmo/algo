function firstNonRepeatingCharacter(string) {
  // 객체를 만든다
  // string 순회를 하면서 각 문자열들의 인덱스를 저장한다
  // 순회가 다 끝났을때 저장된 배열의 length가 1인것에서 첫번째로 나오는것의 인덱스를 리턴한다.
  // undefined라면 -1 로 리턴
  const obj = {};
  for (let i = 0; i < string.length; i += 1) {
    const str = string[i];
    if (!obj.hasOwnProperty(str)) obj[str] = [i];
    else obj[str].push(i);
  }

  const result = Object.values(obj).find((value) => value.length === 1);
  return result ? result[0] : -1;
}
