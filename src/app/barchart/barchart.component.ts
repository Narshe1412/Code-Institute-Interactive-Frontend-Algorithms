import { Component, OnInit, AfterViewInit } from '@angular/core';
import { INITIAL_DATA, X_LABELS } from '../data/sorting';
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
  styleUrls: ['./barchart.component.sass']
})
export class BarchartComponent implements OnInit, AfterViewInit {
  /**
   * Holds the data for the current state of the application
   */
  private data: any;
  /**
   * Chart options
   */
  private chartOptions: any = {
    title: {
      text: 'Algorithm Benchmarks'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter() {
        return 'x: ' + this.x;
      }
    },
    yAxis: {
      title: {
        text: 'Duration (ms)'
      }
    }
  };

  constructor() {}

  ngOnInit() {
    this.data = INITIAL_DATA;
  }

  ngAfterViewInit() {
    this.createChart();
  }

  /**
   * Creates the chart on the HTML canvas with id container
   */
  private createChart() {
    Highcharts.chart('container', {
      ...this.chartOptions,
      xAxis: {
        categories: X_LABELS
      },
      series: this.data
    });
  }
}
