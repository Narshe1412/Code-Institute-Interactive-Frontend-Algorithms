import { Injectable } from '@angular/core';
import { DEFAULT_REPETITIONS, DEFAULT_RUN_SIZE_LIST, ALGORITHM_LIST } from '../model/constants';
import { IAlgorithmList } from '../model/IAlgorithmList';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  /**
   * The amount of times each algorithm will be executed
   */
  private _repetitions: number = DEFAULT_REPETITIONS;

  /**
   * An array with the number of elements for the array that will be tested on each step of the benchmark
   */
  private readonly _simulationList: number[] = DEFAULT_RUN_SIZE_LIST;

  /**
   * The list of algorithms that will be used on the simulation
   */
  private readonly _algorithmList: IAlgorithmList[] = ALGORITHM_LIST.map(definition => ({
    ...definition,
    enabled: true
  }));

  /* Getters and setters */
  public get repetitions(): number {
    return this._repetitions;
  }
  public set repetitions(value: number) {
    if (value < 1) {
      value = 1;
    }
    this._repetitions = value;
  }
  public get simulationList(): number[] {
    return this._simulationList;
  }

  public get algorithmList(): IAlgorithmList[] {
    return this._algorithmList;
  }

  /**
   * Returns a list of algorithms that have the property enabled marked as true
   */
  public get activeAlgorithmList(): IAlgorithmList[] {
    return this._algorithmList.filter(definition => definition.enabled);
  }

  constructor() {}

  /**
   * Mark an algorithm as enabled on the system
   */
  public enableAlgorithm(name: string) {
    this.algorithmList.forEach(definition => {
      if (definition.name === name) {
        definition.enabled = true;
      }
      return definition;
    });
  }

  /**
   * Mark an algorithm as disabled on the system
   */
  public disableAlgorithm(name: string) {
    this.algorithmList.forEach(definition => {
      if (definition.name === name) {
        definition.enabled = false;
      }
      return definition;
    });
  }

  /**
   * Add the size of an array to the collection of simulations to execute
   */
  public addSimulationAmount(amount: number) {
    if (!this.simulationList.includes(amount) && amount > 0) {
      this.simulationList.push(amount);
      this.simulationList.sort((a, b) => a - b);
    }
  }

  /**
   * Removes the size of an array to the collection of simulations to execute
   */
  public removeSimulationAmount(amount: number) {
    const pos = this.simulationList.indexOf(amount);
    if (pos >= 0) {
      this.simulationList.splice(pos, 1);
    }
  }
}
