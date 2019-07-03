import { Injectable } from '@angular/core';
import { DEFAULT_REPETITIONS, RUN_SIZE, ALGORITHM_LIST } from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public repetitions: number;
  public simulationList: number[];
  public algorithmList: any[];

  constructor() {
    this.repetitions = DEFAULT_REPETITIONS;
    this.simulationList = RUN_SIZE;
    this.algorithmList = ALGORITHM_LIST.map(item => item.fn);
  }
}
