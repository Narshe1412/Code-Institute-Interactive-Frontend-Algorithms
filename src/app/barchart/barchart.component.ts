import { Component, OnInit, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DEFAULT_CHART_OPTIONS } from '../model/constants';
import { DataStoreService } from '../services/data-store.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AlgorithmRunnerService } from '../services/algorithm-runner.service';
import { SettingsService } from '../services/settings.service';

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
  private chart: Highcharts.Chart;
  private chartOptions = {
    ...DEFAULT_CHART_OPTIONS
  };

  constructor(
    private dataStore: DataStoreService,
    private settings: SettingsService,
    private runner: AlgorithmRunnerService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataStore.data$.pipe(takeUntil(this.onDestroy$)).subscribe(data => {
      if (data && data.length > 0) {
        if (this.chart) {
          this.chart.update({ ...this.chartOptions, series: JSON.parse(JSON.stringify(data)) });
        } else {
          this.createChart(data);
        }
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
    this.chart = Highcharts.chart('container', {
      ...this.chartOptions,
      // series: []
      series: dataSeries
    });
  }

  public runBenchmark() {
    while (this.chart.series.length > 0) {
      this.chart.series[0].remove(true);
    }

    this.settings.activeAlgorithmList.forEach(item => {
      this.chart.addSeries({ name: item.name, data: [], type: 'line' });
    });
    this.ngZone.runOutsideAngular(() => {
      this.runner.runBenchmark();
    });
  }
}
