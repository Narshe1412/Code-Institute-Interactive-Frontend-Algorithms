import { Injectable } from '@angular/core';
import { DEFAULT_REPETITIONS, DEFAULT_RUN_SIZE_LIST, ALGORITHM_LIST } from '../model/constants';
import { IAlgorithmList } from '../model/IAlgorithmList';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private _repetitions: number = DEFAULT_REPETITIONS;
  private readonly _simulationList: number[] = DEFAULT_RUN_SIZE_LIST;
  private readonly _algorithmList: IAlgorithmList[] = ALGORITHM_LIST.map(definition => ({
    ...definition,
    enabled: true
  }));

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
  public get activeAlgorithmList(): IAlgorithmList[] {
    return this._algorithmList.filter(definition => definition.enabled);
  }

  constructor() {}

  public enableAlgorithm(name: string) {
    this.algorithmList.forEach(definition => {
      if (definition.name === name) {
        definition.enabled = true;
      }
      return definition;
    });
  }

  public disableAlgorithm(name: string) {
    this.algorithmList.forEach(definition => {
      if (definition.name === name) {
        definition.enabled = false;
      }
      return definition;
    });
  }

  public addSimulationAmount(amount: number) {
    if (!this.simulationList.includes(amount) && amount > 0) {
      this.simulationList.push(amount);
      this.simulationList.sort((a, b) => a - b);
    }
  }

  public removeSimulationAmount(amount: number) {
    const pos = this.simulationList.indexOf(amount);
    if (pos >= 0) {
      this.simulationList.splice(pos, 1);
    }
  }
}
