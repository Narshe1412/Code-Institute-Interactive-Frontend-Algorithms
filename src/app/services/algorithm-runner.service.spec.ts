import { TestBed } from '@angular/core/testing';
import { AlgorithmRunnerService } from './algorithm-runner.service';
import { bubbleSort } from './algorithm-implementations/bubble-sort';
import { jsSort } from './algorithm-implementations/js-sort';
import { IAlgorithmList } from '../model/IAlgorithmList';

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
      jasmine.clock().install();

      const spy = spyOn(service, 'runAlgorithm').and.callThrough();
      const mockAlgorithmList: IAlgorithmList[] = [
        { name: '', description: '', fn: bubbleSort, enabled: true },
        { name: '', description: '', fn: jsSort, enabled: true }
      ];
      const mockRepetitions = 4;
      const mockSimulationList = [10, 100, 10000];
      const numberOfRuns = mockRepetitions * mockAlgorithmList.length * mockSimulationList.length;

      service.runBenchmark(mockAlgorithmList, mockSimulationList, mockRepetitions);

      jasmine.clock().tick(10000);
      expect(spy).toHaveBeenCalledTimes(numberOfRuns);

      jasmine.clock().uninstall();
    });
  });
});
