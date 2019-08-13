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
  /**
   * The max size of the array to be created by the service
   */
  private MAX_SIZE: number = DEFAULT_RUN_SIZE_LIST[DEFAULT_RUN_SIZE_LIST.length - 1];

  /**
   * Variables to hold the arrays to be used by the application
   */
  private bestCaseArray: number[];
  private worstCaseArray: number[];
  private randomArray: number[];

  /**
   * Observable that holds the current progress of the simulation
   */
  public benchmarkProgress$ = new BehaviorSubject<IBenchmarkProgress>({ total: 0, current: 0 });

  constructor(private store: DataStoreService, private settings: SettingsService, private ngZone: NgZone) {
    this.generateDefaultArrays();
  }

  /**
   * Creates an array of maxSize and then reverses it to generate the "worst case" array and a random array with shuffled members
   * Assigns the values to the member variables bestCaseArray, worstCaseArray and randomArray and returns the values as part of an object.
   * @param maxSize The maximum size of the array
   */
  generateDefaultArrays(maxSize = this.MAX_SIZE): { BC: number[]; WC: number[]; Rnd: number[] } {
    // Generates the best case array by enumerating the array keys and mapping the values to each element of the array
    this.bestCaseArray = [...Array(maxSize).keys()].map(x => x);
    // Generates the worst case array by reversing the best case
    this.worstCaseArray = [...this.bestCaseArray].reverse();
    // Generates the randomized array by calling the local function shuffle
    this.randomArray = this.shuffle(this.bestCaseArray);
    return { BC: this.bestCaseArray, WC: this.worstCaseArray, Rnd: this.randomArray };
  }

  /**
   * Executes the algorithm passed by parameter on the array passed by parameter and returns the result of this operation
   * @param algorithm A callback function that executes an operation on an array
   * @param arr The array that will be used for this operation
   */
  runAlgorithm(algorithm: (pArray: number[]) => number[], arr: number[]): number[] {
    const result = algorithm(arr);
    return result;
  }

  /**
   * Iterates over the collection of algorithms to run and simulations to run.
   * This is done over the amount of repetitions for each element, aggregating the data at the end and sending the results to the
   * data Store. This is the barebones of the applications.
   *
   * Includes a setTimeout function to execute these operations at the end of the event loop so higher priority operations can
   * be executed before resource intensive ones.
   */
  runBenchmark(
    algorithmsToRun = this.settings.activeAlgorithmList,
    simulationToRun = this.settings.simulationList,
    repetitions = this.settings.repetitions
  ) {
    // Execute this code outse of angular change detection to not block the UI during resource intensive operations
    this.ngZone.runOutsideAngular(() => {
      // Clear the store before starting
      this.store.clearData();

      // Initialize the progress counters
      const simulationsToRun = algorithmsToRun.length * simulationToRun.length;
      let simulationsFinished = 0;
      // Update the observable with the actual values
      this.benchmarkProgress$.next({
        current: simulationsFinished,
        total: simulationsToRun
      });

      algorithmsToRun.forEach(algorithm => {
        simulationToRun.forEach(amount => {
          // Sends the execution of the simulations to the very last part of the stack to get them out of the event loop
          setTimeout(() => {
            const simulationResults = [];
            for (let i = 0; i < repetitions; i++) {
              // Gets the main array and slices to fit the amount of the current simulation
              const arrayToSort = this.randomArray.slice(0, amount);
              // Starts the timer
              const startTime = Date.now();
              // Executes the algorithm
              this.runAlgorithm(algorithm.fn, arrayToSort);
              const finishTime = Date.now();
              // Calculate the time taken and pushes to the results array
              simulationResults.push(finishTime - startTime);
            }
            // Calculates the average of the results by reducing the array to a single value sum of the results and
            // dividing by the amount of simulations
            const average = simulationResults.reduce((prev, curr) => prev + curr) / simulationResults.length;

            // Executes Angular change detection routine with the updated values
            this.ngZone.run(() => {
              // Updates the store with the new values
              this.store.addResult(algorithm.name, amount, average);

              // Increases and update the observable that tracks the progress of the simulations
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

  /**
   * Implements the Fisher-Yates Shuffle algorithm that returns an array of randomized elements ensuring no duplicates
   * @param array The array to shuffle
   * @author https://stackoverflow.com/a/2450976/5866637
   */
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
