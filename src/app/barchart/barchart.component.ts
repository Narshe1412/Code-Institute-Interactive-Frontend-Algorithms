import { Component, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { DEFAULT_CHART_OPTIONS } from '../model/constants';
import { DataStoreService } from '../services/data-store.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AlgorithmRunnerService } from '../services/algorithm-runner.service';
import { SettingsService } from '../services/settings.service';
import { ActivatedRoute } from '@angular/router';

// Highcharts Angular implementation requirements and initialization
import * as Highcharts from 'highcharts';
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
export class BarchartComponent implements AfterViewInit, OnDestroy {
  /**
   * Helper to unsubscribe all active subscriptions when the component is destroyed
   */
  private onDestroy$ = new Subject();
  /**
   * The chart element on the page
   */
  private chart: Highcharts.Chart;
  /**
   * The options object to create the chart. Defaults to DEFAULT_CHART_OPTIONS constant file
   */
  private chartOptions = {
    ...DEFAULT_CHART_OPTIONS
  };

  /**
   * Tracks the running state of the benchmark to pass it to the template
   */
  public isRunningBenchmark = false;

  constructor(
    private dataStore: DataStoreService,
    private settings: SettingsService,
    private runner: AlgorithmRunnerService,
    private ngZone: NgZone,
    private route: ActivatedRoute
  ) {}

  /**
   * Runs after the HTML template has been generated
   */
  ngAfterViewInit() {
    // Subscribe to updates on the store, getting the current state of the simulation
    this.dataStore.data$.pipe(takeUntil(this.onDestroy$)).subscribe(data => {
      if (data && data.length > 0) {
        // If the chart hasn't been created yet, creates a new chart, otherwise updates it with the new data
        if (this.chart) {
          this.chart.update({
            ...this.chartOptions,
            series: JSON.parse(JSON.stringify(data)) // Parse+stringify = Clones the data object
          });
        } else {
          this.createChart(data);
        }
      }
    });

    // Subscribe to observable that holds the current progress of the simulation
    this.runner.benchmarkProgress$.pipe(takeUntil(this.onDestroy$)).subscribe(progress => {
      // Evaluates to true if the total is not zero (sim not started) and the current is different than total (sim underway)
      this.isRunningBenchmark = progress.total !== 0 && progress.current !== progress.total;
    });

    // Tracks if we've arrived to the page by clicking on the "Run Benchmark" button or by regular navigation
    this.route.url.pipe(takeUntil(this.onDestroy$)).subscribe(url => {
      // If the button was clicked, trigger a new simulation
      if (url[0].parameterMap.get('run')) {
        setTimeout(() => {
          this.runBenchmark();
        }, 500);
      }
    });
  }

  /**
   * Runs after the component has been destroyed
   */
  ngOnDestroy() {
    // The code below cancels the observable onDestroy$
    // All subscribed observables on the page have the takeUntil() clause which means they remain subscribed
    // until onDestroy$ finishes. This ensures no memory leaks due to open subscriptions
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  /**
   * Creates the chart on the HTML canvas with id chart-container and options defined on local variable chartOptions
   */
  private createChart(dataSeries) {
    this.chart = Highcharts.chart('chart-container', {
      ...this.chartOptions,
      series: dataSeries
    });
  }

  /**
   * Clears the previous simulation from the chart and executes the benchmark
   */
  public runBenchmark() {
    this.resetChart();

    // This makes the execution of the benchmark to not trigger the angular change detection on every change
    // As the benchmarking is very resource intensive we want to make sure to manually trigger change detection and not block the UI
    this.ngZone.runOutsideAngular(() => {
      this.runner.runBenchmark();
    });
  }

  /**
   * Clears the chart and adds empty series from the simulation setup parameter
   */
  public resetChart() {
    // Clears all previous data series from the chart
    while (this.chart.series.length > 0) {
      this.chart.series[0].remove(true);
    }

    // Add the new (empty) data series to the chart
    this.settings.activeAlgorithmList.forEach(item => {
      this.chart.addSeries({ name: item.name, data: [], type: 'line' });
    });
  }
}
