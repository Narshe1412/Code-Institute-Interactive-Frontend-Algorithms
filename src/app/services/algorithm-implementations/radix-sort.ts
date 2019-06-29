export function radixSort(data) {
  const base = 10;
  let divider = 1;
  let maxVal = Number.NEGATIVE_INFINITY;

  while (divider <= maxVal || divider < base) {
    const buckets = [...Array(10)].map(() => []);

    for (const val of data) {
      const positiveVal = Math.abs(val);
      buckets[Math.floor((positiveVal / divider) % base)].push(val);
      maxVal = positiveVal > maxVal ? positiveVal : maxVal;
    }

    data = [].concat.apply([], buckets);
    divider *= base;
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i] < 0) {
      data.unshift(data.splice(i, 1)[0]);
    }
  }
  return data;
}
