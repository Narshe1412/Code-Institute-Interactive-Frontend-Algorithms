import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { IAlgorithmDefinition } from '../model/IAlgorithmDefinition';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  public repetitions: number;
  public simulationList: number[];
  public algorithmList: IAlgorithmDefinition[];

  constructor(private settings: SettingsService) {
    this.repetitions = this.settings.repetitions;
    this.simulationList = this.settings.simulationList;
    this.algorithmList = this.settings.activeAlgorithmList;
  }

  ngOnInit() {}
}
