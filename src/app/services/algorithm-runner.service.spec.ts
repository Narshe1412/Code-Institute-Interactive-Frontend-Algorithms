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
import { jsSort } from './algorithm-implementations/js-sort';

describe('AlgorithmRunnerService', () => {
  let service: AlgorithmRunnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(AlgorithmRunnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generate default arrays', () => {
    it('should create an array of N elements', () => {
      const { BC } = service.generateDefaultArrays(10);
      const expected = 10;
      expect(expected).toEqual(BC.length);
    });

    it('Best case array should contain N elements in order', () => {
      const { BC } = service.generateDefaultArrays(12);
      const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      expect(expected).toEqual(BC);
    });

    it('Worst case array should be a reversed array of N elements', () => {
      const { WC } = service.generateDefaultArrays(9);
      const expected = [8, 7, 6, 5, 4, 3, 2, 1, 0];
      expect(expected).toEqual(WC);
    });

    it('random array should be an array of N elements in random order', () => {
      const { Rnd } = service.generateDefaultArrays(8);
      const BEST_CASE = [0, 1, 2, 3, 4, 5, 6, 7];
      const WORST_CASE = [7, 6, 5, 4, 3, 2, 1, 0];
      expect(Rnd).not.toEqual(BEST_CASE);
      expect(Rnd).not.toEqual(WORST_CASE);

      const expected = new Set(BEST_CASE);
      const actual = new Set(Rnd);
      expect(expected).toEqual(actual);
    });
  });

  describe('algorithm runner', () => {
    it('should run the correct amount of times', () => {
      const spy = spyOn(service, 'runAlgorithm').and.callThrough();
      const algorithmList = [bubbleSort, jsSort];
      const repetitions = 4;
      const simulationList = [10, 100, 10000];

      service.runBenchmark(algorithmList, simulationList, repetitions);

      const numberOfRuns = repetitions * algorithmList.length * simulationList.length;
      expect(spy).toHaveBeenCalledTimes(numberOfRuns);
    });
  });
});
