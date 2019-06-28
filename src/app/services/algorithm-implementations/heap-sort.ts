let arrayLength: number;
/* to create MAX  array */
function heap_root(input: number[], i: number) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left < arrayLength && input[left] > input[max]) {
    max = left;
  }

  if (right < arrayLength && input[right] > input[max]) {
    max = right;
  }

  if (max !== i) {
    swap(input, i, max);
    heap_root(input, max);
  }
}

function swap(input: number[], indexA: number, indexB: number) {
  const temp = input[indexA];

  input[indexA] = input[indexB];
  input[indexB] = temp;
}

export function heapSort(input: number[]): number[] {
  arrayLength = input.length;

  for (let i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
    heap_root(input, i);
  }

  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    arrayLength--;

    heap_root(input, 0);
  }
  return input;
}
