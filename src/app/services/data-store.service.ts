import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDataSeries } from '../model/IDataSeries';
import { INITIAL_DATA } from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  public data$: BehaviorSubject<IDataSeries[]>;

  constructor() {
    this.data$ = new BehaviorSubject(INITIAL_DATA);
  }
}
