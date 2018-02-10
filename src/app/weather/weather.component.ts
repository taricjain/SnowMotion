import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, ViewChild, ElementRef } from '@angular/core';
import {} from 'googlemaps';
import { WeatherService } from '../weather.service';
import { WeatherData, Coordinate } from '../models';
import { DragScrollDirective } from 'ngx-drag-scroll';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit, OnChanges {
  @Input()
  public currentPlace: google.maps.places.PlaceResult;

  private isFirstTime: boolean = true;

  private weatherData: WeatherData;

  disabled;
  xDisabled;
  yDisabled;
  dragScrollDom: any;
  dragScrollRef: ElementRef;
  dragScroll: DragScrollDirective;

  @ViewChild('nav', {read: DragScrollDirective}) ds: DragScrollDirective;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.updateWeather();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.isFirstTime) {
      const newCurrentPlace: SimpleChange = changes.currentPlace;
      this.currentPlace = newCurrentPlace.currentValue;
      this.updateWeather();
    }
  }

  updateWeather() {
   // Calling weather service for current location data
   var coordinate: Coordinate = { latitude: this.currentPlace.geometry.location.lat(), longitude: this.currentPlace.geometry.location.lng()};
   this.weatherService.getDataWithCoordinates(coordinate, (error, response) => {
     this.weatherData = response as WeatherData;
     console.log(this.weatherData);
     this.isFirstTime = false;
   });
  }

  

}
