import { TimSort } from './timsort/timsort';

export function timsort(arr: number[]): number[] {
  TimSort.sort(arr);
  return arr;
}
