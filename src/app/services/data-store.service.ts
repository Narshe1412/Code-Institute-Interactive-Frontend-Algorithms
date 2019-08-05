import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDataSeries } from '../model/IDataSeries';
import { INITIAL_DATA, DEFAULT_RUN_SIZE_LIST } from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  public data$: BehaviorSubject<IDataSeries[]>;

  constructor() {
    this.data$ = new BehaviorSubject(
      INITIAL_DATA.map(item => ({
        name: item.name,
        data: item.data.map((yPoint, index) => [DEFAULT_RUN_SIZE_LIST[index], yPoint])
      }))
    );
  }

  public addResult(algorithmName: string, xLabel: number, value: number) {
    const foundIndex = this.data$.getValue().find(data => data.name === algorithmName);
    const dataArray = this.data$.getValue();
    if (foundIndex) {
      foundIndex.data.push([xLabel, value]);
    } else {
      const newElement = {
        name: algorithmName,
        data: []
      };
      newElement.data.push([xLabel, value]);
      dataArray.push(newElement);
    }
    this.data$.next(dataArray);
  }

  public clearData() {
    this.data$.next([]);
  }
}
