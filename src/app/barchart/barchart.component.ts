import { Component, OnInit, AfterViewInit } from '@angular/core';
import { INITIAL_DATA, X_LABELS } from '../data/sorting';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

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
  private data: any;
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
    this.makeGraphs();
  }

  makeGraphs() {
    Highcharts.chart('container', {
      ...this.chartOptions,
      xAxis: {
        categories: X_LABELS
      },
      series: this.data
    });
  }
}
