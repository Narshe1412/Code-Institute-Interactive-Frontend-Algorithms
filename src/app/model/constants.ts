import { IDataSeries } from '../model/IDataSeries';
import { bubbleSort } from '../services/algorithm-implementations/bubble-sort';
import { heapSort } from '../services/algorithm-implementations/heap-sort';
import { insertionSort } from '../services/algorithm-implementations/insertion-sort';
import { introsort } from '../services/algorithm-implementations/introsort';
import { mergeSort } from '../services/algorithm-implementations/merge-sort';
import { quickSort } from '../services/algorithm-implementations/quicksort';
import { radixSort } from '../services/algorithm-implementations/radix-sort';
import { selectionSort } from '../services/algorithm-implementations/selection-sort';
import { shellSort } from '../services/algorithm-implementations/shell-sort';
import { timsort } from '../services/algorithm-implementations/timsort';
import { jsSort } from '../services/algorithm-implementations/js-sort';

export const RUN_SIZE: number[] = [100, 250, 500, 750, 1000, 1250, 2500, 3750, 5000, 6250, 7500, 8750, 10000];
export const DEFAULT_REPETITIONS = 3;

export const ALGORITHM_LIST = [
  {
    name: 'Bubble Sort',
    description: 'Bubbles a sorting',
    fn: bubbleSort
  },
  {
    name: 'Heap Sort',
    description: 'heapify a sorting',
    fn: heapSort
  },
  {
    name: 'Insertion Sort',
    description: 'Insert all the things in a sorting',
    fn: insertionSort
  },
  {
    name: 'Introsort',
    description: 'not sure what this does',
    fn: introsort
  },
  {
    name: 'Merge Sort',
    description: 'Merges a sorting',
    fn: mergeSort
  },
  {
    name: 'Quick Sort',
    description: 'This supposed to be quick',
    fn: quickSort
  },
  {
    name: 'Radix Sort',
    description: 'Nothing to do with botany',
    fn: radixSort
  },
  {
    name: 'Selection Sort',
    description: 'Selects a sorting',
    fn: selectionSort
  },
  {
    name: 'Shell Sort',
    description: 'Heroes in a hard shell, turtle power',
    fn: shellSort
  },
  {
    name: 'Tim Sort',
    description: 'TIMMEH!',
    fn: timsort
  },
  {
    name: 'Javascript Sort',
    description: 'The default sort from javascript',
    fn: jsSort
  }
];

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
