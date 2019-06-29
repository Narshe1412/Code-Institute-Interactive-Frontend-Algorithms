import { TestBed } from '@angular/core/testing';

import { AlgorithmRunnerService } from './algorithm-runner.service';
import { bubbleSort } from './algorithm-implementations/bubble-sort';
import { selectionSort } from './algorithm-implementations/selection-sort';
import { insertionSort } from './algorithm-implementations/insertion-sort';
import { mergeSort } from './algorithm-implementations/merge-sort';
import { quickSort } from './algorithm-implementations/quicksort';
import { heapSort } from './algorithm-implementations/heap-sort';
import { shellSort } from './algorithm-implementations/shell-sort';
import { introsort } from './algorithm-implementations/introsort';
import { timsort } from './algorithm-implementations/timsort';
import { radixSort } from './algorithm-implementations/radix-sort';

describe('AlgorithmRunnerService', () => {
  let service: AlgorithmRunnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(AlgorithmRunnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('bubblesort', () => {
    it('should return an ordered array', () => {
      const initial = [3, 0, 7, -1, 19, 1000, 33, 1];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(bubbleSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return empty array if passed empty array', () => {
      const initial = [];
      const expected = [];
      const actual = service.runAlgorithm(bubbleSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return the same array if passed a sorted array', () => {
      const initial = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(bubbleSort, initial);
      expect(expected).toEqual(actual);
    });
  });

  describe('introsort', () => {
    it('should return an ordered array', () => {
      const initial = [3, 0, 7, -1, 19, 1000, 33, 1];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(introsort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return empty array if passed empty array', () => {
      const initial = [];
      const expected = [];
      const actual = service.runAlgorithm(introsort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return the same array if passed a sorted array', () => {
      const initial = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(introsort, initial);
      expect(expected).toEqual(actual);
    });
  });

  describe('selection sort', () => {
    it('should return an ordered array', () => {
      const initial = [3, 0, 7, -1, 19, 1000, 33, 1];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(selectionSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return empty array if passed empty array', () => {
      const initial = [];
      const expected = [];
      const actual = service.runAlgorithm(selectionSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return the same array if passed a sorted array', () => {
      const initial = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(selectionSort, initial);
      expect(expected).toEqual(actual);
    });
  });

  describe('radix sort', () => {
    it('should return an ordered array', () => {
      const initial = [3, 0, 7, -1, 19, 1000, 33, 1];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(radixSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return empty array if passed empty array', () => {
      const initial = [];
      const expected = [];
      const actual = service.runAlgorithm(radixSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return the same array if passed a sorted array', () => {
      const initial = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(radixSort, initial);
      expect(expected).toEqual(actual);
    });
  });

  describe('Timsort', () => {
    it('should return an ordered array', () => {
      const initial = [3, 0, 7, -1, 19, 1000, 33, 1];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(timsort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return empty array if passed empty array', () => {
      const initial = [];
      const expected = [];
      const actual = service.runAlgorithm(timsort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return the same array if passed a sorted array', () => {
      const initial = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(timsort, initial);
      expect(expected).toEqual(actual);
    });
  });

  describe('insertion sort', () => {
    it('should return an ordered array', () => {
      const initial = [3, 0, 7, -1, 19, 1000, 33, 1];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(insertionSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return empty array if passed empty array', () => {
      const initial = [];
      const expected = [];
      const actual = service.runAlgorithm(insertionSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return the same array if passed a sorted array', () => {
      const initial = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(insertionSort, initial);
      expect(expected).toEqual(actual);
    });
  });

  describe('merge sort', () => {
    it('should return an ordered array', () => {
      const initial = [3, 0, 7, -1, 19, 1000, 33, 1];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(mergeSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return empty array if passed empty array', () => {
      const initial = [];
      const expected = [];
      const actual = service.runAlgorithm(mergeSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return the same array if passed a sorted array', () => {
      const initial = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(mergeSort, initial);
      expect(expected).toEqual(actual);
    });
  });

  describe('quicksort', () => {
    it('should return an ordered array', () => {
      const initial = [3, 0, 7, -1, 19, 1000, 33, 1];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(quickSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return empty array if passed empty array', () => {
      const initial = [];
      const expected = [];
      const actual = service.runAlgorithm(quickSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return the same array if passed a sorted array', () => {
      const initial = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(quickSort, initial);
      expect(expected).toEqual(actual);
    });
  });

  describe('shell sort', () => {
    it('should return an ordered array', () => {
      const initial = [3, 0, 7, -1, 19, 1000, 33, 1];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(shellSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return empty array if passed empty array', () => {
      const initial = [];
      const expected = [];
      const actual = service.runAlgorithm(shellSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return the same array if passed a sorted array', () => {
      const initial = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(shellSort, initial);
      expect(expected).toEqual(actual);
    });
  });

  describe('heapsort', () => {
    it('should return an ordered array', () => {
      const initial = [3, 0, 7, -1, 19, 1000, 33, 1];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(heapSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return empty array if passed empty array', () => {
      const initial = [];
      const expected = [];
      const actual = service.runAlgorithm(heapSort, initial);
      expect(expected).toEqual(actual);
    });

    it('should return the same array if passed a sorted array', () => {
      const initial = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const expected = [-1, 0, 1, 3, 7, 19, 33, 1000];
      const actual = service.runAlgorithm(heapSort, initial);
      expect(expected).toEqual(actual);
    });
  });
});
