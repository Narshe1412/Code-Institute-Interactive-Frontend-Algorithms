import { Injectable, NgZone } from '@angular/core';
import { DataStoreService } from './data-store.service';
import { DEFAULT_RUN_SIZE_LIST } from '../model/constants';
import { SettingsService } from './settings.service';
import { BehaviorSubject } from 'rxjs';
import { IBenchmarkProgress } from '../model/IBenchmarkProgress';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmRunnerService {
  private bestCaseArray: number[];
  private worstCaseArray: number[];
  private randomArray: number[];
  private MAX_SIZE: number = DEFAULT_RUN_SIZE_LIST[DEFAULT_RUN_SIZE_LIST.length - 1];
  public benchmarkProgress$ = new BehaviorSubject<IBenchmarkProgress>({ total: 0, current: 0 });

  constructor(private store: DataStoreService, private settings: SettingsService, private ngZone: NgZone) {
    this.generateDefaultArrays();
  }

  generateDefaultArrays(maxSize = this.MAX_SIZE): { BC: number[]; WC: number[]; Rnd: number[] } {
    this.bestCaseArray = [...Array(maxSize).keys()].map(x => x);
    this.worstCaseArray = [...this.bestCaseArray].reverse();
    this.randomArray = this.shuffle(this.bestCaseArray);
    return { BC: this.bestCaseArray, WC: this.worstCaseArray, Rnd: this.randomArray };
  }

  runAlgorithm(algorithm: (pArray: number[]) => number[], arr: number[]): number[] {
    const result = algorithm(arr);
    return result;
  }

  runBenchmark(
    algorithmsToRun = this.settings.activeAlgorithmList,
    simulationToRun = this.settings.simulationList,
    repetitions = this.settings.repetitions
  ) {
    this.ngZone.runOutsideAngular(() => {
      this.store.clearData();
      const simulationsToRun = algorithmsToRun.length * simulationToRun.length;
      let simulationsFinished = 0;
      this.benchmarkProgress$.next({
        current: simulationsFinished,
        total: simulationsToRun
      });

      algorithmsToRun.forEach(algorithm => {
        simulationToRun.forEach(amount => {
          setTimeout(() => {
            const simulationResults = [];
            for (let i = 0; i < repetitions; i++) {
              const arrayToSort = this.randomArray.slice(0, amount);
              const startTime = Date.now();
              this.runAlgorithm(algorithm.fn, arrayToSort);
              const finishTime = Date.now();
              simulationResults.push(finishTime - startTime);
            }
            const average = simulationResults.reduce((prev, curr) => prev + curr) / simulationResults.length;
            this.ngZone.run(() => {
              this.store.addResult(algorithm.name, amount, average);
              simulationsFinished++;
              this.benchmarkProgress$.next({
                current: simulationsFinished,
                total: simulationsToRun
              });
            });
          }, 1000);
        });
      });
    });
  }

  // https://stackoverflow.com/a/2450976/5866637
  private shuffle(array: number[]): number[] {
    const cpArray = [...array];
    let currentIndex = cpArray.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = cpArray[currentIndex];
      cpArray[currentIndex] = cpArray[randomIndex];
      cpArray[randomIndex] = temporaryValue;
    }

    return cpArray;
  }
}
