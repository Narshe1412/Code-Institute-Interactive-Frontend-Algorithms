export interface IAlgorithmDefinition {
  name: string;
  description: string;
  fn(array: number[]): number[];
}
