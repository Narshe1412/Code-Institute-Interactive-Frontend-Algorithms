import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';
import { DEFAULT_REPETITIONS, DEFAULT_RUN_SIZE_LIST, ALGORITHM_LIST } from '../model/constants';

describe('SettingsService', () => {
  let service: SettingsService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(SettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize variables with default values', () => {
    expect(service.repetitions).toEqual(DEFAULT_REPETITIONS);
    expect(service.simulationList).toEqual(DEFAULT_RUN_SIZE_LIST);
    expect(service.algorithmList).toEqual(
      ALGORITHM_LIST.map(definition => ({
        ...definition,
        enabled: true
      }))
    );
  });

  describe('set repetitions', () => {
    it('should change the repetitions value', () => {
      const newValue = 12;
      service.repetitions = newValue;
      expect(service.repetitions).toEqual(newValue);
    });
    it('should keep the value at 1 if the changed value is less than 0', () => {
      const newValue = -3;
      service.repetitions = newValue;
      expect(service.repetitions).toEqual(1);
      const valueOfZero = 0;
      service.repetitions = valueOfZero;
      expect(service.repetitions).toEqual(1);
    });
  });

  describe('enableAlgorithm()', () => {
    it('should mark an existing algorithm as enabled', () => {
      // Arrange
      const algorithmName = 'TimSort';
      const expectedEndValue = true;
      service.algorithmList.find(def => def.name === algorithmName).enabled = false;
      // Act
      service.enableAlgorithm(algorithmName);
      // Assert
      const actual = service.algorithmList.find(def => def.name === algorithmName);
      expect(algorithmName).toEqual(actual.name);
      expect(expectedEndValue).toEqual(actual.enabled);
    });
    it('should not change an existing algorithm that is already enabled', () => {
      // Arrange
      const algorithmName = 'TimSort';
      const expectedEndValue = true;

      // Act
      service.enableAlgorithm(algorithmName);
      // Assert
      const actual = service.algorithmList.find(def => def.name === algorithmName);
      expect(algorithmName).toEqual(actual.name);
      expect(expectedEndValue).toEqual(actual.enabled);
    });
    it('should not change other algorithms', () => {
      // Arrange
      const algorithmName = 'TimSort';
      const algorithmList = service.algorithmList.filter(def => def.name !== algorithmName);
      // Act
      service.enableAlgorithm(algorithmName);
      // Assert
      const actual = service.algorithmList.filter(def => def.name !== algorithmName);
      expect(algorithmList).toEqual(actual);
    });
    it('should return the marked algorithm as available while still on the list', () => {
      // Arrange
      const algorithmName = 'TimSort';
      service.algorithmList.find(def => def.name === algorithmName).enabled = false;
      // Act
      service.enableAlgorithm(algorithmName);
      // Assert
      const actual = service.algorithmList.filter(def => def.enabled);
      expect(service.activeAlgorithmList).toEqual(actual);
    });
  });
  describe('disableAlgorithm()', () => {
    it('should mark an existing algorithm as not enabled', () => {
      // Arrange
      const algorithmName = 'TimSort';
      const expectedEndValue = false;
      // Act
      service.disableAlgorithm(algorithmName);
      // Assert
      const actual = service.algorithmList.find(def => def.name === algorithmName);
      expect(algorithmName).toEqual(actual.name);
      expect(expectedEndValue).toEqual(actual.enabled);
    });
    it('should not change an existing algorithm that is already disabled', () => {
      // Arrange
      const algorithmName = 'TimSort';
      const expectedEndValue = false;
      service.algorithmList.find(def => def.name === algorithmName).enabled = false;
      // Act
      service.disableAlgorithm(algorithmName);
      // Assert
      const actual = service.algorithmList.find(def => def.name === algorithmName);
      expect(algorithmName).toEqual(actual.name);
      expect(expectedEndValue).toEqual(actual.enabled);
    });
    it('should not change other algorithms', () => {
      // Arrange
      const algorithmName = 'TimSort';
      const algorithmList = service.algorithmList.filter(def => def.name !== algorithmName);
      // Act
      service.disableAlgorithm(algorithmName);
      // Assert
      const actual = service.algorithmList.filter(def => def.name !== algorithmName);
      expect(algorithmList).toEqual(actual);
    });
    it('should not return the marked algorithm as available while still on the list', () => {
      // Arrange
      const algorithmName = 'TimSort';
      // Act
      service.disableAlgorithm(algorithmName);
      // Assert
      const actual = service.algorithmList.filter(def => def.enabled);
      expect(service.activeAlgorithmList).toEqual(actual);
    });
  });

  describe('addSimulationAmount()', () => {
    it('should add the amount to the list of simulations', () => {
      // Arrange
      const newSimulation = 12000;
      // Act
      service.addSimulationAmount(newSimulation);
      // Assert
      expect(service.simulationList).toContain(newSimulation);
    });
    it('should not add the amount to the list if the amount already exists', () => {
      // Arrange
      const newSimulation = 100;
      const expected = [...service.simulationList];
      // Act
      service.addSimulationAmount(newSimulation);
      // Assert
      expect(expected).toEqual(service.simulationList);
    });
    it('should add the amount to the list if below 0', () => {
      // Arrange
      const newSimulation = -1000;
      const expected = [...service.simulationList];
      // Act
      service.addSimulationAmount(newSimulation);
      // Assert
      expect(expected).toEqual(service.simulationList);
    });
  });

  describe('removeSimulationAmount()', () => {
    it('should remove the amount to the list of simulations', () => {
      // Arrange
      const simToRemove = 250;
      // Act
      service.removeSimulationAmount(simToRemove);
      // Assert
      expect(service.simulationList).not.toContain(simToRemove);
    });
    it('should not modify the list if the amount does not exists', () => {
      // Arrange
      const simToRemove = 1234;
      const expected = [...service.simulationList];
      // Act
      service.removeSimulationAmount(simToRemove);
      // Assert
      expect(expected).toEqual(service.simulationList);
    });
  });
});
