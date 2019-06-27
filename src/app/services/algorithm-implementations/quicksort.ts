export function quickSort(arr: number[], left?: number, right?: number): number[] {
  const len = arr.length;
  left = left === undefined ? 0 : left;
  right = right === undefined ? len - 1 : right;
  let pivot: any;
  let partitionIndex: number;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    // sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr: number[], pivot: number, left: number, right: number) {
  const pivotValue = arr[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
