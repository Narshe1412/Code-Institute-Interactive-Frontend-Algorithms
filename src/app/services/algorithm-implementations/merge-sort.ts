export function mergeSort(arr: number[]): number[] {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  const mid = Math.floor(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  // send left and right to the mergeSort to broke it down into pieces
  // then merge those
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  const result = [];
  const lLen = left.length;
  const rLen = right.length;
  let l = 0;
  let r = 0;
  while (l < lLen && r < rLen) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  // remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}
