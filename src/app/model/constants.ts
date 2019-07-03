export const RUN_SIZE: number[] = [100, 250, 500, 750, 1000, 1250, 2500, 3750, 5000, 6250, 7500, 8750, 10000];

/**
 * Chart options
 */
export const DEFAULT_CHART_OPTIONS: any = {
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

import { IDataSeries } from '../model/IDataSeries';

export const INITIAL_DATA: IDataSeries[] = [
  {
    name: 'Python Native TimSort',
    data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.475, 0.449, 1.677, 0.633, 0.713, 2.21, 4.121, 3.947]
  },
  {
    name: 'IntroSort',
    data: [0.709, 0.724, 3.142, 4.199, 6.273, 2.961, 7.488, 17.833, 19.065, 32.768, 32.202, 52.668, 73.004]
  },
  {
    name: 'Merge Sort',
    data: [0.398, 1.816, 2.403, 3.17, 6.724, 12.116, 17.631, 26.97, 33.814, 47.549, 53.057, 96.092, 107.344]
  },
  {
    name: 'Insertion Sort',
    data: [
      0.313,
      4.1,
      21.436,
      37.952,
      66.386,
      123.563,
      490.764,
      1081.781,
      1985.853,
      3182.841,
      4482.185,
      7844.617,
      11652.715
    ]
  },
  {
    name: 'Radix Sort',
    data: [
      44.392,
      79.37,
      172.651,
      219.167,
      255.596,
      319.108,
      738.935,
      1083.458,
      1402.657,
      1910.621,
      2206.494,
      3368.43,
      4314.907
    ]
  }
];
