import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDataSeries } from '../model/IDataSeries';
import { INITIAL_DATA } from '../model/constants';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  public data$: BehaviorSubject<IDataSeries[]>;

  constructor(private settings: SettingsService) {
    this.data$ = new BehaviorSubject(INITIAL_DATA);
  }

  public addResult(algorithmName: string, xLabel: number, value: number) {
    const foundIndex = this.data$.getValue().findIndex(data => data.name === algorithmName);
    const xPos = this.settings.simulationList.indexOf(xLabel);
    const dataArray = this.data$.getValue();
    if (foundIndex >= 0 && xPos >= 0) {
      dataArray[foundIndex].data[xPos] = value;
    } else if (xPos >= 0) {
      const newElement = {
        name: algorithmName,
        data: new Array(this.settings.simulationList.length)
      };
      newElement.data[xPos] = value;
      dataArray.push(newElement);
    } else {
      console.error(`Exception: cannot locate xLabel of ${xLabel} within the app settings.`);
    }
    this.data$.next(dataArray);
    // console.log('TCL: DataStoreService -> addResult -> dataArray', dataArray);
  }

  public clearData() {
    this.data$.next([]);
  }
}
