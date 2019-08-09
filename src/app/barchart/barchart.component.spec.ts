import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { BarchartComponent } from './barchart.component';

describe('BarchartComponent', () => {
  let component: BarchartComponent;
  let fixture: ComponentFixture<BarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BarchartComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a chart element', () => {
    const chartElement = fixture.nativeElement.querySelector('#chart-container');
    fixture.detectChanges();
    expect(chartElement).toBeTruthy();
  });
});
