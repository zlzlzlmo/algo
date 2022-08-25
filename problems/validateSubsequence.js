function isValidSubsequence(array, sequence) {
  const originalLength = sequence.length;
  let foundedSequence = 0;
  for (const element of array) {
    if (element === sequence[0]) {
      foundedSequence += 1;
      sequence.splice(0, 1);
    }

    if (foundedSequence === originalLength) return true;
  }
  return false;
}
