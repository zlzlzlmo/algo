function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [array[0]];
  let pointer = 0;

  for (let i = 1; i < array.length; i += 1) {
    const [currentStart, currentEnd] = mergedIntervals[pointer];
    const [nextStart, nextEnd] = array[i];
    const isOverlapping = currentEnd >= nextStart;

    if (isOverlapping) {
      const maxValue = Math.max(currentEnd, nextEnd);
      mergedIntervals[pointer] = [currentStart, maxValue];
    } else {
      mergedIntervals.push(array[i]);
      pointer += 1;
    }
  }

  return mergedIntervals;
}
