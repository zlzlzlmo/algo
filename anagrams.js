const validAnagram = (str1, str2) => {
  // 각 두 문자열을 오브젝트에 각각 담고, key 와 count value를 넣는다.
  // 완성된 객체를 for in 문으로 돌려 각 key의 value값이 일치하는지 본다
  // 일치하지 않는게 있으면 false return

  if (str1.length !== str2.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (const str of str1) {
    obj1[str] = (obj1[str] || 0) + 1;
  }

  for (const str of str2) {
    obj2[str] = (obj2[str] || 0) + 1;
  }

  for (const key in obj1) {
    if (!(key in obj2)) return false;
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zaa"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("anagram", "nagaram"));
