import { Component, OnInit, Input, Inject } from '@angular/core';
import { single } from './data';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public tempValue: number;
  public humidityValue: number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.tempValue = data.tempValue;
    this.humidityValue = data.humidityValue * 100;
  }

  ngOnInit() { }
  view: any[] = [200, 100];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  // line, area
  autoScale = true;
}
