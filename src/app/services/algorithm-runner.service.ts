import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmRunnerService {
  constructor() {}

  public runAlgorithm(algorithm: (pArray: number[]) => number[], arr: number[]): number[] {
    // Update progress
    const result = algorithm(arr);
    // Update progress
    return result;
  }
}
