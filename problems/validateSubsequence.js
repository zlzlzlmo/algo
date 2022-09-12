function isValidSubsequence(array, sequence) {
  let arrayIndex = 0;
  let sequenceIndex = 0;

  while (arrayIndex < array.length) {
    if (array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex += 1;
    arrayIndex += 1;
  }

  return sequenceIndex === sequence.length;
}
