import { Component, OnInit, Renderer2, Input, ViewChild, ElementRef } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { IAlgorithmList } from '../model/IAlgorithmList';
import { isNumber } from 'highcharts';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  @ViewChild('addAmountElement', { static: false }) addAmountElement: ElementRef;
  public repetitions: number;
  public simulationList: number[];
  public algorithmList: IAlgorithmList[];

  constructor(private settings: SettingsService, private renderer: Renderer2) {
    this.repetitions = this.settings.repetitions;
    this.simulationList = this.settings.simulationList;
    this.algorithmList = this.settings.algorithmList;
  }

  ngOnInit() {}

  public onCheckboxToggle(item: IAlgorithmList) {
    if (item.enabled === true) {
      this.settings.disableAlgorithm(item.name);
    } else if (item.enabled === false) {
      this.settings.enableAlgorithm(item.name);
    }
  }

  public onRepetitionsChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const capturedValue = parseInt(inputElement.value, 10);
    if (isNumber(capturedValue) && capturedValue > 0) {
      this.settings.repetitions = capturedValue;
      this.renderer.removeClass(inputElement, 'is-invalid');
    } else {
      this.renderer.addClass(inputElement, 'is-invalid');
    }
  }

  public deleteAmount(amount: number) {
    this.settings.removeSimulationAmount(amount);
  }

  public addAmount() {
    const el = this.addAmountElement.nativeElement;
    const amount = parseInt(el.value, 10);
    if (amount > 0) {
      this.settings.addSimulationAmount(amount);
      this.renderer.removeClass(el, 'is-invalid');
    } else {
      this.renderer.addClass(el, 'is-invalid');
    }
  }
}
