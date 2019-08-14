import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDataSeries } from '../model/IDataSeries';
import { INITIAL_DATA, DEFAULT_RUN_SIZE_LIST } from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  /**
   * Holds the value that will be displayed on the chart
   */
  public data$: BehaviorSubject<IDataSeries[]>;

  constructor() {
    // Initializes the data with a initial data obtained from a previous benchmarking script
    this.data$ = new BehaviorSubject(
      INITIAL_DATA.map(item => ({
        name: item.name,
        data: item.data.map((yPoint, index) => [DEFAULT_RUN_SIZE_LIST[index], yPoint])
      }))
    );
  }

  /**
   * Adds the result of a simulation to the data store
   * @param algorithmName Name of the algorithm that was run
   * @param xLabel The size of the algorithm that will be used as label for X axis
   * @param value The time that was calculated for this operation
   */
  public addResult(algorithmName: string, xLabel: number, value: number) {
    // Locate the element in the 2-D matrix that stores the results
    const foundIndex = this.data$.getValue().find(data => data.name === algorithmName);
    const dataArray = this.data$.getValue();
    if (foundIndex) {
      // If found, push the new value
      foundIndex.data.push([xLabel, value]);
    } else {
      // If not found, a new element needs to be created and pushed
      const newElement = {
        name: algorithmName,
        data: []
      };
      newElement.data.push([xLabel, value]);
      dataArray.push(newElement);
    }
    // Updates the store
    this.data$.next(dataArray);
  }

  /**
   * Clears the data store
   */
  public clearData() {
    this.data$.next([]);
  }
}
