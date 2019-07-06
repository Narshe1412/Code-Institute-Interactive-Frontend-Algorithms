import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';
import { RUN_SIZE, DEFAULT_CHART_OPTIONS } from '../model/constants';
import { DataStoreService } from '../services/data-store.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AlgorithmRunnerService } from '../services/algorithm-runner.service';

declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit, AfterViewInit, OnDestroy {
  private onDestroy$ = new Subject();
  private X_LABELS: number[];

  constructor(private dataStore: DataStoreService, private runner: AlgorithmRunnerService) {}

  ngOnInit() {
    this.X_LABELS = RUN_SIZE;
  }

  ngAfterViewInit() {
    this.dataStore.data$.pipe(takeUntil(this.onDestroy$)).subscribe(data => {
      if (data && data.length > 0) {
        this.createChart(data);
      }
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

  /**
   * Creates the chart on the HTML canvas with id container
   */
  private createChart(dataSeries) {
    Highcharts.chart('container', {
      ...DEFAULT_CHART_OPTIONS,
      xAxis: {
        categories: this.X_LABELS
      },
      series: dataSeries
    });
  }

  public runBenchmark() {
    this.runner.runBenchmark();
  }
}
