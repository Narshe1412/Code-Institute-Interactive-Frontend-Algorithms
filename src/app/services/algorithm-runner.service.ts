import { Injectable } from '@angular/core';
import { DataStoreService } from './data-store.service';
import { RUN_SIZE } from '../model/constants';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmRunnerService {
  private bestCaseArray: number[];
  private worstCaseArray: number[];
  private randomArray: number[];
  private MAX_SIZE: number = RUN_SIZE[RUN_SIZE.length - 1];

  constructor(private store: DataStoreService, private settings: SettingsService) {
    this.generateDefaultArrays();
  }

  generateDefaultArrays(maxSize = this.MAX_SIZE): { BC: number[]; WC: number[]; Rnd: number[] } {
    this.bestCaseArray = [...Array(maxSize).keys()].map(x => x);
    this.worstCaseArray = [...this.bestCaseArray].reverse();
    this.randomArray = this.shuffle(this.bestCaseArray);
    return { BC: this.bestCaseArray, WC: this.worstCaseArray, Rnd: this.randomArray };
  }

  runAlgorithm(algorithm: (pArray: number[]) => number[], arr: number[]): number[] {
    // Update progress
    const result = algorithm(arr);
    // Update progress
    return result;
  }

  runBenchmark(
    algorithmsToRun = this.settings.algorithmList,
    simulationToRun = this.settings.simulationList,
    repetitions = this.settings.repetitions
  ) {
    algorithmsToRun.forEach(algorithm => {
      simulationToRun.forEach(amount => {
        const simulationResults = [];
        for (let i = 0; i < repetitions; i++) {
          const arrayToSort = this.randomArray.slice(0, amount);
          const startTime = Date.now();
          this.runAlgorithm(algorithm, arrayToSort);
          const finishTime = Date.now();
          simulationResults.push(finishTime - startTime);
        }
        const average = simulationResults.reduce((prev, curr) => prev + curr) / simulationResults.length;
        console.log(average);
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
