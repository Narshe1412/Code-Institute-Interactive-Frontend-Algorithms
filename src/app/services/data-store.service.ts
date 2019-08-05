import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDataSeries } from '../model/IDataSeries';
import { INITIAL_DATA, RUN_SIZE } from '../model/constants';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  public data$: BehaviorSubject<IDataSeries[]>;

  constructor(private settings: SettingsService) {
    this.data$ = new BehaviorSubject(
      INITIAL_DATA.map(item => ({
        name: item.name,
        data: item.data.map((yPoint, index) => [RUN_SIZE[index], yPoint])
      }))
    );
  }

  public addResult(algorithmName: string, xLabel: number, value: number) {
    const foundIndex = this.data$.getValue().find(data => data.name === algorithmName);
    // const foundIndex = this.data$.getValue().findIndex(data => data.name === algorithmName);
    // const xPos = this.settings.simulationList.indexOf(xLabel);
    const dataArray = this.data$.getValue();
    if (foundIndex) {
      foundIndex.data.push([xLabel, value]);
      // if (foundIndex >= 0) {
      // if (foundIndex >= 0 && xPos >= 0) {
      // dataArray[foundIndex].data.push([xLabel, value]);
      // dataArray[foundIndex].data[xPos] = value;
      // } else if (xPos >= 0) {
    } else {
      const newElement = {
        name: algorithmName,
        data: []
      };
      // newElement.data[xPos] = value;
      newElement.data.push([xLabel, value]);
      dataArray.push(newElement);
    }
    this.data$.next(dataArray);
  }

  public clearData() {
    this.data$.next([]);
  }
}
